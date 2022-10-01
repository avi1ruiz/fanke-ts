import { Document, model, Schema } from 'mongoose'
import { compare, hash } from 'bcryptjs'

export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    encryptPassword(password: string): Promise<string>;
    comparePassword(password: string): Promise<boolean>;
};

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    return await hash(password, 10)
}

userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await compare(password, this.password);
}

export default model<IUser>('User', userSchema)