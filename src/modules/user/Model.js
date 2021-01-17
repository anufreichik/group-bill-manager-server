import mongoose from 'mongoose';
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        email: {
            type: String,
            required: true,
            unique: true,
            match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
        password: {
            type: String,
            required: true,
            select: true,
        },
        firstName: {
            type: String,
            required: false,
            unique: false,
            trim: true,
            match: /^[A-Za-z\-']{1,20}$/,
            default: '',
        },

        lastName: {
            type: String,
            required: false,
            unique: false,
            trim: true,
            match: /^[A-Za-z\-']{1,20}$/,
            default: '',
        },

    },
    {timestamps: {}},
);
//userCreate index programmatically
//userSchema.index({ email: 1 }, { unique: true });
export default mongoose.model('User', userSchema);
