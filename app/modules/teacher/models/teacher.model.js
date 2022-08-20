"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "teacher",
        {
            subject_id : {type: DataTypes.INTEGER, allowNull: false},
            name: { type: DataTypes.STRING, allowNull: false},
            email: { type: DataTypes.STRING, allowNull: false },
            phone: { type: DataTypes.STRING, allowNull: false },
            address: { type: DataTypes.STRING, allowNull: false },
            cityORcountry: { type: DataTypes.STRING, allowNull: false },
            state: { type: DataTypes.STRING, allowNull: false },
            password: { type: DataTypes.STRING, allowNull: false },
            user_type: { type: DataTypes.STRING, allowNull: false },
            email_verification: { type: DataTypes.STRING, allowNull: true},
            auth_token: { type: DataTypes.STRING, allowNull: true },
            image: { type: DataTypes.STRING, allowNull: false },
            status: { type: DataTypes.INTEGER, allowNull: true },
            created_on: { type: DataTypes.STRING, allowNull: true },

        },
        {
            tableName: "teacher",
            createdAt: true,
            updatedAt: true,
            underscored: true,
            timestamps: false,
        }
    );
};