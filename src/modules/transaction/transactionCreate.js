import Transaction from './Model';
import Debt from'../debt/Model'
import mongoose from "mongoose";
import {get} from "lodash";
export default function transactionCreate(req, res){
    const transactionId = new mongoose.Types.ObjectId();
    const members = get(req, 'body.paidForMembers', []);

    const newTransaction = new Transaction({
        _id:transactionId,
        purpose:req.body.purpose,
        venue:req.body.venue,
        memberWhoPaid:req.body.memberWhoPaid,
        paidForMembers:members,
        amount: req.body.amount,
        party:req.body.partyId
    })

    let perMemberPrice = parseFloat(req.body.amount)/members.length;

   members.forEach(el=>{
       if(el!==req.body.memberWhoPaid)
       {
           const debtId = new mongoose.Types.ObjectId();
           const newMemberDebt = new Debt({
               _id:debtId,
               member: el,
               debtToMember: req.body.memberWhoPaid,
               debtAmount: perMemberPrice,
               paid:false,
               party:req.body.partyId,
               transaction:transactionId
           });

           return newMemberDebt
               .save()
               .then(()=>
               {
                   console.log('debt record created');
                   // res.status(200).json('debt record created')
               })
               .catch((err)=>{
                   console.log(err);
                   //res.status(400).json('debt not created: error!')
               })
               .finally(()=>{
                   console.log('log debt creation call')
               })

       }
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
