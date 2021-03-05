import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    memberName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: false,
    },
    party: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Party',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}

});
export default mongoose.model('Member', memberSchema);
