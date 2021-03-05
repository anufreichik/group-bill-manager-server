import Transaction from './Model';
import Debt from '../debt/Model';
import {get} from 'lodash';
import mongoose from 'mongoose';

export default async function transactionUpdateById(req, res) {
    const transactionId = req.params.transactionId;

    const members = get(req, 'body.paidForMembers', []);
    const newDebtTo = get(req, 'body.memberWhoPaid', []);
    let perMemberPrice = parseFloat(req.body.amount) / members.length;

    await Transaction.findById(transactionId)
        .exec()
        .then(async (doc) => {
            //console.log(doc, doc.paidForMembers)
            const newMembersSet = members;
            const oldMembersSet = doc.paidForMembers;
            const differenceAdd = newMembersSet.filter((el) => !oldMembersSet.includes(el));
            const differenceRemove = oldMembersSet.filter((el) => !newMembersSet.includes(el.toString()));
            const intersection = newMembersSet.filter((el) => oldMembersSet.includes(el));

        //remove debts for members that no longer in transaction
            const promise1 = differenceRemove.map((member) => {
                return Debt.deleteOne({member: member, transaction: transactionId})
                    .then((result) => console.log(result))
                    .catch((err) => console.log(err));
            });

        //add debts for members that was not in transaction but added now
            const promise2 = differenceAdd.map((el) => {
                if (el !== req.body.memberWhoPaid) {
                    const debtId = new mongoose.Types.ObjectId();
                    const newMemberDebt = new Debt({
                        _id: debtId,
                        member: el,
                        debtToMember: req.body.memberWhoPaid,
                        debtAmount: perMemberPrice,
                        paid: false,
                        party: doc.party,
                        transaction: transactionId,
                    });

                    return newMemberDebt
                        .save()
                        .then(() => console.log('debt record created'))
                        .catch((err) => console.log(err))
                        .finally(() => console.log('log debt creation call'));
                }
            });

        //update debt amount accordingly
             const resUpdateDebt = await  Debt.updateMany({transaction:transactionId}, {debtAmount:perMemberPrice, debtToMember:newDebtTo})
                   .exec()
                   .then((result) => {
                       console.log(result)
                   })
                   .catch((err) => {
                       console.log(err);

                   });

            await Promise.all([...promise1, ...promise2]);
        });

    Transaction.updateOne({_id: transactionId}, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Transaction baseUpdateById error');
        });
}
