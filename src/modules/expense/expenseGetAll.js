import Expense from './Model';
import {get} from "lodash";

export default function expenseGetAll(req, res){
    const partyId = get(req, 'body.partyId','');
    Expense.find({ party: partyId })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('expense get all error')
        })
}