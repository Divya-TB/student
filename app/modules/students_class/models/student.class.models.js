"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "student_class",
        {
            class_id:{type: DataTypes.INTEGER, allowNull: true},
            student_id:{type: DataTypes.INTEGER, allowNull: true},
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "student_class",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};