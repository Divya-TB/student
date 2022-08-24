"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "student",
        {
           
            name: { type: DataTypes.STRING, allowNull: false},
            email: { type: DataTypes.STRING, allowNull: false },
            phone: { type: DataTypes.STRING, allowNull: false },
            address: { type: DataTypes.STRING, allowNull: false },
            cityORcountry: { type: DataTypes.STRING, allowNull: false },
            state: { type: DataTypes.STRING, allowNull: false },
            password: { type: DataTypes.STRING, allowNull: false },
            admission_year: { type: DataTypes.STRING, allowNull: true },
            email_verification: { type: DataTypes.STRING, allowNull: true},
            auth_token: { type: DataTypes.STRING, allowNull: true },
            user_type: { type: DataTypes.STRING, allowNull: true },
            image: { type: DataTypes.STRING, allowNull: false },
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "student",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};