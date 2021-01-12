import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    expenseName: {
        type: String,
        require: true,
        select:true,
    },
    expenseAmount: {
        type: Number,
        required: true,
    },
    expenseTaxPercent: {
        type: Number,
        required: false,
    },
    expenseTipPercent: {
        type: Number,
        required: false,
    },
    expenseTotal: {
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
export default mongoose.model('Expense', expenseSchema);
