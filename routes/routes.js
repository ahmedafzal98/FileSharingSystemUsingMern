import express from "express";
import { uploadImage, downloadImage } from "../controller/file-controller.js";
// import upload from "../utils/upload.js";

const router = express.Router();
console.log("Routes");
router.get("/", (req,res)=> {
    res.send('ok')
});

// router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);

export default router;
