const { Category } = require("../models");

const getAllCategories = async (res) => {
  console.log("controlador");
  const rta = await Category.findAll({
    attributes: ["id", "name", "description", "path"],
  });

  res.status(200).send(rta);
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({
    attributes: ["id", "name", "description", "path"],
    where: { id: id },
  });
  res.status(200).send(category);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  const categoryExist = await Category.findOne({
    attributes: ["id", "name", "description", "path"],
    where: { id: id },
  });

  if (categoryExist) {
    await Category.destroy({ where: { id: id } });
    res.status(200).send(categoryExist);
  } else {
    res.status(404).send("category id does not exist.");
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, path } = req.body;

  const categoryExist = await Category.findOne({
    attributes: ["id"],
    where: { id: id },
  });

  if (categoryExist) {
    await Category.update(
      { name: name, description: description, path: path },
      { where: { id: id } }
    );
    const categoryUpdated = await Category.findOne({
      attributes: ["id", "name", "description", "path"],
      where: { id: id },
    });
    res.status(200).send(categoryUpdated);
  } else {
    res.status(404).send("category id does not exist.");
  }
};

const addCategory = async (req, res) => {
  const { name, description, path } = req.body;

  if (name && typeof name === "string") {
    const result = await Category.create({
      name: name,
      description: description,
      path : path
    });
    res.status(201).send(result);
  } else {
    res.status(400).send("Please indicate the name of the category.");
  }
};

module.exports = {
  getAllCategories,
  updateCategory,
  addCategory,
  deleteCategory,
  getCategory,
};
