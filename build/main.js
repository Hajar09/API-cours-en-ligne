require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_cours__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serve_favicon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_serve_favicon__);

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();








const { SERV_PORT, DBurl } = process.env;

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({
    extended: true
}));
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());

__WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connect(DBurl);
const db = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connecté à mongodb');
});

app.set('views', __WEBPACK_IMPORTED_MODULE_5_path___default.a.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(__WEBPACK_IMPORTED_MODULE_6_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_2_volleyball___default.a);

app.use('/', __WEBPACK_IMPORTED_MODULE_4__routes_cours__["a" /* courRouter */]);

app.listen(SERV_PORT, () => {
    console.log(`[APP] marche sur le port: ${SERV_PORT}`);
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src"))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return courRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_cour__ = __webpack_require__(7);



const courRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

courRouter.get('/', (req, res, next) => {
    __WEBPACK_IMPORTED_MODULE_1__models_cour__["a" /* Cour */].find({}, (err, cours) => {
        if (err) res.send(err);
        res.json(cours);
    });
});

courRouter.get("/add", (req, res) => {
    res.render('add_cours');
});

courRouter.post("/add", (req, res) => {
    //pb req.body vide    
    let newCour = new __WEBPACK_IMPORTED_MODULE_1__models_cour__["a" /* Cour */](req.body);
    newCour.save((err, cour) => {
        if (err) res.send(err);
        res.json(cour);
        //res.redirect('/')
    });
});

// courRouter.get("/:id", (req, res) => {
//     let _id= req.params.id
//     Cour.findById({_id}, (err, cour) => {
//         if(err) res.send(err)
//         res.json(cour)
//     })
// })

// courRouter.post('/:id', (req,res) => {
//     Cour.findOneAndUpdate({_id: req.params.id}, req.body, (err, cour) => {
//         if(err) res.send(err)
//         res.json(cour)
//     })
// })

// courRouter.put('/:id', (req,res) => {
//     Cour.findById({
//         _id:req.params.id
//     }, (err, cour) => {
//         if(err) res.send(err)
//         Object.assign(cour, req.body).save((err,cour) => {
//             if(err) res.send(err)
//             res.json({
//                 message: "cours modifié",
//                 cour
//             })
//         })
//     })
// })


// courRouter.delete('/:id', (req,res) => {
//     Cour.remove({_id: req.params.id}, (err, cour) => {
//         if(err) res.send(err)
//         res.json({message: "cours supprimé avec succès", cour})
//     })
// })



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cour; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);


const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const CourSchema = new Schema({
    name: { type: String, unique: true },
    author: { type: String },
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Cour = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model("Cour", CourSchema);



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map