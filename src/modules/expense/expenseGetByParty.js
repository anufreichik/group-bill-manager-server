import Expense from './Model';
import {get} from "lodash";

export default function expenseGetByParty(req, res){
    const partyId = get(req, 'body.partyId','');
    const limit = get(req, 'body.limit', 5);
    const page = get(req, 'body.page', 1);
    Expense.find({ party: partyId })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(limit * (page - 1))
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            //console.log(err);
            res.status(400).json('expense get all error')
        })
}