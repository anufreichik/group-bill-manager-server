import { Router } from 'express';
import expenseCreate from "../expense/expenseCreate";
import expenseGetAll from "./expenseGetAll";
import expenseDeleteById from "./expenseDeletById";
import expenseUpdateById from "./expenseUpdateById";

const expenseRouter = Router();
expenseRouter.post('/', expenseCreate);//POST localhost:5000/user
expenseRouter.get('/', expenseGetAll);//GET
expenseRouter.delete('/:expenseId', expenseDeleteById);//delete
expenseRouter.patch('/:expenseId', expenseUpdateById);//update
export default expenseRouter;