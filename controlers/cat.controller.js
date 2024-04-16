const cat = [];

exports.post = (req, res) => {
    const { from, to, company } = req.body;
  
    console.log({
      from,
      to,
      company,
    });
  
    res.send(req.body);
  };




exports.read = (req, res) => {
    res.send(cats);

};
//New cats array code

let cats = []; // Dummy array to store cat data

// Create a new cat
const createCat = (req, res) => {
  const { name, age, color } = req.body;
  const newCat = { id: cats.length + 1, name, age, color };
  cats.push(newCat);
  res.status(201).json({ message: 'Cat created successfully', cat: newCat });
};

// Read all cats
const getAllCats = (req, res) => {
  res.status(200).json(cats);
};

// Read a single cat by id
const getCatById = (req, res) => {
  const catId = parseInt(req.params.id);
  const cat = cats.find(cat => cat.id === catId);
  if (cat) {
    res.status(200).json(cat);
  } else {
    res.status(404).json({ message: 'Cat not found' });
  }
};

// Update a cat by id
const updateCat = (req, res) => {
  const catId = parseInt(req.params.id);
  const { name, age, color } = req.body;
  const catIndex = cats.findIndex(cat => cat.id === catId);
  if (catIndex !== -1) {
    cats[catIndex] = { ...cats[catIndex], name, age, color };
    res.status(200).json({ message: 'Cat updated successfully', cat: cats[catIndex] });
  } else {
    res.status(404).json({ message: 'Cat not found' });
  }
};

// Delete a cat by id
const deleteCat = (req, res) => {
  const catId = parseInt(req.params.id);
  const catIndex = cats.findIndex(cat => cat.id === catId);
  if (catIndex !== -1) {
    cats.splice(catIndex, 1);
    res.status(200).json({ message: 'Cat deleted successfully' });
  } else {
    res.status(404).json({ message: 'Cat not found' });
  }
};

module.exports = { createCat, getAllCats, getCatById, updateCat, deleteCat };
