-- -----------------------------------------------------
-- Table `products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `description` VARCHAR(45),
  `category` VARCHAR(45) NOT NULL,
  `price` DECIMAL NOT NULL,
  `manufacturing_date` DATETIME NOT NULL,
  `due_date` DATETIME NOT NULL,
  `vendor_cnpj` VARCHAR(14) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_product_vendor`
    FOREIGN KEY (`vendor_cnpj`)
    REFERENCES `vendors` (`cnpj`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- INSERT INTO vendors VALUES ("Queijo", 50, 'Queijo', 'Frios e Lactícinios', 22, "2022-4-01", "2022-4-30", 70014010000161, "2022-4-01", "2022-4-01");