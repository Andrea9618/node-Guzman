import  mongoose  from "mongoose";

mongoose.connect('mongodb://localhost/companydb', {
     useNewUrlParser: true,
     useUnifiedTopology: true
})
     .then(console.log('DB is connected'))
     .catch(error => console.log(error))