// 1. Require Mongoose
const mongoose = require('mongoose');
// 2. Require your Model
const Vampire = require('./models/vampire');
console.log('Vampire Data =', Vampire);
// 3. Require your extra data source
const vampireData = require('./populateVampires');
// 4. Connect your database
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/vampires';
mongoose.connect(DB_URI, {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true
});

  .then(() => console.log('MongoDB connected succesfully'))
  .catch((
  	) => console.log('MongoDB did not connect',err));
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
// Vampire.insertMany(vampireData, (err, newVampires) => {
// 	if (err){
// 		console.log("Error creating Vampire data: ", err);
// 		process.exit();
// 	}
//   console.log(`Succesfully created ${newVampires.length} vampires.`);
// });
// // ### Add some new vampire data
// const newVampires = [
// 	{
// 		name: 'Patient Zero',
// 		hair_color: 'Grey',
// 		eye_color: 'Red',
// 		dob: new Date (1922, 2, 10, 10, 42),
// 		loves: ['contaminants', 'sushi', 'roundabouts'],
// 		location: 'Antartica',
// 		gender: 'm',
// 		victims: 24,
// 		title: 'The undead',
			
// 	},

// 	{
// 		name: 'Moe Money',
// 		hair_color: 'Black',
// 		eye_color: 'Yellow',
// 		dob: new Date (1492, 1, 1, 10, 42),
// 		loves: ['fencing', 'abandoned buildings', 'doorknobs'],
// 		location: 'Stockton',
// 		gender: 'm',
// 		victims: 19,
// 		title: 'The G', 
// 	},

// 	{
// 		name: 'Kehl Bill',
// 		hair_color: 'Golden',
// 		eye_color: 'Black',
// 		dob: new Date (1556, 6, 6, 8, 30),
// 		loves: ['sword play', 'gardening', 'yellow'],
// 		location: 'Underworld',
// 		gender: 'f',
// 		victims: 2,
// 		title: 'The most precious', 
// 	},

// 	{
// 		name: 'Sola Vamp',
// 		hair_color: 'Blood Red',
// 		eye_color: 'White',
// 		dob: new Date (1970, 4, 5, 8, 30),
// 		loves: ['nothing'],
// 		location: 'Transylvania',
// 		gender: 'f',
// 		victims: 666,
// 		title: 'The Evil', 
// 	},
// ];

// Vampire.create(newVampires, (err, newVampire) => {
// 	if (err) {
// 		console.log(`Error adding new vampires: ${err}`);
// 	}
// 	console.log("Succesfully added new vampires");
// 	process.exit();
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Find all the vampires that that are females
// Vampire.find({gender: 'f'}, (err, femaleVampires) => {
// 	if (err) {
// 		console.log("Error");
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found all the Female Vampires: ${femaleVampires}`);
// 	mongoose.connection.close();
// });
// // have greater than 500 victims
// Vampire.find({victims: {$gt: 500}}, (err, manyVictimsVampires) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found vampires with 500 plus victims: ${manyVictimsVampires}`);
// 	mongoose.connection.close();
// });

// // have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}}, (err, lessVictimsVampires) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found vampires with less than 150 victims: ${lessVictimsVampires}`);
// 	mongoose.connection.close();
// });

// // have a victim count is not equal to 210234
// Vampire.find({victims: {$ne: 210234}}, (err, mostVampires) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found the vampires without a victim count of 210234: ${mostVampires}`);
// 	mongoose.connection.close();
// });

// // have greater than 150 AND fewer than 500 victims
// Vampire.find({victims: {$gte: 150, $lte: 500}}, (err, betweenVampires) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found the vampires with victims between 150 and 500 victims: ${betweenVampires}`);
// 	mongoose.connection.close();
// });

/////////////////////////////////////////////////
// ### Select by exists or does not exist
// have a title property
// Vampire.find({title: {$exists: true}}, (err, titleVampire) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found all the vampires with a title: `, titleVampire);
// 	mongoose.connection.close();
// });
// //do not have a victims property
// Vampire.find({victims: {$exists: false}}, (err, noVictimsVampire) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found all vampires with no victim property: `, noVictimsVampire);
// 	mongoose.connection.close();
// });

// //have a title AND no victims

