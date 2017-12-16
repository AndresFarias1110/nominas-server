/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: (req, res) => {

		Empleados.findOne(req.body).exec( (err, found) => {
			if(err) res.json(err);
			if(found){
				res.json(found);
			} else {
				res.status(404).json({ msj: "Users not found"});
			}
		});

	//	res.json({ data: "success" })
	},

	create: (req, res) => {
		console.log(req.body);
		Empleados.create({
			 nombre: req.body.nombre,
			  password: req.body.password,
			  noempleado: parseInt(req.body.noempleado)
		   }).exec((err, created) => {
			if(err)console.log(err);
			res.json(created);
		})
	},

	getFiles: (req, res) => {
		Empleados.findOne({ id: req.params.id }).populate('nominas', { sort: 'fecha DESC' }).exec( (err, nominas)=> {
			if(err) res.json(err);
			res.json(nominas.nominas);
		})
	}
};
