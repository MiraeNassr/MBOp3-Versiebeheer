-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 19 dec 2025 om 09:03
-- Serverversie: 10.4.32-MariaDB
-- PHP-versie: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `homefinder_db`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `houses`
--

CREATE TABLE `houses` (
  `id` int(50) NOT NULL,
  `price` decimal(30,0) NOT NULL,
  `description` varchar(150) NOT NULL,
  `location` varchar(50) NOT NULL,
  `image` varchar(150) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Gegevens worden geëxporteerd voor tabel `houses`
--

INSERT INTO `houses` (`id`, `price`, `description`, `location`, `image`, `status`) VALUES
(1, 250000, 'Een huis met twee verdiepingen en een dak.', '2200XC Amsterdamstraat, Den Haag', 'photos/huis3.jpg', 1),
(2, 280000, 'Een breder woning met een twee verdiepingen en een dak.', '2200XC Amerkanstraat, Den Haag', 'photos/huis2.jpg', 1),
(5, 250000, 'Mooi huis met een prachtige tuin naast de rivier', '2255SS Van haanstraat, Den Haag', 'photos/huisCard1.jpeg', 0),
(6, 280000, 'Huis met één slaapkamer, woonkamer en keuken', '2255SS Amsterdamstraat, Voorschoten', 'photos/huisCard2.jpeg', 0),
(7, 450000, 'Prachtig modern stalen constructiehuis van twee verdiepingen', '2255SS Amsterstraat, Den Haag', 'photos/huisCard3.jpeg', 0),
(8, 250000, 'Woning met prachtige tuiningang', '2255SS Amerstraat, Den Haag', 'photos/huisCard4.jpeg', 0),
(9, 350000, 'Een prachtige moderne bouwwoning met vier slaapkamers en...', '2255SS var raistraat, Leiden', 'photos/huisCard5.jpeg', 0),
(10, 180000, 'Modern huis met 5 slaapkamers en buitenzwembad', '2255SS Vantoestraat, Den Haag', 'photos/huisCard6.jpeg', 0),
(11, 450000, 'Een huis met dree verdiepingen en een groot tuin.', '2255SS Van harlemstraat, Den Haag', 'photos/huis1.jpg', 1);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
