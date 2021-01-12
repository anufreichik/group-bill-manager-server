import Expense from './Model';

export default function expenseGetAll(req, res){
    Expense.find()
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('expense get all error')
        })
}