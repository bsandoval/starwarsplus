const User = require("../models/user.model.js");

module.exports = {
    create,
    update,
    remove,
    findOne,
    findAll
}

async function create(req, res) {
    let user;
    try {
        user = await User.create({
            name: req.body.name,
            height: req.body.height,
            homeworld: req.body.homeworld,
            gender: req.body.gender,
            specie: req.body.specie,
        });
    } catch (error) {
        if (error.code == 11000) {
            res.status(409).send({ message: `User with name ${req.body.name} already exists` });
            return;
        }

        res.status(500).send({
            message:
                error.message || "Some error occurred while creating user.",
        });
        return;
    }

    res.status(200).send({
        _id: user._id.toString()
    });
};

async function update(req, res) {
    let user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        res.status(404).send({ message: "User not found with id " + req.params.id });
        return;
    }

    try {
        if (req.body.name) {
            user.name = req.body.name;
        }

        if (req.body.homeworld) {
            user.homeworld = req.body.homeworld;
        }

        if (req.body.gender) {
            user.gender = req.body.gender;
        }

        if (req.body.specie) {
            user.specie = req.body.specie;
        }

        await user.save();

    } catch (error) {
        if (error.code == 11000) {
            res.status(409).send({ message: `User with name ${req.body.name} already exists` });
            return;
        }

        res.status(500).send({
            message:
                error.message || "Some error occurred while updating user.",
        });
        return;
    }

    res.status(200).send({ message: "User updated successfully!" });
};

async function remove(req, res) {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id);

        if (!deleted) {
            res.status(404).send({ message: "User not found with id " + req.params.id });
            return;
        }

        return res.status(200).send({ message: "User deleted successfully!" });

    } catch (error) {
        return res.status(500).send({
            message:
                error.message || "Some error occurred while deleting user.",
        });
    }
};

async function findOne(req, res) {
    let user;
    try {

        user = await User.findOne({ _id: req.params.id }).lean();
        if (!user) {
            return res.status(404).send({ message: "User not found with id " + req.params.id });
        }

    } catch (error) {
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id,
        });
    }

    return res.status(200).send(user);
};

async function findAll(req, res) {
    try {
        let users = await User.find({}).exec();
        return res.status(200).send(users);
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "Error while retrieving users" });
    }
};

