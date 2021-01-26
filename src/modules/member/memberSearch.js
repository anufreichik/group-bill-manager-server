import Member from './Model';
import {escapeRegExp, get} from "lodash";

export default function memberSearchByPartyId(req,res){
    const partyId = get(req, 'body.partyId','');
    const limit = get(req, 'body.limit', 10);
    const page = get(req, 'body.page', 1);

    Member.find({ party: partyId })
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(limit * (page - 1))
        .exec()
        .then((doc) => {
            res.status(200).json(doc);
        }).catch((err) => {
        console.log(err);
        res.status(400).json('member search error');
    });
}

