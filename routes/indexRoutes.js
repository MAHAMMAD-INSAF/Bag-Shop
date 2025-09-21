const express = require('express');
const router = express();
const productSchema = require('../Models/Product-model');
const islogeedin = require('../middlewares/isLogeedIn')

router.get("/", function (req, res) {
    let error = req.flash("error");
    let message = req.flash("message")
    res.render("index", { message,error, loggedin: false });
  });

router.get('/shop' , islogeedin , async function(req,res){
  let products = await productSchema.find();
  res.render('shop', {products});
})

router.get('/cart' , islogeedin , async (req,res)=>{
  // The user is available on req.user thanks to the islogeedin middleware
  // We can now populate the cart items before rendering
  let user = await req.user.populate('cart');
  res.render('cart', {user});
});

module.exports = router;