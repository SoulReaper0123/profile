import { Router } from 'express';

const router = Router();

router.get('/schoolemail', (req, res) => {
  const schoolemail = 'lody.sarino.swu@phinmaed.com';
  res.status(200).send({schoolemail});
});

export default router;
