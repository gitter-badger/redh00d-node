/**
 * EventController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
    /**
     *
     */
    find: function (req, res) {
    
        // Send a JSON response
        return res.json({
            hello: 'world'
        });
    },


    /**
     *
     */
    findMultiple: function (req, res) {

        // Get all events
        Event.find().exec( function(err, events){
            if(err){
                //@todo
            }
            if(!events){
                //@todo
            }
            // Build correct json response
            eventsJsonized = [];
            for (var i in events) {
                eventsJsonized.push( events[i].toCustomer() );
            }
            return res.json({
                events: eventsJsonized
            }, 200);
        });
    },

    /**
     * Create a new event
     * @param req
     * @param res
     * @returns {*}
     */
    create: function(req, res){

        // Check params
        if( ! req.param('name') ){
            //@todo
            return res.notFound();
        }

        Event.create({
            name: req.param('name'),
            description: req.param('description'),
            place: req.param('place'),
            date: req.param('date'),
            createdDate: new Date()
        }).exec(function(err, user){
            if(err){
                //@todo
                console.log(err);
            }

            return res.json();
        });

    },


    /**
     * Overrides for the settings in `config/controllers.js`
     * (specific to EventController)
     */
    _config: {}

  
};
