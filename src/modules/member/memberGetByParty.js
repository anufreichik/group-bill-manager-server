import Member from './Model';

export default function memberGetByParty(req,res){
    const partyId = req.params.partyId;

    Member.find({ party: partyId })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('member get all error');
        })
}