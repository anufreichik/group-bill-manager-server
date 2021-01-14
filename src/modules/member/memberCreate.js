import Member from './Model';
export default function memberCreate(req, res){
    const newMember = new Member({
        memberName:req.body.memberName,
        partyId:req.body.partyId
    })

    newMember
        .save()
        .then(()=>
        {
            res.status(200).json('member created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('member not created: error!')
        })
        .finally(()=>{
            console.log('log member creation call')
        })
}