var mongoose = require('mongoose');


var CourseSchema = new mongoose.Schema({
     title: String,
     desc: String,
     wistiaId: String,
     price: Number,
     ownByTeacher: { type: Schema.Types.objectId, ref: 'User'},
     ownByStudent: [{
         user: { type: Schema.Types.objectId, ref: 'User'},
     }],
     totalStudents: Number
});

module.exports= mongoose.model('Course', CourseSchema);