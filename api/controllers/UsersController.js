/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: (req, res) => {
		console.log(req.body);

		res.json({ data: "success" })
	},

	create: (req, res) => {
		console.log(req.body);
		Empleados.create({
			 nombre: req.body.nombre,
			  password: req.body.password,
			  noempleado: parseInt(req.body.noempleado)
		   }).exec((err, created) => {
			if(err)console.log(err);;

			res.json(created);

		})
	}
};
