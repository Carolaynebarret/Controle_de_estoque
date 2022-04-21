-- -----------------------------------------------------
-- Table `purchases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `date` DATETIME NOT NULL,
  `price` DECIMAL NOT NULL,
  `quantity` INT NOT NULL,
  `vendor_cnpj` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_purchase_vendor`
    FOREIGN KEY (`vendor_cnpj`)
    REFERENCES `vendors` (`cnpj`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
