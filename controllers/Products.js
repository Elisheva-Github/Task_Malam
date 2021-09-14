// const jwt = require("jsonwebtoken");
// const Product = require('../models/product');

// class Product {
//     postProduct = async (req, res) => {
//         try {
//             const { productName, img, desc, price } = req.body;
//             //Validations.
//             //Check if user exists
//             var myobj = new Product({ productName, img, desc, price });
//             await myobj.save();
//             // const token = generateAccessToken(user);
//             // console.log("token", token);
//             return res.send();

//         } catch (error) {
//             res.status(500).send(error)
//         }
//     }
// }

// module.exports = new Product();



const jwt = require("jsonwebtoken");
const Product = require('../models/products');

class Products {
    postProduct = async (req, res) => {
        try {
            const { productName, img, desc, price } = req.body; //Adress, phone ....
            //Validations.
            //Check if user exists

            var myobj = new Product({ productName, img, desc, price });
            await myobj.save();
            console.log("1 document inserted");

            // const token = generateAccessToken(user);
            // console.log("token", token);
            return res.send();

        } catch (error) {
            res.status(500).send(error)
        }
    }

    allProducts = async (req, res) => {

        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

        try {
            let resultProduct = await Product.find();
            return res.status(200).json(resultProduct);
        } catch (error) {

            return res.status(500).json({ error: error })
        }
    }
}


module.exports = new Products();
