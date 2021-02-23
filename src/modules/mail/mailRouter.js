import { Router } from 'express';
import sendMail from "./sendMail";

const mailRouter = Router();
mailRouter.post('/send', sendMail);

export default mailRouter;
