import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await req.db.query("SELECT * FROM games");
    res.json(result.rows);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await req.db.query(
      "SELECT * FROM games WHERE game_id = $1",
      [id]
    );
    res.json(result.rows[0]);
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

export default router;
