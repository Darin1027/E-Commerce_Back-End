const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findAll } = require(`../../models/Product`);

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  try {
    const CategoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const CategoryData = await Category.findByPk(req.params.id, {
      // JOIN with category, using the Trip through table
      include: [{ model: Product }],
    });
    if (!CategoryData) {
      res.status(400).json({ message: "No location found with this id!" });
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const CategoryData = await Category.create(req.body);
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category
router.put("/:id", async (req, res) => {
  try {
    const CategoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
