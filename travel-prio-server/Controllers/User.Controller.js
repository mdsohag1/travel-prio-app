import UserModel from "../Models/User.Model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// export const registerUser = async (req, res) => {
//     const salt = await bcrypt.genSalt(10)
//     const hashedPass = await bcrypt.hash(req.body.password, salt)
//     req.body.password = hashedPass
//     const newUser = new UserModel(req.body);
//     const { email } = req.body
//     try {
//         const oldUser = await UserModel.findOne({ email })
//         if (oldUser) {
//             return res.status(400).json({ message: "user is already registered" })
//         }
//         const user = await newUser.save();
//         const token = jwt.sign({
//             email: user.email, id: user._id
//         }, process.env.JWT_KEY, { expiresIn: '1h' })
//         res.status(200).json({ user, token })

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

// //login
// export const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await UserModel.findOne({ email: email })

//         if (user) {
//             const validity = await bcrypt.compare(password, user.password)

//             if (!validity) {
//                 res.status(400).json("wrong password")
//             }
//             else {
//                 const token = jwt.sign({
//                     username: user.username, id: user._id
//                 }, process.env.JWT_KEY, { expiresIn: '1h' })
//                 res.status(200).json({ user, token })
//             }
//         }
//         else {
//             res.status(404).json("user not exit")
//         }

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

//create user
export const createUser = async (req, res) => {
    // const { email, from, to, destination, origin } = req.body;
    try {
        const newUser = new UserModel(req.body)
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
}

//get a user
export const getUser = async (req, res) => {
    const email = req.query.email;
    try {
        const user = await UserModel.find({ email: email })
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json("no such user exit")
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

//get all user
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
}


//update user
//delete user