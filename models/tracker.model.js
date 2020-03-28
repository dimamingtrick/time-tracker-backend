const { model, Schema } = require("mongoose");

const TrackerSchema = new Schema({
  date: {
    default: new Date(),
    type: Date
  },
  time: {
    required: true,
    type: String
  },
  screens: [
    {
      type: Schema.Types.ObjectId,
      ref: "Screens",
      required: true
    }
  ]
});

module.exports = model("Tracker", TrackerSchema);
