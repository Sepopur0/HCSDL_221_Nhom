const init = `
create database if not exists COFFEE_MANAGEMENT;

use COFFEE_MANAGEMENT;

CREATE TABLE KHACHHANG (
	KHHoTenDem varchar(50) NOT NULL,
	KHTen varchar(20) NOT NULL,
	DiemTL int NULL,
	GioiTinh varchar(1) NOT NULL CHECK (GioiTinh = 'F' or GioiTinh = 'M'),
	NamSinh smallint NULL CHECK (2022- NamSinh>16),
	SDT varchar(10) NOT NULL,
	CONSTRAINT PK_KHACHHANG PRIMARY KEY (SDT)
);

CREATE TABLE QUAN (
	MaCN varchar(10) NOT NULL,
	MaQL varchar(10) NOT NULL,
	DiaChi varchar(100) NOT NULL,
	CONSTRAINT PK_MaCN PRIMARY KEY(MaCN)
);

CREATE TABLE DONHANG(
	MaDon varchar(10) NOT NULL,
	DiemThuong smallint NULL,
	Ngay datetime NOT NULL,
	MaTN varchar(10) NOT NULL,
	HinhThuc varchar(20) NOT NULL,
	KH_SDT varchar(10) NOT NULL,
	CONSTRAINT PK_DONHANG PRIMARY KEY(MaDon),
	CONSTRAINT FK_KH FOREIGN KEY (KH_SDT) REFERENCES KHACHHANG(SDT)
);

CREATE TABLE THUCPHAM (
	MaHH varchar(10) NOT NULL,
	Ten varchar(20) NOT NULL,
	Gia int NOT NULL,
	HSD datetime NULL,
	NSX datetime NOT NULL,
	KL smallint NULL,
	DT smallint NULL,
	CONSTRAINT PK_THUCPHAM PRIMARY KEY(MaHH)
);

CREATE TABLE NHANVIEN (
	GioiTinh varchar(1) NOT NULL CHECK (GioiTinh = 'F' or GioiTinh = 'M'),
	NVHoTenDem varchar(50) NOT NULL,
	NVTen varchar(20) NOT NULL,
	ThoiGianLam smallint NOT NULL,
	NamSinh smallint NOT NULL CHECK (2022- NamSinh >= 18),
	TaiKhoanNH varchar(20) NOT NULL,
	KieuNV varchar(1) NOT NULL CHECK (KieuNV='F' or KieuNV = 'P'),
	LuongThang int NULL,
	LuongGio int NULL,
	MaCN varchar(10) NOT NULL,
	MaNV varchar(10) NOT NULL,
	CCCD varchar(12) NOT NULL,
	CONSTRAINT PK_NHANVIEN PRIMARY KEY (MaNV),
	CONSTRAINT FK_MaCN FOREIGN KEY(MaCN) REFERENCES QUAN(MaCN)
);

CREATE TABLE NV_SDT(
	MaNV varchar(10) NOT NULL,
	NV_SDT varchar(10) NOT NULL,
	CONSTRAINT PK_NV_SDT PRIMARY KEY (MaNV,NV_SDT),
	CONSTRAINT FK_NV_SDT FOREIGN KEY(MaNV) REFERENCES NHANVIEN(MaNV)
);

CREATE TABLE KHUYENMAI (
	MaDon varchar(10),
	MaKM varchar(10),
	HSD datetime,
	NoiDung varchar(100),
	GiamGia int NOT NULL,
	CONSTRAINT PK_KHUYENMAI PRIMARY KEY (MaDon, MaKM),
	CONSTRAINT FK_MaDon FOREIGN KEY (MaDon) REFERENCES DONHANG(MaDon)
);

CREATE TABLE THUNGAN (
	MaTN varchar(10) NOT NULL,
	SoGiaodich int NOT NULL,
	SoTienGiaodich int NOT NULL,
	CONSTRAINT PK_THUNGAN PRIMARY KEY (MaTN),
	CONSTRAINT FK_THUNGAN FOREIGN KEY (MaTN) REFERENCES NHANVIEN(MaNV)
);

CREATE TABLE QUANLY (
	MaQL varchar(10) NOT NULL,
	CONSTRAINT PK_QUANLY PRIMARY KEY (MaQL),
	CONSTRAINT FK_QUANLY FOREIGN KEY (MaQL) REFERENCES NHANVIEN(MaNV)
);

CREATE TABLE QUANLY_CHUNGCHI (
	MaQL varchar(10) NOT NULL,
	ChungChi varchar(100) NOT NULL,
	CONSTRAINT PK_CHUNGCHI PRIMARY KEY (MaQL, ChungChi),
	CONSTRAINT FK_CHUNGCHI FOREIGN KEY (MaQL) REFERENCES QUANLY(MaQL)
);

ALTER TABLE DONHANG
ADD CONSTRAINT FK_THANHTOAN FOREIGN KEY (MaTN) REFERENCES THUNGAN(MaTN);

CREATE TABLE DANGKY (
	MaTN varchar(10) NOT NULL,
	KH_SDT varchar(10) NOT NULL,
	CONSTRAINT PK_DANGKY PRIMARY KEY (MaTN, KH_SDT),
	CONSTRAINT FK_DANNGKYTN FOREIGN KEY (MaTN) REFERENCES THUNGAN (MaTN),
	CONSTRAINT FK_DANGKYKH FOREIGN KEY (KH_SDT) REFERENCES KHACHHANG(SDT)
);

CREATE TABLE TP_MOTA (
	MaHH varchar(10) NOT NULL,
	MoTa varchar(100) NOT NULL,
	CONSTRAINT PK_MOTA PRIMARY KEY(MaHH,MoTa),
	CONSTRAINT FK_THUCPHAM FOREIGN KEY(MaHH) REFERENCES THUCPHAM(MaHH)
);

CREATE TABLE BAOGOM (
	MaDon varchar(10),
	MaHH varchar(10),
    SoLuong int NOT NULL,
	CONSTRAINT PK_BAOGOM PRIMARY KEY(MaDon,MaHH),
	CONSTRAINT FK_BAOGOM FOREIGN KEY(MaDon) REFERENCES DONHANG(MaDon),
	CONSTRAINT FK_HH FOREIGN KEY(MaHH) REFERENCES THUCPHAM(MaHH)
);
CREATE TABLE IF NOT EXISTS  USER (
	id				varchar(50) 	primary key not null,
    username		varchar(20)		unique not null,
    password		varchar(255)	not null,
    role			enum("Employee", "Manager", "Customer"),
    associated_id	varchar(50)
);
CREATE TABLE thong_bao_thong_tin(
	Ma_thong_bao			varchar(50)		primary key     not null,
	Ngay_thong_bao			date,
	Noi_dung				varchar(255),
	Nguoi_thong_bao			varchar(255)	
);

CREATE TABLE IF NOT EXISTS QUESTION (
	question_id				varchar(50)		primary key		not null,
    title					varchar(50)		not null,
    content					varchar(50)		not null,
    customer_sdt				varchar(10) NOT NULL,
    answer					varchar(255),
    thungan_id		varchar(10) DEFAULT NULL,   
    CONSTRAINT FK_customer_sdt FOREIGN KEY(customer_sdt) REFERENCES KHACHHANG(SDT),
    CONSTRAINT FK_CSKH FOREIGN KEY(thungan_id)	references 	THUNGAN(MaTN)
);
`

module.exports = init;
