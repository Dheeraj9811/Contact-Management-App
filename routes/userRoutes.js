import express from 'express';
import contactController from "../controllers/userController.js";
import validateToken from "../middleware/validateTokenHandler.js";

const {
    registerUser,
    loginUser,
    currentUser
} = contactController;

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current",validateToken, currentUser);

export default router;