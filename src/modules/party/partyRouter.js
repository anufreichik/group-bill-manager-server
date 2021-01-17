import { Router } from 'express';
import partyCreate from "../party/partyCreate";
import partyGetAll from "./partyGetAll";
import partyDeleteById from "./partyDeleteById";
import partyUpdateById from "./partyUpdateById";
import userCheckAuth from "../../middleware/userCheckAuth";

const partyRouter = Router();
partyRouter.post('/', userCheckAuth,partyCreate);//POST localhost:5000/user
partyRouter.get('/', userCheckAuth,partyGetAll);//GET
partyRouter.delete('/:partyId', userCheckAuth, partyDeleteById);//delete
partyRouter.patch('/:partyId', userCheckAuth, partyUpdateById);//baseUpdateById
export default partyRouter;