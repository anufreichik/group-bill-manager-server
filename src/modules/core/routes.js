import partyRouter from '../party/partyRouter';
import baseRouter from '../base/baseRoutes';
import expenseRouter from "../expense/expenseRouter";
import transactionRouter from "../transaction/transactionRouter";
import memberRouter from "../member/memberRouter";

export default function routes(app) {
  app.use('/base', baseRouter);
  app.use('/party', partyRouter);
  app.use('/member', memberRouter);
  app.use('/transaction', transactionRouter);
  app.use('/expense', expenseRouter)
}
