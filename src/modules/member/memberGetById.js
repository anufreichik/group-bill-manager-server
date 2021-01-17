import Member from './Model';

export default function memberGetById(req, res) {
    const memberId = req.params.memberId;

    Member.findById(memberId)
        //.find({ email: 'm@m.com' })
        //.limit(1)
        //.skip(1)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Member get by id error');
        });
}
