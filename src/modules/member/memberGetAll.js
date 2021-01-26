import Member from './Model';
import {get} from "lodash";

export default function memberGetAll(req,res){
    const userId = get(req, 'userData.userId');
    Member.find({ user: userId })
        .exec()
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json('member get all error')
        })
}