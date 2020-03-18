const mongoose = require('mongoose');

const VampireSchema = new mongoose.Schema ({
	name: {
		type: String,
		required: true, 
	},
	hair_color: {
		type: String,
		default: "blonde",
	},
	eye_color: String,
	dob: Date,
	loves: [String],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: 0, 
	},
	title: String,
});

const Vampire = mongoose.model('Vampire', VampireSchema); 

module.exports = Vampire; 
