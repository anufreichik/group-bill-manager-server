import Transaction from './Model';

export default function transactionGetById(req, res) {
    const transactionId = req.params.transactionId;

    Transaction.findById(transactionId)
        .populate({
            path: 'memberWhoPaid',
            model:'Member',
            select:'memberName'
        })
        // .populate({
        //     path: 'paidForMembers',
        //     model:'Member',
        //     select:'_id'
       // })
        //.limit(1)
        //.skip(1)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Transaction get by id error');
        });
}
