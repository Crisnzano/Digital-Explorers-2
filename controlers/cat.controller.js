const cats = [];

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