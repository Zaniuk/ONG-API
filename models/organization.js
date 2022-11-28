'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Organization.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('image').toString('utf8');
      }
    },
    welcomeTitle: DataTypes.STRING,
    welcomeImage: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('welcomeImage').toString('utf8');
      }
    },
    facebook: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('facebook').toString('utf8');
      }
    },
    linkedin: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('linkedin').toString('utf8');
      }
    },
    instagram: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('instagram').toString('utf8');
      }
    },
    facebookUrl: DataTypes.STRING,
    linkedinUrl: DataTypes.STRING,
    instagramUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Organization',
  });
  return Organization;
};