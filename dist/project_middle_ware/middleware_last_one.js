"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// variable to used to response to not found site
const found_is_Not = (_req, res, next) => {
    // the next is not disible beacuse the eslint modules
    res.status(404).json('The website is not founded'); // the statuse of error and the massage is appear
};
// export of the vriables to used in files
exports.default = found_is_Not;
