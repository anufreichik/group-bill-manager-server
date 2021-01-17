import Party from './Model';
import mongoose from 'mongoose';
import {get} from "lodash";
export default function partyCreate(req, res){
    // Создаем id материала который будет создан
    const partyId = new mongoose.Types.ObjectId();

    const userId = get(req, 'userData.userId');

    const newParty = new Party({
        _id:partyId,
        partyName:req.body.partyName,
        description:req.body.description,
        partyDate:req.body.partyDate,
        user:userId
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