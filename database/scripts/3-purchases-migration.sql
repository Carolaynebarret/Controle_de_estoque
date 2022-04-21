-- -----------------------------------------------------
-- Table `purchases`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` INT NOT NULL AUTO_INCREMENT, 
  `date` DATETIME NOT NULL,
  `price` DECIMAL NOT NULL,
  `quantity` INT NOT NULL,
  `product_id` INT NOT NULL,
  `vendor_cnpj` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_purchase_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_purchase_vendor`
    FOREIGN KEY (`vendor_cnpj`)
    REFERENCES `vendors` (`cnpj`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
