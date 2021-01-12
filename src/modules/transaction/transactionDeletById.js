import Transaction from './Model';

export default function transactionDeleteById(req, res) {
    const transactionId = req.params.transactionId;

    Transaction.deleteOne({ _id: transactionId })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Transaction delete error');
        });
}
