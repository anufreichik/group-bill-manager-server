import { Router } from 'express';
import transactionCreate from "../transaction/transactionCreate";
import transactionGetByParty from "./transactionGetByParty";
import transactionDeleteById from "./transactionDeleteById";
import transactionUpdateById from "./transactionUpdateById";
import userCheckAuth from "../../middleware/userCheckAuth";
import transactionGetById from "./transactionGetById";

const transactionRouter = Router();
transactionRouter.post('/',userCheckAuth, transactionCreate);//POST localhost:5000/transaction
transactionRouter.post('/search', userCheckAuth,transactionGetByParty);//post
transactionRouter.delete('/:transactionId', userCheckAuth,transactionDeleteById);//delete
transactionRouter.patch('/:transactionId',userCheckAuth, transactionUpdateById);//update
transactionRouter.get('/:transactionId',userCheckAuth, transactionGetById);//getById
export default transactionRouter;
