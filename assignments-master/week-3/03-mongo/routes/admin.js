const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

router.use(express.json());

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const userExist = await Admin.findOne({
        username,
        password
    });

    if(!userExists){
        const createAdmin = await Admin.create({
            username : username,
            password : password
        });
        createAdmin.save();
    }
    
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;