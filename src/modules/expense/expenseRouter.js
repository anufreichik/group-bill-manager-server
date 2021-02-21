import { Router } from 'express';
import expenseCreate from "../expense/expenseCreate";
import expenseGetByParty from "./expenseGetByParty";
import expenseDeleteById from "./expenseDeleteById";
import expenseUpdateById from "./expenseUpdateById";
import userCheckAuth from "../../middleware/userCheckAuth";
import expenseGetById from "./expenseGetById";

const expenseRouter = Router();
expenseRouter.post('/',userCheckAuth, expenseCreate);//POST localhost:5000/user
expenseRouter.post('/search', userCheckAuth,expenseGetByParty);//POST
expenseRouter.delete('/:expenseId',userCheckAuth, expenseDeleteById);//delete
expenseRouter.patch('/:expenseId',userCheckAuth, expenseUpdateById);//baseUpdateById
expenseRouter.get('/:expenseId',userCheckAuth, expenseGetById);//baseUpdateById
export default expenseRouter;
