import Base from './Model';
export default function baseCreate(req, res) {

  const newBase = new Base({
    title: req.body.title,
  });

  newBase
    .save()
    .then(() => {
      res.status(200).json('Base created!!');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Base not created');
    })
    .finally(() => {
      console.log('finally');
    });
}
