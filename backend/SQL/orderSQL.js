const orderSQL = {
    getOrders: (customer_id) => `select DONHANG.MaDon as id, 
	Ngay as checkout_date, 
		concat(NVHoTenDem, " ", NVTen) as employee_name, 
			sum(SoLuong) as product_count, sum(SoLuong * Gia)*(100-GiamGia)/100 as total_price
	from DONHANG, NHANVIEN, BAOGOM,THUCPHAM,KHUYENMAI,THUNGAN
	where KH_SDT = "${customer_id}" and BAOGOM.MaDon = DONHANG.MaDon and MaNV = MaTN
    group by DONHANG.MaDon`,
    
    getOrderDetails: (id) => `select * from DONHANG, BAOGOM, THUCPHAM
	where BAOGOM.MaHH = THUCPHAM.MaHH
		and DONHANG.MaDon = "${id}"
		and DONHANG.MaDon = BAOGOM.MaDon;`
}

module.exports = orderSQL;