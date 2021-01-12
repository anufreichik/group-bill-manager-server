import Party from './Model';

export default function partyGetAll(req,res){
    Party.find()
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('party get all error')
        })
}