-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table hris.employee
CREATE TABLE IF NOT EXISTS `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(50) DEFAULT NULL,
  `preferred_name` varchar(50) DEFAULT NULL,
  `phone1` varchar(50) DEFAULT NULL,
  `phone2` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gross_salary` double DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table hris.employee: ~4 rows (approximately)
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`id`, `full_name`, `preferred_name`, `phone1`, `phone2`, `email`, `gross_salary`, `status`) VALUES
	(1, 'faiz abdul chakim', 'faiz', '081384337579', '080989999', 'faizabdulchakim@gmail.com', 15000000, 1),
	(2, 'aa', 'bb', '11', '22', 'cc', 14000000, 1),
	(5, 'aaa', 'bbb', '111', '222', 'ccc@c.c', 13000000, 1),
	(6, 'aaaa', 'bbbb', '1111', '2222', 'a@b.c', 12000000, 1),
	(8, 'p', 'pp', '9', '8', 'ppp@p.p', 10000000, 1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- Dumping structure for table hris.user_name
CREATE TABLE IF NOT EXISTS `user_name` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `user_role_id` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`),
  UNIQUE KEY `key` (`keyword`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table hris.user_name: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_name` DISABLE KEYS */;
INSERT INTO `user_name` (`id`, `name`, `user_role_id`, `password`, `keyword`, `status`) VALUES
	(1, 'admin@hris.com', '1', 'de6838252f95d3b9e803b28df33b4baa', 'e8e0dd181e4ee545195120626098bfba', 1),
	(2, 'finance@hris.com', '2', 'de6838252f95d3b9e803b28df33b4baa', '1aa7a8773e6a7fdacbcedf9999009a38', 1),
	(3, 'hrd@hris.com', '3', 'de6838252f95d3b9e803b28df33b4baa', 'cf5ff72ca35f112b361de3e312c088f4', 1);
/*!40000 ALTER TABLE `user_name` ENABLE KEYS */;

-- Dumping structure for table hris.user_role
CREATE TABLE IF NOT EXISTS `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table hris.user_role: ~4 rows (approximately)
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` (`id`, `name`, `status`) VALUES
	(1, 'admin', 1),
	(2, 'finance', 1),
	(3, 'hrd', 1);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
