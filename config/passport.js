var passport = require( "passport" ),
    BasicStrategy = require('passport-http').BasicStrategy;


/**
 * This is the basic authentication for the api.
 * Customer just need to include username/password values on Basic Auth request
 * Use only with https
 * @todo with api key
 */
passport.use(
    new BasicStrategy(
        function (email, password, done) {
            if( email)

            User.findOne( {email: email}).populate('role').exec(function (err, user) {
                if( err) return done(err);
                if( !user) return done( null, false );

                user.validatePassword(password, function(err, valid){
                    if(err) return done(err);
                    if( !valid ) return done(null, false);
                    return done(null, user);
                    // load grade for futur test
//                    user.loadRole( function(err){
//                        if(err) return done(err);
//                        return done(null, user);
//                    } );

                });
            });
    })
);