import mongoose from "mongoose";


const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        origin: {
            type: String,
            required: true
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

const UserModel = mongoose.model("Users", UserSchema)
export default UserModel;