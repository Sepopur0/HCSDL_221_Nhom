const notificationSQL = {
	getNotification: (
		id
	) => `select Noi_dung as notification from thong_bao_thong_tin 
    where Ma_khach_hang = "${id}"`,

	create: (
		id,
		customer_id,
		employee_id,
		date,
		content
	) => `call createNotification("${customer_id}", "${employee_id}", "${id}", "${date}", "${content}");`,
}

module.exports = notificationSQL
