import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.render('index', { title: 'Express hello' });
});

export default router;