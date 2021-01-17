import { Router } from 'express';
import userCreate from './userCreate';
import userGetById from "./userGetById";
import deleteById from "./userDeleteById";
import userUpdateById from "./userUpdateById";
import userLogin from "./userLogin";
const router = Router();

router.post('/', userCreate); //POST localhost:5000/user/
router.post('/login', userLogin); //POST localhost:5000/user/
router.get('/:userId', userGetById);//GET
router.delete('/:userId', deleteById);//delete
router.patch('/:userId', userUpdateById);//userUpdateById
export default router;
