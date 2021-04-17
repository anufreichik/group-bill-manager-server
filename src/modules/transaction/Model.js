import mongoose from 'mongoose';
import Debt from '../debt/Model'
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    purpose: {
        type: String,
        required: true,
    },
    venue:{
        type: String,
        required: false,
    },
    memberWhoPaid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    },
    paidForMembers: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        required: true,
    }
    ],
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

// transactionSchema.pre('deleteOne', { document: true, query: false },   function (next) {
// let trId =  this._id;
//     console.log('Removing doc!');
//
// });

transactionSchema.pre('deleteOne', { query: true, document: false }, async function( next) {
    let trId =  this.getFilter()["_id"];
    try{
        await Debt.deleteMany(
            {transaction: trId}
        )
        next()
    }
    catch(err){
        console.log('ERROR: ', err)
        next(err)
    }

});

export default mongoose.model('Transaction', transactionSchema);
