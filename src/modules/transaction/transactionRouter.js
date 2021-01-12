import { Router } from 'express';
import transactionCreate from "../transaction/transactionCreate";
import transactionGetAll from "./transactionGetAll";
import transactionDeleteById from "./transactionDeletById";
import transactionUpdateById from "./transactionUpdateById";

const transactionRouter = Router();
transactionRouter.post('/', transactionCreate);//POST localhost:5000/user
transactionRouter.get('/', transactionGetAll);//GET
transactionRouter.delete('/:transactionId', transactionDeleteById);//delete
transactionRouter.patch('/:transactionId', transactionUpdateById);//update
export default transactionRouter;