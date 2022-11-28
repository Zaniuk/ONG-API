'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('News', [{
      name: 'Novedad 1',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/139/350/350.jpg?hmac=3snGqBxFB-oMbcMnu6QcHgLymqcw-Atlda3Slfhl24c",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 1',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/139/350/350.jpg?hmac=3snGqBxFB-oMbcMnu6QcHgLymqcw-Atlda3Slfhl24c",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 2',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/145/350/350.jpg?hmac=vnakdAOH7Yr2F54g5Wyv03sW4RkcELADxq8lURwD5LI",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 3',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/104/350/350.jpg?hmac=Ax9CqsVbZwPY1MSN9NIZW2UKfLjblmnEZmxG_rPiIFc",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 4',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1047/350/350.jpg?hmac=-K9C8mPoWmwHVSfVa3hZVceOG2cAmmMgJJ7ksZCgrjM",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 5',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1048/350/350.jpg?hmac=8rcmNoqi7GleAqlganfewVsu_eRxIWA7Tlj4JKAy6i8",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 6',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1059/350/350.jpg?hmac=5MMhpukYPxNYwNUoKEL7-dqgoIEJzeywMqzmnTJjSaw",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 7',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1060/350/350.jpg?hmac=RTkKvF9Efg4F8Ut2s2TTbnp067kF442hI2BvjExBGaU",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 8',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1065/350/350.jpg?hmac=zhJ-yV1sf4ZzTywzI9-lT5OXd2IwlR3BIWL6urM539M",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 9',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1068/350/350.jpg?hmac=_6YLOlRFkm6RiAwWNuBxsuYV6XCv0kVrUnOcy-7yJvg",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 10',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1073/350/350.jpg?hmac=11-kypJZPJKqiQlNvKYR0Pxvc0WZkaQ6uAt4M8xQcPk",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 11',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/1082/350/350.jpg?hmac=pSsrQoE9NTG3bE2hDBE4UbLPVsTfgKzqBDwIO6dKxJ4",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      name: 'Novedad 12',
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora itaque magnam exercitationem maiores omnis quam delectus error dolores architecto officia doloribus eaque",
      image: "https://i.picsum.photos/id/113/350/350.jpg?hmac=B8dUiqjXYy48E2kjfJAbycpbTSRUAonQVk3kkW-Ki5s",
      categoryId: 1,
      type: "news",
      createdAt: new Date,
      updatedAt: new Date
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
