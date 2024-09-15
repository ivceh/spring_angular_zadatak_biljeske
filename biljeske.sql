-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2024 at 09:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `biljeske_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `biljeske`
--

CREATE TABLE `biljeske` (
  `id` bigint(20) NOT NULL,
  `kategorijaid` bigint(20) DEFAULT NULL,
  `tekst` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `biljeske`
--

INSERT INTO `biljeske` (`id`, `kategorijaid`, `tekst`) VALUES
(4, 3, 'Sekvoja je  dugovječna!'),
(5, 1, 'Gepard je najbrži trkač.'),
(7, 1, 'Bjeloglavi supovi se vraćaju.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biljeske`
--
ALTER TABLE `biljeske`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kategorije_biljeske` (`kategorijaid`);
ALTER TABLE `biljeske` ADD FULLTEXT KEY `tekst_biljeske` (`tekst`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biljeske`
--
ALTER TABLE `biljeske`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
