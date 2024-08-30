import { Router } from 'express';

const router = Router();

router.get('/firstname', (req, res) => {
  const firstname = 'LOUIS';
  res.status(200).send({firstname});
});

export default router;
