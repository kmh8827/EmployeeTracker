drop database if exists employee_tracker_db;
 
create database employee_tracker_db;

use employee_tracker_db;

create table employee(
id int not null primary key auto_increment,
first_name varchar(30),
last_name varchar(30),
role_id int,
manager_id int
);

create table department(
id int not null primary key auto_increment,
name varchar(30)
);

create table role(
id int not null primary key auto_increment,
title varchar(30),
salary decimal(11,2),
department_id int
);

use employee_tracker_db;

select * from employee;
select * from department;
select * from role;