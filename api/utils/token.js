import jwt from "jsonwebtoken";

export const tokengenerator = (user) => {
  return jwt.sign({user},process.env.JWT_ACCESS_TOKEN_SECRET,{expiresIn: "1d",});
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET);
};


export const decodeToken = (token) => {
  return jwt.decode(token);
};