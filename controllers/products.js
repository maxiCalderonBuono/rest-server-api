const Product = require("../models/product");

const productsGet = (req, res) => {

    const {limite} = req.query;

    res.status(200).json({
        msg: "GET PRODUCTS",
        limite
    })
 
}

const productsPost = async (req, res) => {

    const body= req.body

    const product = new Product(body)

    await product.save()

    res.status(200).json({
        msg: "POST PRODUCTS",
        product
    })
 
}

const productsPut = (req, res) => {

    const {id} = req.params;

    res.status(200).json({
        msg: "PUT PRODUCTS",
        id
    })
 
}

const productsDelete = (req, res) => {

    const {id} = req.params;

    res.status(200).json({
        msg: "DELETE PRODUCTS",
        id
    })
 
}

module.exports = {
    productsGet,
    productsPost,
    productsPut,
    productsDelete
}