const { body, check, validationResult } = require('express-validator');

module.exports = {
    createValidationFor,
    checkValidationResult,
}

function createValidationFor(route) {
    switch (route) {
        case 'create':
            return [
                body("name").isString().isLength({ min: 1, max: 200 }),
                body("height").isInt({ min: 1 }),
                body("homeworld").isString().trim(),
                body("gender").isIn(["male", "female"]),
                body("specie").isString().trim(),
            ];
        case 'update':
            return [
                check("id").isMongoId(),
                body("name").isString().isLength({ min: 1, max: 200 }).optional(),
                body("height").isInt({ min: 1 }).optional(),
                body("homeworld").isString().trim().optional(),
                body("gender").isIn(["male", "female"]).optional(),
                body("specie").isString().trim().optional(),
            ];
        case 'findAll':
            return [
                check("page").isInt({ min: 1 }).optional(),
                check("perPage").isInt({ min: 5 }).optional(),
                check("name").isString().isLength({ min: 1, max: 200 }).optional(),
                check("height").isInt({ min: 1 }).optional(),
                check("homeworld").isString().trim().optional(),
                check("gender").isIn(["male", "female"]).optional(),
                check("specie").isString().trim().optional(),
            ];
        case 'remove':
        case 'findOne':
            return [check("id").isMongoId()];

        default:
            return [];
    }
}

function checkValidationResult(req, res, next) {
    const result = validationResult(req);
    if (result.isEmpty()) {
        return next();
    }

    res.status(400).json({ errors: result.array() });
}