const Testing =require('../models/data')

const Datatesting= async (req, res) => {
  try {
    const { name, testing } = req.body;
    const newData = new Testing({
      name: name,
      testing: testing
    });
console.log(newData,"data")
    await newData.save();

    res.status(201).json({ message: 'Data saved successfully', data: newData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



module.exports ={
    Datatesting
}
