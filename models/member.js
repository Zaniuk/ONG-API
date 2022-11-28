const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }

  };
  Member.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    image: {
      type: DataTypes.BLOB("long"),
      get() {
        return this.getDataValue("image").toString("utf8");
      }
    },
    rol: DataTypes.STRING,
    description: DataTypes.STRING(750),
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};