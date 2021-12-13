/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\nvar envFound = dotenv.config();\r\nif (!envFound) {\r\n    throw new Error(\"Can't read .env file!\");\r\n}\r\nexports.default = {\r\n    mysql: {\r\n        host: process.env.DB_HOST,\r\n        user: process.env.DB_USER,\r\n        password: process.env.DB_PASS,\r\n        database: process.env.DB_SCHEMA,\r\n    },\r\n    port: parseInt(process.env.PORT, 10),\r\n    secret_key: process.env.SECRET_KEY,\r\n};\r\n\n\n//# sourceURL=webpack://template2/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/models/index.ts":
/*!***************************************!*\
  !*** ./src/server/db/models/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\r\nvar connection = mysql.createPool(config_1.default.mysql);\r\nvar Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        connection.query(query, values, function (err, results) {\r\n            if (err) {\r\n                reject(err);\r\n            }\r\n            resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.default = Query;\r\n\n\n//# sourceURL=webpack://template2/./src/server/db/models/index.ts?");

/***/ }),

/***/ "./src/server/db/queries/categories.ts":
/*!*********************************************!*\
  !*** ./src/server/db/queries/categories.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nvar getOneCategory = function (id) {\r\n    return models_1.default(\"SELECT CategoryID, Name FROM categories WHERE CategoryID = ?\", [\r\n        id,\r\n    ]);\r\n};\r\nvar getAllCategories = function () {\r\n    return models_1.default(\"SELECT CategoryID, Name FROM categories\");\r\n};\r\nvar insertCategory = function (body) {\r\n    return models_1.default(\"INSERT INTO categories SET ?\", [body]);\r\n};\r\nexports.default = {\r\n    getOneCategory: getOneCategory,\r\n    getAllCategories: getAllCategories,\r\n    insertCategory: insertCategory,\r\n};\r\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/categories.ts?");

/***/ }),

/***/ "./src/server/db/queries/filtered_products.ts":
/*!****************************************************!*\
  !*** ./src/server/db/queries/filtered_products.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nvar filterByCategory = function (id) {\r\n    return models_1.default(\"SELECT p.ProductID, p.Name, p.Price, p.StockLevel, p.OnSale, p.imageURL, c.CategoryID, c.Name as CategoryName from products as p INNER JOIN categories as c ON p.CategoryID = c.CategoryID WHERE p.CategoryID = ?\", [id]);\r\n};\r\nexports.default = filterByCategory;\r\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/filtered_products.ts?");

/***/ }),

/***/ "./src/server/db/queries/products.ts":
/*!*******************************************!*\
  !*** ./src/server/db/queries/products.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nvar getOneProduct = function (id) {\r\n    return models_1.default(\"SELECT * FROM products WHERE ProductID = ?\", [id]);\r\n};\r\nvar getAllProducts = function () {\r\n    return models_1.default(\"SELECT * FROM products\");\r\n};\r\nvar insertProduct = function (product) {\r\n    return models_1.default(\"INSERT INTO products SET ?\", [product]);\r\n};\r\nvar updateProduct = function (product, id) {\r\n    return models_1.default(\"UPDATE products SET ? WHERE ProductID = ?\", [product, id]);\r\n};\r\nvar removeProduct = function (id) {\r\n    return models_1.default(\"DELETE FROM products WHERE ProductID = ?\", [id]);\r\n};\r\nexports.default = {\r\n    getOneProduct: getOneProduct,\r\n    getAllProducts: getAllProducts,\r\n    insertProduct: insertProduct,\r\n    updateProduct: updateProduct,\r\n    removeProduct: removeProduct,\r\n};\r\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/products.ts?");

/***/ }),

/***/ "./src/server/db/queries/tokens.ts":
/*!*****************************************!*\
  !*** ./src/server/db/queries/tokens.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nvar findToken = function (tokenid, token) {\r\n    return models_1.default(\"SELECT * FROM AccessTokens WHERE TokenID = ? AND Token = ?\", [\r\n        tokenid,\r\n        token,\r\n    ]);\r\n};\r\nvar addToken = function (userid) {\r\n    return models_1.default(\"INSERT INTO AccessTokens SET UserID = ?\", [userid]);\r\n};\r\nvar updateToken = function (TokenID, token) {\r\n    return models_1.default(\"UPDATE AccessTokens SET token = ? WHERE TokenID = ?\", [\r\n        token,\r\n        TokenID,\r\n    ]);\r\n};\r\nexports.default = {\r\n    findToken: findToken,\r\n    addToken: addToken,\r\n    updateToken: updateToken,\r\n};\r\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/tokens.ts?");

/***/ }),

