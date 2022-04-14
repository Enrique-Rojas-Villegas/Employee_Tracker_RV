INSERT INTO department (name)
VALUES ('Production'),
       ('Re-Search'),
       ('Development'),
       ('Human Resources'),
       ('Sales');


INSERT INTO role (title, department_id, salary)
VALUES ('Production Manager', 1, 7200),
       ('Production Cordinator', 1, 5200),
       ('Product Research', 2, 11666),
       ('Market Research', 2, 5000),
       ('Quality Control', 3, 9000),
       ('Product updates', 3, 7850),
       ('Training and Development', 4, 12000),
       ('HR Compliance', 4, 25000),
       ('Account Executive', 5, 17000),
       ('Sales Manager', 5, 20000);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Enoc', 'Rojas', 1),
('Juan', 'Osorio', 1),
('Isaac', 'Salazar', 2),
('Fernando', 'Delgado', 2),
('Guillermo', 'Maciel', 3),
('Alejandra', 'Naves', 3);