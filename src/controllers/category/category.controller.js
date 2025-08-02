const Category = require("../../models/Category");

module.exports.createCategorys = async (req, res) => {
  try {
    const data = await Category.create(req.body);
    return res
      .status(201)
      .json({ message: "category created", data: data, error: false });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
      error: true,
    });
  }
};  


module.exports.getCategorys = async(req,res)=>{
    try {
        const data = await Category.find({isDelete:false});
        return res.status(201).json({
            message:""
        })
    } catch (error) {
        
    }
}