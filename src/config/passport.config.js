
import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const opts = {
  jwtFromRequest: ExtractJwt.fromExtractors([(req) => req?.cookies?.token]),
  secretOrKey: process.env.JWT_SECRET
};

export default function initializePassport() {
  passport.use('current', new JwtStrategy(opts, async (jwt_payload, done) => {
    return done(null, jwt_payload);
  }));
}
