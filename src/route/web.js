import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    //rest api
    //   router.get('/', (req, res) => {
    //     return res.send('Hello Minh');
    //   });
    // router.get('/minh', (req, res) => {
    //   return res.send('Chào Minh');
    // });
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);

    return app.use('/', router);
};

module.exports = initWebRoutes;