// Vampire.find({title: {$exists: true}, victims:{$exists: false}}, (err, titleNoVictimVampire) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found all the vampires with a title and no victims:` , titleNoVictimVampire);
// 	mongoose.connection.close();
// });

// //have victims AND the victims they have are greater than 1000
// Vampire.find({victims: {$exists: true}, victims: {$gt: 1000}}, (err, foundVampire) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found all the vampires with greater than 100 victims:` , foundVampire);
// 	mongoose.connection.close();
// });

// /////////////////////////////////////////////////
// // ### Select with OR
// // are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({location: {$in: ["New York, New York, US", "New Orleans, Louisiana, US"]}}, (err, nynolaVampires) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found vampires from NY and NOLA:`, nynolaVampires);
// 	mongoose.connection.close();
// });

// // love brooding or being tragic
// Vampire.find({love: {$in: ["brooding", "being tragic"]}}, (err, loveVampire) => {
// 	if (err) {
// 		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found vampies that love brooding or being tragic:`, loveVampire);
// 	mongoose.connection.close();
// });

// // have more than 1000 victims or love marshmallows
// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: "marshmallows"}]}, (err, foundVampire) => {
//  	if(err){
//  		console.log(`Error: ${err}`);
// 		mongoose.connection.close();
// 	}
// 	console.log(`Found vampires who have more than 1000 victims or love marshmallows`,
// 		foundVampire);
//  	mongoose.connection.close();
//  });


// // have red hair or green eyes
//  Vampire.find({$or: [{hair_color: "red"}, {eye_color: "green"}]}, (err, foundVampire) => {
//  	if(err){
//  		console.log(`Error: ${err}`);
//  		mongoose.connection.close();
//  	}
//  	console.log(`Found vampires who have have red hair or green eyes: `, foundVampire);
//  	mongoose.connection.close();
//  });

/////////////////////////////////////////////////
//### Select objects that match one of several values
// love either frilly shirtsleeves or frilly collars
Vampire.find({$or: [{loves: "frilly shirtsleeves"}, {loves: "frilly collars"}]}, 
	(err, foundVampire) => {
		if (err) {
			console.log(`Error: ${err}`);
			mongoose.connection.close();
		}
		console.log(`Found vampires who love frilly shirtsleeves or frilly collars`, foundVampire);
		mongoose.connection.close();
	});
// love brooding
Vampire.find({Loves: "brooding"}, (err, foundVampire) => {
	if (err) {
		console.log(`Error: ${err}`);
		mongoose.connection.close();
	}
	console.log(`Found vampires who love brooding`, foundVampire);
	mongoose.connection.close();
});
// love at least one of the following: appearing innocent, trickery, lurking in rotting mansions, R&B music
Vampire.find({$or: [{loves: "appearing innocent"}, 
	{loves: "trickery"}, 
	{loves: "lurking in rotting mansions"}, 
	{loves: "R&B music"}]}, (err, foundVampire) => {
		if (err) {
			console.log(`Error: ${err}`);
			mongoose.connection.close();
		}
		console.log(`Found vampires who love appearing innocent, trickery, lurking in rotting mansions, or R&B music`, foundVampire);
		mongoose.connection.close();
	});
// love fancy cloaks but not if they also love either top hats or virgin blood * Hint-You will also have to use $nin *
Vampire.find({$and: [{loves:"fancy cloaks"}, 
	{loves:{$nin: ["virgin blood", "top hats"]} }]}, (err, foundVampire) => {
	if (err) {
		console.log(`Error: ${err}`);
		mongoose.connection.close();
	}
	console.log(`Found vampires who love fancy cloaks but not if they love top hats or virgin blood`, foundVampire);
	mongoose.connection.close();
});
/////////////////////////////////////////////////
//### Negative Selection
// love ribbons but do not have brown eyes
// are not from Rome
// do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]
// have not killed more than 200 people

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE
// Replace the vampire called 'Claudia' with a vampire called 'Eve'.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE
// Update 'Eve' to have a gender of 'm'
// Rename 'Eve's' name field to 'moniker'
// We now no longer want to categorize female gender as "f", but rather as fems. Update all females so that the they are of gender "fems".


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE
// Remove a single document wherein the hair_color is 'brown'
// We found out that the vampires with the blue eyes were just fakes! Let's remove all the vampires who have blue eyes from our database.

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
