const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Company = mongoose.model('Company');
const { promisify } = require('es6-promisify');

// Create Mail Contact
exports.profileEdit = async(req, res) => {

    console.log('Recieve new properties ..');
    console.log(req.body);

    const _id = req.body.company.id;
    const prop = req.body.company.name;
    const value = req.body.company.value;

    if (!_id) {
        console.log('Creating a new company ..');
        const co = new Company();
        co[`${prop}`] = value;

        console.log('Create Company property from req ..');
        console.log(co);

        console.log('Save company to db ..');
        const newCompany = await co.save()
            .catch(error => console.log(error));

        console.log(newCompany);
        res.json(newCompany);
    }
};