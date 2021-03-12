
const express = require('express')

const product = [
    {
      "product_id": "001",
      "product_name": "apple",
      "image_path": "http://www.themarketingsage.com/wp-content/uploads/2013/03/250px-Honeycrisp-Apple.jpg",
      "price": "20",
      "detail": "This is a apple so sweet",
    },
    {
      "product_id": "002",
      "product_name": "orange",
      "image_path": "https://www.quanta.org/thumbs/thumb-orange-640x480-orange.jpg",
      "price": "10",
      "detail": "This is a orange",
    },
    {
      "product_id": "003",
      "product_name": "banana",
      "image_path": "https://image.makewebeasy.net/makeweb/0/aNSsujWTa/FruitandVegs/Picture14.png",
      "price": "25",
      "detail": "This is a banana",
    },
    {
      "product_id": "004",
      "product_name": "kiwi",
      "image_path": "https://dz.lnwfile.com/1a1umr.jpg",
      "price": "30",
      "detail": "This is a  kiwi",
    }
    ,
    {
      "product_id": "005",
      "product_name": "mango",
      "image_path": "https://static.libertyprim.com/files/familles/mangue-large.jpg?1569271798",
      "price": "30",
      "detail": "This is a mango",
    }
    , {
      "product_id": "006",
      "product_name": "coconut",
      "image_path": "https://media.npr.org/assets/img/2011/08/15/coconut-water-6f51be99d73fb9aacd1358747aea2de85aa4d2ff-s800-c85.jpg",
      "price": "30",
      "detail": "This is a coconut",
    }
    , {
      "product_id": "007",
      "product_name": "grape",
      "image_path": "https://image.makewebeasy.net/makeweb/0/aNSsujWTa/FruitandVegs/Table_grapes_on_white.jpg",
      "price": "80",
      "detail": "This is a grape",
    }
    , {
      "product_id": "008",
      "product_name": "lemon",
      "image_path": "https://dz.lnwfile.com/6bmnr2.jpg",
      "price": "15",
      "detail": "This is a lemon",
    },
    {
      "product_id": "009",
      "product_name": "lime",
      "image_path": "https://image.makewebeasy.net/makeweb/0/LP7m63jDK/content/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.jpg",
      "price": "5",
      "detail": "This is a lime",
    },
    {
      "product_id": "010",
      "product_name": "melon",
      "image_path": "https://fm.lnwfile.com/lj0vfv.jpg",
      "price": "40",
      "detail": "This is a melon",
    },
  ]

 exports.product=product ;