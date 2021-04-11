import { Router } from 'express';
import userCheckAuth from "../../middleware/userCheckAuth";
import debtGetByParty from "./debtGetByParty";
import debtGetByTransaction from "./debtGetByTransaction";
import debtGetAggregateSum from "./debtGetAggreregateSum";

const debtRouter = Router();
debtRouter.post('/search',userCheckAuth,debtGetByParty);
debtRouter.post('/search/transaction',userCheckAuth,debtGetByTransaction);
debtRouter.post('/search/sum', userCheckAuth, debtGetAggregateSum)
export default debtRouter;
