INSERT INTO department (department_name)
VALUES ("Human Resources"),
("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 80000.00, 1),
("CPA", 82000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Fay", "Melga", 1, NULL),
("Ven", "Hails", 2, 1);