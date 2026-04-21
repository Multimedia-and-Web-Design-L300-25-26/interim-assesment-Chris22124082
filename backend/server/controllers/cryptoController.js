import Crypto from '../models/Crypto.js';
import seedCryptos from '../utils/seedCryptos.js';

const ensureSeedData = async () => {
  const count = await Crypto.countDocuments();
  if (count === 0) {
    await Crypto.insertMany(seedCryptos);
  }
};

export const getAllCryptos = async (req, res) => {
  try {
    await ensureSeedData();
    const cryptos = await Crypto.find().sort({ marketCap: -1 });
    return res.status(200).json({ data: cryptos });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch cryptocurrencies.', error: error.message });
  }
};

export const getTopGainers = async (req, res) => {
  try {
    await ensureSeedData();
    const cryptos = await Crypto.find().sort({ change24h: -1 }).limit(20);
    return res.status(200).json({ data: cryptos });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch top gainers.', error: error.message });
  }
};

export const getNewListings = async (req, res) => {
  try {
    await ensureSeedData();
    const cryptos = await Crypto.find().sort({ createdAt: -1 }).limit(20);
    return res.status(200).json({ data: cryptos });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch new listings.', error: error.message });
  }
};

export const createCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24h, marketCap, volume, description } = req.body;

    if (!name || !symbol || price === undefined || !image || change24h === undefined) {
      return res.status(400).json({
        message: 'name, symbol, price, image, and change24h are required.',
      });
    }

    const existing = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (existing) {
      return res.status(409).json({ message: 'A cryptocurrency with this symbol already exists.' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24h,
      marketCap: marketCap || 0,
      volume: volume || 0,
      description: description || '',
    });

    return res.status(201).json({
      message: 'Cryptocurrency created successfully.',
      data: crypto,
    });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to create cryptocurrency.', error: error.message });
  }
};

export const getCryptoById = async (req, res) => {
  try {
    const crypto = await Crypto.findById(req.params.id);
    if (!crypto) {
      return res.status(404).json({ message: 'Cryptocurrency not found.' });
    }
    return res.status(200).json({ data: crypto });
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch cryptocurrency.', error: error.message });
  }
};
