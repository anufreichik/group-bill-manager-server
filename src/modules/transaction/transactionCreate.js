import Transaction from './Model';
export default function transactionCreate(req, res){
    const newTransaction = new Transaction({
        purpose:req.body.purpose,
        memberWhoPaid:req.body.memberId,
        paidForMembers: req.body.members,
        amount: req.body.amount,
        party:req.body.partyId
    })

    newTransaction
        .save()
        .then(()=>
        {
            res.status(200).json('transaction created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('transaction not created: error!')
        })
        .finally(()=>{
            console.log('log transaction creation call')
        })
}