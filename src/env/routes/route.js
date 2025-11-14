import express from "express";
const router = express.Router();

// contoh endpoint GET
router.get("/", (req, res) => {
  res.send("Route /data aktif bro 🚀");
});

// contoh endpoint GET ke database
router.get("/list", async (req, res) => {
  try {
    const result = await req.db.query("SELECT * FROM nama_tabel;");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

export default router;
