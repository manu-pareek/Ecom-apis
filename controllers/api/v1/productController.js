const ProductModal = require("../../../modal/ProductModal");
const { validationResult } = require("express-validator");

module.exports.createProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await ProductModal.create(req.body);
    res.status(200).json({ msg: "Product created Successfully", data: data });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
module.exports.getProduct = async (req, res) => {
  try {
    const data = await ProductModal.find({});
    res.status(200).json({ msg: "Fetch-ALL Success!", data: data });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await ProductModal.findByIdAndDelete(req.params["id"]);
    if (!data) {
      res
        .status(400)
        .json({ msg: "Not Found", data: "Item with given id not found." });
    } else {
      res.status(200).json({ msg: "Delete Success!!", data: data });
    }
  } catch (error) {
    console.error("Error in deleting product", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await ProductModal.findById(req.params["id"]);
    if (!data) {
      res
        .status(400)
        .json({ msg: "Not Found", data: "Item with id not found." });
    } else {
      res.status(200).json({ msg: "Fetch Sucessfully", data: data });
    }
  } catch (error) {
    console.error("Error in finding product", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports.editProduct = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = await ProductModal.findByIdAndUpdate(
      req.params["id"],
      req.body,
      { new: true }
    );
    if (!data) {
      res
        .status(400)
        .json({ msg: "Not Found!", data: "Item with id not found." });
    } else {
      res.status(200).json({ msg: "Update Success!", data: data });
    }
  } catch (error) {
    console.error("Error in updating product", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
