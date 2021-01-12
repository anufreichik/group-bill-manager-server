import Member from './Model';
export default function memberUpdateById(req, res) {
    const memberId = req.params.memberId;

    Member.updateOne({ _id: memberId }, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Member update error');
        });
}
