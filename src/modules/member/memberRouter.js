import { Router } from 'express';
import memberCreate from "../member/memberCreate";
import memberGetAll from "./memberGetAll";
import memberDeleteById from "./memberDeleteById";
import memberUpdateById from "./memberUpdateById";
import memberGetById from "./memberGetById";
import memberSearchByPartyId from "./memberSearch";
import userCheckAuth from "../../middleware/userCheckAuth";

const memberRouter = Router();
memberRouter.post('/', userCheckAuth, memberCreate);//POST localhost:5000/member
memberRouter.post('/search',userCheckAuth,memberSearchByPartyId);
memberRouter.get('/', userCheckAuth,memberGetAll);//GET all by userid
memberRouter.get('/:memberId', userCheckAuth,memberGetById);//GET by id
//memberRouter.get('/party/:partyId', userCheckAuth, memberGetByParty);//GET by party
memberRouter.delete('/:memberId',userCheckAuth, memberDeleteById);//delete
memberRouter.patch('/:memberId', userCheckAuth,memberUpdateById);

export default memberRouter;
