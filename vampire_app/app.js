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
Vampire.create(vampireData, (err, vampireData) => {
	if (err){
		console.log("Error creating Vampire data: ", err);
	}
  console.log("added provided vampire data");
});
// ### Add some new vampire data
const newVampires = [
	{
		name: 'Patient Zero',
		hair_color: 'Grey',
		eye_color: 'Red',
		dob: Date,
		loves: ['contaminants', 'sushi', 'roundabouts'],
		location: 'Antartica',
		gender: 'm',
		victims: 24,
			
	}

	{
		name: 'Moe Money',
		hair_color: 'Black',
		eye_color: 'Yellow',
		dob: Date,
		loves: ['fencing', 'abandoned buildings', 'doorknobs'],
		location: 'Stockton',
		gender: 'm',
		victims: 19,
	}

	{
		name: 'Kehl Bill',
		hair_color: 'Golden',
		eye_color: 'Black',
		dob: Date,
		loves: ['sword play', 'gardening', 'yellow'],
		location: 'Underworld',
		gender: 'f',
		victims: 2,
	}

	{
		name: 'Sola Vamp',
		hair_color: 'Blood Red',
		eye_color: 'White',
		dob: Date,
		loves: ['nothing'],
		location: 'Transylvania',
		gender: 'f',
		victims: 666,
	}
];

Vampire.create(newVampires, (err, newVampire) => {
	if (err) {
		console.log(`Error adding new vampires: ${err}`);
	}
	console.log("Succesfully added new vampires");
	process.exit();
});
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