/***/ "./src/server/db/queries/users.ts":
/*!****************************************!*\
  !*** ./src/server/db/queries/users.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/server/db/models/index.ts\");\r\nvar findOneUserById = function (userid) {\r\n    return models_1.default(\"SELECT * FROM Users WHERE UserID = ?\", [userid]);\r\n};\r\nvar findOneUserByEmail = function (email) {\r\n    return models_1.default(\"SELECT * FROM Users WHERE Email = ?\", [email]);\r\n};\r\nvar insertUser = function (user) {\r\n    return models_1.default(\"INSERT INTO Users SET ?\", [user]);\r\n};\r\nvar updateUser = function (userid, user) {\r\n    return models_1.default(\"UPDATE Users SET ? WHERE UserID = ?\", [user, userid]);\r\n};\r\nvar removeUser = function (userid) {\r\n    return models_1.default(\"DELETE FROM Users WHERE UserID = ?\", [userid]);\r\n};\r\nexports.default = {\r\n    findOneUserByEmail: findOneUserByEmail,\r\n    findOneUserById: findOneUserById,\r\n    insertUser: insertUser,\r\n    updateUser: updateUser,\r\n    removeUser: removeUser,\r\n};\r\n\n\n//# sourceURL=webpack://template2/./src/server/db/queries/users.ts?");

/***/ }),

/***/ "./src/server/middleware/bearerstrategy.ts":
/*!*************************************************!*\
  !*** ./src/server/middleware/bearerstrategy.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar BearerStrategy = __webpack_require__(/*! passport-http-bearer */ \"passport-http-bearer\");\r\nvar tokens_1 = __webpack_require__(/*! ../utils/security/tokens */ \"./src/server/utils/security/tokens.ts\");\r\nvar users_1 = __webpack_require__(/*! ../db/queries/users */ \"./src/server/db/queries/users.ts\");\r\npassport.use(new BearerStrategy.Strategy(function (token, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var payload, user, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, tokens_1.ValidToken(token)];\r\n            case 1:\r\n                payload = _a.sent();\r\n                return [4 /*yield*/, users_1.default.findOneUserById(payload.userid)];\r\n            case 2:\r\n                user = (_a.sent())[0];\r\n                if (user) {\r\n                    next(null, user);\r\n                }\r\n                else {\r\n                    next(null, false);\r\n                }\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_1 = _a.sent();\r\n                next(error_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); }));\r\n\n\n//# sourceURL=webpack://template2/./src/server/middleware/bearerstrategy.ts?");

/***/ }),

/***/ "./src/server/middleware/localstrategy.ts":
/*!************************************************!*\
  !*** ./src/server/middleware/localstrategy.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar LocalStrategy = __webpack_require__(/*! passport-local */ \"passport-local\");\r\nvar users_1 = __webpack_require__(/*! ../db/queries/users */ \"./src/server/db/queries/users.ts\");\r\nvar passwords_1 = __webpack_require__(/*! ../utils/security/passwords */ \"./src/server/utils/security/passwords.ts\");\r\npassport.serializeUser(function (user, next) { return next(null, user); });\r\npassport.deserializeUser(function (user, next) { return next(null, user); });\r\npassport.use(new LocalStrategy.Strategy({ usernameField: \"email\", session: false }, function (email, password, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var user, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, users_1.default.findOneUserByEmail(email)];\r\n            case 1:\r\n                user = _a.sent();\r\n                if (user[0] && passwords_1.comparePassword(password, user[0].password)) {\r\n                    next(null, user[0]);\r\n                }\r\n                else {\r\n                    next(null, false);\r\n                }\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_1 = _a.sent();\r\n                next(error_1);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); }));\r\n\n\n//# sourceURL=webpack://template2/./src/server/middleware/localstrategy.ts?");

/***/ }),

/***/ "./src/server/routes/api/categoryRouter.ts":
/*!*************************************************!*\
  !*** ./src/server/routes/api/categoryRouter.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar categories_1 = __webpack_require__(/*! ../../db/queries/categories */ \"./src/server/db/queries/categories.ts\");\r\nvar router = express.Router();\r\nrouter.get(\"/:id?\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, data, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = parseInt(req.params.id);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 6, , 7]);\r\n                if (!id) return [3 /*break*/, 3];\r\n                return [4 /*yield*/, categories_1.default.getOneCategory(id)];\r\n            case 2:\r\n                data = _a.sent();\r\n                return [3 /*break*/, 5];\r\n            case 3: return [4 /*yield*/, categories_1.default.getAllCategories()];\r\n            case 4:\r\n                data = _a.sent();\r\n                _a.label = 5;\r\n            case 5:\r\n                res.status(200).json(data);\r\n                return [3 /*break*/, 7];\r\n            case 6:\r\n                error_1 = _a.sent();\r\n                next(error_1);\r\n                return [3 /*break*/, 7];\r\n            case 7: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/api/categoryRouter.ts?");

