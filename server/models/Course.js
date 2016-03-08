var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, require:'{PATH} is required!'},
  featured: {type:Boolean, require:'{PATH} is required!'},
  published: {type:Date, require:'{PATH} is required!'},
  tags:[String]
});

var Course = mongoose.model('Course', courseSchema);


function createDefaultCourses() {
  Course.find({}).exec(function(err, collection){
    if(collection.length === 0){
      Course.create({title: 'C# for Sociopaths', featured: true, published: new Date('1,1,2016'), tags:['C#']});
      Course.create({title: 'C# for Non-Sociopaths', featured: true, published: new Date('9,19,2016'), tags:['C#']});
      Course.create({title: 'Super Duper Expert C#', featured: true, published: new Date('3,3,2016'), tags:['C#']});
      Course.create({title: 'Pedantic C++', featured: true, published: new Date('2,2,2016'), tags:['C++']});
      Course.create({title: 'Maintainable Code for Cowards', featured: true, published: new Date('11,1,2016'), tags:['Coding']});
      Course.create({title: 'A Survival Guide to Code Reviews', featured: true, published: new Date('11,19,2016'), tags:['Coding']});
      Course.create({title: 'Death by Coding', featured: true, published: new Date('11,9,2016'), tags:['Coding']});
      Course.create({title: 'Juggling Javascript', featured: true, published: new Date('1,9,2016'), tags:['JS']});
      Course.create({title: 'Visual Basic for Visual Basic Developers', featured: true, published: new Date('1,19,2016'), tags:['VB']});
      Course.create({title: 'Awesome Angular ', featured: true, published: new Date('10,4,2016'), tags:['Angular', 'JS']});
    }
  })
}

exports.createDefaultCourses = createDefaultCourses;