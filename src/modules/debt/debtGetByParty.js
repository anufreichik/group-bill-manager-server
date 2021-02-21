import Debt from './Model';
import {get} from "lodash";

export default function debtGetByParty(req,res){
    const partyId = get(req, 'body.partyId','');
    Debt.find({ party: partyId })
        .populate({
            path: 'member',
            model:'Member',
            select:'memberName'// to select fields and remove _id field
        })
        .populate({
            path: 'debtToMember',
            model:'Member',
            select:'memberName'// to select fields and remove _id field
        })
        .populate({
            path: 'transaction',
            model:'Transaction',
            select:'purpose'// to select fields and remove _id field
        })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('debts get all by party error');
        })
}
