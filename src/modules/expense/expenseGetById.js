import Expense from './Model';

export default function expenseGetById(req, res) {
    const expenseId = req.params.expenseId;

    Expense.findById(expenseId)
        //.find({ email: 'm@m.com' })
        //.limit(1)
        //.skip(1)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Expense get by id error');
        });
}
