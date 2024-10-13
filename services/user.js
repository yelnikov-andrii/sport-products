import { v4 as uuidv4 } from 'uuid';
import { User } from '../models/User.js';
import { emailService } from './email.js';
import { ApiError } from "../exceptions/apiError.js";
import bcrypt from 'bcrypt';

async function registerUser({email, password}) {
  const activationToken = uuidv4();

  const existingUser = await getByEmail(email);

  if (existingUser) {
    throw ApiError.BadRequest('User with this email already exist', {email: 'Email is already taken' });
  }

  const hash = await bcrypt.hash(password, 10);

  await User.create({email, password: hash, activationToken});
  console.log(email, 'email to send message')
  emailService.sendActivationLink(activationToken, email);
}

function normalize({ email, id, role }) {
  return { email, id, role };
}

async function getByEmail(email) {
  const user = await User.findOne({where: {
    email
  }});

  return user;
}

export const userService = {
  registerUser,
  normalize,
  getByEmail
}