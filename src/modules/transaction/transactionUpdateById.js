import Transaction from './Model';
export default function transactionUpdateById(req, res) {
    const transactionId = req.params.transactionId;

    Transaction.updateOne({ _id: transactionId }, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Transaction update error');
        });
}
