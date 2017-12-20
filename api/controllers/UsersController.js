/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: (req, res) => {
		Empleados.query('SELECT * FROM empleados WHERE empleados.rfc = ? AND empleados.password = ?', [ req.body.rfc, req.body.password ], (err, found) => {
			if(err) {
				console.log(err); res.json(err)
			}

			if(found){
				console.log(JSON.parse(JSON.stringify(found[0])));
				let rsjson = JSON.parse(JSON.stringify(found[0]));
				res.json(rsjson);
				// res.json(JSON.parse(JSON.stringify(found[0])));
			} else {
				res.status(404).json({ msj: "Users not found"});
			}
		})
		// Empleados.findOne(req.body).exec( (err, found) => {
		// 	if(err) res.json(err);
		// 	if(found){
		// 		console.log(found);
		// 		res.json(found);
		// 	} else {
		// 		res.status(404).json({ msj: "Users not found"});
		// 	}
		// });

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
		console.log(req.params);

		Nominas.query('SELECT * FROM nominas WHERE nominas.codigo = ? ORDER BY fecha DESC', [req.params.codigo], (err, rawRs) => {
			if (err) {
				console.log(err)
				res.json(err)
			}
			res.json(rawRs)
		});

		// Empleados.findOne({ id : req.params.id }).populate('nominas', { sort: 'fecha DESC' }).exec( (err, empleado)=> {
		// 	if(err) res.json(err);
		// 	res.json(empleado.nominas);
		// })
	}
};
