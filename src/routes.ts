import { Router } from 'express';
import './database/connection';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.get('/orphanages', OrphanagesController.index);

export default routes;