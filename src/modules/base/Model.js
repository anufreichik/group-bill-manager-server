import mongoose from 'mongoose';
// const { Schema } = mongoose;
const Schema = mongoose.Schema;

const baseSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: String,
  },
  { timestamps: {} },
);
//create index programmatically
//userSchema.index({ email: 1 }, { unique: true });
export default mongoose.model('Base', baseSchema);
