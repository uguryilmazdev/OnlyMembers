const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create model
const MessageSchema = new Schema({
    messageTitle: {type: String, required: true, minLength: 3, maxLength: 20},
    messageText: {type: String, required: true, minLength: 1, maxLength: 100},
    user: {type: Schema.Types.ObjectId, ref: User, required: true},
    timestamps: true,
})

// Export model
module.exports = mongoose.model("Message", MessageSchema);