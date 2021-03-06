/**
 * EventController
 *
 * @module      :: Controller
 * @description	::
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

    /**
     * Return an event by id
     */
    find: function (req, res) {
        Event.findOne({'ID':req.param('id')}).populate('author').exec(function(err,event){
            if(err) return res.serverError(err);
            if(!event) return res.notFound();
            return res.ok({
                event:event.toCustomer()
            });
        });
    },

    /**
     * Return all events.
     * Return a list of events (empty or not) and a status 200.
     */
    findMultiple: function (req, res) {

        // Get optional parameters from URL to refine the search
        var optionalData = {};
        if( req.param('id') ) optionalData.ID = req.param('ID');
        if( req.param('name') ) optionalData.name = req.param('name');
        if( req.param('date') ) optionalData.date = req.param('date');
        if( req.param('place') ) optionalData.place = req.param('place');

        var optionalSortData = {};
        if( req.param('date_sort') ) optionalSortData.date = req.param('date_sort');
//        if( req.param('lastname_sort') ) optionalSortData.lastName = req.param('lastname_sort');

        //@todo implement these criteria
//        if( req.param('firstname_like') || req.param('lastname_like') ) res.send(501);

        // Build query with sort, etc
        var findQuery = Event.find(optionalData);
        if( optionalSortData !== {} ) {
            findQuery.sort(optionalSortData);
        }
        findQuery.populate('author');

        // Run job
        findQuery.exec(function callback(err, events){
            if(err) return res.serverError(err);
            return res.ok({
                events: Event.toCustomer( events )
            });
        });
    },



    /**
     * Delete an event
     * @param req
     * @param res
     */
    destroy: function(req, res){

        // Check the event before deletion
        Event.findOne( req.param('id')).exec(function(err, event){
            if(err){
                //@todo
                return res.notFound("This event doesn't exist");
            }

            // Deletion
            event.destroy(function(err){
                if(err){
                    //@todo
                    return res.serverError(err);
                }
                return res.noContent();
            })
        });
    },

    /**
     * Update an event
     * Required parameters: id
     * Optional parameters: name/date/description/place
     * @param req
     * @param res
     */
    update: function(req, res){

        // Get param from request
        var dataToUpdate = {};
        if ( req.param('name') ) dataToUpdate.name = req.param('name');
        if ( req.param('place') ) dataToUpdate.place = req.param('place');
        if ( req.param('description') ) dataToUpdate.description = req.param('description');
        if ( req.param('date') ) dataToUpdate.date = req.param('date');

        var query = {
            'ID': req.param('id')
        }

        Event.update(query, dataToUpdate, function(err, event) {

            if (err) {
                // Error due to validators
                if (err.ValidationError) {
                    return res.badRequest('The given parameters are invalid', err.ValidationError);
                }
                else {
                    return res.serverError();
                }
            }
            if(!event || event.length < 1){
                return res.notFound( res.i18n("resource (%s) doesn't exist", res.i18n('event')) );
            }else{
                return res.ok({
                    event: event
                });
            }
        });
    },

    /**
     * Find a user by id from an event
     * @param req
     * @param res
     */
    findUser: function(req, res){
        // inject event id in request
        req.param.eventID = req.param('ID');
        sails.controllers.user.findMultiple(req, res);
    },

    /**
     * Create an event for a user.
     * @param req
     * @param res
     */
    create: function(req, res){

        var eventData = {
            name: req.param('name'),
            description: req.param('description'),
            place: req.param('place'),
            date: req.param('date')
        };

        if( ! req.param('user_id') ) return res.badRequest( "no user specified" );

        // Search user to inject ID
        User.findOne( {ID: req.param('user_id')}).exec(function(err, user){
            if(err) return res.serverError();
            if( ! user ) return res.notFound( res.i18n("Resource (%s) doesn't exist", res.i18n('user')) );

            eventData.userID = user.ID;

            // Create the event
            Event.create( eventData ).exec(function(err, event){
                if(err){
                    // Validation error
                    if(err.ValidationError){
                        return res.badRequest( null, err.ValidationError );
                    }
                    else{
                        return res.serverError(err);
                    }
                }

                return res.created({
                    event: event
                });
            });
        });

    },

    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to EventController)
     */
    _config: {}

  
};
