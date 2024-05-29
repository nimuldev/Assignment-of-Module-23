const {BrandListServcie,ProductListByBrandServices,ReviewListService,ProductDetailsServices,productListByRemarkServices,ProductListByKeywordServices,productListByCategoryServices,ProductListBySmilierServices}=require("../services/ProductServices")
const ReviewModel = require("../models/ReviewModel");


exports.ProductBrandList=async (req,res)=>{
    let result=await BrandListServcie();

    res.status(200).json(result)
}


exports.ProductCategoryList=async (req,res)=>{
    let result=await ProductCategoryListServcie();
    return res.status(200).json(result)
}


exports.ProductSliderList=async (req,res)=>{
    let result=await SliderListServces();
    return res.status(200).json(result)
}

exports.productListByBrand=async (req,res)=>{
    let result=await ProductListByBrandServices(req);
    return res.status(200).json(result)
}

exports.productListByCategory=async (req,res)=>{
    let result=await productListByCategoryServices(req);
    return res.status(200).json(result)
}


exports.productListBySimilar=async (req,res)=>{
    let result=await ProductListBySmilierServices(req);
    return res.status(200).json(result)
}

exports.productListByKeyword=async (req,res)=>{
    let result=await ProductListByKeywordServices(req);
    return res.status(200).json(result)
}

exports.productListByRemark=async (req,res)=>{
    let result=await productListByRemarkServices(req);
    return res.status(200).json(result)
}

exports.ProductDetails=async (req,res)=>{
    let result=await ProductDetailsServices(req);
    return res.status(200).json(result)
}

exports.ProductReviewList=async(req,res)=>{


    let result=await ReviewListService(req);
    return res.status(200).json(result)
}
