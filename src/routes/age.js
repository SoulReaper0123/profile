import { Router } from 'express';

const router = Router();

router.get('/age', (req, res) => {
  const age = 21;
  res.status(200).send({ age});
});

export default router;
