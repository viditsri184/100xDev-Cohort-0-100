const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Course, Admin } = require("../db");
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

    if(!userExist){
        const createAdmin = await Admin.create({
            username : username,
            password : password
        });
        createAdmin.save();
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const course = req.body;
    
    const newCourse = await Course.create({
        title: course.title,
        description : course.description,
        price : 100,
        imageLink: "https://linktoimage.com"
    });
    createCourse.save();
    res.status(201).json({message: 'Course created successfully', courseId: newCourse._id});
    return;

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;