const User = require('./../models/userModel')
exports.addSeller = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            status: "Success",
            data: newUser,
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString(),
        })
        console.log(e);
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json({
            status: "Success",
            userCount: data.length,
            data: data,
        })
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString(),
        })
        console.log(e);
    }
}
exports.getUser = async (req, res) => {
    try {
        const result = await User.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data: result,
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            error: e.toString(),
        })
        console.log(e);
    }
}
exports.updateUser = async (req, res) => {
    try {
        const result = await User.updateOne({_id: req.params.id}, req.body);
        if (result.matchedCount === 1) {
            const newUser = await User.findById(req.params.id);
            res.status(200).json({
                status: "Success",
                data: newUser,
            });
        } else {
            res.status(404).json({
                status: "Failed",
                message: "No User Found",
            });
        }
    } catch (e) {
        res.status(400).json({
            status: "Success",
            error: e.toString(),
        })
        console.log(e);
    }
}
exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await User.deleteMany();
        res.status(200).json({
            status: "Success",
            deletedCount: result['deletedCount'],
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString(),
        });
        console.log(e);
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const result = await User.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: "Success",
            deletedCount: result['deletedCount'],
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString(),
        });
        console.log(e);
    }
}