/***/ }),

/***/ "./src/server/routes/api/images.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/api/images.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar fs = __webpack_require__(/*! fs */ \"fs\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar fileupload = __webpack_require__(/*! express-fileupload */ \"express-fileupload\");\r\nvar router = express.Router();\r\nrouter.use(fileupload());\r\nrouter.post(\"/\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var newImage, buffer;\r\n    return __generator(this, function (_a) {\r\n        try {\r\n            if (!req.files) {\r\n                res.status(500).json({ msg: \"No file detected\" });\r\n                return [2 /*return*/];\r\n            }\r\n            newImage = req.files.image;\r\n            buffer = Buffer.from(newImage.data, \"base64\");\r\n            fs.writeFile(path.join(__dirname, \"../public/assets/productImages/\" + newImage.name), buffer, function (err) {\r\n                if (err) {\r\n                    console.log(err.message);\r\n                    next(err);\r\n                }\r\n                else {\r\n                    res.status(200).json({ msg: \"Image saved!\" });\r\n                }\r\n            });\r\n        }\r\n        catch (error) {\r\n            next(error);\r\n        }\r\n        return [2 /*return*/];\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/api/images.ts?");

/***/ }),

/***/ "./src/server/routes/api/index.ts":
/*!****************************************!*\
  !*** ./src/server/routes/api/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar productRouter_1 = __webpack_require__(/*! ./productRouter */ \"./src/server/routes/api/productRouter.ts\");\r\nvar categoryRouter_1 = __webpack_require__(/*! ./categoryRouter */ \"./src/server/routes/api/categoryRouter.ts\");\r\nvar images_1 = __webpack_require__(/*! ./images */ \"./src/server/routes/api/images.ts\");\r\nvar router = express.Router();\r\nrouter.get(\"/test\", function (req, res, next) {\r\n    try {\r\n        res.status(200).json({ msg: \"Hello World!\" });\r\n    }\r\n    catch (error) {\r\n        next(error);\r\n    }\r\n});\r\nrouter.use(\"/products\", productRouter_1.default);\r\nrouter.use(\"/categories\", categoryRouter_1.default);\r\nrouter.use(\"/images\", images_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/api/index.ts?");

/***/ }),

/***/ "./src/server/routes/api/productRouter.ts":
/*!************************************************!*\
  !*** ./src/server/routes/api/productRouter.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar products_1 = __webpack_require__(/*! ../../db/queries/products */ \"./src/server/db/queries/products.ts\");\r\nvar filtered_products_1 = __webpack_require__(/*! ../../db/queries/filtered_products */ \"./src/server/db/queries/filtered_products.ts\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar router = express.Router();\r\nvar isAdmin = function (req, res, next) {\r\n    if (!req.user || req.user.Role !== \"admin\") {\r\n        return res\r\n            .status(401)\r\n            .json({ msg: \"You are not authorized to make this request.\" });\r\n    }\r\n    return next();\r\n};\r\nrouter.get(\"/:id?\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, data, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = parseInt(req.params.id);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 6, , 7]);\r\n                if (!id) return [3 /*break*/, 3];\r\n                return [4 /*yield*/, products_1.default.getOneProduct(id)];\r\n            case 2:\r\n                data = _a.sent();\r\n                return [3 /*break*/, 5];\r\n            case 3: return [4 /*yield*/, products_1.default.getAllProducts()];\r\n            case 4:\r\n                data = _a.sent();\r\n                _a.label = 5;\r\n            case 5:\r\n                res.status(200).json(data);\r\n                return [3 /*break*/, 7];\r\n            case 6:\r\n                error_1 = _a.sent();\r\n                next(error_1);\r\n                return [3 /*break*/, 7];\r\n            case 7: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/filter_category/:id\", function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, data, error_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 5, , 6]);\r\n                id = parseInt(req.params.id);\r\n                data = void 0;\r\n                if (!id) return [3 /*break*/, 2];\r\n                return [4 /*yield*/, filtered_products_1.default(id)];\r\n            case 1:\r\n                data = _a.sent();\r\n                return [3 /*break*/, 4];\r\n            case 2: return [4 /*yield*/, products_1.default.getAllProducts()];\r\n            case 3:\r\n                data = _a.sent();\r\n                _a.label = 4;\r\n            case 4:\r\n                res.status(200).json(data);\r\n                return [3 /*break*/, 6];\r\n            case 5:\r\n                error_2 = _a.sent();\r\n                next(error_2);\r\n                return [3 /*break*/, 6];\r\n            case 6: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.use(function (req, res, next) {\r\n    passport.authenticate(\"bearer\", { session: false }, function (err, user, info) {\r\n        if (user)\r\n            req.user = user;\r\n        return next();\r\n    })(req, res, next);\r\n});\r\nrouter.post(\"/\", isAdmin, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var body, data, error_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                body = req.body;\r\n                return [4 /*yield*/, products_1.default.insertProduct(body)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.status(200).json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_3 = _a.sent();\r\n                next(error_3);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put(\"/:id\", isAdmin, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, body, data, error_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = parseInt(req.params.id);\r\n                body = req.body;\r\n                return [4 /*yield*/, products_1.default.updateProduct(body, id)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.status(200).json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_4 = _a.sent();\r\n                next(error_4);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete(\"/:id\", isAdmin, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, data, error_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                id = parseInt(req.params.id);\r\n                return [4 /*yield*/, products_1.default.removeProduct(id)];\r\n            case 1:\r\n                data = _a.sent();\r\n                res.status(200).json(data);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_5 = _a.sent();\r\n                next(error_5);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/api/productRouter.ts?");

