drop database if exists employee_tracker_db;

create database employee_tracker_db;

use employee_tracker_db;

create table employee(
id int not null primary key,
first_name varchar(30),
last_name varchar(30),
role_id int,
manager_id int
);

create table department(
id int primary key,
name varchar(30)
);

create table role(
id int primary key,
title varchar(30),
salary decimal(11,2),
department_id int
);