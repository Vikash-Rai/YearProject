import express  from "express";
import { registerDoctor, getAllDoctors, getPost } from "../controllers/docController.js";
//import { createFile } from "../controllers/docfileController.js";

const router = express.Router();
router.post('/registerdoc',registerDoctor);
router.post('/signupdoc', );
router.get('/post/:id',getPost);
//router.post('/createfile',createFile);
router.get('/docs',getAllDoctors);

export default router;