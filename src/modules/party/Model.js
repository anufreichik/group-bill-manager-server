import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const partySchema = new Schema({
        _id: mongoose.Schema.Types.ObjectId,
        partyName: {
            type: String,
            required: true,
            index: true,
        },
        description: {
            type: String,
        },
        partyDate: {
            type: Date,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        createdAt: {type: Date, default: Date.now},
        updatedAt: {type: Date, default: Date.now}

    },
    {timestamps: {}, versionKey: false},
);
export default mongoose.model('Party', partySchema);
