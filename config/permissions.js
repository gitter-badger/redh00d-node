/**
 *
 */


module.exports.permissions = {

    // They match the role inside database
    roles: {
        guest: {
            parent: null
        },

        user: {
            parent: 'guest'
        },

        admin: {
            parent: 'user'
        }
    },

    // They match routes and controller. Ex: /users -> UserController is converted to "user" from req.options.controller
    resources: [ 'user', 'event' ],

    // ACL must use correct roles and resources as defined above
    acl: {
        guest: {
            allow: {
                user: ['create']
            }
        },
        user: {
            allow: {
                user: ['find','findmultiple','delete', 'update', 'patch', 'generateResetPasswordToken'],
                event: ['find', 'findmultiple']
            },
            deny: {
                user: ['create']
            }
        },
        admin: {
            allow: {
                user: ['create', 'deleteOthers', 'updateOthers']
            }
        }
    }

};
