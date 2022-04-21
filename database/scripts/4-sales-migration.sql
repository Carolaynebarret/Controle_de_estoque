-- -- -----------------------------------------------------
-- -- Table `sales`
-- -- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `quantity` INT NOT NULL,
  `date` DATETIME NOT NULL,
  `price` DECIMAL NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_sales_product1`
    FOREIGN KEY (`product_id`)
    REFERENCES `products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;