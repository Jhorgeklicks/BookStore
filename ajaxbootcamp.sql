-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2020 at 11:51 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ajaxbootcamp`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `Book_Id` int(5) NOT NULL,
  `Book_name` varchar(30) NOT NULL,
  `Book_author` varchar(30) NOT NULL,
  `Book_price` int(5) NOT NULL,
  `User_ID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`Book_Id`, `Book_name`, `Book_author`, `Book_price`, `User_ID`) VALUES
(34, 'Introduction to Wireshark', 'Frank Jojo Forson', 45, 1),
(35, 'Python For Engineers', 'Bryan lamar Snr', 30, 1),
(36, 'CSS advanced Selectors', 'Elijah Blankson Turk', 23, 1),
(37, 'Data Science Course', 'KIm tai Loon', 45, 1);

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `img_Id` int(3) NOT NULL,
  `Image_name` varchar(40) NOT NULL,
  `User_ID` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`img_Id`, `Image_name`, `User_ID`) VALUES
(14, '1730595638algorithm.png', 1),
(15, '306077605bok.png', 1),
(16, '1548436443java.png', 1),
(17, '610607279php.png', 1),
(18, '3917405sys-pro.png', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(3) NOT NULL,
  `Fullname` varchar(17) NOT NULL,
  `Email` varchar(25) NOT NULL,
  `Password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `Fullname`, `Email`, `Password`) VALUES
(1, 'Jhorge Klicks', 'klicks@gmail.com', 'klicksGH'),
(2, 'Fred Odartey', 'papafred@yahoo.com', 'fred12345'),
(3, 'Mary May', 'may@instaco.com', 'hellooomar'),
(4, 'Brother Evans', 'evans234@gmail.com', 'qweryboy1'),
(5, 'Jared Guns', 'jaredguns@gmail.com', 'jared14red');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`Book_Id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`img_Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `Book_Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `img_Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
