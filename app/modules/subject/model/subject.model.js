"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "subject",
        {
            
            title: { type: DataTypes.STRING, allowNull: true },
            sub_title: { type: DataTypes.STRING, allowNull: true },
            status: { type: DataTypes.INTEGER, allowNull: true },
           created_on: { type: DataTypes.INTEGER, allowNull: true },

        },
        {
            tableName: "subject",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};
