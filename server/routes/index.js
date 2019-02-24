import express from "express";
import controller from "../controller";

const router = express.Router();

router.get("/auth/google", controller.googleAuth);
router.get("/auth/google/callback", controller.googleAuthCallBack);

export default router;
