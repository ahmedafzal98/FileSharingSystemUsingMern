import express from "express";
import { uploadImage, downloadImage } from "../controller/file-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();
console.log("Routes");

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);
router.get("/", (req,res)=> {
    res.send('ok')
});

export default router;
