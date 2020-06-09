﻿--
-- Script was generated by Devart dbForge Studio for MySQL, Version 8.0.40.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 6/4/2020 11:48:09 PM
-- Server version: 8.0.19
-- Client version: 4.1
--

-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 
-- Set character set the client will use to send SQL statements to the server
--
SET NAMES 'utf8mb4';

--
-- Set default database
--
USE platform_management;

--
-- Drop table `permission`
--
DROP TABLE IF EXISTS permission;

--
-- Drop table `subsystem`
--
DROP TABLE IF EXISTS subsystem;

--
-- Drop table `user_option`
--
DROP TABLE IF EXISTS user_option;

--
-- Drop table `role_permission`
--
DROP TABLE IF EXISTS role_permission;

--
-- Drop table `user_roles`
--
DROP TABLE IF EXISTS user_roles;

--
-- Drop table `roles`
--
DROP TABLE IF EXISTS roles;

--
-- Drop table `users`
--
DROP TABLE IF EXISTS users;

--
-- Set default database
--
USE platform_management;

--
-- Create table `users`
--
CREATE TABLE users (
  UserID char(36) NOT NULL COMMENT 'ID pk mã nhân viên',
  UserName varchar(255) DEFAULT NULL COMMENT 'Họ và tên nhân viên',
  TenantID char(36) NOT NULL COMMENT 'ID reference thông tin công ty',
  FirstName varchar(100) DEFAULT NULL COMMENT 'Họ nhân viên',
  LastName varchar(100) DEFAULT NULL COMMENT 'Tên nhân viên',
  FullName varchar(100) DEFAULT NULL,
  Email varchar(100) DEFAULT NULL,
  Mobile varchar(50) DEFAULT NULL COMMENT 'Số điện thoại',
  ListGroupName text DEFAULT NULL,
  Status int DEFAULT NULL COMMENT 'trạng thái của user  (1: chưa kích hoạt , 2: chờ xác nhận, 3: đang hoạt động, 4:Ngừng kích hoạt , 5: đã xóa )',
  CreatedDate datetime DEFAULT NULL,
  CreatedBy varchar(100) DEFAULT NULL,
  ModifiedDate datetime DEFAULT NULL,
  ModifiedBy varchar(100) DEFAULT NULL,
  Avatar varchar(100) DEFAULT NULL COMMENT 'avatar của người dung ',
  AvatarColor varchar(50) DEFAULT NULL COMMENT 'Màu background avatar của người dùng',
  Birthday datetime DEFAULT NULL COMMENT 'Ngày sinh',
  Gender int DEFAULT NULL COMMENT 'Giới tính: 0 - nữ, 1 - nam',
  Address varchar(255) DEFAULT NULL COMMENT 'Địa chỉ',
  Password varchar(255) DEFAULT NULL,
  PRIMARY KEY (UserID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 411,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = 'Bảng người dùng';

--
-- Create index `IDX_users_TenantID_UserID` on table `users`
--
ALTER TABLE users
ADD INDEX IDX_users_TenantID_UserID (TenantID, UserID);

--
-- Create table `roles`
--
CREATE TABLE roles (
  RoleID char(36) NOT NULL,
  RoleCode varchar(50) DEFAULT NULL,
  RoleName varchar(255) DEFAULT NULL,
  Description varchar(255) DEFAULT NULL,
  TenantID char(36) DEFAULT NULL,
  AppCode varchar(20) DEFAULT NULL,
  IsSystem bit(1) NOT NULL DEFAULT b'0' COMMENT 'xác định là role mặc định không',
  Inactive bit(1) NOT NULL DEFAULT b'0',
  DictionaryKey int DEFAULT NULL,
  IsEditable bit(1) NOT NULL DEFAULT b'0' COMMENT 'Vai trò hệ thống cho phép sửa (không được xóa)',
  SortOrder int DEFAULT NULL,
  PRIMARY KEY (RoleID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 310,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create index `IDX_roles` on table `roles`
--
ALTER TABLE roles
ADD INDEX IDX_roles (TenantID, AppCode);

--
-- Create index `IDX_roles_TenantID` on table `roles`
--
ALTER TABLE roles
ADD INDEX IDX_roles_TenantID (TenantID);

--
-- Create table `user_roles`
--
CREATE TABLE user_roles (
  UserRoleID int NOT NULL AUTO_INCREMENT,
  UserID char(36) DEFAULT NULL COMMENT 'ID của nhân viên',
  TenantID char(36) DEFAULT NULL,
  RoleID char(36) DEFAULT NULL COMMENT 'ID role của ứng dụng được phép ứng dụng',
  AppCode varchar(20) DEFAULT NULL COMMENT 'Ứng dụng được phép truy cập',
  CreatedDate datetime DEFAULT NULL,
  CreatedBy varchar(100) DEFAULT NULL,
  ModifiedDate datetime DEFAULT NULL,
  ModifiedBy varchar(100) DEFAULT NULL,
  RoleName varchar(255) DEFAULT NULL,
  PRIMARY KEY (UserRoleID)
)
ENGINE = INNODB,
AUTO_INCREMENT = 1870,
AVG_ROW_LENGTH = 401,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci;

--
-- Create index `IDX_user_roles_TenantID_UserID` on table `user_roles`
--
ALTER TABLE user_roles
ADD INDEX IDX_user_roles_TenantID_UserID (TenantID, UserID);

--
-- Create foreign key
--
ALTER TABLE user_roles
ADD CONSTRAINT FK_user_roles_roles_RoleID FOREIGN KEY (RoleID)
REFERENCES roles (RoleID);

--
-- Create foreign key
--
ALTER TABLE user_roles
ADD CONSTRAINT FK_user_roles_users_UserID FOREIGN KEY (UserID)
REFERENCES users (UserID);

--
-- Create table `role_permission`
--
CREATE TABLE role_permission (
  ID int NOT NULL AUTO_INCREMENT COMMENT 'khóa chính',
  RoleID char(36) NOT NULL COMMENT 'ID vai trò',
  RoleName varchar(255) NOT NULL COMMENT 'tên vai trò',
  PermissionCode varchar(255) NOT NULL COMMENT 'mã quyền',
  PermissionName varchar(255) NOT NULL COMMENT 'tên quyền',
  SubSystemCode varchar(100) NOT NULL COMMENT 'mã subsystem',
  SubSystemName varchar(255) NOT NULL COMMENT 'tên subsystem',
  TenantID char(36) NOT NULL COMMENT 'ID công ty',
  CreatedDate datetime(3) DEFAULT NULL COMMENT 'Ngày tạo',
  CreatedBy varchar(100) DEFAULT NULL COMMENT 'người tạo',
  ModifiedDate datetime DEFAULT NULL COMMENT 'ngày sửa',
  ModifiedBy varchar(100) DEFAULT NULL COMMENT 'người sửa',
  EditVersion timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP (3),
  PRIMARY KEY (ID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 390,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = 'Bảng phân quyền 1 vai trò trên 1 phân hệ/màn hình thì có 1 quyền hạn/chức năng gì';

--
-- Create index `FK_role_permission_permission_PermissionCode` on table `role_permission`
--
ALTER TABLE role_permission
ADD INDEX FK_role_permission_permission_PermissionCode (PermissionCode);

--
-- Create index `FK_sc_role_permission_role_RoleID` on table `role_permission`
--
ALTER TABLE role_permission
ADD INDEX FK_sc_role_permission_role_RoleID (RoleID);

--
-- Create foreign key
--
ALTER TABLE role_permission
ADD CONSTRAINT FK_role_permission_roles_RoleID FOREIGN KEY (RoleID)
REFERENCES roles (RoleID);

--
-- Create table `user_option`
--
CREATE TABLE user_option (
  OptionID varchar(100) NOT NULL,
  OptionValue json DEFAULT NULL COMMENT 'Các tùy chọn của user',
  ModifiedDate datetime(3) DEFAULT NULL COMMENT 'Ngày sửa',
  PRIMARY KEY (OptionID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 1671,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = 'Bảng lưu các tùy chọn của user';

--
-- Create table `subsystem`
--
CREATE TABLE subsystem (
  SubSystemID int NOT NULL AUTO_INCREMENT,
  SubSystemCode varchar(100) NOT NULL COMMENT 'sub app code',
  SubSystemName varchar(255) DEFAULT NULL COMMENT 'tên sub app',
  ModifiedDate datetime(3) DEFAULT NULL,
  ModifiedBy varchar(255) DEFAULT NULL,
  CreatedDate datetime(3) DEFAULT NULL,
  CreatedBy varchar(255) DEFAULT NULL,
  PRIMARY KEY (SubSystemID)
)
ENGINE = INNODB,
AUTO_INCREMENT = 5,
AVG_ROW_LENGTH = 8192,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = 'Bảng lưu các phân hệ/màn hình';

--
-- Create table `permission`
--
CREATE TABLE permission (
  PermissionID int NOT NULL AUTO_INCREMENT,
  PermissionCode varchar(255) NOT NULL,
  PermissionName varchar(255) DEFAULT NULL,
  SortOrder int DEFAULT NULL,
  EditVersion timestamp(3) NOT NULL DEFAULT CURRENT_TIMESTAMP (3),
  PRIMARY KEY (PermissionID)
)
ENGINE = INNODB,
AVG_ROW_LENGTH = 3276,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = 'Bảng lưu các quyền hạn/chức năng có trong ứng dụng (Thêm, Sửa, Xóa, ...)';

--
-- Create index `PermissionCode` on table `permission`
--
ALTER TABLE permission
ADD UNIQUE INDEX PermissionCode (PermissionCode);

-- 
-- Dumping data for table users
--
-- Table platform_management.users does not contain any data (it is empty)

-- 
-- Dumping data for table roles
--
-- Table platform_management.roles does not contain any data (it is empty)

-- 
-- Dumping data for table user_roles
--
-- Table platform_management.user_roles does not contain any data (it is empty)

-- 
-- Dumping data for table user_option
--
-- Table platform_management.user_option does not contain any data (it is empty)

-- 
-- Dumping data for table subsystem
--
-- Table platform_management.subsystem does not contain any data (it is empty)

-- 
-- Dumping data for table role_permission
--
-- Table platform_management.role_permission does not contain any data (it is empty)

-- 
-- Dumping data for table permission
--
-- Table platform_management.permission does not contain any data (it is empty)

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;