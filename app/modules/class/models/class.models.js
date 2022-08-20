"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "class",
        {
            
            name: { type: DataTypes.STRING, allowNull: true },
            class_duration: { type: DataTypes.STRING, allowNull: true },
            class_start_time:  { type: DataTypes.STRING, allowNull: true },
            class_end_time:  { type: DataTypes.STRING, allowNull: true },
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "class",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};