/***/ }),

/***/ "./src/server/routes/auth/index.ts":
/*!*****************************************!*\
  !*** ./src/server/routes/auth/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar loginRouter_1 = __webpack_require__(/*! ./loginRouter */ \"./src/server/routes/auth/loginRouter.ts\");\r\nvar registerRouter_1 = __webpack_require__(/*! ./registerRouter */ \"./src/server/routes/auth/registerRouter.ts\");\r\nvar router = express.Router();\r\nrouter.get(\"/test\", function (req, res, next) {\r\n    try {\r\n        res.status(200).json({ msg: \"Auth Test\" });\r\n    }\r\n    catch (error) {\r\n        next(error);\r\n    }\r\n});\r\nrouter.use(\"/login\", loginRouter_1.default);\r\nrouter.use(\"/register\", registerRouter_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/auth/index.ts?");

/***/ }),

/***/ "./src/server/routes/auth/loginRouter.ts":
/*!***********************************************!*\
  !*** ./src/server/routes/auth/loginRouter.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/security/tokens */ \"./src/server/utils/security/tokens.ts\");\r\nvar router = express.Router();\r\nrouter.post(\"/\", passport.authenticate(\"local\"), function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var token, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, tokens_1.CreateToken({ userid: req.user.UserID })];\r\n            case 1:\r\n                token = _a.sent();\r\n                res.json({\r\n                    token: token,\r\n                    role: req.user.Role,\r\n                    userid: req.user.UserID,\r\n                });\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_1 = _a.sent();\r\n                console.log(\"Incorrect Log In!\");\r\n                res.status(500).json(false);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/auth/loginRouter.ts?");

/***/ }),

