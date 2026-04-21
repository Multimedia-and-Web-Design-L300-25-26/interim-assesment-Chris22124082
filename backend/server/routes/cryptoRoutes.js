import express from 'express';
import {
  createCrypto,
  getAllCryptos,
  getCryptoById,
  getNewListings,
  getTopGainers,
} from '../controllers/cryptoController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/crypto', getAllCryptos);
router.get('/crypto/gainers', getTopGainers);
router.get('/crypto/new', getNewListings);
router.get('/crypto/:id', getCryptoById);
router.post('/crypto', protect, createCrypto);

export default router;
