import { Router } from 'express';
import partyCreate from "../party/partyCreate";
import partyGetAll from "./partyGetAll";
import partyDeleteById from "./partyDeletById";
import partyUpdateById from "./partyUpdateById";

const partyRouter = Router();
partyRouter.post('/', partyCreate);//POST localhost:5000/user
partyRouter.get('/', partyGetAll);//GET
partyRouter.delete('/:partyId', partyDeleteById);//delete
partyRouter.patch('/:partyId', partyUpdateById);//update
export default partyRouter;