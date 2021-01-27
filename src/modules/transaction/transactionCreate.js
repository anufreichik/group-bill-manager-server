import Transaction from './Model';
import mongoose from "mongoose";
import {get} from "lodash";
export default function transactionCreate(req, res){
    const transactionId = new mongoose.Types.ObjectId();
    const members = get(req, 'body.paidForMembers', []);

    const newTransaction = new Transaction({
        _id:transactionId,
        purpose:req.body.purpose,
        memberWhoPaid:req.body.memberWhoPaid,
        paidForMembers:members,
        amount: req.body.amount,
        party:req.body.partyId
    })



    newTransaction
        .save()
        .then(()=>
        {
            res.status(200).json('transaction created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('transaction not created: error!')
        })
        .finally(()=>{
            console.log('log transaction creation call')
        })
}