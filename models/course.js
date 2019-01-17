var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema ({
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