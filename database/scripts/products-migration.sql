-- -----------------------------------------------------
-- Table `products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `quantity` INT NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `price` DECIMAL NOT NULL,
  `lot` INT NOT NULL,
  `id_vendor` INT NOT NULL,
  `manufacturing_date` DATETIME NOT NULL,
  `due_date` DATETIME NOT NULL,
  `purchase_id` INT NOT NULL,
  `vendor_cnpj` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_product_purchase`
    FOREIGN KEY (`purchase_id`)
    REFERENCES `purchases` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_product_vendor`
    FOREIGN KEY (`vendor_cnpj`)
    REFERENCES `vendors` (`cnpj`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;