/***/ "./src/server/routes/auth/registerRouter.ts":
/*!**************************************************!*\
  !*** ./src/server/routes/auth/registerRouter.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar users_1 = __webpack_require__(/*! ../../db/queries/users */ \"./src/server/db/queries/users.ts\");\r\nvar tokens_1 = __webpack_require__(/*! ../../utils/security/tokens */ \"./src/server/utils/security/tokens.ts\");\r\nvar passwords_1 = __webpack_require__(/*! ../../utils/security/passwords */ \"./src/server/utils/security/passwords.ts\");\r\nvar router = express.Router();\r\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var password, result, token, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                password = req.body.password;\r\n                req.body.password = passwords_1.hashPassword(password);\r\n                return [4 /*yield*/, users_1.default.insertUser(req.body)];\r\n            case 1:\r\n                result = _a.sent();\r\n                return [4 /*yield*/, tokens_1.CreateToken({ userid: result.insertId })];\r\n            case 2:\r\n                token = _a.sent();\r\n                res.json({\r\n                    token: token,\r\n                    role: \"admin\",\r\n                    user: result.insertId,\r\n                });\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_1 = _a.sent();\r\n                console.log(error_1);\r\n                res.status(500).json(false);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/auth/registerRouter.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar api_1 = __webpack_require__(/*! ./api */ \"./src/server/routes/api/index.ts\");\r\nvar auth_1 = __webpack_require__(/*! ./auth */ \"./src/server/routes/auth/index.ts\");\r\nvar router = express.Router();\r\nrouter.use(\"/api\", api_1.default);\r\nrouter.use(\"/auth\", auth_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack://template2/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar morgan = __webpack_require__(/*! morgan */ \"morgan\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar config_1 = __webpack_require__(/*! ./config */ \"./src/server/config/index.ts\");\r\nvar passport = __webpack_require__(/*! passport */ \"passport\");\r\n__webpack_require__(/*! ./middleware/bearerstrategy */ \"./src/server/middleware/bearerstrategy.ts\");\r\n__webpack_require__(/*! ./middleware/localstrategy */ \"./src/server/middleware/localstrategy.ts\");\r\nvar app = express();\r\napp.use(express.static(\"public\"));\r\napp.use(passport.initialize());\r\napp.use(express.json());\r\napp.use(morgan(\"dev\"));\r\napp.use(routes_1.default);\r\napp.use(\"*\", function (req, res, next) {\r\n    try {\r\n        res.sendFile(path.join(__dirname, \"../public/index.html\"));\r\n    }\r\n    catch (error) {\r\n        next(error);\r\n    }\r\n});\r\napp.use(function (err, req, res, next) {\r\n    res.status(500).json({ name: err.name, msg: err.message });\r\n});\r\napp.listen(config_1.default.port, function () {\r\n    return console.log(\"Server listening on port \" + config_1.default.port);\r\n});\r\n\n\n//# sourceURL=webpack://template2/./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/security/passwords.ts":
/*!************************************************!*\
  !*** ./src/server/utils/security/passwords.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.comparePassword = exports.hashPassword = void 0;\r\nvar bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nvar hashPassword = function (password) {\r\n    var salt = bcrypt.genSaltSync(10);\r\n    var hash = bcrypt.hashSync(password, salt);\r\n    return hash;\r\n};\r\nexports.hashPassword = hashPassword;\r\nvar comparePassword = function (password, hash) {\r\n    return bcrypt.compareSync(password, hash);\r\n};\r\nexports.comparePassword = comparePassword;\r\n\n\n//# sourceURL=webpack://template2/./src/server/utils/security/passwords.ts?");

/***/ }),

/***/ "./src/server/utils/security/tokens.ts":
/*!*********************************************!*\
  !*** ./src/server/utils/security/tokens.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.ValidToken = exports.CreateToken = void 0;\r\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\r\nvar jwt = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar tokens_1 = __webpack_require__(/*! ../../db/queries/tokens */ \"./src/server/db/queries/tokens.ts\");\r\nvar config_1 = __webpack_require__(/*! ../../config */ \"./src/server/config/index.ts\");\r\nvar CreateToken = function (payload) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var data, token;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, tokens_1.default.addToken(payload.userid)];\r\n            case 1:\r\n                data = _a.sent();\r\n                payload.accesstokenid = data.insertId;\r\n                payload.unique = crypto.randomBytes(32).toString(\"hex\");\r\n                return [4 /*yield*/, jwt.sign(payload, config_1.default.secret_key)];\r\n            case 2:\r\n                token = _a.sent();\r\n                return [4 /*yield*/, tokens_1.default.updateToken(payload.accesstokenid, token)];\r\n            case 3:\r\n                data = _a.sent();\r\n                return [2 /*return*/, token];\r\n        }\r\n    });\r\n}); };\r\nexports.CreateToken = CreateToken;\r\nvar ValidToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var payload, accesstokenid;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                payload = jwt.decode(token);\r\n                return [4 /*yield*/, tokens_1.default.findToken(payload.accesstokenid, token)];\r\n            case 1:\r\n                accesstokenid = _a.sent();\r\n                if (!accesstokenid[0]) {\r\n                    throw new Error(\"Invalid Token\");\r\n                }\r\n                else {\r\n                    return [2 /*return*/, payload];\r\n                }\r\n                return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nexports.ValidToken = ValidToken;\r\n\n\n//# sourceURL=webpack://template2/./src/server/utils/security/tokens.ts?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("express-fileupload");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");;

/***/ }),

/***/ "passport-http-bearer":
/*!***************************************!*\
  !*** external "passport-http-bearer" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("passport-http-bearer");;

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;