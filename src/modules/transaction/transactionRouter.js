import { Router } from 'express';
import transactionCreate from "../transaction/transactionCreate";
import transactionGetByParty from "./transactionGetByParty";
import transactionDeleteById from "./transactionDeleteById";
import transactionUpdateById from "./transactionUpdateById";
import userCheckAuth from "../../middleware/userCheckAuth";

const transactionRouter = Router();
transactionRouter.post('/',userCheckAuth, transactionCreate);//POST localhost:5000/user
transactionRouter.post('/search', userCheckAuth,transactionGetByParty);//post
transactionRouter.delete('/:transactionId', userCheckAuth,transactionDeleteById);//delete
transactionRouter.patch('/:transactionId',userCheckAuth, transactionUpdateById);//baseUpdateById
export default transactionRouter;