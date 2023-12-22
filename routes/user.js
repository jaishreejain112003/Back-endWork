import express from 'express'; 
import regUser from '../controllers/user'; 

const router = express.Router(); 

router.get('/', regUser);

router.post('/', async (req, res) => {
  // res.message(); 
  // res.send(); 
  // res.status(); 
  // res.json(); 
  res.send(); 
})

export default router; 