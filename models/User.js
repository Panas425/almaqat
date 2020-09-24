const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'student',
        required: true,
        enum: ['teacher', 'student', 'admin']
    },
    subjects: [
        {
            subject: { type: String, required: false }
        }
    ],
    class1: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
});
userSchema.methods.isStudent = function () {
    return (this.role === "student");
}
userSchema.methods.isTeacher = function () {
    return (this.role === "teacher");
}
userSchema.methods.isAdmin = function () {
    return (this.role === "admin");
}
userSchema.methods.isMale = function () {
    return (this.gender === "male");
}
userSchema.methods.isFemale = function () {
    return (this.gender === "female");
}
userSchema.methods.isAdmin = function () {
    return (this.role === "admin");
}


userSchema.methods.isClass1 = function () {
    return (this.class1 === "1");
}
userSchema.methods.isClass2 = function () {
    return (this.class1 === "2");
}
userSchema.methods.isClass3 = function () {
    return (this.class1 === "3");
}
userSchema.methods.isClass4 = function () {
    return (this.class1 === "4");
}
userSchema.methods.isClass5 = function () {
    return (this.class1 === "5");
}
userSchema.methods.isClass6 = function () {
    return (this.class1 === "6");
}
userSchema.methods.isClass7 = function () {
    return (this.class1 === "7");
}
userSchema.methods.isClass8 = function () {
    return (this.class1 === "8");
}
userSchema.methods.isClass9 = function () {
    return (this.class1 === "9");
}
userSchema.methods.isClass10 = function () {
    return (this.class1 === "10");
}

userSchema.methods.arabic2A = function () {
    const arr = [];
    arr.push(this.subjects);
    var val = this.subjects.some(subject => subject.subject === "arabic2A");
    return val;
}


const User = mongoose.model('User', userSchema);
module.exports = User;