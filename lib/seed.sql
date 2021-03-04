

insert into employee (first_name, last_name, role_id, manager_id) values ('None',' ', 00, 00);
insert into employee (first_name, last_name, role_id, manager_id) values ('Amon','Gus',01,01);
insert into employee (first_name, last_name, role_id, manager_id) values ('Sarah','Sarahson',02,02);
insert into employee (first_name, last_name, role_id, manager_id) values ('John','Johnson',03,03);
insert into employee (first_name, last_name, role_id, manager_id) values ('Tim','Timson',04,04);

insert into department (name) values ('Engineering');
insert into department (name) values ('Finance');
insert into department (name) values ('Sales');
insert into department (name) values ('Legal');

insert into role (title, salary, department_id) values ('Lead Engineer', 100000, 01);
insert into role (title, salary, department_id) values ('Accountant', 80000, 02);
insert into role (title, salary, department_id) values ('Sales Person', 45000, 03);
insert into role (title, salary, department_id) values ('Lawyer', 250000, 04);