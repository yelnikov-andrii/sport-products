import { Contact } from '../models/Contact.js'

const create = async (req, res) => {
  const { fullName, message, email } = req.body;

  const newContactUs = await Contact.create({ fullName, message, email });

  res.send(newContactUs);
}


export const contactController = {
  create,
}