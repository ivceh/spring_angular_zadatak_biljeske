-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2024 at 11:03 AM
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
  `kategorija_id` bigint(20) DEFAULT NULL,
  `tekst` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `biljeske`
--

INSERT INTO `biljeske` (`id`, `kategorija_id`, `tekst`) VALUES
(4, 3, 'Sekvoja je  dugovječna!'),
(5, 1, 'Gepard je najbrži trkač.');

-- --------------------------------------------------------

--
-- Table structure for table `datoteke`
--

CREATE TABLE `datoteke` (
  `id` int(11) NOT NULL,
  `ime` text NOT NULL,
  `id_biljeske` int(11) NOT NULL,
  `sadrzaj` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(6, 'gljive');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biljeske`
--
ALTER TABLE `biljeske`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_kategorije_biljeske` (`kategorija_id`);
ALTER TABLE `biljeske` ADD FULLTEXT KEY `tekst_biljeske` (`tekst`);

--
-- Indexes for table `datoteke`
--
ALTER TABLE `datoteke`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_biljeske_za_datoteku` (`id_biljeske`);
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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `datoteke`
--
ALTER TABLE `datoteke`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategorije`
--
ALTER TABLE `kategorije`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
