const { Furnitures } = require("../models/furnitures");

function getAllFurnitures() {
    let data = Furnitures.find();
    return data;
}

function getFurnitureById(id) {
    let data = Furnitures.findById(id);
    return data;
}

async function createFurniture(data, user) {
    let newData = new Data(data);
    newData.ownerId = user._id;
    await newData.save();
    return newData;
}

async function deleteFurniture(id) {
    await Furnitures.findByIdAndDelete(id);
}

async function editFurniture(id, data) {
    await Furnitures.findByIdAndUpdate(id, { $set: data });
}

async function checkFurnitureId(id) {
    let data = await Furnitures.find().lean();
    let isValid = data.find(el => el._id == id);
    if (!isValid) {
        return false;
    }
    return true;
}

module.exports = {
    getAllFurnitures,
    getFurnitureById,
    createFurniture,
    deleteFurniture,
    editFurniture,
    checkFurnitureId
}