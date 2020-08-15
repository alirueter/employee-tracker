USE employee;

INSERT INTO department
(name)
VALUES
-- department_id = 1
("sales"), 
-- department_id = 2
("engineering"), 
-- department_id = 3
("finance"), 
-- department_id = 4
("legal");

INSERT INTO role
(title, salary, department_id)
VALUES
-- role_id = 1
("Sales Lead", 140000, 1),
-- role_id = 2
("Salesperson", 115000, 1),
-- role_id = 3
("Lead Engineer", 180000, 2),
-- role_id = 4
("Software Engineer", 130000, 2),
-- role_id = 5
("Accountant", 120000, 3),
-- role_id = 6 
("Legal Team Lead", 200000, 4),
-- role_id = 7
("Lawyer", 185000, 4);

INSERT INTO employees
(first_name, last_name, role_id, manager)
VALUES
-- sales department
("Michael", "Scott", 1, NULL),
("Pam", "Beesly", 1, "Michael Scott"),
("Dwight", "Schrute", 1, "Michael Scott"),
("Stanley", "Hudson", 1, "Michael Scott"),
-- engineering department
("Jim", "Halpert", 3, NULL),
("Oscar", "Martinez", 3, "Jim Halpert"),
-- finance department
("Kevin", "Malone", 3, NULL),
("Angela", "Martin", 3, NULL),
-- legal department
("Toby", "Flenderson", 4, NULL),
("Andy", "Bernard", 4, "Toby Flenderson");
