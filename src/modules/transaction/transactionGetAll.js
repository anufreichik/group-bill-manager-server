import Transaction from './Model';

export default function transactionGetAll(req,res){
    Transaction.find()
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('transaction get all error')
        })
}