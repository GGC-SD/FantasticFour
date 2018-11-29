import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let School = new Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    gpaReq: {
        type: Number,
    },
    gre: {
        type: Boolean
    },
    greReq: {
        type: Number
    },
    hoursReq: {
        type: Number
    },
    lettersReq: {
        type: Number
    }
});

export default mongoose.model('School', School);