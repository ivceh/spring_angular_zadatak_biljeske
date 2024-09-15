-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 15, 2024 at 05:51 PM
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

-- --------------------------------------------------------

--
-- Table structure for table `datoteke`
--

CREATE TABLE `datoteke` (
  `id` bigint(20) NOT NULL,
  `ime` varchar(255) DEFAULT NULL,
  `sadrzaj` tinyblob DEFAULT NULL,
  `biljeskaid` bigint(20) DEFAULT NULL,
  `tip` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `datoteke`
--

INSERT INTO `datoteke` (`id`, `ime`, `sadrzaj`, `biljeskaid`, `tip`) VALUES
(1, 'sup.txt', 0x546573746e61206461746f74656b61207a6120626a656c6f676c61766f6720737570612e, 7, 'text/plain');

-- --------------------------------------------------------

--
-- Table structure for table `kategorije`
--

CREATE TABLE `kategorije` (
  `id` bigint(20) NOT NULL,
  `ime` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategorije`
--

INSERT INTO `kategorije` (`id`, `ime`) VALUES
(1, 'životinje'),
(3, 'biljke'),
(4, 'matematika'),
(5, 'knjige'),
(6, 'gljive'),
(11, 'patuljasti kunić');

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
-- Indexes for table `datoteke`
--
ALTER TABLE `datoteke`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `datoteke` ADD FULLTEXT KEY `ime_datoteke_pretr` (`ime`);

--
-- Indexes for table `kategorije`
--
ALTER TABLE `kategorije`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `kategorije` ADD FULLTEXT KEY `ime_kategorije` (`ime`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biljeske`
--
ALTER TABLE `biljeske`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `datoteke`
--
ALTER TABLE `datoteke`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `kategorije`
--
ALTER TABLE `kategorije`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
