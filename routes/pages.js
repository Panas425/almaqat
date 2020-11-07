const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    res.render("index")
});

router.get("/index", (req, res) => {
    res.render("index")
});
router.get("/aboutSchool", (req, res) => {
    res.render("aboutSchool")
});
router.get("/contact", (req, res) => {
    res.render("contact")
});
router.get("/login", (req, res) => {
    res.render("login")
});
router.get("/loginStudent", (req, res) => {
    res.render("loginStudent")
});
router.get("/register", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render('register', {
            });
        }
    }
});
router.get("/subject", (req, res, next) => {

    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render('subject', {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subject');
        }
    }
});


let classes = [];

router.get("/classes", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render('teacher')
        }
        if (req.user.isAdmin()) {
            return res.render('register', {
            });
        }
        if (req.user.isClass1()) {
            if (req.user.isMale()) {
                return res.render('classes/class1', {
                    male: "true",
                    teacherClass1: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class1', {
                    male: "",
                    teacherClass1: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass2()) {
            if (req.user.isMale()) {
                return res.render('classes/class2', {
                    male: "true",
                    teacherClass2: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class2', {
                    male: "",
                    teacherClass2: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass3()) {
            if (req.user.isMale()) {
                return res.render('classes/class3', {
                    male: "true",
                    teacherClass3: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class3', {
                    male: "",
                    teacherClass3: "",
                    female: "true"
                });
            }
        }
        if (req.user.isClass4()) {
            if (req.user.isMale()) {
                return res.render('classes/class4', {
                    male: "true",
                    teacherClass4: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class4', {
                    male: "",
                    teacherClass4: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass5()) {
            if (req.user.isMale()) {
                return res.render('classes/class5', {
                    male: "true",
                    teacherClass5: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class5', {
                    male: "",
                    teacherClass5: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass6()) {
            if (req.user.isMale()) {
                return res.render('classes/class6', {
                    male: "true",
                    teacherClass6: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class6', {
                    male: "",
                    teacherClass6: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass7()) {
            if (req.user.isMale()) {
                return res.render('classes/class7', {
                    male: "true",
                    teacherClass7: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class7', {
                    male: "",
                    teacherClass7: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass8()) {
            if (req.user.isMale()) {
                return res.render('classes/class8', {
                    male: "true",
                    teacherClass8: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class8', {
                    male: "",
                    teacherClass8: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass9()) {
            if (req.user.isMale()) {
                return res.render('classes/class9', {
                    male: "true",
                    teacherClass9: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class9', {
                    male: "",
                    teacherClass9: "",
                    female: "female"
                });
            }
        }
        if (req.user.isClass10()) {
            if (req.user.isMale()) {
                return res.render('classes/class10', {
                    male: "true",
                    teacherClass10: "",
                    female: ""
                });
            }
            if (req.user.isFemale()) {
                return res.render('classes/class10', {
                    male: "",
                    teacherClass10: "",
                    female: "female"
                });
            }
        }

    }
});


router.get("/classes/class1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render('classes/class1', {
                teacherClass1: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class2', {
                teacherClass2: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class3', {
                teacherClass3: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class4', {
                teacherClass4: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class5', {
                teacherClass5: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class6', {
                teacherClass6: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class7', {
                teacherClass7: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class8', {
                teacherClass8: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class9', {
                teacherClass9: "true",
                male: "",
                female: ""
            });
        }
    }
});
router.get("/classes/class10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            res.render('classes/class10', {
                teacherClass10: "true",
                male: "",
                female: ""
            });
        }
    }
});


//class 1
router.get("/subjects/maths/Male/math1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/maths/Male/math1',{
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/maths/Female/math1',{
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/arabic/Male/arabic1',{
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/arabic/Female/arabic1',{
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Female/sociology1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/sociology1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/sociology/Male/sociology1',{
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Male/science1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/science/Male/science1', {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/science1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/science/Female/science1');
        }
    }
});

router.get("/subjects/islam/Female/islam1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render('subjects/islam/Female/islam1');
        }
    }
});
router.get("/subjects/islam/Male/islam1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam1", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer1", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/scienceEn1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/scienceEn1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/scienceEn1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/scienceEn1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/scienceEn1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/scienceEn1", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/maths/Male/mathen1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/mathen1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/mathen1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/mathen1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/mathen1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/mathen1", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Female/english1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/english1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english1", {
                teacher: ""
            });
        }
    }
});


//class 2
router.get("/subjects/maths/Male/math2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Female/sociology2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/sociology2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Male/science2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science2", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/science/Female/science2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Female/islam2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/islam2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/scienceEn2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/scienceEn2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/scienceEn2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/scienceEn2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/scienceEn2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/scienceEn2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/maths/Male/mathen2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/mathen2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/mathen2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/mathen2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/mathen2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/mathen2", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Female/english2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/english2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english2", {
                teacher: ""
            });
        }
    }
});



