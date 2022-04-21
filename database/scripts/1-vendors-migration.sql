-- -----------------------------------------------------
-- Table `vendors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vendors` (
  `cnpj` INT NOT NULL,
  `id` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`cnpj`))
ENGINE = InnoDB;

