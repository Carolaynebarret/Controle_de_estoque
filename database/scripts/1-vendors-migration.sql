-- -----------------------------------------------------
-- Table `vendors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vendors` (
  `cnpj` VARCHAR(14) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`cnpj`))
ENGINE = InnoDB;

-- INSERT INTO `vendors` VALUES (`70014010000161`, `Fazenda Esperança`, `Frios e Lactícinios`, `2022-4-01`, `2022-4-01`);
-- INSERT INTO `vendors` VALUES (`94619268000150`, 'Coca Cola', 'Bebidas');
-- INSERT INTO `vendors` VALUES (`99533745000183`, 'Nordestina Distribuidora', 'Alimentos');

