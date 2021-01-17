import { Router } from 'express';
import baseCreate from './baseCreate';
import baseGetById from "./baseGetById";
import deleteById from "./baseDeleteById";
import baseUpdateById from "./baseUpdateById";
const router = Router();

router.post('/', baseCreate); //POST localhost:5000/base/
router.get('/:baseId', baseGetById);//GET
router.delete('/:baseId', deleteById);//delete
router.patch('/:baseId', baseUpdateById);//baseUpdateById
export default router;
