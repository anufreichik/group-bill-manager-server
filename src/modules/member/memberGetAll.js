import Member from './Model';

export default function memberGetAll(req,res){
    Member.find()
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('member get all error')
        })
}