const { model, Schema } = require("mongoose");

const ScreenSchema = new Schema({
  screen: {
    required: true,
    type: String
  },
  time: {
    // Time between this and last screen
    required: true,
    type: String
  },
  mouseActivity: {
    required: true,
    type: String
  },
  keyboardActivity: {
    required: true,
    type: String
  }
});

module.exports = model("Screen", ScreenSchema);
