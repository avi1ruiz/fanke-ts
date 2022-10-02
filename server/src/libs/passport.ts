import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User, { IUser } from "../models/user";
import envs from "../config";

type UserExpress = {
    _id: string,
    username: string
}


passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('token'),
    secretOrKey: envs.JWT_SECRET,
}, async (jwt_payload, done) => {
    try {

        const user = <IUser> await User.findOne({ id: jwt_payload._id })
        if (!user) done(null, false)

        done(null, user)
    } catch (error) {
        done(error)
    }

}))

passport.use(
    new LocalStrategy(
        {
            usernameField: "emailForm",
            passwordField: "passwordForm"
        }, async (username, password, done) => {
            try {
                const user = await User.findOne({ email: username })
                if (!user) done(null, false)

                if (!user?.comparePassword(password)) done(null, false)

                done(null, user)
            } catch (error) {
                done(error)
            }
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser(async (id, done) => {
    try {

        const user = await User.findById(id)
        if (user) {
            done(null, user)
        }

    } catch (error) {
        done(error)
    }
})