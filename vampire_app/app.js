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
		dob: new Date (1922, 2, 10),
		loves: ['contaminants', 'sushi', 'roundabouts'],
		location: 'Antartica',
		gender: 'm',
		victims: 24,
			
	}

	{
		name: 'Moe Money',
		hair_color: 'Black',
		eye_color: 'Yellow',
		dob: new Date (1492, 1, 1),
		loves: ['fencing', 'abandoned buildings', 'doorknobs'],
		location: 'Stockton',
		gender: 'm',
		victims: 19,
	}

	{
		name: 'Kehl Bill',
		hair_color: 'Golden',
		eye_color: 'Black',
		dob: new Date (1556, 6, 6),
		loves: ['sword play', 'gardening', 'yellow'],
		location: 'Underworld',
		gender: 'f',
		victims: 2,
	}

	{
		name: 'Sola Vamp',
		hair_color: 'Blood Red',
		eye_color: 'White',
		dob: new Date (1970, 4, 5),
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
// Find all the vampires that that are females
Vampire.find({gender: 'f'}, (err, femaleVampires) => {
	if (err) {
		console.log("Error");
		mongoose.connection.close();
	}
	console.log(`Found all the Female Vampires: ${femaleVampires}`);
	mongoose.connection.close();
});
// have greater than 500 victims
Vampire.find({victims: {$gt: 500}}, (err, manyVictimsVampires) => {
	if (err) {
		console.log(`Error: ${err}`);
		mongoose.connection.close();
	}
	console.log(`Found vampires with 500 plus victims: ${manyVictimsVampires}`);
	mongoose.connection.close();
});

// have fewer than or equal to 150 victims
Vampire.find({victims: {$lte: 150}}, (err, lessVictimsVampires) => {
	if (err) {
		console.log(`Error: ${err}`);
		mongoose.connection.close();
	}
	console.log(`Found vampires with less than 150 victims: ${lessVictimsVampires}`);
	mongoose.connection.close();
});

// have a victim count is not equal to 210234
Vampire.find({victims: {$ne: 210234}}, (err, mostVampires) => {
	if (err) {
		console.log(`Error: ${err}`);
		mongoose.connection.close();
	}
	console.log(`Found the vampires without a victim count of 210234: ${mostVampires}`);
	mongoose.connection.close();
});

// have greater than 150 AND fewer than 500 victims
Vampire.fin({victims: {$gte: 150, $lte: 500}}, (err, betweenVampires) => {
	if (err) {
		console.log(`Error: ${err}`);
		mongoose.connection.close();
	}
	console.log(`Found the vampires with victims between 150 and 500 victims: ${betweenVampires}`);
	mongoose.connection.close();
});

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
