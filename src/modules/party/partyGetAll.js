import Party from './Model';
import {get} from "lodash";

export default function partyGetAll(req,res){
    const userId = get(req, 'userData.userId');

    Party.find({ user: userId })
        .sort({ createdAt: -1 })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('party get all by user error')
        })
}