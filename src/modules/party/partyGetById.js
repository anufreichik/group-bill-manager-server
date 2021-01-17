import Party from './Model';

export default function partyGetById(req, res) {
    const partyId = req.params.partyId;

    Party.findById(partyId)
        //.find({ email: 'm@m.com' })
        //.limit(1)
        //.skip(1)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Party get by id error');
        });
}
