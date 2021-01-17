import Member from './Model';

export default function memberDeleteById(req, res) {
    const memberId = req.params.memberId;

    Member.deleteOne({ _id: memberId })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Member delete error');
        });
}
