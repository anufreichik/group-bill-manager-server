import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const debtSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    debtToMember:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    debtAmount: {
        type:Number,
        required: true,
    },
    paid: {
        type:Boolean,
        required: true,
    },
    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party',
        required: true,
    },
    transaction: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true,
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Debt', debtSchema);
