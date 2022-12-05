/*----------- Khach hang ----------------*/
INSERT INTO KHACHHANG VALUES ('Nguyen Van','An', 0, 'M', '1993', '0908070605');
INSERT INTO KHACHHANG VALUES ('Tran Thi','Binh', 200, 'F', '1994', '0908070615');
INSERT INTO KHACHHANG VALUES ('Hoang Van','Chien', 500, 'M', '1995', '0918070605');
INSERT INTO KHACHHANG VALUES ('Ngo Ngoc','Linh', 1000, 'F', '1996', '0908170605');
INSERT INTO KHACHHANG VALUES ('Pham Van Tam','Nhu', 2000, 'M', '1993', '0908171615');
INSERT INTO KHACHHANG VALUES ('Do Anh','Thu', 2500, 'F', '1994', '0918170615');
/*----------- QUAN ----------------*/
INSERT INTO QUAN VALUES ('CN01','QL01', 'Quan 1 HCM');
INSERT INTO QUAN VALUES ('CN02','QL02', 'Quan 2 HCM');
INSERT INTO QUAN VALUES ('CN03','QL03', 'Quan 3 HCM');
INSERT INTO QUAN VALUES ('CN04','QL04', 'Quan 4 HCM');
INSERT INTO QUAN VALUES ('CN05','QL05', 'Quan 5 HCM');
INSERT INTO QUAN VALUES ('CN06','QL06', 'Quan 6 HCM');
/*----------- NHAN VIEN ----------------*/
INSERT INTO NHANVIEN VALUES ('F', 'Tran', 'Thu','8','1994','0982604036','F','10000000','0','CN01','NV01','010203040501');
INSERT INTO NHANVIEN VALUES ('M', 'Nguyen', 'Nam','8','1995','1810070804','F','10000000','0','CN02','NV02','010203040502');
INSERT INTO NHANVIEN VALUES ('F', 'Huynh', 'Linh','8','1996','1810070803','F','10000000','0','CN03','NV03','010203040503');
INSERT INTO NHANVIEN VALUES ('M', 'Ngo', 'Tuan','8','1997','1810070802','F','10000000','0','CN04','NV04','010203040504');
INSERT INTO NHANVIEN VALUES ('F', 'Doan', 'Nhi','8','1998','1810070801','F','10000000','0','CN05','NV05','010203040505');
INSERT INTO NHANVIEN VALUES ('M', 'Le', 'Tai','8','1999','0982604037','P','0','10000','CN06','NV06','010203040506');

INSERT INTO NHANVIEN VALUES ('F', 'Tran', 'Ngoc','8','1990','0982604030','F','20000000','0','CN01','QL01','123456789001');
INSERT INTO NHANVIEN VALUES ('M', 'Nguyen', 'Duc','8','1991','1810070814','F','20000000','0','CN02','QL02','123456789002');
INSERT INTO NHANVIEN VALUES ('F', 'Huynh', 'Van','8','1992','1810070813','F','20000000','0','CN03','QL03','123456789003');
INSERT INTO NHANVIEN VALUES ('M', 'Ngo', 'Minh','8','1990','1810070812','F','20000000','0','CN04','QL04','123456789004');
INSERT INTO NHANVIEN VALUES ('F', 'Doan', 'Linh','8','1991','1810070811','F','20000000','0','CN05','QL05','123456789005');
INSERT INTO NHANVIEN VALUES ('M', 'Le', 'Trung','8','1989','0982604047','F','20000000','0','CN06','QL06','123456789006');

INSERT INTO NHANVIEN VALUES ('F', 'Tran', 'Thu','8','1994','0982604032','F','12000000','0','CN01','TN01','987654321001');
INSERT INTO NHANVIEN VALUES ('M', 'Nguyen', 'Nam','8','1995','1810070824','F','12000000','0','CN02','TN02','987654321002');
INSERT INTO NHANVIEN VALUES ('F', 'Huynh', 'Linh','8','1996','1810070823','F','12000000','0','CN03','TN03','987654321003');
INSERT INTO NHANVIEN VALUES ('M', 'Ngo', 'Tuan','8','1997','1810070822','F','12000000','0','CN04','TN04','987654321004');
INSERT INTO NHANVIEN VALUES ('F', 'Doan', 'Nhi','8','1998','1810070821','F','12000000','0','CN05','TN05','987654321005');
INSERT INTO NHANVIEN VALUES ('M', 'Le', 'Tai','8','1999','0982604057','F','12000000','0','CN06','TN06','987654321006');
/*-----------SDT NHAN VIEN ----------------*/
INSERT INTO NV_SDT VALUES ('NV01','0704654675');
INSERT INTO NV_SDT VALUES ('NV02','0704654674');
INSERT INTO NV_SDT VALUES ('NV03','0704654673');
INSERT INTO NV_SDT VALUES ('NV04','0704654672');
INSERT INTO NV_SDT VALUES ('NV05','0704654671');
INSERT INTO NV_SDT VALUES ('NV06','0704654670');

