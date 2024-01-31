const router = require('express').Router();

const getReaction = (req, res) => {
    res.status(200).json( { message: "get reaction" , id: req.param.id } );
    console.log("this reaction")
}

router.route('/').get(getReaction);

module.exports = router;