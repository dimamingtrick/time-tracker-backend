
exports.getTrackerList = async (req, res) => {
  try {
    console.log("Hello");
  } catch (err) {
    res.status(400).json({ message: err.msg || "Error, bad request" });
  }
}