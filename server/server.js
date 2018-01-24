// Requires (with CommonJS)
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

// Middleware 
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var lions = [];
var id = 0;

// Get all lions
app.get('/lions', (req, res) => {
	res.json(lions)	
})

// Get a single lion
app.get('/lions/:id', (req, res) => {
	var lion = _.find(lions, {
		id: req.params.id
	})
	res.json(lion || {})
})

// Add a lion
app.post('/lions', (req, res) => {
	var lion = req.body
	id++
	lion.id = id + ''
	lions.push(lion)
	res.json(lion)
})

// Update a lion
app.put('/lions/:id', (req, res) => {
	var update = req.body
	update.id ? delete update.id : undefined
	var lion = lions.findIndex(findLion)
	var updatedLion = lions.assign(lions[lion], update)
	res.json(updatedLion)
})

// Delete a lion
app.delete('/lions/:id', (req, res) => {
	var lion = lions.findIndex(findLion)
	var deleted = lions[lion]
	lions.splice(lions, 1)
	res.json(deleted)
})

app.listen(3000, (e) => {
	e ? console.log(e) : console.log('on port 3000');
});
// ------------------------------------------------------------------ Function Declarations ------------------------------------------------------------------ 

function findLion(element) {
	var id = req.params.id
	return lions[element].id === id
}