//class 3
router.get("/subjects/maths/Male/math3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Female/sociology3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/sociology3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Male/science3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/science3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Female/islam3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/islam3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/scienceEn3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/scienceEn3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/scienceEn3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/scienceEn3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/scienceEn3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/scienceEn3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/maths/Male/mathen3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/mathen3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/mathen3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/mathen3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/mathen3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/mathen3", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Female/english3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/english3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english3", {
                teacher: ""
            });
        }
    }
});




//class 4
router.get("/subjects/maths/Male/math4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math4", {
                teacher: "teacher"
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic4", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer4", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science4", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english4", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam4", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology4", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational4", {
                teacher: ""
            });
        }
    }
});





//class 5
router.get("/subjects/maths/Male/math5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology5", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational5", {
                teacher: ""
            });
        }
    }
});




//class 6
router.get("/subjects/maths/Male/math6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/history/male/history6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/history6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/history6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/history6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/history6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/history6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/geo/Female/geo6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/geo6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/geo6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/geo6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/geo6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/geo6", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/nation/male/nation6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/nation6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/nation6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/nation6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/nation6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/nation6", {
                teacher: ""
            });
        }
    }
});




//class 7
router.get("/subjects/maths/Male/math7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/history/male/history7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/history7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/history7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/history7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/history7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/history7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/geo/Female/geo7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/geo7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/geo7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/geo7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/geo7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/geo7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/nation/male/nation7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/nation7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/nation7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/nation7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/nation7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/nation7", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/economy/Female/economy7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/economy7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/economy7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/economy7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/economy7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/male/economy7", {
                teacher: ""
            });
        }
    }
});




//class 8
router.get("/subjects/maths/Male/math8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/history/male/history8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/history8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/history8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/history8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/history8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/history8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/geo/Female/geo8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/geo8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/geo8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/geo8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/geo8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/geo8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/nation/male/nation8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/nation8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/nation8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/nation8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/nation8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/nation8", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/economy/Female/economy8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/economy8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/economy8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/economy8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/economy8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/male/economy8", {
                teacher: ""
            });
        }
    }
});




//Class 9
router.get("/subjects/maths/Male/math9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/computer9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/english9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/history/male/history9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/history9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/history9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/history9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/history9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/history9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/geo/Female/geo9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/geo9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/geo9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/geo9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/geo9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/geo9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/nation/male/nation9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/nation9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/nation9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/nation9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/nation9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/nation9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/economy/Female/economy9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/economy9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/economy9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/economy9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/economy9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/male/economy9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/earth_science/male/earthscience9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/male/earthscience9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/earth_science/male/earthscience9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/earth_science/Female/earthscience9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/Female/earthscience9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/earth_science/Female/earthscience9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/biology/female/biology9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/female/biology9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/biology/female/biology9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/biology/male/biology9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/male/biology9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/biology/male/biology9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/chemestry/male/chem9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/male/chem9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/chemestry/male/chem9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/chemestry/female/chem9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/female/chem9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/chemestry/female/chem9", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/physics/female/physics9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/female/physics9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/physics/female/physics9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/physics/male/physics9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/male/physics9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/physics/male/physics9", {
                teacher: ""
            });
        }
    }
});





router.get("/subjects/maths/Male/math10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/math10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/math10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/math10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/math10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/math10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/arabic10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/arabic10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/arabic10", {
                teacher: "teacher"
            });
        }
    }
});
router.get("/subjects/arabic/Female/arabic10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/arabic10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/arabic10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Male/computer10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/computer10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent() && req.user.isMale()) {
            return res.render("subjects/computer/Male/computer10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/computer10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/computer10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/computer10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/science/Female/science10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/science10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/science10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/science10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/science10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/science10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/english/Male/english10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/english10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent() && req.user.isMale()) {
            return res.render("subjects/english/Male/english10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/english10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/english10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/english10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/islam/Male/islam10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/islam10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/islam10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/islam10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/islam10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/islam10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/sociology/Male/sociology10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/sociology10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/sociology10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/sociology10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/sociology10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/sociology10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/vocational/Female/vocational10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/vocational10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/vocational10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/vocational10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/vocational10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/vocational10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/history/male/history10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/history10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/history10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/history10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/history10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/history10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/geo/Female/geo10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/geo10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/geo10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/geo10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/geo10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/geo10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/nation/male/nation10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/nation10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/nation10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/nation10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/nation10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/nation10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/economy/Female/economy10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/economy10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/economy10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/economy10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/economy10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/economy/male/economy10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/earth_science/male/earthscience10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/male/earthscience10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/earth_science/male/earthscience10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/earth_science/Female/earthscience10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/Female/earthscience10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/earth_science/Female/earthscience10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/biology/female/biology10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/female/biology10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/biology/female/biology10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/biology/male/biology10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/male/biology10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/biology/male/biology10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/chemestry/male/chem10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/male/chem10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/chemestry/male/chem10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/chemestry/female/chem10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/female/chem10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/chemestry/female/chem10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/physics/female/physics10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/female/physics10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/physics/female/physics10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/physics/male/physics10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/male/physics10", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/physics/male/physics10", {
                teacher: ""
            });
        }
    }
});



