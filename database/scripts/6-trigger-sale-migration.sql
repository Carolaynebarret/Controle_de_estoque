CREATE TRIGGER `trigger_sale` AFTER INSERT ON `sales`
FOR EACH ROW
BEGIN
      CALL update_products (new.product_id, new.quantity);
END 