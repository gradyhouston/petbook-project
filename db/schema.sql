DROP DATABASE IF EXISTS `petbook_db`;

CREATE Database `petbook_db`;

USE `petbook_db`;

CREATE TABLE user_data(
  `id` INT(100) auto_increment NOT NULL UNIQUE,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `pass` VARCHAR(255) NOT NULL,
  `last_login_time` TIMESTAMP,
  PRIMARY KEY(`id`)
);

CREATE TABLE `pet_data` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `owner_name` VARCHAR( 255) NOT NULL,
  `pet_name` VARCHAR( 255 ) NOT NULL,
  `pet_breed` VARCHAR( 255) NOT NULL,
  `pet_age` VARCHAR( 255) NOT NULL,
  `pet_temperament` VARCHAR( 255) NOT NULL,
  `created_at` DATETIME NOT NULL,
  PRIMARY KEY ( `id` )
);
