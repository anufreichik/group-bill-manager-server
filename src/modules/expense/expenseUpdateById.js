import Expense from './Model';
export default function expenseUpdateById(req, res) {
    const expenseId = req.params.expenseId;

    Expense.updateOne({ _id: expenseId }, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Expense update error');
        });
}
