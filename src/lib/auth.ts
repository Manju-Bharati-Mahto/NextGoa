import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_fallback_secret_for_build";

if (!process.env.JWT_SECRET && process.env.NODE_ENV === "production") {
  console.warn("JWT_SECRET is not defined in .env");
}

export interface JwtPayload {
  id: number;
  email: string;
  role_id: number;
}

export function generateToken(payload: JwtPayload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(
      token,
      JWT_SECRET
    ) as JwtPayload;
  } catch (error) {
    return null;
  }
}