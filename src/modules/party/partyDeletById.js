import Party from './Model';

export default function partyDeleteById(req, res) {
    const partyId = req.params.partyId;

    Party.deleteOne({ _id: partyId })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json('Party delete error');
        });
}
