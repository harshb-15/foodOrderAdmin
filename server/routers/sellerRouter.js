const express = require('express');
// Making a router for Sellers
const router = express.Router();
// Importing controller functions
const sellerControllers = require('./../controllers/sellerControllers');
// Making listeners for the router
router.route('/').get(sellerControllers.getAllSellers).post(sellerControllers.addSeller).delete(sellerControllers.deleteAllSellers);
router.route('/:id').get(sellerControllers.getSeller).patch(sellerControllers.updateSeller).delete(sellerControllers.deleteSeller);
module.exports = router;