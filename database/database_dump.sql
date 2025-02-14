-- MariaDB dump 10.19  Distrib 10.4.32-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: shopping
-- ------------------------------------------------------
-- Server version	10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attributes`
--

DROP TABLE IF EXISTS `attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `attribute_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`attribute_values`)),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES (1,'Color','[\"black\"]'),(2,'color','[\"black\",\"white\",\"green\"]'),(3,'size','[\"m\",\"l\",\"xl\",\"2xl\"]');
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  `subcategory_name` varchar(255) DEFAULT NULL,
  `parent_category` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (9,'vegetables','bringal','2','vegetable.svg',NULL,'2025-02-06 05:13:51'),(10,'fruits','apple','1','vegetable.svg',NULL,'2025-02-06 06:34:16'),(11,'Books & Stationery','School Supplies','3','grocery.svg',NULL,'2025-02-06 08:32:08'),(13,'Groceries','rice','3','grocery.svg','1738833608300-basmati.jpg','2025-02-06 09:20:08'),(14,'Health','Fragrances','3','drink.svg',NULL,'2025-02-06 09:46:37'),(15,'Sports','Sportswear','3','breakfast.svg',NULL,'2025-02-06 10:02:25'),(16,'Groceries',NULL,NULL,'groceries-icon.png','groceries-image.jpg','2025-02-07 10:18:17'),(17,'Beverages',NULL,'Groceries','beverages-icon.png','beverages-image.jpg','2025-02-07 10:18:17'),(18,'Dairy Products',NULL,'Groceries','dairy-icon.png','dairy-image.jpg','2025-02-07 10:18:17'),(19,'Bakery & Bread',NULL,'Groceries','bakery-icon.png','bakery-image.jpg','2025-02-07 10:18:17'),(20,'Electronics',NULL,NULL,'electronics-icon.png','electronics-image.jpg','2025-02-07 10:18:17'),(21,'Mobiles & Tablets',NULL,'Electronics','mobiles-icon.png','mobiles-image.jpg','2025-02-07 10:18:17'),(22,'Laptops & Computers',NULL,'Electronics','laptops-icon.png','laptops-image.jpg','2025-02-07 10:18:17'),(23,'Televisions',NULL,'Electronics','tv-icon.png','tv-image.jpg','2025-02-07 10:18:17'),(24,'Fashion',NULL,NULL,'fashion-icon.png','fashion-image.jpg','2025-02-07 10:18:17'),(25,'Men\'s Clothing',NULL,'Fashion','mens-clothing-icon.png','mens-clothing-image.jpg','2025-02-07 10:18:17'),(26,'Women\'s Clothing',NULL,'Fashion','womens-clothing-icon.png','womens-clothing-image.jpg','2025-02-07 10:18:17'),(27,'Footwear',NULL,'Fashion','footwear-icon.png','footwear-image.jpg','2025-02-07 10:18:17'),(28,'Home & Lifestyle',NULL,NULL,'home-lifestyle-icon.png','home-lifestyle-image.jpg','2025-02-07 10:18:17'),(29,'Furniture',NULL,'Home & Lifestyle','furniture-icon.png','furniture-image.jpg','2025-02-07 10:18:17'),(30,'Home Decor',NULL,'Home & Lifestyle','home-decor-icon.png','home-decor-image.jpg','2025-02-07 10:18:17'),(31,'Kitchen Appliances',NULL,'Home & Lifestyle','kitchen-appliances-icon.png','kitchen-appliances-image.jpg','2025-02-07 10:18:17'),(32,'Books, Music & Stationery',NULL,NULL,'books-icon.png','books-image.jpg','2025-02-07 10:18:17'),(33,'Fiction Books',NULL,'Books, Music & Stationery','fiction-books-icon.png','fiction-books-image.jpg','2025-02-07 10:18:17'),(34,'Educational Books',NULL,'Books, Music & Stationery','education-books-icon.png','education-books-image.jpg','2025-02-07 10:18:17'),(35,'Sports, Toys & Luggage',NULL,NULL,'sports-icon.png','sports-image.jpg','2025-02-07 10:18:17'),(36,'Fitness Equipment',NULL,'Sports, Toys & Luggage','fitness-icon.png','fitness-image.jpg','2025-02-07 10:18:17'),(37,'Toys & Games',NULL,'Sports, Toys & Luggage','toys-icon.png','toys-image.jpg','2025-02-07 10:18:17'),(38,'Beauty & Personal Care',NULL,NULL,'beauty-icon.png','beauty-image.jpg','2025-02-07 10:18:17'),(39,'Skin Care',NULL,'Beauty & Personal Care','skincare-icon.png','skincare-image.jpg','2025-02-07 10:18:17'),(40,'Hair Care',NULL,'Beauty & Personal Care','haircare-icon.png','haircare-image.jpg','2025-02-07 10:18:17'),(41,'Industrial & Professional Supplies',NULL,NULL,'industrial-icon.png','industrial-image.jpg','2025-02-07 10:18:17'),(42,'Office Supplies',NULL,'Industrial & Professional Supplies','office-supplies-icon.png','office-supplies-image.jpg','2025-02-07 10:18:17'),(43,'Cat Toys','pedigree','Pet Supplies','drink.svg',NULL,'2025-02-08 07:40:05'),(44,'chicken','small','Meats & Seafood','meats.svg',NULL,'2025-02-08 07:42:27'),(45,'Fish','pirana','Meats & Seafood','meats.svg',NULL,'2025-02-08 08:02:09'),(46,'Fruits','Apple','Vegetables & Fruit','vegetable.svg',NULL,'2025-02-11 04:57:53'),(47,'Fruits','Apple','Vegetables & Fruit','vegetable.svg',NULL,'2025-02-11 05:01:14'),(48,'Soft Drinks','cococala','Beverages','cup.svg',NULL,'2025-02-11 05:01:32'),(49,'Soft Drinks','cococala','Beverages','cup.svg',NULL,'2025-02-11 05:02:02'),(50,'Tea & Coffee','tea','Beverages','cup.svg',NULL,'2025-02-11 05:02:26'),(51,'Tea & Coffee','tea','Beverages','cup.svg',NULL,'2025-02-11 05:02:41'),(52,'Tea & Coffee','Tea','Beverages','cup.svg',NULL,'2025-02-11 05:02:57'),(53,'Chairs','chair','Furniture','milk.svg',NULL,'2025-02-11 05:16:07'),(54,'Rice','chengalpattu','Grocery & Staples','grocery.svg',NULL,'2025-02-11 05:21:04'),(55,'Rice','chengalpattu','Grocery & Staples','grocery.svg','/uploads/1739251286583-dumbbell.png','2025-02-11 05:21:26');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) DEFAULT NULL,
  `productType` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `subcategory` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `exchangeable` tinyint(1) DEFAULT NULL,
  `refundable` tinyint(1) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `images` text DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `videoProvider` varchar(255) DEFAULT NULL,
  `videoLink` varchar(255) DEFAULT NULL,
  `optionName` varchar(255) DEFAULT NULL,
  `optionValue` varchar(255) DEFAULT NULL,
  `weight` decimal(10,2) DEFAULT NULL,
  `dimensions` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `comparePrice` decimal(10,2) DEFAULT NULL,
  `costPerItem` decimal(10,2) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `stockStatus` varchar(255) DEFAULT NULL,
  `inventory` text DEFAULT NULL,
  `upsells` varchar(255) DEFAULT NULL,
  `crossSells` varchar(255) DEFAULT NULL,
  `pageTitle` varchar(255) DEFAULT NULL,
  `metaDescription` text DEFAULT NULL,
  `urlHandle` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (12,'Tea powder','','Groceries','Dairy Products','Red Label',NULL,'',NULL,NULL,' xvkhwgkwgkhwdghwdghejde d','/uploads/images/1738040632170.jpg','',NULL,'',NULL,NULL,NULL,'{\"length\":\"\",\"width\":\"\",\"height\":\"\"}',90.00,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL),(13,'Tea powder','','Groceries','Grains, Rice & Pulses','Red Label',NULL,'',NULL,NULL,'','/uploads/images/1738043414322.jpg','',NULL,'',NULL,NULL,NULL,'{\"length\":\"\",\"width\":\"\",\"height\":\"\"}',70.00,NULL,NULL,NULL,NULL,NULL,'','',NULL,NULL,NULL),(15,'rice','','Groceries','Grains, Rice & Pulses','basmati',NULL,'',NULL,NULL,'AAXZAZvswa','/uploads/images/1738045444161.jpg','','Vimeo','',NULL,NULL,NULL,'{\"length\":\"\",\"width\":\"\",\"height\":\"\"}',220.00,NULL,NULL,'5',NULL,NULL,'','',NULL,NULL,NULL),(16,'oreo','','Groceries','Grains, Rice & Pulses','cadburry','','',0,0,'','/uploads/images/1738049179638.avif','','Vimeo','','','',0.00,'{\"length\":\"\",\"width\":\"\",\"height\":\"\"}',68.00,0.00,0.00,'5','','\"[{\\\"variant\\\":\\\"blue\\\",\\\"price\\\":\\\"70\\\",\\\"sku\\\":\\\"5\\\",\\\"quantity\\\":\\\"9\\\"}]\"','','','','',''),(17,'pink shirt','Classified','Fashion','','nike','Pieces','',0,0,'very good shirt','/uploads/images/1738127958880.avif','','Vimeo','','','',0.00,'{\"length\":\"\",\"width\":\"\",\"height\":\"\"}',250.00,0.00,0.00,'sku25','','\"[{\\\"variant\\\":\\\"pink\\\",\\\"price\\\":\\\"250\\\",\\\"sku\\\":\\\"sku25\\\",\\\"quantity\\\":\\\"20\\\"}]\"','','','','','');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `pincode` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `district` varchar(100) NOT NULL,
  `taluka` varchar(100) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `role` varchar(50) NOT NULL DEFAULT 'customer',
  `referralId` int(11) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123456816 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (123456792,'Y Sajith','$2b$10$HM8cGrY2qGgDdl2ApgFILO0F2y6sl3MF1MDt748cc92jKnBautSr.','4-87 L 2, KUNIYAN VILAI, KONAMKADU, Konamkadu, Kalkulam, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629803','629803','9042539832','Kanniyakumari',' Kalkulam','2025-01-23 06:13:51','2025-01-30 06:36:08','Superadmin',NULL,NULL),(123456796,'S J Azis Shane','$2b$10$ydR7BKsfXp8O6yVyT7D9D.RU3y9HiVuEcKvqC88MUkJfSUoKRHt/i','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629167','9487747215','Kanniyakumari',' Kalkulam','2025-01-25 05:16:19','2025-01-30 10:09:02','Superadmin',NULL,NULL),(123456804,'S J Azis Shane','$2b$10$f6hWZ90D6XZkSf7nN3KFCe5ag0E6TNJUtOspPsNklWQSTBf4oX/r2','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629803','8667636024','Pudukottai','Viralimalai','2025-01-30 12:30:26','2025-01-30 12:30:26','distributor',123456796,NULL),(123456805,'kaviya','$2b$10$brhJIZmk3xFP3JcdNhnqpuU6dTvH7lFcbERUJ3jVU7eoqS5GmiyxK','4-87 L 2, KUNIYAN VILAI, KONAMKADU, Konamkadu, Kalkulam, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629803','629167','9988775644','Pudukottai','Viralimalai','2025-01-30 13:01:34','2025-01-30 13:01:34','distributor',123456796,NULL),(123456806,'kaviya','$2b$10$yblQ7cA5CJl9WHNRIpchBur/GkEDP59mBQAMWlVvJVlsslAd/8i8W','4-87 L 2, KUNIYAN VILAI, KONAMKADU, Konamkadu, Kalkulam, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629803','629167','9988775644','Pudukottai','Viralimalai','2025-01-30 13:06:38','2025-01-30 13:06:38','distributor',123456796,NULL),(123456807,'Y Sajith','$2b$10$.lG0PvZJzMOVvm.1d.d0WOuWvOc.1WyrB0T.IdBpYmkAwQwDUWSfe','4-87 L 2, KUNIYAN VILAI, KONAMKADU, Konamkadu, Kalkulam, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629803','629803','9487747212','Perambalur','Perambalur','2025-01-30 13:08:15','2025-01-30 13:08:15','retailer',123456796,NULL),(123456809,'simpson','$2b$10$1JiXDTgHw/qfMbMaMR8kc.nPvAbhSz.7hzlCfn.b0JMrBD.4itFx.','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629167','9442878990','Kanniyakumari',' Kalkulam','2025-01-30 13:19:12','2025-01-30 13:19:12','admin',123456796,NULL),(123456810,'Ramji','$2b$10$L4HrJ0WnzqKjXyvbRC6DkuleQKxSe1IQtBkcR8ah6IeV9yAyuiIaa','nagercovil','629167','7598984380','Kanniyakumari',' Kalkulam','2025-01-30 13:21:26','2025-01-30 13:21:26','admin',123456796,NULL),(123456811,'sanjith','$2b$10$.izaA.YmGstKHAfJcQOdJO22yTJM8Raus6lUD5c2B8wRRcKjYhbYi','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629167','9442878992','Pudukottai','Viralimalai','2025-01-31 05:29:15','2025-01-31 05:29:15','distributor',123456810,NULL),(123456812,'guna','$2b$10$BFqSyaoHCACMViitBF8V4eUqUl4ExAinqo5F5JfvzDsgdgUo5WzFS','4-87 L 2, KUNIYAN VILAI, KONAMKADU, Konamkadu, Kalkulam, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629803','629803','9442878994','Nilgiris','Udagamandalam','2025-01-31 05:41:56','2025-01-31 05:41:56','retailer',123456810,NULL),(123456813,'mani','$2b$10$axLarQVWdC2wHyFXiFuFfeYdHpi7gB2RRNnoBXDt8CEZbQ/js3EEe','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629803','9442878995','Pudukottai','Viralimalai','2025-01-31 05:47:04','2025-01-31 05:47:04','admin',123456796,NULL),(123456814,'Azis','$2b$10$oWWZUSFHZuTc2ipngMDFquTmy0PWfnMzNNPtPnwWF277NUPJ3nMnO','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629167','9489293991','Kanniyakumari','Thovalai','2025-01-31 09:35:53','2025-01-31 09:35:53','retailer',123456796,'simpson abc store');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-11 12:36:52
