import Party from './Model';
import {escapeRegExp, get} from "lodash";

export default function partySearch(req,res){
    const userId = get(req, 'userData.userId');

    const query = {};
    const partyName = get(req, 'body.partyName', '');
    const limit = get(req, 'body.limit', 5);
    const page = get(req, 'body.page', 1);
    if (partyName) query.partyName = { $regex: escapeRegExp(partyName), $options: 'i' };
    query.user={$eq: userId};

    Party.find(query)
        .sort({ createdAt: -1 })
        .limit(limit)
        .skip(limit * (page - 1))
        .exec()
        .then((docs) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(400).json('party search error');
        });
}

