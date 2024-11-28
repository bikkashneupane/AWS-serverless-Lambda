import { Router } from "express";
const router = Router();

router.get("/", (req, res, next) => {
  res.json({ message: "path: /user", method: "get" });
});

// router.post("/", (req, res, next) => {
//   res.json({ message: "path: /user", method: "post" });
// });

export default router;
