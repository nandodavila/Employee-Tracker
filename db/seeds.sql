INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, depart_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES ("Fernando", "Davila", 1, NULL),
       ("Cornelia", "Herman", 2, 1),
       ("Justin", "Houk", 3, NULL),
       ("Travis", "Crocker", 4, 3),
       ("Baylor", "Smith", 5, NULL),
       ("Tai", "Jones", 6, 5),
       ("Aaron", "Jones", 7, NULL),
       ("Xander", "Vanosdol", 8, 7);
