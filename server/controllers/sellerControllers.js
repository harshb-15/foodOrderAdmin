const Seller = require('./../models/sellerModel');
const ApiFeatures = require('../utils/apiFeatures');
exports.getAllSellers = async (req, res) => {
    try {
        const features = new ApiFeatures(Seller.find(), req.query).filter().limitFields().sort().paginate();
        const allSellers = await features.query;
        res.status(200).json({
            status: "Success",
            sellerCount: allSellers.length,
            data: allSellers,
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString()
        })
        console.log(e);
    }

};
exports.addSeller = async (req, res) => {
    try {
        const newSeller = await Seller.create(req.body);
        res.status(200).json({
            status: "Success",
            data: newSeller,
        });
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            error: e.toString(),
        });
        console.log(e);
    }
};
exports.deleteAllSellers = async (req, res) => {
    try {
        const deletedCount = await Seller.deleteMany();
        res.status(200).json({
            status: "Success",
            deletedSellers: deletedCount,
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString(),
        })
        console.log(e);
    }
}
exports.deleteSeller = async (req, res) => {
    try {
        const result = await Seller.deleteOne({_id: req.params.id});
        if (result.deletedCount === 1) {
            res.status(200).json({
                status: "Success",
            });
        } else {
            res.status(400).json({
                status: "Failed",
                message: "No such Seller found"
            });
        }
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: "No such Seller found"
        });
        console.log(e);
    }
}
exports.getSeller = async (req, res) => {
    try {
        const id = req.params.id;
        // You can also try Seller.findById()
        const seller = await Seller.find({_id: id});
        res.status(200).json({
            status: "Success",
            data: seller,
        });
    } catch (e) {
        res.status(404).json({
            status: "Failed",
            error: e.toString(),
        })
        console.log(e);
    }
}
exports.updateSeller = async (req, res) => {
    try {
        // You can also try Seller.findByIdAndUpdate()
        const result = await Seller.updateOne({_id: req.params.id}, req.body);
        if (result.modifiedCount === 1) {
            const newSeller = await Seller.findById(req.params.id);
            res.status(200).json({
                status: "Success",
                data: newSeller,
            });
        } else {
            res.status(400).json({
                status: "Failed",
                message: "No such document found",
            });
        }
    } catch (e) {
        console.log(e);
    }
}