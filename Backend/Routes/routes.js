import { login } from "../Controllers/auth.js";
import { signUp, fetchLeaderboard,bookrecycle,cancelrecycle } from "../Controllers/user.js";
import auth from '../Middleware/auth.js';
import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.get("/login", login);
router.get("/bookrecycle",auth, bookrecycle);
router.get("/getleaderboard",auth, fetchLeaderboard);
router.get("/cancelrecycle",auth, cancelrecycle);

export default router;
