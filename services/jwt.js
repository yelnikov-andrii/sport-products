import jwt from "jsonwebtoken";

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '5m'
  })
}

function generateRefreshToken(user) {
  return jwt.sign(user, process.env.JWT_REFRESH_SECRET, {
    expiresIn: '30d'
  })
}

function validateRefreshToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  }

  catch(e)  {
    return null;
  }
}

function validateAccessToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
  }

  catch(e)  {
    return null;
  }
}

export const jwtService = {
  generateAccessToken,
  validateAccessToken,
  generateRefreshToken,
  validateRefreshToken
}