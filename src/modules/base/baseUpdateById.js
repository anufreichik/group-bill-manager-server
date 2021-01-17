import Base from './Model';

export default function baseUpdateById(req, res) {
  const baseId = req.params.baseId;

  // Base.findByIdAndUpdate(baseId, req.body)
  //   //.find({ email: 'm@m.com' })
  //   //.limit(1)
  //   //.skip(1)
  //   .exec()
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).json('Base baseUpdateById error');
  //   });

  delete req.body.password; //delete key:value pair from object

  Base.updateOne({ _id: baseId }, req.body)

    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base baseUpdateById error');
    });
}
