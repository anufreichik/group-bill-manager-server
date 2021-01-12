import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const partySchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    partyName: {
        type: String,
        require: true,
        index: true,
        select:true,
    },
    description: {
        type: String,
        select: true,
    },
    partyDate:{
        type:Date,
        require: true,
        select: true,
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Party', partySchema);
