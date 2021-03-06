/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://links.sailsjs.org/docs/config/bootstrap
 */
var Q = require('Q');
module.exports.bootstrap = function(cb) {

    // @todo create and init data/access.log if it doesnt exist
    // @todo create and init data/logs.log if it doesnt exist

    /**
     * Init database
     * and insert test data
     */
    if(sails.config.general.initDatabase){
        DatabaseService.seedDefaultData().then(function() {
            return DatabaseService.seedTestData().then(function(){
                return cb();
            })
        }).fail(function (err) {
            return cb(err);

        });
    }
    else{

        return cb();
    }


};
