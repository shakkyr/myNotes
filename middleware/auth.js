import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const googleClient = new OAuth2Client();

// Tokens we sign ourselves are short; Google ID tokens are much longer.
const isOurToken = (token) => token.length < 500;

const auth = async (req, res, next) => {
  const header = req.headers.authorization || "";
  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  try {
    if (isOurToken(token)) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
    } else {
      // Google tokens must be verified too: jwt.decode() alone accepts forged tokens.
      if (!process.env.GOOGLE_CLIENT_ID) {
        return res.status(401).json({ message: "Google login is not configured" });
      }
      const ticket = await googleClient.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      req.userId = ticket.getPayload().sub;
    }
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default auth;
