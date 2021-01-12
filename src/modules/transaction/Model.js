import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    purpose: {
        type: String,
        require: true,
        select:true,
    },
    transactionWhoPaid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true,
    },
    paidForTransactions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party',
        required: true,
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Transaction', transactionSchema);
