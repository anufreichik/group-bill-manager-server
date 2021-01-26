import Member from './Model';
import mongoose from "mongoose";
import {get} from "lodash";
export default function memberCreate(req, res){
    // Создаем id
    const memberId = new mongoose.Types.ObjectId();
    const userId = get(req, 'userData.userId');
    const newMember = new Member({
        _id:memberId,
        memberName:req.body.memberName,
        party:req.body.partyId,
        user:userId
    })

    newMember
        .save()
        .then(()=>
        {
            res.status(200).json('Member created')
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('Member not created: error!')
        })
        .finally(()=>{
            console.log('log member creation call')
        })
}