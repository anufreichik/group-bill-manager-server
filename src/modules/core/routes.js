import partyRouter from '../party/partyRouter';

export default function routes(app) {
  app.use('/party', partyRouter);
}
