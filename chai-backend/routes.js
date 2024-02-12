import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home : BACKEND Series!");
});
router.get("/youtube", (req, res) => {
  res.send("<h2>Youtube: Chai Aur code</h2>");
});
router.get("/user/:id", (req, res) => {
  const userid = req.params.id;
  res.send(`${userid}`);
});
router.get("/search", (req, res) => {
  const query = req.query.q;
  res.send(`Search Query: ${query}`);
});

export default router;
