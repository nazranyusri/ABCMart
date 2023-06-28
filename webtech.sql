-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 28, 2023 at 02:06 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webtech`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `prodCode` varchar(10) NOT NULL,
  `prodName` varchar(30) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `dateAdd` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `prodCode`, `prodName`, `quantity`, `price`, `dateAdd`) VALUES
(1, 'CRN01', 'Corntoz', 10, '0.50', '2023-06-27'),
(47, 'AYMS03', 'Ayamas Nugget', 30, '15.99', '2023-06-28'),
(48, 'GL01', 'Gula Halus', 60, '5.50', '2023-06-28'),
(51, 'S01', 'Sosej Ramly', 3, '1.99', '2023-06-28'),
(52, 'HB09', 'Hash brown', 5, '2.19', '2023-06-28');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `telno` varchar(11) NOT NULL,
  `address` varchar(70) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `role` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `telno`, `address`, `gender`, `role`) VALUES
(5, 'Ahmad Nazran', 'nazran808@gmail.com', 'nazran2001', '0104439067', 'Shah Alam', 'Male', 'admin'),
(6, 'Muhammad Hafizzul', 'muhammadhafizzul@gmail.com', 'hafizzul2001', '010432889', 'Kokdiang', 'Male', 'staff'),
(7, 'Megat Irfan Zackry', 'megatirfan@gmail.com', 'megat2001', '01115161474', 'Kuala Kangsar', 'Male', 'staff'),
(8, 'Muizzuddin', 'muizzuddin@gmail.com', 'muiz2001', '0123048995', 'Rembau', 'Male', 'staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
