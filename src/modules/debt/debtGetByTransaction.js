import Debt from './Model';
import {get} from "lodash";

export default function debtGetByTransaction(req,res){
    const transactionId = get(req, 'body.transactionId','');

    Debt.find({ transaction: transactionId })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('debts get all by transaction error');
        })
}
