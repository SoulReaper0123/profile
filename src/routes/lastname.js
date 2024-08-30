import { Router } from 'express';

const router = Router();

router.get('/lastname', (req, res) => {
  const lastname = 'SARINO';
  res.status(200).send({lastname});
});

export default router;