INSERT INTO NV_SDT VALUES ('QL01','0704651223');
INSERT INTO NV_SDT VALUES ('QL02','0704651224');
INSERT INTO NV_SDT VALUES ('QL03','0704651225');
INSERT INTO NV_SDT VALUES ('QL04','0704651226');
INSERT INTO NV_SDT VALUES ('QL05','0704651227');
INSERT INTO NV_SDT VALUES ('QL06','0704651228');

INSERT INTO NV_SDT VALUES ('TN01','0704656543');
INSERT INTO NV_SDT VALUES ('TN02','0704656544');
INSERT INTO NV_SDT VALUES ('TN03','0704656545');
INSERT INTO NV_SDT VALUES ('TN04','0704656546');
INSERT INTO NV_SDT VALUES ('TN05','0704656547');
INSERT INTO NV_SDT VALUES ('TN06','0704656548');
/*-----------THU NGAN----------------*/
INSERT INTO THUNGAN VALUES ('TN01','1','30000');
INSERT INTO THUNGAN VALUES ('TN02','1','60000');
INSERT INTO THUNGAN VALUES ('TN03','1','90000');
INSERT INTO THUNGAN VALUES ('TN04','1','120000');
INSERT INTO THUNGAN VALUES ('TN05','1','150000');
INSERT INTO THUNGAN VALUES ('TN06','1','180000');
/*-----------QUAN LY----------------*/
INSERT INTO QUANLY VALUES ('QL01');
INSERT INTO QUANLY VALUES ('QL02');
INSERT INTO QUANLY VALUES ('QL03');
INSERT INTO QUANLY VALUES ('QL04');
INSERT INTO QUANLY VALUES ('QL05');
INSERT INTO QUANLY VALUES ('QL06');
/*----------- DON HANG ----------------*/
INSERT INTO DONHANG VALUES ('0101220001',10,'2022-01-01','TN01','Tien mat','0908070605');
INSERT INTO DONHANG VALUES ('0101220002',20,'2022-01-01','TN02','Chuyen khoan','0908070615');
INSERT INTO DONHANG VALUES ('0101220003',30,'2022-01-01','TN03','Momo','0918070605');
INSERT INTO DONHANG VALUES ('0101220004',40,'2022-01-01','TN04','Tien mat','0908170605');
INSERT INTO DONHANG VALUES ('0101220005',50,'2022-01-01','TN05','The ATM','0908171615');
INSERT INTO DONHANG VALUES ('0101220006',60,'2022-01-01','TN06','Chuyen khoan','0918170615');
/*----------- THUC PHAM ----------------*/
INSERT INTO THUCPHAM VALUES ('TP01', 'Ca Phe Da','30000',NULL,'2022-01-01',NULL,'300');
INSERT INTO THUCPHAM VALUES ('TP02', 'Matcha Chanh Day','60000',NULL,'2022-01-01',NULL,'500');
INSERT INTO THUCPHAM VALUES ('TP03', 'Bac siu','30000',NULL,'2022-01-01',NULL,'300');
INSERT INTO THUCPHAM VALUES ('TP04', 'Ca Phe Sua Caramen','40000',NULL,'2022-01-01',NULL,'400');
INSERT INTO THUCPHAM VALUES ('TP05', 'Americano','50000',NULL,'2022-01-01',NULL,'400');
INSERT INTO THUCPHAM VALUES ('TP06', 'Latte','45000',NULL,'2022-01-01',NULL,'350');

