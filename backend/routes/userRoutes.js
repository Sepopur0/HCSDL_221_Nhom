const router = require("express").Router()
const connection = require("../dbConfig")
const bcrypt = require("bcryptjs")
const userSQL = require("../SQL/userSQL")
const authMiddleware = require("../middleware/authMiddleware")
const jwt = require("jsonwebtoken")
const { v4: uuidv4 } = require("uuid")

router.post("/login", (req, res) => {
	const { username, password } = req.body

	if (!username || !password) res.status(400).send("Missing fields")

	connection.query(userSQL.getPassword(username), function (
		error,
		results,
		fields
	) {
		if (error) throw error

		if (!results[0].password) res.status(400).send("Invalid username")

		if (bcrypt.compareSync(password, results[0].password)) {
			const token = jwt.sign(
				{ id: results[0].id },
				process.env.JWT_SECRET,
				{ expiresIn: "1d" }
			)

			res.json({
				token,
			})
		} else {
			res.status(400).send("Wrong password")
		}
	})
})

router.get("/role", authMiddleware, (req, res) => {
	res.json({
		role: req.role,
	})
})

router.get("/info", authMiddleware, (req, res) => {
	if (req.role === "Customer") {
		connection.query(userSQL.getCustomerInfo(req.associated_id), function (
			error,
			results,
			fields
		) {
			if (error) throw error

			res.json({
				name: results[0].name,
				gioitinh: result[0].GioiTinh,
				role: req.role,
				point: results[0].DiemTL,
				year: result[0].NamSinh,
				id: results[0].sdt,
			})
		})
	} else if (req.role === "Employee") {
		connection.query(userSQL.getEmployeeInfo(req.associated_id), function (
			error,
			secondResults,
			fields
		) {
			if (error) throw error

			res.json({
				name: secondResults[0].name,
				role: req.role,
				worktime: secondResults[0].ThoiGianLam,
				CCCD: secondResults[0].cccd,
				bank_account: secondResults[0].bank_account
			})
		})
	} else if (req.role === "Manager") {
		connection.query(userSQL.getManagerInfo(req.associated_id), function (
			error,
			secondResults,
			fields
		) {
			if (error) throw error

			res.json({
				name: secondResults[0].name,
				role: req.role,
				// total_employee: secondResults[0].total_employee,
				chungchi: secondResults[0].ChungChi,
				macn: secondResults[0].macn,
			})
		})
	} else {
		res.status(500).send("User not exists.")
	}
})

router.get("/", authMiddleware, (req, res) => {
	if (req.role !== "Employee" && req.role !== "Manager")
		res.status(401).send("Invalid permission")
	else {
		connection.query(userSQL.getAllCustomer(), function (
			error,
			results,
			fields
		) {
			if (error) throw error

			res.json(results)
		})
	}
})

router.get("/:id", authMiddleware, (req, res) => {
	connection.query(userSQL.getCustomer(req.params.id), function (
		error,
		results,
		fields
	) {
		if (error) throw error

		res.json({
			id: results[0].sdt,
			name: results[0].name,
			year: results[0].NamSinh,
			gioitinh: results[0].GioiTinh,
			point: results[0].DiemTL
		})
	})
})

router.post("/", authMiddleware, (req, res) => {
	if (req.role !== "Employee") res.status(401).send("Invalid permission")
	else {
		const {
			username,
			password,
			fname,
			lname,
			sex,
			year,
			phonenumber
		} = req.body
		const hashedPassword = bcrypt.hashSync(password, 10)
		const customer_sdt =phonenumber

		connection.query(
			userSQL.newCustomer(
				fname,
				lname,
				sex,
				year,
				customer_sdt,
			),
			function (error, results, fields) {
				if (error) {
					res.status(500).send(error.message)
				} else {

					connection.query(
						userSQL.newUser(
							uuidv4(),
							username,
							hashedPassword,
							customer_sdt,
						),
						function (error, results, fields) {
							if (error) {
								res.status(500).send(error.message)
							} else res.status(201).send("Success")
						}
					)
				}
			}
		)
	}
})

router.put("/:id", authMiddleware, (req, res) => {
	if (req.role !== "Manager") {
		res.status(401).send("Invalid permission")
	} else {
		const { fname, lname, sex, year } = req.body
		const customer_sdt = req.params.id

		connection.query(
			userSQL.updateCustomer(
				fname,
				lname,
				sex,
				year,
				customer_sdt
			),
			function (error, results, fields) {
				if (error) throw error

				res.send("Success")
			}
		)
	}
})

module.exports = router
