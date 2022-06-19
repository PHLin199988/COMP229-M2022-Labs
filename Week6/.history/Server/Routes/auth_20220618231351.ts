import express from 'express';
var router = express.Router();

//import the controller module
import { DisplayAboutPage, DisplayContactPage, DisplayLoginPage, DisplayProjectsPage, DisplayServicesPage } from "../Controllers/auth";

/* Display home page. */
router.get('/',  DisplayLoginPage );

/* Display home page. */
router.get('/home', DisplayLoginPage );

/* Display about page. */
router.get('/about', DisplayAboutPage);

/* Display projects page. */
router.get('/projects', DisplayProjectsPage);

/* Display services page. */
router.get('/services', DisplayServicesPage);

/* Display contact page. */
router.get('/contact', DisplayContactPage);

export default router;