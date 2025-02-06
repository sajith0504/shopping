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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123456797 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (123456792,'Y Sajith','$2b$10$HM8cGrY2qGgDdl2ApgFILO0F2y6sl3MF1MDt748cc92jKnBautSr.','4-87 L 2, KUNIYAN VILAI, KONAMKADU, Konamkadu, Kalkulam, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629803','629803','9042539832','Kanniyakumari',' Kalkulam','2025-01-23 06:13:51','2025-01-30 06:36:08','Superadmin',NULL),(123456796,'S J Azis Shane','$2b$10$ydR7BKsfXp8O6yVyT7D9D.RU3y9HiVuEcKvqC88MUkJfSUoKRHt/i','3-104/1, PULLUKIRAVILAI, PARAICODE, Mulagumoodu, Kanniyakumari, Kalkulam, Tamil Nadu, India, 629167','629167','9487747215','Kanniyakumari',' Kalkulam','2025-01-25 05:16:19','2025-01-30 06:36:23','Superadmin',NULL);
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

-- Dump completed on 2025-01-30 12:59:15
