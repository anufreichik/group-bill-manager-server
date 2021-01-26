import { Router } from 'express';
import expenseCreate from "../expense/expenseCreate";
import expenseGetAll from "./expenseGetAll";
import expenseDeleteById from "./expenseDeleteById";
import expenseUpdateById from "./expenseUpdateById";
import userCheckAuth from "../../middleware/userCheckAuth";

const expenseRouter = Router();
expenseRouter.post('/',userCheckAuth, expenseCreate);//POST localhost:5000/user
expenseRouter.get('/', userCheckAuth,expenseGetAll);//GET
expenseRouter.delete('/:expenseId',userCheckAuth, expenseDeleteById);//delete
expenseRouter.patch('/:expenseId',userCheckAuth, expenseUpdateById);//baseUpdateById
export default expenseRouter;