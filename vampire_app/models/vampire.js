const Schema = mongoose.Schema;

const VampireSchema = new Schema ({
	name: {
		type: String,
		required: true, 
	}
	hair_color: {
		type: String,
		default: "blonde",
	}
	eye_color: String,
	dob: { type: Date, default: Date.now },
	loves: [String],
	location: String,
	gender: String,
	victims: {
		type: Number,
		min: 0, 
	}
});

const Vampire = mongoose.model('Vampire', VampireSchema); 

module.exports = Vampire; 
