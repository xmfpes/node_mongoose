var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-incerment');

var ProductsSchema = new Schema({
    name : String,
    price : Number,
    description : String,
    create_at : {
        type : Date,
        default : Date.now()
    }
});

ProductsSchema.plugin(autoIncrement.plugin, {model : 'products', filed : 'id', startAt : 1});
mongoose.model('products', ProductsSchema);