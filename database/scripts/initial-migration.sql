-- MySQL Script generated by MySQL Workbench
-- Thu Apr 14 10:30:06 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering


CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `amount` double  NULL,
  `price` double  NULL,
  `shelf` VARCHAR(45)  NULL,
  `description` VARCHAR(100)  NULL,
  `category` VARCHAR(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`));

 


