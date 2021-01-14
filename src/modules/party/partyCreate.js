import Party from './Model';
export default function partyCreate(req, res){
    const newParty = new Party({
        partyName:req.body.partyName,
        description:req.body.description,
        partyDate:req.body.partyDate
    })

    newParty
        .save()
        .then(()=>
        {
            res.status(200).json('party created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('party not created: error!' + err)
        })
        .finally(()=>{
            console.log('log party creation call')
        })
}