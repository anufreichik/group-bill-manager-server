import { Router } from 'express';
import memberCreate from "../member/memberCreate";
import memberGetAll from "./memberGetAll";
import memberDeleteById from "./memberDeletById";
import memberUpdateById from "./memberUpdateById";

const memberRouter = Router();
memberRouter.post('/', memberCreate);//POST localhost:5000/user
memberRouter.get('/', memberGetAll);//GET
memberRouter.delete('/:memberId', memberDeleteById);//delete
memberRouter.patch('/:memberId', memberUpdateById);//update
export default memberRouter;