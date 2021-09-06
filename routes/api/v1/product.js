const express = require("express");
const router = express.Router();
const { body, param, checkSchema } = require("express-validator");
const productController = require("../../../controllers/api/v1/productController");
router.post(
  "/create",
  [
    body("name").not().isEmpty().withMessage("Name is required."),
    body("price")
      .isFloat({ gt: 0 })
      .withMessage("Price should be greater than 0."),
    checkSchema({
      quantity: {
        in: ["body"],
        errorMessage: "Quantity should be greater than or equal to zero.",
        isNumeric: {
          options: { gt: -1 },
        },
      },
    }),
  ],
  productController.createProduct
);
router.get("/all", productController.getProduct);
router.delete(
  "/delete/:id",
  [param("id").isMongoId().withMessage("Id is invalid.")],
  productController.deleteProduct
);
router.get(
  "/get/:id",
  [param("id").isMongoId().withMessage("Id is invalid.")],
  productController.getProductById
);

router.patch(
  "/edit/:id",
  checkSchema({
    id: {
      in: ["params"],
      errorMessage: "ID is wrong",
      isMongoId: true,
    },
    price: {
      in: ["body"],
      errorMessage: "Price should be greater than 0.",
      isFloat: {
        options: { gt: 0 },
      },
      optional: true,
    },
    quantity: {
      in: ["body"],
      errorMessage: "Quantity should be greater than or equal to zero.",
      isInt: {
        options: { gt: -1 },
      },
      optional: true,
    },
  }),
  productController.editProduct
);

module.exports = router;
