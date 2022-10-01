import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/user";

type UserExpress = {
    _id: string,
    username: string
}

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