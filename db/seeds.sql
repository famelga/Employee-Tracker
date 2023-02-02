INSERT INTO department (department_name)
VALUES ("Human Resources"),
("Accounting");

INSERT INTO role (id, title, salary, department_id)
VALUES (456, "HR Manager", 80000.00, 1),
(789, "CPA", 82000.00, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (123, "Fay", "Melga", 321, 10),
(147, "Ven", "Hails", 741, 11);