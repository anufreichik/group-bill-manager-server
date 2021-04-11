import Debt from './Model';
import {get} from "lodash";
import mongoose from 'mongoose';

export default function debtGetAggregateSum(req, res) {
    const partyId = get(req, 'body.partyId', '');

    Debt.aggregate([
        {$match: {party: new mongoose.Types.ObjectId(partyId), paid:false}},
        {
            $group: {
                _id: {member: '$member', debtToMember: '$debtToMember'},
                debtSum: {$sum: "$debtAmount"},
                member: {$first: '$member'},
                debtToMember: {$first: "$debtToMember"}
            },
        },
        {
            $lookup:
                {
                    from: "members",
                    localField: "member",
                    foreignField: "_id",
                    as: "memberFrom"
                }
        },
        {
            $lookup:
                {
                    from: "members",
                    localField: "debtToMember",
                    foreignField: "_id",
                    as: "memberTo"
                }
        },
    ])
        .exec()
        .then((result) => {

            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('debts get all by party error');
        })
}
