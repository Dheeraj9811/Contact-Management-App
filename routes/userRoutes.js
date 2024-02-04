import express from 'express';
import contactController from "../controllers/userController.js";

const {
    registerUser,
    loginUser,
    currentUser
} = contactController;

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

export default router;