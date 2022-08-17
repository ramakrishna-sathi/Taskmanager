const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    project: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
});

const Projects = mongoose.model("Projects",projectSchema);


module.exports = Projects;