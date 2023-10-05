const Todo = require("../models/user");

// Create user Post Api

const createdata = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const todo = new Todo({
      name,
      email,
      password,
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get All Data Api Function

const getAlldata = async (req,res) => {
  try {
    await Todo.find().then((gettodos) => {
      res.status(201).json(gettodos);
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req,res) => {
  try {
    let dataAgainstId=await Todo.findById(req.params.id)
  // checking condition data existed or not
    if(!dataAgainstId){
      return res.status(404).json({message:"DATA NOT FOUND"})
    }
    res.json(dataAgainstId)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Deleting data by Id
const deleteById = async (req,res) => {
  try {
    let dataAgainstId=await Todo.findByIdAndDelete(req.params.id)
    if(!dataAgainstId){
      return res.status(404).json({message:"DATA NOT FOUND"})
    }
    res.json({message:"Deleted Successfully"})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//updating data
const updatingById = async (req,res) => {
  try {
const {name, email, password}=req.body;

    let dataAgainstId=await Todo.findByIdAndUpdate(req.params.id,
      {name,email,password},
     
      )
    if(!dataAgainstId){
      return res.status(404).json({message:"DATA NOT FOUND"})
    }
    res.json(dataAgainstId)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// exporting modules

module.exports = {
  createdata,
  getAlldata,
  getById,
deleteById,
updatingById
};
