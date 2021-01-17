import { Router } from 'express';
import memberCreate from "../member/memberCreate";
import memberGetAll from "./memberGetAll";
import memberDeleteById from "./memberDeleteById";
import memberUpdateById from "./memberUpdateById";
import memberGetById from "./memberGetById";
import memberGetByParty from "./memberGetByParty";

const memberRouter = Router();
memberRouter.post('/', memberCreate);//POST localhost:5000/member
memberRouter.get('/', memberGetAll);//GET all by userid
memberRouter.get('/:memberId', memberGetById);//GET by id
memberRouter.get('/party/:partyId', memberGetByParty);//GET by party
memberRouter.delete('/:memberId', memberDeleteById);//delete
memberRouter.patch('/:memberId', memberUpdateById);//baseUpdateById
export default memberRouter;