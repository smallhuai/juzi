const proxy = require("http-proxy-middleware");
const bodyparser = require('body-parser');
const axios = require("axios");
//这个里面是nodejs范畴
//输出在命令行里面
module.exports = function (app) {
    // console.log(app) 
    // https://api.juooo.com
    app.use(proxy("/apis", {
        target: "https://api.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/apis": ""
        }
    }))
    app.use(bodyparser.urlencoded({
        extende: true
    }));
    // https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2 
    // Host: api.juooo.com
    // Origin: https://m.juooo.com https://m.juooo.com
    // Referer: https://m.juooo.com/
    app.use(proxy("/ip", {
        target: "https://m.juooo.com",
        changeOrigin: true,
        pathRewrite: {
            "^/ip": ""
        }
    }))
}

// var express= require("express");
// var app= express();

