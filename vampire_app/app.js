// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire')
// 3. Require your extra data source
const vampireExtra = require('./populateVampires')
// 4. Connect your database
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vampires';
mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true
});

  .then(() => console.log('MongoDB connected succesfully'))
  .catch((err) => console.log('MongoDB did not connect',err));
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(vampireData, (err, data) => {
  console.log("added provided vampire data")
  mongoose.connection.close();
});
// ### Add some new vampire data
const newVampire = [
	{
		name: {
		type: Patient Zero,
		required: true, 
		}
		hair_color: {
			type: Grey,
			default: "blonde",
		}
		eye_color: Red,
		dob: { type: Date, default: Date.now },
		loves: [contaminants, sushi],
		location: Antartica,
		gender: m,
		victims: {
			type: 24,
			min: 0, 
		}
	}

	{
		name: {
		type: Moe Money,
		required: true, 
		}
		hair_color: {
			type: Black,
			default: "blonde",
		}
		eye_color: Yellow,
		dob: { type: Date, default: Date.now },
		loves: [fencing, abandoned buildings],
		location: Stockton,
		gender: m,
		victims: {
			type: 19,
			min: 0, 
		}
	}

	{
		name: {
		type: Kehl Bill,
		required: true, 
		}
		hair_color: {
			type: Golden,
			default: "blonde",
		}
		eye_color: Black,
		dob: { type: Date, default: Date.now },
		loves: [sword play, gardening],
		location: Underworld,
		gender: f,
		victims: {
			type: 2,
			min: 0, 
		}
	}

	{
		name: {
		type: Sola Vamp,
		required: true, 
		}
		hair_color: {
			type: Blood Red,
			default: "blonde",
		}
		eye_color: White,
		dob: { type: Date, default: Date.now },
		loves: [nothing],
		location: Transylvania,
		gender: f,
		victims: {
			type: 666,
			min: 0, 
		}
	}
]
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison

/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
