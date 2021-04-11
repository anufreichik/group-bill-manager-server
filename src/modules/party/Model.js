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

partySchema.set('toJSON', {virtuals: true});
partySchema.set('toObject', {virtuals: true});

partySchema.virtual('numMembers', {
    ref: 'Member', // The model to use
    localField: '_id', // Find people where `localField`
    foreignField: 'party', // is equal to `foreignField`
    count: true // And only get the number of docs
});

export default mongoose.model('Party', partySchema);
