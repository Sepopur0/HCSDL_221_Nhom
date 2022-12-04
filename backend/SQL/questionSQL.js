const questionSQL = {
	createCognito: (id, title, content) =>
		`insert into QUESTION(question_id, title, content) values ("${id}","${title}", "${content}");`,

	create: (id, title, content, customer_sdt) =>
		`insert into QUESTION(question_id, title, content, customer_sdt) values ("${id}","${title}", "${content}", "${customer_sdt}");`,

	getUnansweredQuestions: () =>
		`select question_id, title, content, KHHoTenDem as fname, KHTen as lname from QUESTION left join KHACHHANG on customer_sdt = SDT 
	where answer is null and thungan_id is null;`,

	getAnsweredQuestions: () =>
		`select question_id, title, content, answer from question where answer is not null;`,

	answerQuestion: (id, answer, employee_id) =>
		`update question set answer = "${answer}", thungan_id = "${employee_id}" where question_id = "${id}";`,
}

module.exports = questionSQL
