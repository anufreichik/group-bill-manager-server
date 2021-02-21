import partyRouter from '../party/partyRouter';
import baseRouter from '../base/baseRouter';
import expenseRouter from "../expense/expenseRouter";
import transactionRouter from "../transaction/transactionRouter";
import memberRouter from "../member/memberRouter";
import userRouter from "../user/userRouter";
import debtRouter from "../debt/debtRouter";

export default function routes(app) {
  app.use('/base', baseRouter);
  app.use('/user', userRouter);
  app.use('/party', partyRouter);
  app.use('/member', memberRouter);
  app.use('/transaction', transactionRouter);
  app.use('/expense', expenseRouter);
  app.use('/debt', debtRouter);
}
