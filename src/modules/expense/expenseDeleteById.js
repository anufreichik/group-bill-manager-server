import Expense from './Model';

export default function expenseDeleteById(req, res) {
    const expenseId = req.params.expenseId;

    Expense.deleteOne({ _id: expenseId })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Expense delete error');
        });
}
