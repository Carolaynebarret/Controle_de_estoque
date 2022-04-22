CREATE PROCEDURE `update_products`(`product_id` INT, `sale_quantity` INT)
BEGIN
    DECLARE product_quantity INT;
    DECLARE product_price INT;
    DECLARE product_vendor VARCHAR(14);
    
    SELECT quantity, price, vendor_cnpj INTO product_quantity, product_price, product_vendor FROM products WHERE id = product_id;
    
    IF (product_quantity - sale_quantity) < 20 THEN
		INSERT INTO purchases (`date`, `price`, `quantity`, `product_id`, `vendor_cnpj`, `createdAt`, `updatedAt`) VALUES (CURRENT_DATE(), 10 * product_price, 10, product_id, product_vendor, CURRENT_DATE(), CURRENT_DATE()); 
        UPDATE products SET quantity = product_quantity - sale_quantity + 10  WHERE id = product_id;
    ELSE 
        UPDATE products SET quantity = product_quantity - sale_quantity  WHERE id = product_id;
    END IF;
END 
