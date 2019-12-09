const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const SimpleLinearRegression = require('ml-regression-simple-linear');


exports.linear = async(req, res) => {
    const x = req.body.x;
    const y = req.body.y;

    const regression = new SimpleLinearRegression(req.body.x, req.body.y);
    const score = regression.score(x, y);
    const result = {
        slope: regression.slope,
        intercept: regression.intercept,
        coefficient: regression.coefficients,
        regression: regression.toString(),
        json: regression.toJSON(),
        predict: regression.predict(2020),
        score
    }

    res.json(result);

};