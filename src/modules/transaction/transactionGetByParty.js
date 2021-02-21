import Transaction from './Model';
import {get} from "lodash";

export default function transactionGetByParty(req, res){
    const partyId = get(req, 'body.partyId','');
    Transaction.find({party:partyId})
        .populate({
            path: 'memberWhoPaid',
            model:'Member',
            select:'memberName _id'// to select fields and remove _id field
        })
        .populate({
            path: 'paidForMembers',
            model:'Member',
            select:'memberName _id'// to select fields and remove _id field
        })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('transaction get all error')
        })
}
