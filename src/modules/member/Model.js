import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    memberName: {
        type: String,
        require: true,
        select:true,
    },
    partyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party',
        required: true,
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Member', memberSchema);
