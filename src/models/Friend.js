const {FRIEND_ACCEPTED,FRIEND_PENDING} = require('../config/constants')

module.exports = (sequelize, DataTypes) => {
    const Friend = sequelize.define(
        'Friend', 
        {
            status: {
                type: DataTypes.ENUM(FRIEND_ACCEPTED,FRIEND_PENDING),
                allowNull: false,
               defaultValue: FRIEND_PENDING
            }
        },
       
    {
        underscored: true
    }
    );
    Friend.associate = models => {
        Friend.belongsTo(models.User, {
            as: 'Requester' ,
            foreignKey: {
                name: 'requesterId',
                allowNull: false
                },
                onUpdate: 'RESTRICT',
                onDelete: 'RESTRICT'
            });
        Friend.belongsTo(models.User, {
            as: 'Accepter' ,
            foreignKey: {
                name: 'accepterId',
                allowNull: false
            },
                onUpdate: 'RESTRICT',
                onDelete: 'RESTRICT'
            });
        };
    return Friend;
};