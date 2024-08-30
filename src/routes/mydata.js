import { Router } from 'express';

const router = Router();

router.get('/mydata', (req, res) => {
    const first_name = 'LOUIS';
    const last_name = 'SARINO';
    const age = 21;
    const school_email = 'lody.sarino.swu@phinmaed.com';
  res.status(200).send({first_name, last_name, age, school_email});
});

export default router;
