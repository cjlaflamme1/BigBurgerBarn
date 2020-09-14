CREATE DATABASE `burgers_db` /*!40100 COLLATE 'utf8mb4_0900_ai_ci' */;
SHOW DATABASES;
/* Entering session "Local DB Server" */
USE `burgers_db`;
SELECT `DEFAULT_COLLATION_NAME` FROM `information_schema`.`SCHEMATA` WHERE `SCHEMA_NAME`='burgers_db';
SHOW TABLE STATUS FROM `burgers_db`;
SHOW FUNCTION STATUS WHERE `Db`='burgers_db';
SHOW PROCEDURE STATUS WHERE `Db`='burgers_db';
SHOW TRIGGERS FROM `burgers_db`;
SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='burgers_db';
CREATE TABLE `burgers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(50) NOT NULL,
	`devoured` TINYINT(1) NOT NULL DEFAULT 1
)
COLLATE='utf8mb4_0900_ai_ci'
;
/* SQL Error (1075): Incorrect table definition; there can be only one auto column and it must be defined as a key */
CREATE TABLE `burgers` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`burger_name` VARCHAR(50) NOT NULL,
	`devoured` TINYINT(1) NOT NULL DEFAULT 1,
	PRIMARY KEY (`id`)
)
COLLATE='utf8mb4_0900_ai_ci'
;
SELECT `DEFAULT_COLLATION_NAME` FROM `information_schema`.`SCHEMATA` WHERE `SCHEMA_NAME`='burgers_db';
SHOW TABLE STATUS FROM `burgers_db`;
SHOW FUNCTION STATUS WHERE `Db`='burgers_db';
SHOW PROCEDURE STATUS WHERE `Db`='burgers_db';
SHOW TRIGGERS FROM `burgers_db`;
SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='burgers_db';
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='burgers_db' AND TABLE_NAME='burgers' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `burgers` FROM `burgers_db`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='burgers_db'   AND TABLE_NAME='burgers'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   CONSTRAINT_SCHEMA='burgers_db'   AND TABLE_NAME='burgers'   AND REFERENCED_TABLE_NAME IS NOT NULL;
/* Entering session "Local DB Server" */
SHOW CREATE TABLE `burgers_db`.`burgers`;