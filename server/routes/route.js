import express  from "express";
import { createDoctor, getAllDoctors, getPost } from "../controllers/docController.js";
//import { createFile } from "../controllers/docfileController.js";

const router = express.Router();
router.post('/create',createDoctor);
router.get('/mypost/:id',getPost);
//router.post('/createfile',createFile);
router.get('/docs',getAllDoctors);

export default router;