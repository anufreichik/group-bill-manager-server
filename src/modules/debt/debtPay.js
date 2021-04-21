import {get} from "lodash";
import Debt from "./Model";

export default function debtPay(req, res) {
    const partyId = get(req, 'body.partyId', '');
    const debtFrom = get(req, 'body.debtFrom', '');
    const debtTo = get(req, 'body.debtTo', '');

    Debt.updateMany(
        {
            party: partyId,
            member: {$in: [debtFrom.toString(), debtTo.toString()]},
            debtToMember: {$in:  [debtFrom.toString(), debtTo.toString()]}
        },
        {paid: true, debtPaymentDate: Date.now()})
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('debtPay error');
        });


}
