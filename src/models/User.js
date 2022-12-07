module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
        {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
         email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        mobile:  {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profileImage: DataTypes.STRING,
        coverImage: DataTypes.STRING
    },
    {
        underscored: true
    }
    );

    User.associate = models => {
        User.hasMany(models.Post,{
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
        User.hasMany(models.Comment,{
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
        User.hasMany(models.Like,{
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
        User.hasMany(models.Friend,{
            as: 'Requester' ,
            foreignKey: {
                name: 'requesterId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
        User.hasMany(models.Friend,{
            as: 'Accepter' ,
            foreignKey: {
                name: 'accepterId',
                allowNull: false
            },
            onUpdate: 'RESTRICT',
            onDelete: 'RESTRICT'
        });
    };
    return User;
};