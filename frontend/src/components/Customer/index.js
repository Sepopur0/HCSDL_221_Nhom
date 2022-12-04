import axios from "axios"
import React, { useEffect, useState } from "react"
import { Form } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"

import styles from "./Customer.module.scss"

export default function Customer() {
	const [user, setUser] = useState(undefined)
	const { user_id } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (localStorage.getItem("token")) {
			axios
				.get(`/api/users/${user_id}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
				})
				.then((res) => setUser(res.data))
		} else navigate("/")
	}, [])

	return (
		<div className={styles.container}>
			<p className={styles.heading}>THÔNG TIN KHÁCH HÀNG</p>

			{user ? (
				<Form className={styles.form}>
					<div className={styles.twoFields}>
						<Form.Group className="mb-3">
							<Form.Label>Họ và tên</Form.Label>
							<Form.Control
								type="text"
								name="name"
								value={user.name}
								disabled
							/>
						</Form.Group>
					</div>

					<Form.Group className="mb-3">
						<Form.Label>Năm sinh</Form.Label>
						<Form.Control
							type="text"
							name="year"
							value={user.year}
							disabled
						/>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Giới tính</Form.Label>
						<Form.Control
							type="text"
							name="sex"
							value={user.gioitinh}
							disabled
						/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Điểm tích lũy</Form.Label>
						<Form.Control
							type="text"
							name="point"
							value={user.point}
							disabled
						/>
					</Form.Group>
				</Form>
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}
