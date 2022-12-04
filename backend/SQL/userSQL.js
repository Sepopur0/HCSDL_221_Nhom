const userSQL = {
	getCustomer: (SDT) =>
		`select * from KHACHHANG where SDT = "${SDT}"`,

	getUser: (id) =>
		`select id, role, associated_id from user where id = "${id}";`,

	getPassword: (username) =>
		`select id, password from user where username = "${username}";`,

	getRole: (id) => `select role from user where id = "${id}";`,

	getCustomerInfo: (
		sdt
	) => `select concat(KHHoTenDem, " ", KHTen) as name,GioiTinh ,NamSinh , DiemTL, SDT as sdt, role
	from KHACHHANG,USER
	where SDT = "${sdt}" and associated_id=SDT;`,

	updateCustomer: (
		fname,
		lname,
		sex,
		year,
		sdt
	) => `update KHACHHANG 
	set KHHoTenDem = "${fname}", KHTen = "${lname}", GioiTinh = "${sex}", NamSinh = "${year}"
	where SDT = "${sdt}"`,

	getEmployeeInfo: (
		id
	) => `select concat(NHANVIEN.NVHoTenDem, " ", NHANVIEN.NVTen) as name, CCCD as cccd,
	ThoiGianLam as worktime, TaiKhoanNH as bank_account, role
	from NHANVIEN,USER
	where MaNV="${id}" and associated_id=MaNV;`,

	addPhonenumber: (MaNV, phonenumber) =>
		`insert into NV_SDT values ("${MaNV}", "${phonenumber}");`,
	getCashierInfo: (
		id
	) => `select concat(NHANVIEN.NVHoTenDem, " ", NHANVIEN.NVTen) as name, CCCD as cccd,
		SoGiaoDich as order_count,
		count(question_id) as new_question_count, role
	from NHANVIEN left join QUESTION on MaTN = thungan_id, KHACHHANG,USER
	where MaTN = "${id}" and MaNV = MaTN and associated_id=MaTN
    group by MaTN;`,

	getManagerInfo: (
		id
	) => `select concat(NHANVIEN.NVHoTenDem, " ", NHANVIEN.NVTen) as name, Quan.MaCN as macn, ChungChi,role
	from NHANVIEN, QUANLY join QUANLY_CHUNGCHI on QUANLY.MaQL=QUANLY_CHUNGCHI.MaQL,QUAN,USER
	where QUANLY.MaQL = "${id}" and QUANLY.MaQL=NHANVIEN.MaNV and QUANLY.MaQL=QUAN.MaQL and associated_id=MaQL;`,

	newCustomer: (
		fname,
		lname,
		sex,
		year,
		sdt
	) => `INSERT INTO KHACHHANG
	VALUES ('${fname}','${lname}','0','${sex}''${year}','${sdt}');`,

	newUser: (id, username, password, customer_sdt) =>
		`insert into user(id, username, password, role, associated_id) values ("${id}", "${username}", "${password}", "Customer", "${customer_sdt}")`,

	// addPhonenumber: (customer_sdt, phonenumber) =>
	// 	`insert into sdt_khach_hang values ("${customer_id}", "${phonenumber}");`,

	getAllCustomer: () =>
		`select SDT, concat(KHHoTenDem, " ", KHTen) as name,GioiTinh ,NamSinh , DiemTL, SDT as sdt from KHACHHANG;`,
}

module.exports = userSQL
