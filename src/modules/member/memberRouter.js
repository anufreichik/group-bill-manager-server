import { Router } from 'express';
import memberCreate from "../member/memberCreate";
import memberGetAll from "./memberGetAll";
import memberDeleteById from "./memberDeleteById";
import memberUpdateById from "./memberUpdateById";

const memberRouter = Router();
memberRouter.post('/', memberCreate);//POST localhost:5000/user
memberRouter.get('/', memberGetAll);//GET
memberRouter.delete('/:memberId', memberDeleteById);//delete
memberRouter.patch('/:memberId', memberUpdateById);//baseUpdateById
export default memberRouter;