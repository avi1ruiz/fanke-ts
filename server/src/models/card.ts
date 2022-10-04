import { Document, model, Schema } from 'mongoose';

export interface ICard extends Document {
    question: string,
    answer: string,
    username: string
}

const CardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

export default model<ICard>('Card', CardSchema)