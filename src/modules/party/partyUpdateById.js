import Party from './Model';
export default function partyUpdateById(req, res) {
    const partyId = req.params.partyId;

    Party.updateOne({ _id: partyId }, req.body)
        .exec()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Party update error');
        });
}
