const asyncHandler = require('express-async-handler');

//@desc Get Goals
//@route GET api/goal
//@access private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get Goals..." });
});

//@desc Set Goal
//@route POST api/goal
//@access private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('add text filed...')
    }
    res.status(201).json({ message: 'set goal...' })
});

//@desc Update Goal
//@route PUT api/goal/:id
//@access private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal...id-${req.params.id}` })
});

//@desc Delete Goal
//@route DELETE api/goal/:id
//@access private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal...id-${req.params.id}` })
});




module.exports = { getGoals, setGoal, updateGoal, deleteGoal }