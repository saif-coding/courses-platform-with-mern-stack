const SectionModel = require("../models/sectionModel");

const addSection = async (req, res) => {
  try {
    const { title } = req.body;
    const id = req.params.id;

    const section = new SectionModel({
      courseId: id,
      name: title,
    });
    await section.save();
    res.status(201).json({ message: "Section created", section });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "erorr of add section" });
  }
};

const getAllSections = async (req, res) => {
  try {
    const courseId = req.params.id;
    const gettingSections = await SectionModel.find({ courseId });
    if (!gettingSections) {
      return res.status(404).json({ message: "sections not found" });
    }
    return res.status(200).json(gettingSections);
  } catch (error) {
    console.error(error, "error or getting sections");
  }
};
module.exports = { addSection, getAllSections };
