-- INIT database
CREATE TABLE Promos (
  PromoID INT AUTO_INCREMENT PRIMARY KEY,
  Name VARCHAR(50),
  Year INT
);

CREATE TABLE Apprenants (
  ApprenantID INT AUTO_INCREMENT PRIMARY KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50),
  PromoID INT,
  FOREIGN KEY (PromoID) REFERENCES Promos(PromoID)
);

CREATE TABLE Encadrants (
  EncadrantID INT AUTO_INCREMENT KEY,
  FirstName VARCHAR(50),
  LastName VARCHAR(50)
);

INSERT INTO Promos(Name, Year) VALUES
('Emma Watson', 2024),
('Elisabeth', 2023),
('Ella', 2024),
('Dorris', 2023);

INSERT INTO Apprenants(FirstName,LastName, PromoID) VALUES
('Toto', 'Titi', 1),
('Popo', 'Papa', 1),
('Nana', 'Nini', 2),
('Bibi', 'Titi', 2),
('Pépé', 'Papa', 3),
('Lulu', 'Nini', 3),
('Fifi', 'Titi', 4),
('Bobo', 'Papa', 4),
('Coco', 'Nini', 4);


INSERT INTO Encadrants(FirstName,LastName) VALUES
('Tic', 'Tac'),
('Pile', 'Face'),
('Truc', 'Machin');


-- QUERY database
-- SELECT 'Apprenant' AS Type, FirstName, LastName FROM Apprenants
-- UNION
-- SELECT 'Encadrant' AS Type, FirstName, LastName FROM Encadrants;

SELECT Apprenants.FirstName, Apprenants.LastName, Promos.Name, Promos.Year
FROM Apprenants
RIGHT JOIN Promos
ON Apprenants.PromoID = Promos.PromoID;

SELECT Apprenants.FirstName, Apprenants.LastName, Promos.Name
FROM Apprenants
RIGHT JOIN Promos
ON Apprenants.PromoID = Promos.PromoIDA
WHERE Promos.Name = 'Dorris';

SELECT * FROM Promos
WHERE Year = 2024;