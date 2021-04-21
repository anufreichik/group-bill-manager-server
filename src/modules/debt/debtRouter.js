import { Router } from 'express';
import userCheckAuth from "../../middleware/userCheckAuth";
import debtGetByParty from "./debtGetByParty";
import debtGetByTransaction from "./debtGetByTransaction";
import debtGetAggregateSum from "./debtGetAggreregateSum";
import debtPay from "./debtPay";

const debtRouter = Router();
debtRouter.post('/search',userCheckAuth,debtGetByParty);
debtRouter.post('/search/transaction',userCheckAuth,debtGetByTransaction);
debtRouter.post('/search/sum', userCheckAuth, debtGetAggregateSum);
debtRouter.post('/pay', userCheckAuth, debtPay);
export default debtRouter;
