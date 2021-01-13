var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var URLSlugs = require('mongoose-url-slugs');
const mongoosePaginate = require('mongoose-paginate-v2');

// set up a mongoose model
module.exports = mongoose.model('Post', new Schema({
    userId: mongoose.Schema.Types.ObjectId,
	title: String,
	content: String,
	instructions: [
		{
			step: Number,
			instruction: String,
		}
	],
	createdBy: String
}).plugin(URLSlugs('title'))
.plugin(mongoosePaginate)
);