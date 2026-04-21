import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    symbol: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    change24h: {
      type: Number,
      required: true,
      default: 0,
    },
    marketCap: {
      type: Number,
      default: 0,
      min: 0,
    },
    volume: {
      type: Number,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

cryptoSchema.index({ createdAt: -1 });
cryptoSchema.index({ change24h: -1 });

const Crypto = mongoose.model('Crypto', cryptoSchema);

export default Crypto;
