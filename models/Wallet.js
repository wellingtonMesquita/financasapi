const mongoose = require("mongoose");

const {Schema} = mongoose;

const WalletSchema = new Schema({

value_gained: {
    type: Number,
    required: true
},
value_lost: {
    type: Number,
    required: true
}
},{timestamps:true});

const Wallet = mongoose.model("Wallet",WalletSchema);

module.exports={
    Wallet,
    WalletSchema
}