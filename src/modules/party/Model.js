import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const partySchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    partyName: {
        type: String,
        required: true,
        index: true,
    },
    description: {
        type: String,
    },
    partyDate:{
        type:String,
        required: true,
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Party', partySchema);
