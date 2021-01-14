import { Router } from 'express';
import create from './create';
import baseGetById from "./getById";
import deleteById from "./delete";
import update from "./update";
const router = Router();

router.post('/', create); //POST localhost:5000/base/
router.get('/:baseId', baseGetById);//GET
router.delete('/:baseId', deleteById);//delete
router.patch('/:baseId', update);//update
export default router;
