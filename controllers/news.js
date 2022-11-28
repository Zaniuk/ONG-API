const { News, sequelize } = require("../models");

const createNews = async (req, res) => {
  try {
    const dataNews = req.body;
    dataNews.categoryId = dataNews.categoryId || '1';
    dataNews.type = dataNews.type || 'news';
    const news = await News.create(dataNews);

    res.status(201).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const findAllNews = async (req, res) => {
  try {
    const news = await News.findAll({
      order: [['updatedAt', 'DESC']]
    });
    
  res.status(200).json(news);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const detailNews = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await News.findByPk(id);

    if (!news) {
      return res.status(404).json({
        message: "New not found",
      });
    }

    res.status(200).json({
      message: "New found",
      data: news,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteNews = async (req, res) => {
  try {
    const { id } = req.params
    const newExist = await News.findOne({ where: { id } })
    if (!newExist) {
      throw "New doesn't exist"
    } else {

      await News.destroy({
        where: { id }
      })
      res.send(newExist)
    }
  } catch (err) {
    res.status(400).send(err)
  }
};

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, content, image } = req.body;

    const update = await News.update(
      {
        name,
        content,
        image,
      },
      {
        where: { id },
      }
    );

    res.status(200).json({
      message: "News Update",
      data: update,
      newData: { name, content, image },
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
    console.log(error);
  }
};

module.exports = {
  createNews,
  detailNews,
  updateNews,
  deleteNews,
  findAllNews,
};




