import Transaction from './Model';
import {get} from "lodash";
export default function transactionUpdateById(req, res) {
    const transactionId = req.params.transactionId;

    const members = get(req, 'body.paidForMembers', []);
    let perMemberPrice = parseFloat(req.body.amount)/members.length;
    //TODO need to check if we we changed member who paid and members who paid for and do some actions in debts collection


    Transaction.updateOne({ _id: transactionId }, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Transaction baseUpdateById error');
        });
}
