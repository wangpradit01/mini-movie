const db = require('./database.js');
let users = db.users

const passport = require('passport')
const bcrypt = require('bcrypt')

const passportJWT = require("passport-jwt"),
    ExtractJWT = passportJWT.ExtractJwt,
    JWTStrategy = passportJWT.Strategy,
    LocalStrategy = require('passport-local').Strategy

passport.use(
    new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, async (username, password, cb) => {
        console.log('User: ', username, password)
        const index = db.checkExistingUser(username)
        if (index !== db.NOT_FOUND && await db.isValidUser(username, password)) {
            const { id, username, email } = users.users[index]
            return cb(null,
                { id, username, email },
                { message: 'Logged In Successfully' })
        }
        else
            return cb(null, false, { message: 'Incorrect user or password.' })


    }));

passport.use(
    new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: db.SECRET
    },
        (jwtPayload, cb) => {
            try {
                // find the user in db if needed
                console.log('jwt strategy')
                const index = db.checkExistingUser(jwtPayload.username)
                if (index !== db.NOT_FOUND) {
                    // Strip password out
                    const { id, username, email } = users.users[index]
                    //Return to caller via req.user

                    // ให้มันสร้าง API ที่ชื่อว่า  /api/foo โดยให้ส่ง ข้อความ คำว่า “Foo” กลับไปให้ (หากมี token) ถ้าไม่มี  token  ต้องส่งข้อความ  “Unauthorized”
                    return cb(null, 'Foo'  /*{ id, username , email}*/);

                } else {
                    return cb(null, false);
                }
            } catch (error) {
                return cb(error, false);
            }
        }
    ));