/*-----------KHUYEN MAI----------------*/
INSERT INTO KHUYENMAI VALUES('0101220001','KM001','2022-12-31','Giam 5%','5');
INSERT INTO KHUYENMAI VALUES('0101220002','KM002','2022-01-01','Giam 5%','5');
INSERT INTO KHUYENMAI VALUES('0101220003','KM003','2022-01-01','Giam 5%','5');
INSERT INTO KHUYENMAI VALUES('0101220004','KM004','2022-01-01','Giam 10%','10');
INSERT INTO KHUYENMAI VALUES('0101220005','KM005','2022-01-01','Giam 10%','10');
INSERT INTO KHUYENMAI VALUES('0101220006','KM006','2022-01-01','Giam 10%','10');
/*-----------CHUNG CHI QUAN LY----------------*/
INSERT INTO QUANLY_CHUNGCHI VALUES ('QL01','Chung Chi Quan Ly Cap 1');
INSERT INTO QUANLY_CHUNGCHI VALUES ('QL02','Chung Chi Quan Ly Cap 2');
INSERT INTO QUANLY_CHUNGCHI VALUES ('QL03','Chung Chi Quan Ly Cap 1');
INSERT INTO QUANLY_CHUNGCHI VALUES ('QL04','Chung Chi Quan Ly Cap 1');
INSERT INTO QUANLY_CHUNGCHI VALUES ('QL05','Chung Chi Quan Ly Cap 2');
INSERT INTO QUANLY_CHUNGCHI VALUES ('QL06','Chung Chi Quan Ly Cap 1');
/*----------DANG KY----------------*/
INSERT INTO DANGKY VALUES ('TN01','0908070605');
INSERT INTO DANGKY VALUES ('TN02','0908070615');
INSERT INTO DANGKY VALUES ('TN03','0918070605');
INSERT INTO DANGKY VALUES ('TN04','0908170605');
INSERT INTO DANGKY VALUES ('TN05','0908171615');
INSERT INTO DANGKY VALUES ('TN06','0918170615');
/*----------MO TA THUC PHAM----------------*/
INSERT INTO TP_MOTA VALUES ('TP01','Ca Phe Da: duoc lam tu ca phe cao cap, pha phin. Dung tich: 300ml');
INSERT INTO TP_MOTA VALUES ('TP02','Matcha Chanh Day: duoc lam tu chanh day tuoi. Dung tich: 400ml');
INSERT INTO TP_MOTA VALUES ('TP03','Bac siu: duoc lam tu ca phe cao cap va sua dam dac. Dung tich: 300ml');
INSERT INTO TP_MOTA VALUES ('TP04','Ca Phe Sua Caramen: duoc lam tu ca phe cao cap, kem sua va caramen. Dung tich: 400ml');
INSERT INTO TP_MOTA VALUES ('TP05','Americano: duoc lam tu ca phe cao cap. Dung tich: 400ml');
INSERT INTO TP_MOTA VALUES ('TP06','Latte: duoc lam tu ca phe cao cap. Dung tich: 350ml');
/*----------BAO GOM----------------*/
INSERT INTO BAOGOM VALUES ('0101220001','TP01',1);
INSERT INTO BAOGOM VALUES ('0101220002','TP02',1);
INSERT INTO BAOGOM VALUES ('0101220003','TP03',3);
INSERT INTO BAOGOM VALUES ('0101220004','TP04',3);
INSERT INTO BAOGOM VALUES ('0101220005','TP05',3);
INSERT INTO BAOGOM VALUES ('0101220006','TP06',4);
/*---------- USER -----------*/
insert into user(id, username, password, role, associated_id)
	values ("b3d005f7-a2b9-4558-874f-d6cc0afcbf6f", "khachhang", "$2a$10$7OlLRCrkXHcThpN9K9MRHeDMmxjk25ZAb8r6ogxA2WUBsGzeZQaxO", "Customer", '0908070605');
insert into user(id, username, password, role, associated_id)
	values ("c3fa0f3a-3e1d-4855-aba5-e4dda273ddda", "nhanvien", "$2a$10$I0R3MTWFhP.iEBpvD0NamO3QwXRDI89EoHfG77K1vOiooR.1HbzAG", "Employee", 'NV03');
insert into user(id, username, password, role, associated_id)
	values ("b899070c-388a-4db5-bdaf-5dd05dfd7afb", "quanly", "$2a$10$mTlOfDVHcsyLzRdLy3i39OnofeQ0G1qizaGxoIcogGxyfrrnFiZwm", "Manager", 'QL01');
/*------------ Thong bao thong tin -------*/
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('001','2020-10-09','Bạn đã là thành viên chính thức của chuỗi siêu thị!!!', 'Customer');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('002','2020-11-29','Điểm của bạn đã được thay đổi!!!', 'Customer');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('003','2021-01-01','Chúc mừng năm mới!!!', 'Employee');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('004','2021-01-22','Khuyến mãi tết!!!', 'Customer');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('005','2021-01-29','Hướng dẫn đăng kí khách hàng thành viên!!!', 'Customer');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('006','2021-03-21','Khuyến mãi nhân tuần lễ...', 'Employee');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('007','2021-07-21','Hướng dẫn mua hàng online!!!', 'Customer');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('008','2021-01-17','Khuyen mai trong dip dich!!', 'Customer');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('009','2021-08-15','Tuyên truyền phòng chống dịch.', 'Employee');
INSERT INTO thong_bao_thong_tin(Ma_thong_bao, Ngay_thong_bao, Noi_dung, Nguoi_thong_bao) VALUES ('010','2021-10-20','Mua hàng an toàn!!!', 'Employee');
