'use strict'




  module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "teacher_class",
        {
            class_id:{type: DataTypes.INTEGER, allowNull: true},
            teacher_id:{type: DataTypes.INTEGER, allowNull: true},
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "teacher_class",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};