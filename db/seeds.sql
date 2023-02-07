INSERT INTO department (name)
VALUES ("Human Resources"),
("Accounting"),
("Sales"),
("Technology");

INSERT INTO role (title, salary, department_id)
VALUES ("HR Manager", 80000.00, 1),
("CPA", 82000.00, 2),
("Sales Associate", 75000.00, 3),
("Tech Support", 82000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Liya", "Victor", 1, NULL),
("Makeda", "Lily", 2, 1),
("Helen", "Edan", 3, 1),
("Kidus", "Hails", 4, 1);