import Expense from './Model';
export default function expenseCreate(req, res){
    const newExpense = new Expense({
        expenseName:req.body.expenseName,
        expenseAmount:req.body.expenseAmount,
        expenseTaxPercent:req.body.expenseTaxPercent,
        expenseTipPercent:req.body.expenseTipPercent,
        expenseTotal:req.body.expenseTotal,
        party:req.body.partyId
    })

    newExpense
        .save()
        .then(()=>
        {
            res.status(200).json('expense created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('expense not created: error!')
        })
        .finally(()=>{
            console.log('log expense creation call')
        })
}