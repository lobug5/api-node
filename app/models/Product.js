module.exports = (sequelize, DataTypes) => {
    const ProductSchema = sequelize.define('ProductSchema', {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        required: Date.now,
      },

    });
  
    return ProductSchema;
  }