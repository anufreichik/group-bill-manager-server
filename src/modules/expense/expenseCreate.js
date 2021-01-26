import Expense from './Model';
import mongoose from "mongoose";
import {get} from "lodash";
export default function expenseCreate(req, res){
    const expenseId = new mongoose.Types.ObjectId();
    const userId = get(req, 'userData.userId');
    const newExpense = new Expense({
        _id:expenseId,
        expenseName:req.body.expenseName,
        expenseAmount:req.body.expenseAmount,
        expenseTaxPercent:req.body.expenseTaxPercent,
        expenseTipPercent:req.body.expenseTipPercent,
        expenseTotal:req.body.expenseTotal,
        party:req.body.partyId
    })

    newExpense
        .save()
        .then(()=>
        {
            res.status(200).json('expense created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('expense not created: error!')
        })
        .finally(()=>{
            console.log('log expense creation call')
        })
}