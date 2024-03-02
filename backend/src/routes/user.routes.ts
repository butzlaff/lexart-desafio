import { Request, Router, Response } from 'express';
import UserController from '@/controllers/User.controller';

const router = Router();

const userController = new UserController(); 

router.post('/register', (req: Request, res: Response) => userController.create(req, res));
router.post('/login', (req: Request, res: Response) => userController.login(req, res));

export default router;