router.get("/registerTeacher", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("registerTeacher", {});
        }
    }
});


router.get("/subjects/arabic/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/arabic/Female/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/arabic/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/arabic/Male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/arabic/Male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/arabic/Male/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/biology/female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/biology/female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/biology/female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/biology/female/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/biology/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/biology/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/biology/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/biology/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/biology/male/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/chemestry/female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/chemestry/female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/chemestry/female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/chemestry/female/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/chemestry/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/chemestry/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/chemestry/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/chemestry/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/chemestry/male/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/computer/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/computer/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/computer/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign8", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign9", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/computer/Male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/computer/Male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/computer/Male/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/earth_science/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/earth_science/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/earth_science/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/earth_science/Female/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/earth_science/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/earth_science/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/earth_science/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/earth_science/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/earth_science/male/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/economy/male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/assign7", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/male/assign10", {
                teacher: ""
            });
        }
    }
});

router.get("/subjects/economy/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/assign7", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/economy/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/economy/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/economy/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/english/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/english/Male/assign10", {
                teacher: ""
            });
        }
    }
});



router.get("/subjects/english/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/english/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/english/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/english/Female/assign10", {
                teacher: ""
            });
        }
    }
});



router.get("/subjects/geo/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/geo/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/geo/male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/geo/male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/geo/male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/geo/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/geo/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/geo/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/geo/male/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/history/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/history/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/history/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/history/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/history/male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/history/male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/history/male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/history/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/history/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/history/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/history/male/assign10", {
                teacher: ""
            });
        }
    }
});



router.get("/subjects/islam/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/islam/Male/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/islam/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign8", {
                teacher: ""
            });;
        }
    }
});
router.get("/subjects/islam/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/islam/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/islam/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/islam/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/maths/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assignen1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assignen1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assignen1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assignen2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assignen2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assignen2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Male/assignen3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Male/assignen3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Male/assignen3", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/maths/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assignen1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assignen1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assignen1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assignen2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assignen2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assignen2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/maths/Female/assignen3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/maths/Female/assignen3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/maths/Female/assignen3", {
                teacher: ""
            });
        }
    }
});



router.get("/subjects/nation/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/nation/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/nation/male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/nation/male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/nation/male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/nation/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/nation/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/nation/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/nation/male/assign10", {
                teacher: ""
            });
        }
    }
});




router.get("/subjects/science/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assignen1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assignen1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assignen1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assignen2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assignen2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assignen2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Male/assignen3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Male/assignen3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Male/assignen3", {
                teacher: ""
            });
        }
    }
});



router.get("/subjects/science/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assign10", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assignen1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assignen1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assignen1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assignen2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assignen2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assignen2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/science/Female/assignen3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/science/Female/assignen3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/science/Female/assignen3", {
                teacher: ""
            });
        }
    }
});



router.get("/subjects/sociology/Female/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/sociology/Female/assign8", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/sociology/Male/assign1", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign1", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign1", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign2", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign2", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign2", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign3", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign3", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign3", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/sociology/Male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/sociology/Male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/sociology/Male/assign8", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/vocational/Female/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/Female/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/Female/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/Female/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/Female/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/Female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/Female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/Female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/vocational/Female/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/vocational/male/assign4", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign4", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign4", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/assign5", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign5", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign5", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/assign6", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign6", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign6", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/assign7", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign7", {
                teacher: "teacher"
            });
        }
        else if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign7", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/assign8", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign8", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign8", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/vocational/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/vocational/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/vocational/male/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/physics/male/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/male/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/physics/male/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/physics/male/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/male/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/physics/male/assign10", {
                teacher: ""
            });
        }
    }
});


router.get("/subjects/physics/female/assign9", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/female/assign9", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/physics/female/assign9", {
                teacher: ""
            });
        }
    }
});
router.get("/subjects/physics/female/assign10", (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.isTeacher()) {
            return res.render("subjects/physics/female/assign10", {
                teacher: "teacher"
            });
        }
        if (req.user.isStudent()) {
            return res.render("subjects/physics/female/assign10", {
                teacher: ""
            });
        }
    }
});


//if(persons.some(person => person.name === "Peter"))


module.exports = router;