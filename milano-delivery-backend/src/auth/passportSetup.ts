import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(<passport.Strategy>new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: process.env.BASE_URL + '/auth/google/callback'
}, (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void) => {
    // Your user authentication logic here...z
    done(null, profile);
}));


export default passport;
