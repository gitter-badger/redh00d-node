/**
 * @module      :: Model
 * @description ::
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

// use this method https://groups.google.com/forum/#!topic/sailsjs/GTGoOGHAEvE to emulate inheritance of object
// The base model is cloned and then merged with this model. This model is a child of the clone so not a child of ./BaseModel itself
module.exports = _.merge( _.cloneDeep( require('./BaseModel') ), {

    autoPK: true,
    tableName: 'user_role',
    autoUpdatedAt: false,
    autoCreatedAt: false,

    attributes: {

        ID: {
            type: 'integer',
            autoIncrement: true,
            unique: true,
            index: true,
            primaryKey: true,
            columnName: 'userRoleID'
        },
        name: {
            type: 'string',
            required: true,
            columnName: 'userRoleName'
        },
        displayName: {
            type: 'string',
            required: true,
            columnName: 'userRoleDisplayName'
        }


    },

    beforeCreate: function( values, cb ){
        return cb();
    },

    beforeUpdate: function( values, cb ){
        return cb();
    }


});
