SHOW CREATE TABLE `burgers_db`.`burgers`;
SELECT * FROM `burgers_db`.`burgers` LIMIT 1000;
INSERT INTO `burgers_db`.`burgers` (`burger_name`) VALUES ('Rodeo Burger');
SELECT LAST_INSERT_ID();
SELECT `id`, `burger_name`, `devoured` FROM `burgers_db`.`burgers` WHERE  `id`=1;
INSERT INTO `burgers_db`.`burgers` (`burger_name`) VALUES ('Vegan Burger');
SELECT LAST_INSERT_ID();
SELECT `id`, `burger_name`, `devoured` FROM `burgers_db`.`burgers` WHERE  `id`=2;
INSERT INTO `burgers_db`.`burgers` (`burger_name`) VALUES ('Billy Burger');
SELECT LAST_INSERT_ID();
SELECT `id`, `burger_name`, `devoured` FROM `burgers_db`.`burgers` WHERE  `id`=3;