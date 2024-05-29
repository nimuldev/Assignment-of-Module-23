const express=require("express")
const ProductController = require("../controllers/ProductController");
const UserController=require("../controllers/UserController")
const AuthVerification=require("../middlewares/AuthVerification")
const WishController=require("../controllers/WishListContoller")
const CartController=require("../controllers/CarListController")


const router=express.Router();

router.get('/ProductBrandList',ProductController.ProductBrandList)
  router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
  router.get('/ProductListByBrand/:BrandID',ProductController.productListByBrand)
   router.get('/ProductListByCategory/:CategoryID',ProductController.productListByCategory)
    router.get('/ProductListBySmilier/:CategoryID',ProductController.productListBySimilar)
  router.get('/ProductListByKeyword/:Keyword',ProductController.productListByKeyword)
   router.get('/ProductListByRemark/:Remark',ProductController.productListByRemark)
  router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
   router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)


//user

router.get('/UserOTP/:email',UserController.UserOTPService)
   router.get('/VerifyLogin/:email/:otp',UserController.UserOTPVerify)
 router.get('/UserLogout',AuthVerification,UserController.UserLogOut)
 router.post('/CreateProfile',AuthVerification,UserController.UserProfile)
  router.post('/UpdateProfile',AuthVerification,UserController.UserProfile)
  router.get('/ReadProfile',AuthVerification,UserController.ReadProfile)


//wish list
router.post('/SaveWishList',AuthVerification,WishController.SaveWishListService)
router.post('/RemoveWishList',AuthVerification,WishController.RemoveWishListService)
router.get('/WishList',AuthVerification,WishController.Wishlist)


// cart

router.post('/SaveCartList',AuthVerification,CartController.SaveCartList)
router.post('/RemoveCartList',AuthVerification,CartController.DeleteCart)
router.get('/CartList',AuthVerification,CartController.CartList)


module.exports=router;