-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: us-cdbr-azure-northcentral-b.cloudapp.net
-- Generation Time: Jul 27, 2016 at 02:39 AM
-- Server version: 5.5.45-log
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `titan_crm`
--

-- --------------------------------------------------------

--
-- Table structure for table `case_`
--

CREATE TABLE `case_` (
  `case_id` int(11) NOT NULL,
  `case_type_id` varchar(20) NOT NULL,
  `case_category_id` varchar(20) NOT NULL,
  `status_id` varchar(20) NOT NULL,
  `from_party_id` int(11) DEFAULT NULL,
  `priority` decimal(20,0) DEFAULT NULL,
  `case_date` datetime DEFAULT NULL,
  `response_required_date` datetime DEFAULT NULL,
  `case_name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `resolution_id` varchar(20) DEFAULT NULL,
  `created_by` varchar(100) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_`
--

INSERT INTO `case_` (`case_id`, `case_type_id`, `case_category_id`, `status_id`, `from_party_id`, `priority`, `case_date`, `response_required_date`, `case_name`, `description`, `resolution_id`, `created_by`, `created_date`, `updated_date`) VALUES
(1, 'RF_SUPPORT', 'CRCAT_NEW_PROB', 'CASE_ACCEPTED', 62, '5', '2016-05-28 12:31:26', '2016-05-28 12:31:26', 'Red light keeps flashing', 'Customer expects a few niceties first, before getting down to business', NULL, 'fullAdminDEF', '2016-05-28 12:31:26', '2016-06-11 14:35:28'),
(2, 'RF_BUGFIX', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 15, NULL, '2016-05-29 03:30:22', NULL, 'BigBugFix', 'fix major bugs!', NULL, 'contactOwnerABC', '2016-05-29 03:30:22', '2016-05-29 03:30:22'),
(3, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '5', '2016-06-07 01:07:36', '2016-06-07 01:07:36', 'what is case name doing', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:07:36', '2016-06-07 01:07:36'),
(4, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 91, '5', '2016-06-07 01:14:49', '2016-06-07 01:14:49', 'Dinesh testing addCase', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:14:49', '2016-06-07 01:14:49'),
(5, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 91, '5', '2016-06-07 01:16:38', '2016-06-07 01:16:38', 'Dinesh testing addCase', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:16:38', '2016-06-07 01:16:38'),
(6, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 91, '5', '2016-06-07 01:17:02', '2016-06-07 01:17:02', 'Dinesh testing addCase', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:17:02', '2016-06-07 01:17:02'),
(7, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 91, '5', '2016-06-07 01:17:15', '2016-06-07 01:17:15', 'Dinesh testing addCase', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:17:15', '2016-06-07 01:17:15'),
(8, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 91, '5', '2016-06-07 01:18:46', '2016-06-07 01:18:46', 'Dinesh testing addCase', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:18:46', '2016-06-07 01:18:46'),
(9, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '8', '2016-06-07 01:31:47', '2016-06-07 01:31:47', 'Dinesh testing addCase with intenal not3', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-07 01:31:47', '2016-06-07 01:31:47'),
(10, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '1', '2016-06-09 01:26:22', '2016-06-09 01:26:22', 'Dinesh testing addCase on Wed', 'Dinesh wants to add a case', NULL, 'fullAdminDEF', '2016-06-09 01:26:22', '2016-06-09 01:26:22'),
(11, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '1', '2016-06-09 01:30:33', '2016-06-09 01:30:33', 'Dinesh second testing addCase on Wed', 'Dinesh second add case post', NULL, 'fullAdminDEF', '2016-06-09 01:30:33', '2016-06-09 01:30:33'),
(12, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '1', '2016-06-09 01:55:27', '2016-06-09 01:55:27', 'Dinesh second testing addCase on Wed', 'Dinesh second add case post', NULL, 'fullAdminDEF', '2016-06-09 01:55:27', '2016-06-09 01:55:27'),
(13, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '1', '2016-06-09 02:04:00', '2016-06-09 02:04:00', 'Dinesh addCase 13', 'Dinesh 13 add case post', NULL, 'fullAdminDEF', '2016-06-09 02:04:00', '2016-06-09 02:04:00'),
(14, 'RF_FEATURE', 'CRCAT_NEW_PROB', 'CASE_ACCEPTED', 90, '3', '2016-06-09 02:04:00', '2016-06-29 02:04:00', 'Feature to fox problem for party_id = 90', 'Simplifying feature addresses new problem', NULL, 'fullAdminDEF', '2016-06-09 02:07:28', '2016-06-09 04:35:12'),
(15, 'RF_FEATURE', 'CRCAT_NEW_PROB', 'CASE_ACCEPTED', 90, '3', '2016-06-09 02:04:00', '2016-06-29 02:04:00', 'Feature to fix problem for party_id = 90', 'Simplifying feature addresses new problem', NULL, 'fullAdminDEF', '2016-06-10 21:05:55', '2016-06-11 11:33:20'),
(17, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 20, '5', '2016-06-10 21:06:00', '2016-06-10 21:06:00', 'what is case name doing', 'Customer wants a new system', NULL, 'contactOwnerABC', '2016-06-10 21:06:00', '2016-06-10 21:06:00'),
(18, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '5', '2016-06-10 21:06:37', '2016-06-10 21:06:37', 'what is case name doing', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(19, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 20, '5', '2016-06-10 21:06:37', '2016-06-10 21:06:37', 'what is case name doing', 'Customer wants a new system', NULL, 'contactOwnerABC', '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(20, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 58, '3', '2016-06-11 11:01:45', '2016-06-11 11:01:45', 'case for party_id = 58', 'red light will not flash', NULL, 'fullAdminDEF', '2016-06-11 11:01:45', '2016-06-11 11:01:45'),
(21, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 90, '5', '2016-06-11 11:04:42', '2016-06-11 11:04:42', 'what is case name doing', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-11 11:04:42', '2016-06-11 11:04:42'),
(23, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 20, '5', '2016-06-11 11:09:10', '2016-06-11 11:09:10', 'what is case name doing', 'Customer wants a new system', NULL, 'contactOwnerABC', '2016-06-11 11:09:10', '2016-06-11 11:09:10'),
(24, 'RF_FEATURE', 'CRCAT_NEW_PROB', 'CASE_SUBMITTED', 90, '3', '2016-06-09 02:04:00', '2016-06-29 02:04:00', 'Feature to fix problem for party_id = 90', 'fix status id incorrect', NULL, 'crmsfaContactTasksABC', '2016-06-11 14:10:07', '2016-06-11 14:31:21'),
(25, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 58, '5', '2016-06-11 14:15:59', '2016-06-11 14:15:59', 'what is case name doing', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-11 14:15:59', '2016-06-11 14:15:59'),
(26, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 58, '5', '2016-06-11 14:17:28', '2016-06-11 14:17:28', 'what is case name doing', 'Customer wants a new system', NULL, 'crmsfaContactTasksABC', '2016-06-11 14:17:28', '2016-06-11 14:17:28'),
(27, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 20, '5', '2016-06-17 11:53:10', '2016-06-17 11:53:10', 'what is case name doing', 'Customer wants a new system', NULL, 'contactOwnerABC', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(28, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 20, '5', '2016-06-29 19:26:22', '2016-06-29 19:26:22', 'what is case name doing', 'Customer wants a new system', NULL, 'contactOwnerABC', '2016-06-29 19:26:22', '2016-06-29 19:26:22'),
(29, 'RF_PROPOSAL', 'CRCAT_COMPLEX', 'CASE_ACCEPTED', 20, '5', '2016-06-29 19:28:19', '2016-06-29 19:28:19', 'what is case name doing', 'Customer wants a new system', NULL, 'contactOwnerABC', '2016-06-29 19:28:19', '2016-06-29 19:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `case_category`
--

CREATE TABLE `case_category` (
  `case_category_id` varchar(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_category`
--

INSERT INTO `case_category` (`case_category_id`, `description`, `created_date`, `updated_date`) VALUES
('CRCAT_COMPLEX', 'Complex functionality', '2016-05-22 03:22:07', '2016-05-22 03:22:07'),
('CRCAT_EXISTING_PROB', 'Existing problem', '2016-05-22 03:22:07', '2016-05-22 03:22:07'),
('CRCAT_INST_NOTCLEAR', 'Instructions not clear', '2016-05-22 03:22:07', '2016-05-22 03:22:07'),
('CRCAT_NEW_PROB', 'New problem', '2016-05-22 03:22:07', '2016-05-22 03:22:07'),
('CRCAT_NOTRAIN', 'User didn''t attend training', '2016-05-22 03:22:07', '2016-05-22 03:22:07');

-- --------------------------------------------------------

--
-- Table structure for table `case_note`
--

CREATE TABLE `case_note` (
  `case_id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_note`
--

INSERT INTO `case_note` (`case_id`, `note_id`, `created_date`, `updated_date`) VALUES
(3, 1, '2016-06-07 01:07:36', '2016-06-07 01:07:36'),
(6, 2, '2016-06-07 01:17:02', '2016-06-07 01:17:02'),
(9, 3, '2016-06-07 01:31:47', '2016-06-07 01:31:47'),
(10, 4, '2016-06-09 01:26:22', '2016-06-09 01:26:22'),
(11, 5, '2016-06-09 01:30:33', '2016-06-09 01:30:33'),
(12, 6, '2016-06-09 01:55:27', '2016-06-09 01:55:27'),
(13, 7, '2016-06-09 02:04:52', '2016-06-09 02:04:52'),
(14, 8, '2016-06-09 02:07:28', '2016-06-09 02:07:28'),
(15, 9, '2016-06-10 21:05:55', '2016-06-10 21:05:55'),
(17, 11, '2016-06-10 21:06:00', '2016-06-10 21:06:00'),
(18, 12, '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(19, 13, '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(20, 14, '2016-06-11 11:01:45', '2016-06-11 11:01:45'),
(21, 15, '2016-06-11 11:04:42', '2016-06-11 11:04:42'),
(23, 17, '2016-06-11 11:09:10', '2016-06-11 11:09:10'),
(24, 18, '2016-06-11 14:10:07', '2016-06-11 14:10:07'),
(25, 19, '2016-06-11 14:15:59', '2016-06-11 14:15:59'),
(26, 20, '2016-06-11 14:17:28', '2016-06-11 14:17:28'),
(27, 21, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(28, 22, '2016-06-29 19:26:22', '2016-06-29 19:26:22'),
(29, 23, '2016-06-29 19:28:19', '2016-06-29 19:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `case_resolution`
--

CREATE TABLE `case_resolution` (
  `case_resolution_id` varchar(20) NOT NULL,
  `case_type_id` varchar(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_resolution`
--

INSERT INTO `case_resolution` (`case_resolution_id`, `case_type_id`, `description`, `created_date`, `updated_date`) VALUES
('DUPLICATE', 'RF_FEATURE', 'Duplicate', '2016-04-30 23:54:33', '2016-04-30 23:54:33'),
('FIXED', 'RF_BUGFIX', 'Fixed', '2016-04-30 23:54:33', '2016-04-30 23:54:33'),
('IMPLEMENTED', 'RF_FEATURE', 'Implemented', '2016-04-30 23:54:33', '2016-04-30 23:54:33'),
('REJECTED', 'RF_FEATURE', 'Rejected', '2016-04-30 23:54:33', '2016-04-30 23:54:33'),
('WONTFIX', 'RF_BUGFIX', 'Won''t Fix', '2016-04-30 23:54:33', '2016-04-30 23:54:33'),
('WORKS', 'RF_BUGFIX', 'Works For Me', '2016-04-30 23:54:33', '2016-04-30 23:54:33');

-- --------------------------------------------------------

--
-- Table structure for table `case_role`
--

CREATE TABLE `case_role` (
  `case_id` int(11) NOT NULL,
  `party_id` int(11) NOT NULL,
  `role_type_id` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_role`
--

INSERT INTO `case_role` (`case_id`, `party_id`, `role_type_id`, `created_date`, `updated_date`) VALUES
(1, 4, 'PERSON_ROLE', '2016-05-28 12:36:18', '2016-05-28 12:36:18'),
(1, 62, 'CONTACT', '2016-05-28 12:35:17', '2016-05-28 12:35:17'),
(3, 90, 'CONTACT', '2016-06-07 01:07:36', '2016-06-07 01:07:36'),
(4, 91, 'CONTACT', '2016-06-07 01:14:49', '2016-06-07 01:14:49'),
(5, 91, 'CONTACT', '2016-06-07 01:16:38', '2016-06-07 01:16:38'),
(6, 91, 'CONTACT', '2016-06-07 01:17:02', '2016-06-07 01:17:02'),
(7, 91, 'CONTACT', '2016-06-07 01:17:15', '2016-06-07 01:17:15'),
(8, 91, 'CONTACT', '2016-06-07 01:18:46', '2016-06-07 01:18:46'),
(9, 90, 'CONTACT', '2016-06-07 01:31:47', '2016-06-07 01:31:47'),
(10, 90, 'CONTACT', '2016-06-09 01:26:22', '2016-06-09 01:26:22'),
(11, 90, 'CONTACT', '2016-06-09 01:30:33', '2016-06-09 01:30:33'),
(12, 90, 'CONTACT', '2016-06-09 01:55:27', '2016-06-09 01:55:27'),
(13, 90, 'CONTACT', '2016-06-09 02:04:00', '2016-06-09 02:04:00'),
(14, 90, 'CONTACT', '2016-06-09 02:07:28', '2016-06-09 02:07:28'),
(15, 90, 'CONTACT', '2016-06-10 21:05:55', '2016-06-10 21:05:55'),
(17, 20, 'CONTACT', '2016-06-10 21:06:00', '2016-06-10 21:06:00'),
(18, 90, 'CONTACT', '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(19, 20, 'CONTACT', '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(20, 58, 'CONTACT', '2016-06-11 11:01:45', '2016-06-11 11:01:45'),
(21, 90, 'CONTACT', '2016-06-11 11:04:42', '2016-06-11 11:04:42'),
(23, 20, 'CONTACT', '2016-06-11 11:09:10', '2016-06-11 11:09:10'),
(24, 58, 'CONTACT', '2016-06-11 14:10:07', '2016-06-11 14:10:07'),
(25, 58, 'CONTACT', '2016-06-11 14:15:59', '2016-06-11 14:15:59'),
(26, 58, 'CONTACT', '2016-06-11 14:17:28', '2016-06-11 14:17:28'),
(27, 20, 'CONTACT', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(28, 20, 'CONTACT', '2016-06-29 19:26:22', '2016-06-29 19:26:22'),
(29, 20, 'CONTACT', '2016-06-29 19:28:19', '2016-06-29 19:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `case_status`
--

CREATE TABLE `case_status` (
  `case_status_id` int(11) NOT NULL,
  `case_id` int(11) NOT NULL,
  `status_id` varchar(20) NOT NULL,
  `status_datetime` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_status`
--

INSERT INTO `case_status` (`case_status_id`, `case_id`, `status_id`, `status_datetime`, `created_date`, `updated_date`) VALUES
(1, 3, 'CASE_ACCEPTED', NULL, '2016-06-07 01:07:36', '2016-06-07 01:07:36'),
(2, 4, 'CASE_ACCEPTED', NULL, '2016-06-07 01:14:49', '2016-06-07 01:14:49'),
(3, 5, 'CASE_ACCEPTED', NULL, '2016-06-07 01:16:38', '2016-06-07 01:16:38'),
(4, 6, 'CASE_ACCEPTED', NULL, '2016-06-07 01:17:02', '2016-06-07 01:17:02'),
(5, 7, 'CASE_ACCEPTED', NULL, '2016-06-07 01:17:15', '2016-06-07 01:17:15'),
(6, 8, 'CASE_ACCEPTED', NULL, '2016-06-07 01:18:46', '2016-06-07 01:18:46'),
(7, 9, 'CASE_ACCEPTED', NULL, '2016-06-07 01:31:47', '2016-06-07 01:31:47'),
(8, 10, 'CASE_ACCEPTED', NULL, '2016-06-09 01:26:22', '2016-06-09 01:26:22'),
(9, 11, 'CASE_ACCEPTED', NULL, '2016-06-09 01:30:33', '2016-06-09 01:30:33'),
(10, 12, 'CASE_ACCEPTED', NULL, '2016-06-09 01:55:27', '2016-06-09 01:55:27'),
(11, 13, 'CASE_ACCEPTED', NULL, '2016-06-09 02:04:00', '2016-06-09 02:04:00'),
(12, 14, 'CASE_ACCEPTED', NULL, '2016-06-09 02:07:28', '2016-06-09 02:07:28'),
(13, 15, 'CASE_ACCEPTED', NULL, '2016-06-10 21:05:55', '2016-06-10 21:05:55'),
(14, 17, 'CASE_ACCEPTED', NULL, '2016-06-10 21:06:00', '2016-06-10 21:06:00'),
(15, 18, 'CASE_ACCEPTED', NULL, '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(16, 19, 'CASE_ACCEPTED', NULL, '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(17, 20, 'CASE_ACCEPTED', NULL, '2016-06-11 11:01:45', '2016-06-11 11:01:45'),
(18, 21, 'CASE_ACCEPTED', NULL, '2016-06-11 11:04:42', '2016-06-11 11:04:42'),
(19, 23, 'CASE_ACCEPTED', NULL, '2016-06-11 11:09:10', '2016-06-11 11:09:10'),
(20, 24, 'CASE_ACCEPTED', NULL, '2016-06-11 14:10:07', '2016-06-11 14:10:07'),
(21, 25, 'CASE_ACCEPTED', NULL, '2016-06-11 14:15:59', '2016-06-11 14:15:59'),
(22, 26, 'CASE_ACCEPTED', NULL, '2016-06-11 14:17:28', '2016-06-11 14:17:28'),
(23, 27, 'CASE_ACCEPTED', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(24, 28, 'CASE_ACCEPTED', NULL, '2016-06-29 19:26:22', '2016-06-29 19:26:22'),
(25, 29, 'CASE_ACCEPTED', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `case_type`
--

CREATE TABLE `case_type` (
  `case_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `case_type`
--

INSERT INTO `case_type` (`case_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('RF_BUGFIX', NULL, 0, 'Request For Bug Fix', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_CATALOG', NULL, 0, 'Request For Catalog', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_FEATURE', NULL, 0, 'Request For Feature', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_INFO', NULL, 0, 'Request For Information', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_PROPOSAL', NULL, 0, 'Request For Proposal', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_PUR_QUOTE', NULL, 0, 'Request For Purchase Quote', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_QUOTE', NULL, 0, 'Request For Quote', '2016-05-22 03:17:12', '2016-05-22 03:17:12'),
('RF_SUPPORT', NULL, 0, 'Request For Support', '2016-05-22 03:17:12', '2016-05-22 03:17:12');

-- --------------------------------------------------------

--
-- Table structure for table `contact_mech`
--

CREATE TABLE `contact_mech` (
  `contact_mech_id` int(11) NOT NULL,
  `contact_mech_type_id` varchar(20) NOT NULL,
  `info_string` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_mech`
--

INSERT INTO `contact_mech` (`contact_mech_id`, `contact_mech_type_id`, `info_string`, `created_date`, `updated_date`) VALUES
(1, 'EMAIL_ADDRESS', 'party56@nomail.com', '2016-05-28 00:49:02', '2016-05-28 00:49:02'),
(2, 'EMAIL_ADDRESS', 'sam@bbc.com', '2016-05-30 02:12:37', '2016-05-30 02:12:37'),
(3, 'EMAIL_ADDRESS', 'dcs.foyle@bbc.com', '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(4, 'WEB_ADDRESS', 'www.foyleswar.com', '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(5, 'EMAIL_ADDRESS', 'paul.milner@bbc.com', '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(6, 'WEB_ADDRESS', 'www.mywifeleftme.com', '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(7, 'TELECOM_NUMBER', NULL, '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(8, 'EMAIL_ADDRESS', 'walter.h.white@fring.com', '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(9, 'WEB_ADDRESS', 'www.savewalterwhite.com', '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(10, 'TELECOM_NUMBER', NULL, '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(11, 'EMAIL_ADDRESS', 'walter.h.white@fring.com', '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(12, 'WEB_ADDRESS', 'www.savewalterwhite.com', '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(13, 'POSTAL_ADDRESS', NULL, '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(14, 'EMAIL_ADDRESS', 'walter.h.white@fring.com', '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(15, 'WEB_ADDRESS', 'www.savewalterwhite.com', '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(16, 'TELECOM_NUMBER', NULL, '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(17, 'POSTAL_ADDRESS', NULL, '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(18, 'TELECOM_NUMBER', NULL, '2016-05-30 03:10:58', '2016-05-30 03:10:58'),
(19, 'POSTAL_ADDRESS', NULL, '2016-05-30 03:11:19', '2016-05-30 03:11:19'),
(20, 'TELECOM_NUMBER', NULL, '2016-05-30 03:25:45', '2016-05-30 03:25:45'),
(21, 'POSTAL_ADDRESS', NULL, '2016-05-30 03:26:37', '2016-05-30 03:26:37'),
(22, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(23, 'WEB_ADDRESS', 'robbert@gmail.com', '2016-05-31 16:12:20', '2016-06-29 19:28:19'),
(24, 'TELECOM_NUMBER', NULL, '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(25, 'POSTAL_ADDRESS', NULL, '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(26, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(27, 'WEB_ADDRESS', 'www.getdemented.com', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(28, 'TELECOM_NUMBER', NULL, '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(29, 'POSTAL_ADDRESS', NULL, '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(30, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(31, 'POSTAL_ADDRESS', NULL, '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(32, 'WEB_ADDRESS', 'www.getdemented.com', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(33, 'TELECOM_NUMBER', NULL, '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(34, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(35, 'WEB_ADDRESS', 'www.getdemented.com', '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(36, 'TELECOM_NUMBER', NULL, '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(37, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(38, 'WEB_ADDRESS', 'www.getdemented.com', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(39, 'POSTAL_ADDRESS', NULL, '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(40, 'TELECOM_NUMBER', NULL, '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(41, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(42, 'WEB_ADDRESS', 'www.getdemented.com', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(43, 'TELECOM_NUMBER', NULL, '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(44, 'POSTAL_ADDRESS', NULL, '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(45, 'EMAIL_ADDRESS', 'drdemento@ask.com', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(46, 'WEB_ADDRESS', 'www.getdemented.com', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(47, 'POSTAL_ADDRESS', NULL, '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(48, 'TELECOM_NUMBER', NULL, '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(49, 'EMAIL_ADDRESS', 'winston.churchill@uk.com', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(50, 'TELECOM_NUMBER', NULL, '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(51, 'WEB_ADDRESS', 'www.ilikecigars.com', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(52, 'POSTAL_ADDRESS', NULL, '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(53, 'TELECOM_NUMBER', NULL, '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(54, 'POSTAL_ADDRESS', NULL, '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(55, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(56, 'WEB_ADDRESS', 'www.snl.com', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(57, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(58, 'WEB_ADDRESS', 'www.snl.com', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(59, 'POSTAL_ADDRESS', NULL, '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(60, 'TELECOM_NUMBER', NULL, '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(61, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(62, 'WEB_ADDRESS', 'www.snl.com', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(63, 'POSTAL_ADDRESS', NULL, '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(64, 'TELECOM_NUMBER', NULL, '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(65, 'TELECOM_NUMBER', NULL, '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(66, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(67, 'WEB_ADDRESS', 'www.snl.com', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(68, 'POSTAL_ADDRESS', NULL, '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(69, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(70, 'WEB_ADDRESS', 'www.snl.com', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(71, 'POSTAL_ADDRESS', NULL, '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(72, 'TELECOM_NUMBER', NULL, '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(73, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(74, 'POSTAL_ADDRESS', NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(75, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(76, 'TELECOM_NUMBER', NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(77, 'TELECOM_NUMBER', NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(78, 'POSTAL_ADDRESS', NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(79, 'EMAIL_ADDRESS', 'sunitab@ask.com', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(80, 'WEB_ADDRESS', 'www.sunita.com', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(81, 'POSTAL_ADDRESS', NULL, '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(82, 'TELECOM_NUMBER', NULL, '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(83, 'EMAIL_ADDRESS', 'sunitab@ask.com', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(84, 'WEB_ADDRESS', 'www.sunita.com', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(85, 'TELECOM_NUMBER', NULL, '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(86, 'POSTAL_ADDRESS', NULL, '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(87, 'WEB_ADDRESS', 'www.sunita.com', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(88, 'EMAIL_ADDRESS', 'sunitab@ask.com', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(89, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(90, 'TELECOM_NUMBER', NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(91, 'POSTAL_ADDRESS', NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(92, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(93, 'TELECOM_NUMBER', NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(94, 'POSTAL_ADDRESS', NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(95, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(96, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(97, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-14 23:57:36', '2016-06-14 23:57:36'),
(98, 'TELECOM_NUMBER', NULL, '2016-06-14 23:57:36', '2016-06-14 23:57:36'),
(99, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-14 23:57:36', '2016-06-14 23:57:36'),
(100, 'POSTAL_ADDRESS', NULL, '2016-06-14 23:57:36', '2016-06-14 23:57:36'),
(101, 'TELECOM_NUMBER', NULL, '2016-06-14 23:57:37', '2016-06-14 23:57:37'),
(102, 'POSTAL_ADDRESS', NULL, '2016-06-14 23:57:37', '2016-06-14 23:57:37'),
(103, 'TELECOM_NUMBER', NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(104, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(105, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(106, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(107, 'TELECOM_NUMBER', NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(108, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(109, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(110, 'TELECOM_NUMBER', NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(111, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(112, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(113, 'TELECOM_NUMBER', NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(114, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(115, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(116, 'TELECOM_NUMBER', NULL, '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(117, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(118, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(119, 'TELECOM_NUMBER', NULL, '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(120, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:06:14', '2016-06-15 00:06:14'),
(121, 'TELECOM_NUMBER', NULL, '2016-06-15 00:06:51', '2016-06-15 00:06:51'),
(122, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:06:51', '2016-06-15 00:06:51'),
(123, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:06:51', '2016-06-15 00:06:51'),
(124, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:06:51', '2016-06-15 00:06:51'),
(125, 'TELECOM_NUMBER', NULL, '2016-06-15 00:06:55', '2016-06-15 00:06:55'),
(126, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:06:55', '2016-06-15 00:06:55'),
(127, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:07:28', '2016-06-15 00:07:28'),
(128, 'TELECOM_NUMBER', NULL, '2016-06-15 00:07:28', '2016-06-15 00:07:28'),
(129, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:07:28', '2016-06-15 00:07:28'),
(130, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:07:28', '2016-06-15 00:07:28'),
(131, 'TELECOM_NUMBER', NULL, '2016-06-15 00:07:35', '2016-06-15 00:07:35'),
(132, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:07:35', '2016-06-15 00:07:35'),
(133, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(134, 'TELECOM_NUMBER', NULL, '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(135, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(136, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(137, 'TELECOM_NUMBER', NULL, '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(138, 'POSTAL_ADDRESS', NULL, '2016-06-15 00:10:44', '2016-06-15 00:10:44'),
(139, 'TELECOM_NUMBER', NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(140, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(141, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(142, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(143, 'TELECOM_NUMBER', NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(144, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(145, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(146, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(147, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(148, 'TELECOM_NUMBER', NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(149, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(150, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(151, 'TELECOM_NUMBER', NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(152, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(153, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(154, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(155, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(156, 'TELECOM_NUMBER', NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(157, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(158, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(159, 'TELECOM_NUMBER', NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(160, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(161, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(162, 'TELECOM_NUMBER', NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(163, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(164, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(165, 'TELECOM_NUMBER', NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(166, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(167, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(168, 'TELECOM_NUMBER', NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(169, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(170, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(171, 'TELECOM_NUMBER', NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(172, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(173, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(174, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(175, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(176, 'TELECOM_NUMBER', NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(177, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(178, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(179, 'TELECOM_NUMBER', NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(180, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(181, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(182, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(183, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(184, 'TELECOM_NUMBER', NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(185, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(186, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(187, 'TELECOM_NUMBER', NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(188, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(189, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(190, 'TELECOM_NUMBER', NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(191, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(192, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(193, 'TELECOM_NUMBER', NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(194, 'POSTAL_ADDRESS', NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(195, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(196, 'TELECOM_NUMBER', NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(197, 'POSTAL_ADDRESS', NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(198, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(199, 'TELECOM_NUMBER', NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(200, 'POSTAL_ADDRESS', NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(201, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-15 23:56:40', '2016-06-15 23:56:40'),
(202, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-15 23:56:40', '2016-06-15 23:56:40'),
(203, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(204, 'TELECOM_NUMBER', NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(205, 'POSTAL_ADDRESS', NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(206, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(207, 'TELECOM_NUMBER', NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(208, 'POSTAL_ADDRESS', NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(209, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(210, 'TELECOM_NUMBER', NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(211, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(212, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(213, 'TELECOM_NUMBER', NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(214, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(215, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(216, 'TELECOM_NUMBER', NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(217, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(218, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(219, 'TELECOM_NUMBER', NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(220, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(221, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(222, 'TELECOM_NUMBER', NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(223, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(224, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(225, 'TELECOM_NUMBER', NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(226, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(227, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(228, 'TELECOM_NUMBER', NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(229, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(230, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(231, 'TELECOM_NUMBER', NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(232, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(233, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:28:04', '2016-06-16 00:28:04'),
(234, 'TELECOM_NUMBER', NULL, '2016-06-16 00:28:04', '2016-06-16 00:28:04'),
(235, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:28:04', '2016-06-16 00:28:04'),
(236, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:28:04', '2016-06-16 00:28:04'),
(237, 'TELECOM_NUMBER', NULL, '2016-06-16 00:28:05', '2016-06-16 00:28:05'),
(238, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:28:05', '2016-06-16 00:28:05'),
(239, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(240, 'TELECOM_NUMBER', NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(241, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(242, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(243, 'TELECOM_NUMBER', NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(244, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(245, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(246, 'TELECOM_NUMBER', NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(247, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(248, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(249, 'TELECOM_NUMBER', NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(250, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(251, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(252, 'TELECOM_NUMBER', NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(253, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(254, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(255, 'TELECOM_NUMBER', NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(256, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(257, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(258, 'TELECOM_NUMBER', NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(259, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(260, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(261, 'TELECOM_NUMBER', NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(262, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(263, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(264, 'TELECOM_NUMBER', NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(265, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(266, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(267, 'TELECOM_NUMBER', NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(268, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(269, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:59:33', '2016-06-16 00:59:33'),
(270, 'TELECOM_NUMBER', NULL, '2016-06-16 00:59:33', '2016-06-16 00:59:33'),
(271, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:59:33', '2016-06-16 00:59:33'),
(272, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 00:59:33', '2016-06-16 00:59:33'),
(273, 'TELECOM_NUMBER', NULL, '2016-06-16 00:59:34', '2016-06-16 00:59:34'),
(274, 'POSTAL_ADDRESS', NULL, '2016-06-16 00:59:34', '2016-06-16 00:59:34'),
(275, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(276, 'TELECOM_NUMBER', NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(277, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(278, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(279, 'TELECOM_NUMBER', NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(280, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(281, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(282, 'TELECOM_NUMBER', NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(283, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(284, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(285, 'TELECOM_NUMBER', NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(286, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(287, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(288, 'TELECOM_NUMBER', NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(289, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(290, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(291, 'TELECOM_NUMBER', NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(292, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(293, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(294, 'TELECOM_NUMBER', NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(295, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(296, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(297, 'TELECOM_NUMBER', NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(298, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(299, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(300, 'TELECOM_NUMBER', NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(301, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(302, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(303, 'TELECOM_NUMBER', NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(304, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(305, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(306, 'TELECOM_NUMBER', NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(307, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(308, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(309, 'TELECOM_NUMBER', NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(310, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(311, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(312, 'TELECOM_NUMBER', NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(313, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(314, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(315, 'TELECOM_NUMBER', NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(316, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(317, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(318, 'TELECOM_NUMBER', NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(319, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(320, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(321, 'TELECOM_NUMBER', NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(322, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(323, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(324, 'TELECOM_NUMBER', NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(325, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(326, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(327, 'TELECOM_NUMBER', NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(328, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(329, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(330, 'TELECOM_NUMBER', NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(331, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(332, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(333, 'TELECOM_NUMBER', NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(334, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(335, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(336, 'TELECOM_NUMBER', NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(337, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(338, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(339, 'TELECOM_NUMBER', NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(340, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(341, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(342, 'TELECOM_NUMBER', NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(343, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(344, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(345, 'TELECOM_NUMBER', NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(346, 'POSTAL_ADDRESS', NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(347, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(348, 'TELECOM_NUMBER', NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(349, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(350, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(351, 'TELECOM_NUMBER', NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(352, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(353, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(354, 'TELECOM_NUMBER', NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(355, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(356, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(357, 'TELECOM_NUMBER', NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(358, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(359, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:29:02', '2016-06-16 02:29:02'),
(360, 'TELECOM_NUMBER', NULL, '2016-06-16 02:29:02', '2016-06-16 02:29:02'),
(361, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:29:02', '2016-06-16 02:29:02'),
(362, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:29:02', '2016-06-16 02:29:02'),
(363, 'TELECOM_NUMBER', NULL, '2016-06-16 02:29:03', '2016-06-16 02:29:03'),
(364, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:29:03', '2016-06-16 02:29:03'),
(365, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(366, 'TELECOM_NUMBER', NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(367, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(368, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(369, 'TELECOM_NUMBER', NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(370, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(371, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(372, 'TELECOM_NUMBER', NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(373, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(374, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(375, 'TELECOM_NUMBER', NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(376, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(377, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(378, 'TELECOM_NUMBER', NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(379, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(380, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(381, 'TELECOM_NUMBER', NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(382, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(383, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(384, 'TELECOM_NUMBER', NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(385, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(386, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(387, 'TELECOM_NUMBER', NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(388, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(389, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(390, 'TELECOM_NUMBER', NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(391, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(392, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(393, 'TELECOM_NUMBER', NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(394, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(395, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(396, 'TELECOM_NUMBER', NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(397, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(398, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(399, 'TELECOM_NUMBER', NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(400, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(401, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(402, 'TELECOM_NUMBER', NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(403, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(404, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(405, 'TELECOM_NUMBER', NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(406, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(407, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(408, 'TELECOM_NUMBER', NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(409, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(410, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(411, 'TELECOM_NUMBER', NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(412, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(413, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(414, 'TELECOM_NUMBER', NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(415, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(416, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(417, 'TELECOM_NUMBER', NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(418, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(419, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(420, 'TELECOM_NUMBER', NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(421, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(422, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(423, 'TELECOM_NUMBER', NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(424, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(425, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(426, 'TELECOM_NUMBER', NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(427, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(428, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(429, 'TELECOM_NUMBER', NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(430, 'POSTAL_ADDRESS', NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(431, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(432, 'TELECOM_NUMBER', NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(433, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(434, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(435, 'TELECOM_NUMBER', NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(436, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(437, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(438, 'TELECOM_NUMBER', NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(439, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(440, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(441, 'TELECOM_NUMBER', NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(442, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(443, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(444, 'TELECOM_NUMBER', NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(445, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(446, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(447, 'TELECOM_NUMBER', NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(448, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(449, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(450, 'TELECOM_NUMBER', NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(451, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(452, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(453, 'TELECOM_NUMBER', NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(454, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(455, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(456, 'TELECOM_NUMBER', NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(457, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(458, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(459, 'TELECOM_NUMBER', NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(460, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(461, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(462, 'TELECOM_NUMBER', NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(463, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(464, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(465, 'TELECOM_NUMBER', NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(466, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(467, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(468, 'TELECOM_NUMBER', NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(469, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(470, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(471, 'TELECOM_NUMBER', NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(472, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(473, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(474, 'TELECOM_NUMBER', NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(475, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(476, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(477, 'TELECOM_NUMBER', NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(478, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(479, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(480, 'TELECOM_NUMBER', NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(481, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(482, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(483, 'TELECOM_NUMBER', NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(484, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(485, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(486, 'TELECOM_NUMBER', NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(487, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(488, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(489, 'TELECOM_NUMBER', NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(490, 'POSTAL_ADDRESS', NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(491, 'EMAIL_ADDRESS', 'hal@zero.com', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(492, 'WEB_ADDRESS', 'www.hallindsey.com', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(493, 'TELECOM_NUMBER', NULL, '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(494, 'POSTAL_ADDRESS', NULL, '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(495, 'EMAIL_ADDRESS', 'hal@zero.com', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(496, 'WEB_ADDRESS', 'www.hallindsey.com', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(497, 'TELECOM_NUMBER', NULL, '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(498, 'POSTAL_ADDRESS', NULL, '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(499, 'EMAIL_ADDRESS', 'astroshenoy@gmail.com', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(500, 'WEB_ADDRESS', 'www.dineshshenoy.com', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(501, 'TELECOM_NUMBER', NULL, '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(502, 'POSTAL_ADDRESS', NULL, '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(503, 'WEB_ADDRESS', 'www.ilovemovies.com', '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(504, 'POSTAL_ADDRESS', NULL, '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(505, 'EMAIL_ADDRESS', 'raj.kumar@bollywood.com', '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(506, 'TELECOM_NUMBER', NULL, '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(507, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(508, 'TELECOM_NUMBER', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(509, 'POSTAL_ADDRESS', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(510, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(511, 'TELECOM_NUMBER', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(512, 'POSTAL_ADDRESS', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(513, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(514, 'TELECOM_NUMBER', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(515, 'POSTAL_ADDRESS', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(516, 'WEB_ADDRESS', 'www.snl.com', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(517, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(518, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(519, 'EMAIL_ADDRESS', 'gabe.shenoy@coolmail.com', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(520, 'WEB_ADDRESS', 'www.youneedhelp.com', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(521, 'TELECOM_NUMBER', NULL, '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(522, 'POSTAL_ADDRESS', NULL, '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(523, 'EMAIL_ADDRESS', 'moses.johnson@liberia.co', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(524, 'WEB_ADDRESS', 'www.freeliberia.com', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(525, 'TELECOM_NUMBER', NULL, '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(526, 'POSTAL_ADDRESS', NULL, '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(527, 'EMAIL_ADDRESS', 'joan.rivers@nbc.com', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(528, 'WEB_ADDRESS', 'www.nbc.com/joanrivers', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(529, 'TELECOM_NUMBER', NULL, '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(530, 'POSTAL_ADDRESS', NULL, '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(531, 'POSTAL_ADDRESS', NULL, '2016-06-17 16:31:02', '2016-06-17 16:31:02'),
(532, 'POSTAL_ADDRESS', NULL, '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(533, 'EMAIL_ADDRESS', 'magic@johnson.com', '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(534, 'TELECOM_NUMBER', NULL, '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(535, 'POSTAL_ADDRESS', NULL, '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(536, 'EMAIL_ADDRESS', 'reena@email.com', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(537, 'WEB_ADDRESS', 'www.google.com', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(538, 'TELECOM_NUMBER', NULL, '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(539, 'POSTAL_ADDRESS', NULL, '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(540, 'POSTAL_ADDRESS', NULL, '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(541, 'TELECOM_NUMBER', NULL, '2016-06-18 15:45:28', '2016-06-18 15:45:28'),
(542, 'WEB_ADDRESS', 'www.google.com', '2016-06-18 19:04:42', '2016-06-18 19:04:42'),
(543, 'POSTAL_ADDRESS', NULL, '2016-06-19 00:59:36', '2016-06-19 00:59:36'),
(544, 'TELECOM_NUMBER', NULL, '2016-06-19 00:59:36', '2016-06-19 00:59:36'),
(545, 'POSTAL_ADDRESS', NULL, '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(546, 'EMAIL_ADDRESS', 'hal@zero.com', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(547, 'WEB_ADDRESS', 'www.hallindsey.com', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(548, 'TELECOM_NUMBER', NULL, '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(549, 'POSTAL_ADDRESS', NULL, '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(550, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:03:03', '2016-06-19 17:03:03'),
(551, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:05:27', '2016-06-19 17:05:27'),
(552, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(553, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:07:55', '2016-06-19 17:07:55'),
(554, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(555, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(556, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(557, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:17:39', '2016-06-19 17:17:39'),
(558, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:25:38', '2016-06-19 17:25:38'),
(559, 'POSTAL_ADDRESS', NULL, '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(560, 'EMAIL_ADDRESS', 'Julia@jones', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(561, 'POSTAL_ADDRESS', NULL, '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(562, 'WEB_ADDRESS', 'thisIsABadWebAddress', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(563, 'EMAIL_ADDRESS', 'neville@hogwarts.edu', '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(564, 'WEB_ADDRESS', 'www.herbology.is.fun.net', '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(565, 'TELECOM_NUMBER', NULL, '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(566, 'EMAIL_ADDRESS', 'leadgal@yahoo.com', '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(567, 'TELECOM_NUMBER', NULL, '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(568, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(569, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(570, 'TELECOM_NUMBER', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(571, 'POSTAL_ADDRESS', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(572, 'TELECOM_NUMBER', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(573, 'POSTAL_ADDRESS', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(574, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(575, 'TELECOM_NUMBER', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(576, 'POSTAL_ADDRESS', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(577, 'WEB_ADDRESS', 'www.snl.com', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(578, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(579, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(580, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(581, 'TELECOM_NUMBER', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(582, 'POSTAL_ADDRESS', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(583, 'EMAIL_ADDRESS', 'bob@gmail.com', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(584, 'TELECOM_NUMBER', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(585, 'POSTAL_ADDRESS', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(586, 'EMAIL_ADDRESS', 'pete.davis@gmail.com', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(587, 'WEB_ADDRESS', 'www.snl.com', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(588, 'POSTAL_ADDRESS', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(589, 'TELECOM_NUMBER', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(590, 'EMAIL_ADDRESS', 'marilyn.monroe<3president@yahoo.com', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(591, 'WEB_ADDRESS', 'marilyn.kennedy.com', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(592, 'EMAIL_ADDRESS', 'jane@gmail.com', '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(593, 'TELECOM_NUMBER', NULL, '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(594, 'TELECOM_NUMBER', NULL, '2016-07-08 00:45:45', '2016-07-08 00:45:45'),
(595, 'EMAIL_ADDRESS', 'john@gmail.com', '2016-07-10 14:57:27', '2016-07-10 14:57:27'),
(596, 'TELECOM_NUMBER', NULL, '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(597, 'POSTAL_ADDRESS', NULL, '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(598, 'TELECOM_NUMBER', NULL, '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(599, 'WEB_ADDRESS', 'www.marktwain.com', '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(600, 'EMAIL_ADDRESS', 'tom@auntpolly.net', '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(601, 'TELECOM_NUMBER', NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(602, 'POSTAL_ADDRESS', NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(603, 'EMAIL_ADDRESS', 'james.potter@hogwarts.edu', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(604, 'WEB_ADDRESS', 'www.diagonalley.com', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(605, 'EMAIL_ADDRESS', 'lily.evans@hogwarts.edu', '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(606, 'WEB_ADDRESS', 'www.hogwarts.edu', '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(607, 'POSTAL_ADDRESS', NULL, '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(608, 'TELECOM_NUMBER', NULL, '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(609, 'EMAIL_ADDRESS', 'susan.b.anthony@rochester.ny.us', '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(610, 'WEB_ADDRESS', 'www.votesforwomen.com', '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(611, 'POSTAL_ADDRESS', NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(612, 'TELECOM_NUMBER', NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(613, 'EMAIL_ADDRESS', 'elizabeth.c.stanton@freedom.us', '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(614, 'WEB_ADDRESS', 'www.votesforwomen.com', '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(615, 'TELECOM_NUMBER', NULL, '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(621, 'EMAIL_ADDRESS', 'connie@gmail.net', '2016-07-23 02:02:55', '2016-07-23 02:02:55'),
(631, 'EMAIL_ADDRESS', 'phil@ask.com', '2016-07-23 03:21:07', '2016-07-23 03:21:07'),
(641, 'WEB_ADDRESS', 'www.nohome.com', '2016-07-23 03:21:07', '2016-07-23 03:21:07'),
(651, 'WEB_ADDRESS', 'www.eatwell.com', '2016-07-23 03:26:57', '2016-07-23 03:26:57'),
(661, 'TELECOM_NUMBER', NULL, '2016-07-23 03:26:57', '2016-07-23 03:26:57'),
(671, 'WEB_ADDRESS', 'www.eatwell.com', '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(681, 'TELECOM_NUMBER', NULL, '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(682, 'WEB_ADDRESS', 'www.beard-on-bread.com', '2016-07-23 04:14:26', '2016-07-23 04:14:26'),
(691, 'EMAIL_ADDRESS', 'archie.cox@westminster.uk', '2016-07-24 14:57:40', '2016-07-24 14:57:40');
INSERT INTO `contact_mech` (`contact_mech_id`, `contact_mech_type_id`, `info_string`, `created_date`, `updated_date`) VALUES
(701, 'EMAIL_ADDRESS', 'john@gmail.com', '2016-07-25 17:14:14', '2016-07-25 17:14:14'),
(711, 'EMAIL_ADDRESS', 'ts@gmail.com', '2016-07-25 18:24:29', '2016-07-25 18:24:29'),
(721, 'EMAIL_ADDRESS', 'hu.shih@china.gov', '2016-07-25 22:05:44', '2016-07-25 22:05:44'),
(731, 'WEB_ADDRESS', 'www.china.gov', '2016-07-25 22:05:44', '2016-07-25 22:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `contact_mech_purpose_type`
--

CREATE TABLE `contact_mech_purpose_type` (
  `contact_mech_purpose_type_id` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_mech_purpose_type`
--

INSERT INTO `contact_mech_purpose_type` (`contact_mech_purpose_type_id`, `description`, `created_date`, `updated_date`) VALUES
('BILLING_EMAIL', 'Billing (AP) Email', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('BILLING_LOCATION', 'Billing (AP) Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('FAX_NUMBER', 'Main Fax Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('FAX_NUMBER_SEC', 'Secondary Fax Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('GENERAL_LOCATION', 'General Correspondence Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('HOME_LOCATION', 'Home Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('MARKETING_EMAIL', 'Primary Marketing Email Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('ORDER_EMAIL', 'Order Notification Email Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('OTHER_EMAIL', 'Other Email Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('OTHER_LOCATION', 'Other Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PAYMENT_EMAIL', 'Payment (AR) Email', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PAYMENT_LOCATION', 'Payment (AR) Address', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_ASSISTANT', 'Assistant''s Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_BILLING', 'Billing (AP) Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_HOME', 'Main Home Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_HOME_SEC', 'Alternative Home Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_MOBILE', 'Main Mobile Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_PAYMENT', 'Payment (AR) Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_QUICK', 'Quick Calls Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_SHIPPING', 'Shipping Destination Phone Number', '2016-05-08 01:33:29', '2016-05-08 01:33:29'),
('PHONE_WORK', 'Main Work Phone Number', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PHONE_WORK_SEC', 'Secondary Work Phone Number', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PO_DELIV_ADDRESS', 'Purchase Order Delivery Address', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PREVIOUS_LOCATION', 'Previous Address', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PRIMARY_EMAIL', 'Primary Email Address', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PRIMARY_LOCATION', 'Primary Address', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PRIMARY_PHONE', 'Primary Phone Number', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('PRIMARY_WEB_URL', 'Primary Website URL', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('SHIPPING_LOCATION', 'Shipping Destination Address', '2016-05-08 01:35:55', '2016-05-08 01:35:55'),
('SHIP_ORIG_LOCATION', 'Shipping Origin Address', '2016-05-08 01:35:55', '2016-05-08 01:35:55');

-- --------------------------------------------------------

--
-- Table structure for table `contact_mech_type`
--

CREATE TABLE `contact_mech_type` (
  `contact_mech_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_mech_type`
--

INSERT INTO `contact_mech_type` (`contact_mech_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('DOMAIN_NAME', 'ELECTRONIC_ADDRESS', 0, 'Internet Domain Name', '2016-05-08 00:05:27', '2016-05-08 00:05:27'),
('ELECTRONIC_ADDRESS', NULL, 0, 'Electronic Address (parent type)', '2016-05-08 00:05:27', '2016-05-08 00:05:27'),
('EMAIL_ADDRESS', 'ELECTRONIC_ADDRESS', 0, 'Email Address', '2016-05-08 00:07:19', '2016-05-08 00:07:19'),
('IP_ADDRESS', 'ELECTRONIC_ADDRESS', 0, 'Internet IP Address', '2016-05-08 00:07:19', '2016-05-08 00:07:19'),
('POSTAL_ADDRESS', NULL, 1, 'Postal Address', '2016-05-08 00:07:19', '2016-05-08 00:07:19'),
('SKYPE', 'ELECTRONIC_ADDRESS', 0, 'Skype', '2016-05-08 00:05:27', '2016-05-08 00:05:27'),
('TELECOM_NUMBER', NULL, 1, 'Phone Number', '2016-05-08 00:05:27', '2016-05-08 00:05:27'),
('WEB_ADDRESS', 'ELECTRONIC_ADDRESS', 0, 'Web URL/Address', '2016-05-08 00:05:27', '2016-05-08 00:05:27');

-- --------------------------------------------------------

--
-- Table structure for table `contact_mech_type_purpose`
--

CREATE TABLE `contact_mech_type_purpose` (
  `contact_mech_type_id` varchar(20) NOT NULL,
  `contact_mech_purpose_type_id` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact_mech_type_purpose`
--

INSERT INTO `contact_mech_type_purpose` (`contact_mech_type_id`, `contact_mech_purpose_type_id`, `created_date`, `updated_date`) VALUES
('EMAIL_ADDRESS', 'BILLING_EMAIL', '2016-05-08 03:04:22', '2016-05-08 03:04:22'),
('EMAIL_ADDRESS', 'MARKETING_EMAIL', '2016-05-08 03:04:37', '2016-05-08 03:04:37'),
('EMAIL_ADDRESS', 'ORDER_EMAIL', '2016-05-08 03:04:48', '2016-05-08 03:04:48'),
('EMAIL_ADDRESS', 'OTHER_EMAIL', '2016-05-08 03:04:59', '2016-05-08 03:04:59'),
('EMAIL_ADDRESS', 'PAYMENT_EMAIL', '2016-05-08 03:07:40', '2016-05-08 03:07:40'),
('EMAIL_ADDRESS', 'PRIMARY_EMAIL', '2016-05-08 03:07:51', '2016-05-08 03:07:51'),
('POSTAL_ADDRESS', 'BILLING_LOCATION', '2016-05-08 03:07:58', '2016-05-08 03:07:58'),
('POSTAL_ADDRESS', 'GENERAL_LOCATION', '2016-05-08 03:08:06', '2016-05-08 03:08:06'),
('POSTAL_ADDRESS', 'PAYMENT_LOCATION', '2016-05-08 03:08:13', '2016-05-08 03:08:13'),
('POSTAL_ADDRESS', 'PO_DELIV_ADDRESS', '2016-05-08 03:08:21', '2016-05-08 03:08:21'),
('POSTAL_ADDRESS', 'PREVIOUS_LOCATION', '2016-05-08 03:08:28', '2016-05-08 03:08:28'),
('POSTAL_ADDRESS', 'PRIMARY_LOCATION', '2016-05-08 03:08:33', '2016-05-08 03:08:33'),
('POSTAL_ADDRESS', 'SHIPPING_LOCATION', '2016-05-08 03:08:39', '2016-05-08 03:08:39'),
('POSTAL_ADDRESS', 'SHIP_ORIG_LOCATION', '2016-05-08 03:08:46', '2016-05-08 03:08:46'),
('TELECOM_NUMBER', 'FAX_NUMBER', '2016-05-08 03:09:21', '2016-05-08 03:09:21'),
('TELECOM_NUMBER', 'FAX_NUMBER_SEC', '2016-05-08 03:09:32', '2016-05-08 03:09:32'),
('TELECOM_NUMBER', 'PHONE_BILLING', '2016-05-08 03:10:42', '2016-05-08 03:10:42'),
('TELECOM_NUMBER', 'PHONE_HOME', '2016-05-08 03:10:48', '2016-05-08 03:10:48'),
('TELECOM_NUMBER', 'PHONE_MOBILE', '2016-05-08 03:10:55', '2016-05-08 03:10:55'),
('TELECOM_NUMBER', 'PHONE_PAYMENT', '2016-05-08 03:11:01', '2016-05-08 03:11:01'),
('TELECOM_NUMBER', 'PHONE_QUICK', '2016-05-08 03:11:09', '2016-05-08 03:11:09'),
('TELECOM_NUMBER', 'PHONE_SHIPPING', '2016-05-08 03:11:20', '2016-05-08 03:11:20'),
('TELECOM_NUMBER', 'PHONE_WORK', '2016-05-08 03:11:27', '2016-05-08 03:11:27'),
('TELECOM_NUMBER', 'PHONE_WORK_SEC', '2016-05-08 03:11:33', '2016-05-08 03:11:33'),
('TELECOM_NUMBER', 'PRIMARY_PHONE', '2016-05-08 03:11:38', '2016-05-08 03:11:38'),
('WEB_ADDRESS', 'PRIMARY_WEB_URL', '2016-05-08 03:12:11', '2016-05-08 03:12:11');

-- --------------------------------------------------------

--
-- Table structure for table `data_source`
--

CREATE TABLE `data_source` (
  `data_source_id` varchar(20) NOT NULL,
  `data_source_type_id` varchar(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_source`
--

INSERT INTO `data_source` (`data_source_id`, `data_source_type_id`, `description`, `created_date`, `updated_date`) VALUES
('LEAD_COLDCALL', 'LEAD_GENERATION', 'Cold Call', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_CONFERENCE', 'LEAD_GENERATION', 'Conference', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_DIRECTMAIL', 'LEAD_GENERATION', 'Direct Mail', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_EMPLOYEE', 'LEAD_GENERATION', 'Employee', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_EXISTCUST', 'LEAD_GENERATION', 'Existing Customer', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_OTHER', 'LEAD_GENERATION', 'Other', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_PARTNER', 'LEAD_GENERATION', 'Partner', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_PR', 'LEAD_GENERATION', 'Public Relations', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_SELFGEN', 'LEAD_GENERATION', 'Self Generated', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_TRADESHOW', 'LEAD_GENERATION', 'Tradeshow', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_WEBSITE', 'LEAD_GENERATION', 'Website', '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('LEAD_WORDOFMOUTH', 'LEAD_GENERATION', 'Word of Mouth', '2016-04-30 23:59:20', '2016-04-30 23:59:20');

-- --------------------------------------------------------

--
-- Table structure for table `data_source_type`
--

CREATE TABLE `data_source_type` (
  `data_source_type_id` varchar(20) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `data_source_type`
--

INSERT INTO `data_source_type` (`data_source_type_id`, `description`, `created_date`, `updated_date`) VALUES
('LEAD_GENERATION', 'Lead generation sources', '2016-05-10 16:06:00', '2016-05-10 16:06:00'),
('LEAD_SOURCE', 'Lead Source', '2016-05-10 16:06:00', '2016-05-10 16:06:00');

-- --------------------------------------------------------

--
-- Table structure for table `enumeration`
--

CREATE TABLE `enumeration` (
  `enum_id` varchar(20) NOT NULL,
  `enum_type_id` varchar(20) NOT NULL,
  `enum_code` varchar(60) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `parent_enum_id` varchar(20) DEFAULT NULL,
  `disabled` tinyint(1) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enumeration`
--

INSERT INTO `enumeration` (`enum_id`, `enum_type_id`, `enum_code`, `description`, `parent_enum_id`, `disabled`, `created_date`, `updated_date`) VALUES
('IND_AEROSPACE', 'PARTY_INDUSTRY', 'AEROSPACE', 'Aerospace', NULL, NULL, '2016-05-01 00:01:59', '2016-05-01 00:01:59'),
('IND_DISTRIBUTION', 'PARTY_INDUSTRY', 'DISTRIBUTION', 'Distribution', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_ETAILER', 'PARTY_INDUSTRY', 'ETAILER', 'E-tailer', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_FINANCE', 'PARTY_INDUSTRY', 'FINANCE', 'Finance', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_GEN_SERVICES', 'PARTY_INDUSTRY', 'SERVICES', 'General Services', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_HARDWARE', 'PARTY_INDUSTRY', 'HARDWRE', 'Computer Hardware', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_HEALTH_CARE', 'PARTY_INDUSTRY', 'HEALTH_CARE', 'Health Care', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_INSURANCE', 'PARTY_INDUSTRY', 'INSURANCE', 'Insurance', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_MANUFACTURING', 'PARTY_INDUSTRY', 'MANUFACTURING', 'Manufacturing', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_MEDIA', 'PARTY_INDUSTRY', 'MEDIA', 'Media', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_NON_PROFIT', 'PARTY_INDUSTRY', 'NON_PROFIT', 'Non-profit', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_PRESS', 'PARTY_INDUSTRY', 'PRESS', 'Press', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_REAL_ESTATE', 'PARTY_INDUSTRY', 'REAL_ESTATE', 'Real Estate', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_RETAIL', 'PARTY_INDUSTRY', 'RETAIL', 'Retail', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_SOFTWARE', 'PARTY_INDUSTRY', 'SOFTWARE', 'Computer Software', NULL, NULL, '2016-04-30 23:59:20', '2016-04-30 23:59:20'),
('IND_TELECOM', 'PARTY_INDUSTRY', 'TELECOM', 'Telecommunications', NULL, NULL, '2016-05-01 00:01:59', '2016-05-01 00:01:59'),
('OWN_CCORP', 'PARTY_OWNERSHIP', 'CCORP', 'Corporation', NULL, NULL, '2016-05-10 15:50:46', '2016-05-10 15:50:46'),
('OWN_LLC_LLP', 'PARTY_OWNERSHIP', '', '', NULL, NULL, '2016-05-10 15:50:46', '2016-05-10 15:50:46'),
('OWN_PARTNERSHIP', 'PARTY_OWNERSHIP', 'PARTNERSHIP', 'Partnership', NULL, NULL, '2016-05-10 15:50:46', '2016-05-10 15:50:46'),
('OWN_PROPRIETOR', 'PARTY_OWNERSHIP', 'PROPRIETOR', 'Sole Proprietorship', NULL, NULL, '2016-05-10 15:50:46', '2016-05-10 15:50:46'),
('OWN_PUBLIC_CORP', 'PARTY_OWNERSHIP', 'PUBLIC_CORP', 'Public Corporation', NULL, NULL, '2016-05-10 15:50:46', '2016-05-10 15:50:46'),
('OWN_SCORP', 'PARTY_OWNERSHIP', 'SCORP', 'S-Corporation', NULL, NULL, '2016-05-10 15:50:46', '2016-05-10 15:50:46');

-- --------------------------------------------------------

--
-- Table structure for table `enumeration_type`
--

CREATE TABLE `enumeration_type` (
  `enum_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enumeration_type`
--

INSERT INTO `enumeration_type` (`enum_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('PARTY_INDUSTRY', NULL, 0, 'Industry', '2016-05-10 14:42:07', '2016-05-10 14:42:07'),
('PARTY_OWNERSHIP', NULL, 0, 'Ownership types', '2016-05-10 14:42:07', '2016-05-10 14:42:07');

-- --------------------------------------------------------

--
-- Table structure for table `geo`
--

CREATE TABLE `geo` (
  `geo_id` varchar(20) NOT NULL,
  `geo_type_id` varchar(20) DEFAULT NULL,
  `geo_name` varchar(100) DEFAULT NULL,
  `geo_code` varchar(60) DEFAULT NULL,
  `geo_sec_code` varchar(60) DEFAULT NULL,
  `abbreviation` varchar(60) DEFAULT NULL,
  `well_known_text` longtext,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `geo`
--

INSERT INTO `geo` (`geo_id`, `geo_type_id`, `geo_name`, `geo_code`, `geo_sec_code`, `abbreviation`, `well_known_text`, `created_date`, `updated_date`) VALUES
('AA', 'STATE', 'Armed Forces Americas', 'AA', NULL, 'AA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AB', 'PROVINCE', 'Alberta', 'AB', NULL, 'AB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('ABW', 'COUNTRY', 'Aruba', 'AW', '533', 'ABW', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AE', 'STATE', 'Armed Forces Europe', 'AE', NULL, 'AE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AFG', 'COUNTRY', 'Afghanistan', 'AF', '004', 'AFG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AGO', 'COUNTRY', 'Angola', 'AO', '024', 'AGO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AHUST', 'GROUP', 'Alaska/Hawaii/Territories', 'AHUST', NULL, 'AHUST', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AIA', 'COUNTRY', 'Anguilla', 'AI', '660', 'AIA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AK', 'STATE', 'Alaska', 'AK', NULL, 'AK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AKHI', 'GROUP', 'Alaska/Hawaii', 'AKHI', NULL, 'AKHI', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AL', 'STATE', 'Alabama', 'AL', NULL, 'AL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('ALB', 'COUNTRY', 'Albania', 'AL', '008', 'ALB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AND', 'COUNTRY', 'Andorra', 'AD', '020', 'AND', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ANT', 'COUNTRY', 'Netherlands Antilles', 'AN', '530', 'ANT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AP', 'STATE', 'Armed Forces Pacific', 'AP', NULL, 'AP', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AR', 'STATE', 'Arkansas', 'AR', NULL, 'AR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('ARE', 'COUNTRY', 'United Arab Emirates', 'AE', '784', 'ARE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ARG', 'COUNTRY', 'Argentina', 'AR', '032', 'ARG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ARM', 'COUNTRY', 'Armenia', 'AM', '051', 'ARM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AS', 'STATE', 'American Samoa', 'AS', NULL, 'AS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('ASM', 'COUNTRY', 'American Samoa', 'AS', '016', 'ASM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ATA', 'COUNTRY', 'Antarctica', 'AQ', '010', 'ATA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ATF', 'COUNTRY', 'French Southern Territories', 'TF', '260', 'ATF', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ATG', 'COUNTRY', 'Antigua And Barbuda', 'AG', '028', 'ATG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-ACT', 'TERRITORY', 'Australian Capital Territory', 'ACT', NULL, 'ACT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-NSW', 'STATE', 'New South Wales', 'NSW', NULL, 'NSW', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-NT', 'TERRITORY', 'Northern Territory', 'NT', NULL, 'NT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-QLD', 'STATE', 'Queensland', 'QLD', NULL, 'QLD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-SA', 'STATE', 'South Australia', 'SA', NULL, 'SA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-TAS', 'STATE', 'Tasmania', 'TAS', NULL, 'TAS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-VIC', 'STATE', 'Victoria', 'VIC', NULL, 'VIC', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AU-WA', 'STATE', 'Western Australia', 'WA', NULL, 'WA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AUS', 'COUNTRY', 'Australia', 'AU', '036', 'AUS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AUT', 'COUNTRY', 'Austria', 'AT', '040', 'AUT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AZ', 'STATE', 'Arizona', 'AZ', NULL, 'AZ', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('AZE', 'COUNTRY', 'Azerbaijan', 'AZ', '031', 'AZE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BC', 'PROVINCE', 'British Columbia', 'BC', NULL, 'BC', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('BDI', 'COUNTRY', 'Burundi', 'BI', '108', 'BDI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BEL', 'COUNTRY', 'Belgium', 'BE', '056', 'BEL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BEN', 'COUNTRY', 'Benin', 'BJ', '204', 'BEN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BFA', 'COUNTRY', 'Burkina Faso', 'BF', '854', 'BFA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-01', 'PROVINCE', 'Blagoevgrad', '01', NULL, 'E', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-02', 'PROVINCE', 'Burgas', '02', NULL, 'A', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-03', 'PROVINCE', 'Varna', '03', NULL, 'B', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-04', 'PROVINCE', 'Veliko Tarnovo', '04', NULL, 'BT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-05', 'PROVINCE', 'Vidin', '05', NULL, 'BH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-06', 'PROVINCE', 'Vratsa', '06', NULL, 'BP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-07', 'PROVINCE', 'Gabrovo', '07', NULL, 'EB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-08', 'PROVINCE', 'Dobrich', '08', NULL, 'TX', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-09', 'PROVINCE', 'Kardzhali', '09', NULL, 'K', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-10', 'PROVINCE', 'Kyustendil', '10', NULL, 'KH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-11', 'PROVINCE', 'Lovech', '11', NULL, 'OB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-12', 'PROVINCE', 'Montana', '12', NULL, 'M', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-13', 'PROVINCE', 'Pazardzhik', '13', NULL, 'PA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-14', 'PROVINCE', 'Pernik', '14', NULL, 'PK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-15', 'PROVINCE', 'Pleven', '15', NULL, 'EH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-16', 'PROVINCE', 'Plovdiv', '16', NULL, 'PB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-17', 'PROVINCE', 'Razgrad', '17', NULL, 'PP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-18', 'PROVINCE', 'Ruse', '18', NULL, 'P', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-19', 'PROVINCE', 'Silistra', '19', NULL, 'CC', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-20', 'PROVINCE', 'Sliven', '20', NULL, 'CH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-21', 'PROVINCE', 'Smolyan', '21', NULL, 'CM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-22', 'PROVINCE', 'Sofia', '22', NULL, 'C', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-23', 'PROVINCE', 'Sofia Province', '23', NULL, 'CO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-24', 'PROVINCE', 'Stara Zagora', '24', NULL, 'CT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-25', 'PROVINCE', 'Targovishte', '25', NULL, 'T', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-26', 'PROVINCE', 'Haskovo', '26', NULL, 'X', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-27', 'PROVINCE', 'Shumen', '27', NULL, 'H', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BG-28', 'PROVINCE', 'Yambol', '28', NULL, 'Y', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BGD', 'COUNTRY', 'Bangladesh', 'BD', '050', 'BGD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BGR', 'COUNTRY', 'Bulgaria', 'BG', '100', 'BGR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BHR', 'COUNTRY', 'Bahrain', 'BH', '048', 'BHR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BHS', 'COUNTRY', 'Bahamas', 'BS', '044', 'BHS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BIH', 'COUNTRY', 'Bosnia And Herzegowina', 'BA', '070', 'BIH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BLR', 'COUNTRY', 'Belarus', 'BY', '112', 'BLR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BLZ', 'COUNTRY', 'Belize', 'BZ', '084', 'BLZ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BMU', 'COUNTRY', 'Bermuda', 'BM', '060', 'BMU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BOL', 'COUNTRY', 'Bolivia', 'BO', '068', 'BOL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BR-AC', 'STATE', 'Acre', 'AC', NULL, 'AC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-AL', 'STATE', 'Alagoas', 'AL', NULL, 'AL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-AM', 'STATE', 'Amazonas', 'AM', NULL, 'AM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-AP', 'STATE', 'Amapá', 'AP', NULL, 'AP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-BA', 'STATE', 'Bahia', 'BA', NULL, 'BA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-CE', 'STATE', 'Ceará', 'CE', NULL, 'CE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-DF', 'STATE', 'Distrito Federal', 'DF', NULL, 'DF', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-ES', 'STATE', 'Espírito Santo', 'ES', NULL, 'ES', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-GO', 'STATE', 'Goiás', 'GO', NULL, 'GO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-MA', 'STATE', 'Maranhão', 'MA', NULL, 'MA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-MG', 'STATE', 'Minas Gerais', 'MG', NULL, 'MG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-MS', 'STATE', 'Mato Grosso do Sul', 'MS', NULL, 'MS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-MT', 'STATE', 'Mato Grosso', 'MT', NULL, 'MT', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-PA', 'STATE', 'Pará', 'PA', NULL, 'PA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-PB', 'STATE', 'Paraíba', 'PB', NULL, 'PB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-PE', 'STATE', 'Pernambuco', 'PE', NULL, 'PE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-PI', 'STATE', 'Piauí', 'PI', NULL, 'PI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-PR', 'STATE', 'Paraná', 'PR', NULL, 'PR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-RJ', 'STATE', 'Rio de Janeiro', 'RJ', NULL, 'RJ', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-RN', 'STATE', 'Rio Grande do Norte', 'RN', NULL, 'RN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-RO', 'STATE', 'Rondônia', 'RO', NULL, 'RO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-RR', 'STATE', 'Roraima', 'RR', NULL, 'RR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-RS', 'STATE', 'Rio Grande do Sul', 'RS', NULL, 'RS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-SC', 'STATE', 'Santa Catarina', 'SC', NULL, 'SC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-SE', 'STATE', 'Sergipe', 'SE', NULL, 'SE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-SP', 'STATE', 'São Paulo', 'SP', NULL, 'SP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BR-TO', 'STATE', 'Tocantins', 'TO', NULL, 'TO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('BRA', 'COUNTRY', 'Brazil', 'BR', '076', 'BRA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BRB', 'COUNTRY', 'Barbados', 'BB', '052', 'BRB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BRN', 'COUNTRY', 'Brunei Darussalam', 'BN', '096', 'BRN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BTN', 'COUNTRY', 'Bhutan', 'BT', '064', 'BTN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BVT', 'COUNTRY', 'Bouvet Island', 'BV', '074', 'BVT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BWA', 'COUNTRY', 'Botswana', 'BW', '072', 'BWA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CA', 'STATE', 'California', 'CA', NULL, 'CA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('CA-LA', 'COUNTY', 'Los Angeles County', 'LA', NULL, 'LA CO.', NULL, '2016-05-01 00:00:17', '2016-05-01 00:00:17'),
('CA-SOLANO', 'COUNTY', 'Solano County', 'SOLANO', NULL, 'SOLANO CO.', NULL, '2016-05-01 00:00:17', '2016-05-01 00:00:17'),
('CAF', 'COUNTRY', 'Central African Republic', 'CF', '140', 'CAF', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CAN', 'COUNTRY', 'Canada', 'CA', '124', 'CAN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CCK', 'COUNTRY', 'Cocos (keeling) Islands', 'CC', '166', 'CCK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CHE', 'COUNTRY', 'Switzerland', 'CH', '756', 'CHE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CHL', 'COUNTRY', 'Chile', 'CL', '152', 'CHL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CHN', 'COUNTRY', 'China', 'CN', '156', 'CHN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CIV', 'COUNTRY', 'Cote D''ivoire', 'CI', '384', 'CIV', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CMR', 'COUNTRY', 'Cameroon', 'CM', '120', 'CMR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CO', 'STATE', 'Colorado', 'CO', NULL, 'CO', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('CO-AMA', 'STATE', 'Amazonas', 'AMA', NULL, 'AMA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-ANT', 'STATE', 'Antioquia', 'ANT', NULL, 'ANT', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-ARA', 'STATE', 'Arauca', 'ARA', NULL, 'ARA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-ATL', 'STATE', 'Atlántico', 'ATL', NULL, 'ATL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-BOL', 'STATE', 'Bolívar', 'BOL', NULL, 'BOL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-BOY', 'STATE', 'Boyacá', 'BOY', NULL, 'BOY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CAL', 'STATE', 'Caldas', 'CAL', NULL, 'CAL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CAQ', 'STATE', 'Caquetá', 'CAQ', NULL, 'CAQ', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CAS', 'STATE', 'Casanare', 'CAS', NULL, 'CAS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CAU', 'STATE', 'Cauca', 'CAU', NULL, 'CAU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CES', 'STATE', 'Cesar', 'CES', NULL, 'CES', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CHO', 'STATE', 'Chocó', 'CHO', NULL, 'CHO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-COR', 'STATE', 'Córdoba', 'COR', NULL, 'COR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-CUN', 'STATE', 'Cundinamarca', 'CUN', NULL, 'CUN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-DC', 'STATE', 'Bogotá D.C.', 'DC', NULL, 'DC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-GUA', 'STATE', 'Guainía', 'GUA', NULL, 'GUA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-GUV', 'STATE', 'Guaviare', 'GUV', NULL, 'GUV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-HUI', 'STATE', 'Huila', 'HUI', NULL, 'HUI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-LAG', 'STATE', 'La Guajira', 'LAG', NULL, 'LAG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-MAG', 'STATE', 'Magdalena', 'MAG', NULL, 'MAG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-MET', 'STATE', 'Meta', 'MET', NULL, 'MET', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-NAR', 'STATE', 'Nariño', 'NAR', NULL, 'NAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-NSA', 'STATE', 'Norte de Santander', 'NSA', NULL, 'NSA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-PUT', 'STATE', 'Putumayo', 'PUT', NULL, 'PUT', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-QUI', 'STATE', 'Quindío', 'QUI', NULL, 'QUI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-RIS', 'STATE', 'Risaralda', 'RIS', NULL, 'RIS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-SAN', 'STATE', 'Santander', 'SAN', NULL, 'SAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-SAP', 'STATE', 'San Andrés y Providencia', 'SAP', NULL, 'SAP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-SUC', 'STATE', 'Sucre', 'SUC', NULL, 'SUC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-TOL', 'STATE', 'Tolima', 'TOL', NULL, 'TOL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-VAC', 'STATE', 'Valle del Cauca', 'VAC', NULL, 'VAC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-VAU', 'STATE', 'Vaupés', 'VAU', NULL, 'VAU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('CO-VID', 'STATE', 'Vichada', 'VID', NULL, 'VID', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('COD', 'COUNTRY', 'Congo, The Democratic Republic Of The', 'CD', '180', 'COD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('COG', 'COUNTRY', 'Congo', 'CG', '178', 'COG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('COK', 'COUNTRY', 'Cook Islands', 'CK', '184', 'COK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('COL', 'COUNTRY', 'Colombia', 'CO', '170', 'COL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('COM', 'COUNTRY', 'Comoros', 'KM', '174', 'COM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CPV', 'COUNTRY', 'Cape Verde', 'CV', '132', 'CPV', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CRI', 'COUNTRY', 'Costa Rica', 'CR', '188', 'CRI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CT', 'STATE', 'Connecticut', 'CT', NULL, 'CT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('CUB', 'COUNTRY', 'Cuba', 'CU', '192', 'CUB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CXR', 'COUNTRY', 'Christmas Island', 'CX', '162', 'CXR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CYM', 'COUNTRY', 'Cayman Islands', 'KY', '136', 'CYM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CYP', 'COUNTRY', 'Cyprus', 'CY', '196', 'CYP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CZE', 'COUNTRY', 'Czech Republic', 'CZ', '203', 'CZE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DC', 'STATE', 'District of Columbia', 'DC', NULL, 'DC', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('DE', 'STATE', 'Delaware', 'DE', NULL, 'DE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('DE-BE', 'STATE', 'Berlin', 'BE', NULL, 'BE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-BR', 'STATE', 'Brandenburg', 'BR', NULL, 'BR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-BW', 'STATE', 'Baden-Württemberg', 'BW', NULL, 'BW', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-BY', 'STATE', 'Bayern', 'BY', NULL, 'BY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-HB', 'STATE', 'Bremen', 'HB', NULL, 'HB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-HE', 'STATE', 'Hessen', 'HE', NULL, 'HE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-HH', 'STATE', 'Hamburg', 'HH', NULL, 'HH', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-MV', 'STATE', 'Mecklenburg-Vorpommern', 'MV', NULL, 'MV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-NI', 'STATE', 'Niedersachsen', 'NI', NULL, 'NI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-NW', 'STATE', 'Nordrhein-Westfalen', 'NW', NULL, 'NW', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-RP', 'STATE', 'Rheinland-Pfalz', 'RP', NULL, 'RP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-SA', 'STATE', 'Sachsen-Anhalt', 'SA', NULL, 'SA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-SH', 'STATE', 'Schleswig-Holstein', 'SH', NULL, 'SH', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-SL', 'STATE', 'Saarland', 'SL', NULL, 'SL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-SN', 'STATE', 'Sachsen', 'SN', NULL, 'SN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DE-TH', 'STATE', 'Thüringen', 'TH', NULL, 'TH', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('DEU', 'COUNTRY', 'Germany', 'DE', '276', 'DEU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DJI', 'COUNTRY', 'Djibouti', 'DJ', '262', 'DJI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DMA', 'COUNTRY', 'Dominica', 'DM', '212', 'DMA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DNK', 'COUNTRY', 'Denmark', 'DK', '208', 'DNK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DOM', 'COUNTRY', 'Dominican Republic', 'DO', '214', 'DOM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DZA', 'COUNTRY', 'Algeria', 'DZ', '012', 'DZA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ECU', 'COUNTRY', 'Ecuador', 'EC', '218', 'ECU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EGY', 'COUNTRY', 'Egypt', 'EG', '818', 'EGY', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ENGL', 'COUNTRY', 'England', 'ENG', '896', 'ENGL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ERI', 'COUNTRY', 'Eritrea', 'ER', '232', 'ERI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ES-A', 'PROVINCE', 'Alicante', 'A', NULL, 'A', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-AB', 'PROVINCE', 'Albacete', 'AB', NULL, 'AB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-AL', 'PROVINCE', 'Almería', 'AL', NULL, 'AL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-AN', 'REGION', 'Andalucía', 'AN', NULL, 'AN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-AR', 'REGION', 'Aragón', 'AR', NULL, 'AR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-AS', 'REGION', 'Oviedo', 'O', NULL, 'O', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-AV', 'PROVINCE', 'Ávila', 'AV', NULL, 'AV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-B', 'PROVINCE', 'Barcelona', 'B', NULL, 'B', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-BA', 'PROVINCE', 'Badajoz', 'BA', NULL, 'BA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-BI', 'PROVINCE', 'Vizcaya', 'BI', NULL, 'BI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-BU', 'PROVINCE', 'Burgos', 'BU', NULL, 'BU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-C', 'PROVINCE', 'La Coruña', 'C', NULL, 'C', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CA', 'PROVINCE', 'Cádiz', 'CA', NULL, 'CA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CAN', 'REGION', 'Cantabria', 'S', NULL, 'S', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CC', 'PROVINCE', 'Cáceres', 'CC', NULL, 'CC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CE', 'PROVINCE', 'Ceuta', 'CE', NULL, 'CE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CL', 'REGION', 'Castilla y León', 'CL', NULL, 'CL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CM', 'REGION', 'Castilla-La Mancha', 'CM', NULL, 'CM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CN', 'REGION', 'Canarias', 'CN', NULL, 'CN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CO', 'PROVINCE', 'Córdoba', 'CO', NULL, 'CO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CR', 'PROVINCE', 'Ciudad Real', 'CR', NULL, 'CR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CS', 'PROVINCE', 'Castellón', 'CS', NULL, 'CS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CT', 'REGION', 'Cataluña', 'CT', NULL, 'CT', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-CU', 'PROVINCE', 'Cuenca', 'CU', NULL, 'CU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-EX', 'REGION', 'Extremadura', 'EX', NULL, 'EX', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-GA', 'REGION', 'Galicia', 'GA', NULL, 'GA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-GC', 'PROVINCE', 'Las Palmas', 'GC', NULL, 'GC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-GI', 'PROVINCE', 'Gerona', 'GI', NULL, 'GI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-GR', 'PROVINCE', 'Granada', 'GR', NULL, 'GR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-GU', 'PROVINCE', 'Guadalajara', 'GU', NULL, 'GU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-H', 'PROVINCE', 'Huelva', 'H', NULL, 'H', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-HU', 'PROVINCE', 'Huesca', 'HU', NULL, 'HU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-IB', 'REGION', 'Islas Baleares', 'IB', NULL, 'IB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-J', 'PROVINCE', 'Jaén', 'J', NULL, 'J', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-L', 'PROVINCE', 'Lérida', 'L', NULL, 'L', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-LE', 'PROVINCE', 'León', 'LE', NULL, 'LE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-LO', 'PROVINCE', 'Logroño', 'LO', NULL, 'LO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-LR', 'REGION', 'La Rioja', 'LO', NULL, 'LO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-LU', 'PROVINCE', 'Lugo', 'LU', NULL, 'LU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-M', 'PROVINCE', 'Madrid', 'M', NULL, 'M', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-MA', 'PROVINCE', 'Málaga', 'MA', NULL, 'MA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-MAD', 'REGION', 'Madrid', 'M', NULL, 'M', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-ML', 'PROVINCE', 'Melilla', 'ML', NULL, 'ML', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-MU', 'PROVINCE', 'Murcia', 'MU', NULL, 'MU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-MUR', 'REGION', 'Región de Murcia', 'MU', NULL, 'MU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-NA', 'PROVINCE', 'Navarra', 'NA', NULL, 'NA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-NAV', 'REGION', 'Navarra', 'NA', NULL, 'NA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-O', 'PROVINCE', 'Asturias', 'O', NULL, 'O', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-OR', 'PROVINCE', 'Orense', 'OR', NULL, 'OR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-P', 'PROVINCE', 'Palencia', 'P', NULL, 'P', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-PM', 'PROVINCE', 'Islas Baleares', 'PM', NULL, 'PM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-PO', 'PROVINCE', 'Pontevedra', 'PO', NULL, 'PO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-PV', 'REGION', 'País Vasco', 'PV', NULL, 'PV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-S', 'PROVINCE', 'Cantabria', 'S', NULL, 'S', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-SA', 'PROVINCE', 'Salamanca', 'SA', NULL, 'SA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-SE', 'PROVINCE', 'Sevilla', 'SE', NULL, 'SE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-SG', 'PROVINCE', 'Segovia', 'SG', NULL, 'SG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-SO', 'PROVINCE', 'Soria', 'SO', NULL, 'SO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-SS', 'PROVINCE', 'Guipúzcoa', 'SS', NULL, 'SS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-T', 'PROVINCE', 'Tarragona', 'T', NULL, 'T', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-TE', 'PROVINCE', 'Teruel', 'TE', NULL, 'TE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-TF', 'PROVINCE', 'Santa Cruz de Tenerife', 'TF', NULL, 'TF', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-TO', 'PROVINCE', 'Toledo', 'TO', NULL, 'TO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-V', 'PROVINCE', 'Valencia', 'V', NULL, 'V', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-VA', 'PROVINCE', 'Valladolid', 'VA', NULL, 'VA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-VC', 'REGION', 'Comunidad Valenciana', 'VC', NULL, 'VC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-VI', 'PROVINCE', 'Álava', 'VI', NULL, 'VI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-Z', 'PROVINCE', 'Zaragoza', 'Z', NULL, 'Z', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ES-ZA', 'PROVINCE', 'Zamora', 'ZA', NULL, 'ZA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('ESH', 'COUNTRY', 'Western Sahara', 'EH', '732', 'ESH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ESP', 'COUNTRY', 'Spain', 'ES', '724', 'ESP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EST', 'COUNTRY', 'Estonia', 'EE', '233', 'EST', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ETH', 'COUNTRY', 'Ethiopia', 'ET', '231', 'ETH', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EU', 'GROUP', 'European Union', 'EU', NULL, 'EU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FIN', 'COUNTRY', 'Finland', 'FI', '246', 'FIN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FJI', 'COUNTRY', 'Fiji', 'FJ', '242', 'FJI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FL', 'STATE', 'Florida', 'FL', NULL, 'FL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('FLK', 'COUNTRY', 'Falkland Islands (malvinas)', 'FK', '238', 'FLK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FM', 'STATE', 'Federated States of Micronesia', 'FM', NULL, 'FM', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('FR-01', 'COUNTY', 'Ain', '01', NULL, 'AIN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-02', 'COUNTY', 'Aisne', '02', NULL, 'AIS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-03', 'COUNTY', 'Allier', '03', NULL, 'ALL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-04', 'COUNTY', 'Alpes de Hautes-Provence', '04', NULL, 'AHP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-05', 'COUNTY', 'Hautes-Alpes', '05', NULL, 'HAL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-06', 'COUNTY', 'Alpes-Maritimes', '06', NULL, 'ALM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-07', 'COUNTY', 'Ardèche', '07', NULL, 'ARD', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-08', 'COUNTY', 'Ardennes', '08', NULL, 'ARE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-09', 'COUNTY', 'Ariège', '09', NULL, 'ARI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-10', 'COUNTY', 'Aube', '10', NULL, 'AUB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-11', 'COUNTY', 'Aude', '11', NULL, 'AUD', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-12', 'COUNTY', 'Aveyron', '12', NULL, 'AVE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-13', 'COUNTY', 'Bouches-du-Rhône', '13', NULL, 'BDR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-14', 'COUNTY', 'Calvados', '14', NULL, 'CAL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-15', 'COUNTY', 'Cantal', '15', NULL, 'CAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-16', 'COUNTY', 'Charente', '16', NULL, 'CHA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-17', 'COUNTY', 'Charente-Maritime', '17', NULL, 'CHM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-18', 'COUNTY', 'Cher', '18', NULL, 'CHE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-19', 'COUNTY', 'Corrèze', '19', NULL, 'COR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-21', 'COUNTY', 'Côte-d''Or', '21', NULL, 'COO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-22', 'COUNTY', 'Côtes d''Armor', '22', NULL, 'COA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-23', 'COUNTY', 'Creuse', '23', NULL, 'CRE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-24', 'COUNTY', 'Dordogne', '24', NULL, 'DOR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-25', 'COUNTY', 'Doubs', '25', NULL, 'DOU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-26', 'COUNTY', 'Drôme', '26', NULL, 'DRO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-27', 'COUNTY', 'Eure', '27', NULL, 'EUR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-28', 'COUNTY', 'Eure-et-Loir', '28', NULL, 'EUL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-29', 'COUNTY', 'Finistère', '29', NULL, 'FIN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-2A', 'COUNTY', 'Corse-du-Sud', '2A', NULL, 'CDS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-2B', 'COUNTY', 'Haute-Corse', '2B', NULL, 'HCO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-30', 'COUNTY', 'Gard', '30', NULL, 'GAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-31', 'COUNTY', 'Haute-Garonne', '31', NULL, 'HAG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-32', 'COUNTY', 'Gers', '32', NULL, 'GER', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-33', 'COUNTY', 'Gironde', '33', NULL, 'GIR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-34', 'COUNTY', 'Hérault', '34', NULL, 'HER', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-35', 'COUNTY', 'Ille-et-Vilaine', '35', NULL, 'ILL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-36', 'COUNTY', 'Indre', '36', NULL, 'IND', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-37', 'COUNTY', 'Indre-et-Loire', '37', NULL, 'IEL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-38', 'COUNTY', 'Isère', '38', NULL, 'ISE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-39', 'COUNTY', 'Jura', '39', NULL, 'JUR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-40', 'COUNTY', 'Landes', '40', NULL, 'LAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-41', 'COUNTY', 'Loir-et-Cher', '41', NULL, 'LEC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-42', 'COUNTY', 'Loire', '42', NULL, 'LOI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-43', 'COUNTY', 'Haute-Loire', '43', NULL, 'HLO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-44', 'COUNTY', 'Loire-Atlantique', '44', NULL, 'LOA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-45', 'COUNTY', 'Loiret', '45', NULL, 'LOR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-46', 'COUNTY', 'Lot', '46', NULL, 'LOT', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-47', 'COUNTY', 'Lot-et-Garonne', '47', NULL, 'LOG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-48', 'COUNTY', 'Lozère', '48', NULL, 'LOZ', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-49', 'COUNTY', 'Maine-et-Loire', '49', NULL, 'MEL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-50', 'COUNTY', 'Manche', '50', NULL, 'MAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-51', 'COUNTY', 'Marne', '51', NULL, 'MAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-52', 'COUNTY', 'Haute-Marne', '52', NULL, 'HMA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-53', 'COUNTY', 'Mayenne', '53', NULL, 'MAY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-54', 'COUNTY', 'Meurthe-et-Moselle', '54', NULL, 'MEM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-55', 'COUNTY', 'Meuse', '55', NULL, 'MEU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-56', 'COUNTY', 'Morbihan', '56', NULL, 'MOR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-57', 'COUNTY', 'Moselle', '57', NULL, 'MOS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-58', 'COUNTY', 'Nièvre', '58', NULL, 'NIE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-59', 'COUNTY', 'Nord', '59', NULL, 'NOR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-60', 'COUNTY', 'Oise', '60', NULL, 'OIS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-61', 'COUNTY', 'Orne', '61', NULL, 'ORN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-62', 'COUNTY', 'Pas-de-Calais', '62', NULL, 'PDC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-63', 'COUNTY', 'Puy-de-Dôme', '63', NULL, 'PUY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-64', 'COUNTY', 'Pyrénées-Atlantiques', '64', NULL, 'PYA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-65', 'COUNTY', 'Hautes-Pyrénées', '65', NULL, 'HPY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-66', 'COUNTY', 'Pyrénées-Orientales', '66', NULL, 'PYO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-67', 'COUNTY', 'Bas-Rhin', '67', NULL, 'BRH', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-68', 'COUNTY', 'Haut-Rhin', '68', NULL, 'HRH', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-69', 'COUNTY', 'Rhône', '69', NULL, 'RHO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-70', 'COUNTY', 'Haute-Saône', '70', NULL, 'HAS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-71', 'COUNTY', 'Saône-et-Loire', '71', NULL, 'SEL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-72', 'COUNTY', 'Sarthe', '72', NULL, 'SAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-73', 'COUNTY', 'Savoie', '73', NULL, 'SAV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-74', 'COUNTY', 'Haute-Savoie', '74', NULL, 'HAS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-75', 'COUNTY', 'Paris', '75', NULL, 'PAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-76', 'COUNTY', 'Seine-Maritime', '76', NULL, 'SMA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-77', 'COUNTY', 'Seine-et-Marne', '77', NULL, 'SEM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-78', 'COUNTY', 'Yvelines', '78', NULL, 'YVE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-79', 'COUNTY', 'Deux-Sèvres', '79', NULL, 'DSE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-80', 'COUNTY', 'Somme', '80', NULL, 'SOM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-81', 'COUNTY', 'Tarn', '81', NULL, 'TAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-82', 'COUNTY', 'Tarn-et-Garonne', '82', NULL, 'TAG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-83', 'COUNTY', 'Var', '83', NULL, 'VAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-84', 'COUNTY', 'Vaucluse', '84', NULL, 'VAU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-85', 'COUNTY', 'Vendée', '85', NULL, 'VEN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-86', 'COUNTY', 'Vienne', '86', NULL, 'VIE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-87', 'COUNTY', 'Haute-Vienne', '87', NULL, 'HVI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-88', 'COUNTY', 'Vosges', '88', NULL, 'VOS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-89', 'COUNTY', 'Yonne', '89', NULL, 'YON', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-90', 'COUNTY', 'Territoire-de-Belfort', '90', NULL, 'TDB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-91', 'COUNTY', 'Essonne', '91', NULL, 'ESS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-92', 'COUNTY', 'Hauts-de-Seine', '92', NULL, 'HDS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-93', 'COUNTY', 'Seine-Saint-Denis', '93', NULL, 'SSD', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-94', 'COUNTY', 'Val-de-Marne', '94', NULL, 'VDM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-95', 'COUNTY', 'Val-d''Oise', '95', NULL, 'VDO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ACY74', 'COUNTY_CITY', 'Annecy', 'ACY', NULL, 'ACY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AGE47', 'COUNTY_CITY', 'Agen', 'AGE', NULL, 'AGE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AJA2A', 'COUNTY_CITY', 'Ajaccio', 'AJA', NULL, 'AJA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ALB81', 'COUNTY_CITY', 'Albi', 'ALB', NULL, 'ALB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ALE61', 'COUNTY_CITY', 'Alençon', 'ALE', NULL, 'ALE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ALS', 'REGION', 'Alsace', 'ALS', NULL, 'ALS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-AMI80', 'COUNTY_CITY', 'Amiens', 'AMI', NULL, 'AMI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ANG16', 'COUNTY_CITY', 'Angoulême', 'ANG', NULL, 'ANG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ANG49', 'COUNTY_CITY', 'Angers', 'ANG', NULL, 'ANG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AQU', 'REGION', 'Aquitaine', 'AQU', NULL, 'AQU', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-ARR62', 'COUNTY_CITY', 'Arras', 'ARR', NULL, 'ARR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AUC32', 'COUNTY_CITY', 'Auch', 'AUC', NULL, 'AUC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AUR15', 'COUNTY_CITY', 'Aurillac', 'AUR', NULL, 'AUR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AUV', 'REGION', 'Auvergne', 'AUV', NULL, 'AUV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AVG84', 'COUNTY_CITY', 'Avignon', 'AVG', NULL, 'AVG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-AXR89', 'COUNTY_CITY', 'Auxerre', 'AXR', NULL, 'AXR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BAN', 'REGION', 'Basse-Normandie', 'BAN', NULL, 'BAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BAS2B', 'COUNTY_CITY', 'Bastia', 'BAS', NULL, 'BAS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BBY93', 'COUNTY_CITY', 'Bobigny', 'BBY', NULL, 'BBY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BEB01', 'COUNTY_CITY', 'Bourg-en-Bresse', 'BEB', NULL, 'BEB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BES25', 'COUNTY_CITY', 'Besançon', 'BES', NULL, 'BES', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BLD55', 'COUNTY_CITY', 'Bar-le-Duc', 'BLD', NULL, 'BLD', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BLF90', 'COUNTY_CITY', 'Belfort', 'BLF', NULL, 'BLF', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BLO41', 'COUNTY_CITY', 'Blois', 'BLO', NULL, 'BLO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BOR33', 'COUNTY_CITY', 'Bordeaux', 'BOR', NULL, 'BOR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BOU', 'REGION', 'Bourgogne', 'BOU', NULL, 'BOU', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-BOU18', 'COUNTY_CITY', 'Bourges', 'BOU', NULL, 'BOU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BRE', 'REGION', 'Bretagne', 'BRE', NULL, 'BRE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-BVA60', 'COUNTY_CITY', 'Beauvais', 'BVA', NULL, 'BVA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CAE14', 'COUNTY_CITY', 'Caen', 'CAE', NULL, 'CAE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CAH46', 'COUNTY_CITY', 'Cahors', 'CAH', NULL, 'CAH', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CAR11', 'COUNTY_CITY', 'Carcassonne', 'CAR', NULL, 'CAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CBY73', 'COUNTY_CITY', 'Chambéry', 'CBY', NULL, 'CBY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CEC51', 'COUNTY_CITY', 'Châlons-en-Champagne', 'CEC', NULL, 'CEC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CEN', 'REGION', 'Centre', 'CEN', NULL, 'CEN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CHA', 'REGION', 'Champagne-Ardenne', 'CHA', NULL, 'CHA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CHA28', 'COUNTY_CITY', 'Chartres', 'CHA', NULL, 'CHA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CHM08', 'COUNTY_CITY', 'Charleville-Mézières', 'CHM', NULL, 'CHM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CHM52', 'COUNTY_CITY', 'Chaumont', 'CHM', NULL, 'CHM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CHT36', 'COUNTY_CITY', 'Châteauroux', 'CHT', NULL, 'CHT', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CLF63', 'COUNTY_CITY', 'Clermont-Ferrand', 'CLF', NULL, 'CLF', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-CLM68', 'COUNTY_CITY', 'Colmar', 'CLM', NULL, 'CLM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-COR', 'REGION', 'Corse', 'COR', NULL, 'COR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-CTL94', 'COUNTY_CITY', 'Créteil', 'CTL', NULL, 'CTL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-DIG04', 'COUNTY_CITY', 'Digne', 'DIG', NULL, 'DIG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-DIJ21', 'COUNTY_CITY', 'Dijon', 'DIJ', NULL, 'DIJ', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-EPI88', 'COUNTY_CITY', 'Épinal', 'EPI', NULL, 'EPI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-EVR27', 'COUNTY_CITY', 'Évreux', 'EVR', NULL, 'EVR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-EVR91', 'COUNTY_CITY', 'Évry', 'EVR', NULL, 'EVR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-FCO', 'REGION', 'Franche-Comté', 'FCO', NULL, 'FCO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-FOI09', 'COUNTY_CITY', 'Foix', 'FOI', NULL, 'FOI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-GAP05', 'COUNTY_CITY', 'Gap', 'GAP', NULL, 'GAP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-GRE38', 'COUNTY_CITY', 'Grenoble', 'GRE', NULL, 'GRE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-GUE23', 'COUNTY_CITY', 'Guéret', 'GUE', NULL, 'GUE', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-HNO', 'REGION', 'Haute-Normandie', 'HNO', NULL, 'HNO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-IDF', 'REGION', 'Ile-de-France', 'IDF', NULL, 'IDF', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-LAO02', 'COUNTY_CITY', 'Laon', 'LAO', NULL, 'LAO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LAR', 'REGION', 'Languedoc-Roussillon', 'LAR', NULL, 'LAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LIL59', 'COUNTY_CITY', 'Lille', 'LIL', NULL, 'LIL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LIM', 'REGION', 'Limousin', 'LIM', NULL, 'LIM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LMA72', 'COUNTY_CITY', 'Le Mans', 'LMA', NULL, 'LMA', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LMG87', 'COUNTY_CITY', 'Limoges', 'LMG', NULL, 'LMG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LON39', 'COUNTY_CITY', 'Lons-le-Saunier', 'LON', NULL, 'LON', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LOR', 'REGION', 'Lorraine', 'LOR', NULL, 'LOR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-LRO17', 'COUNTY_CITY', 'La Rochelle', 'LRO', NULL, 'LRO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LVL53', 'COUNTY_CITY', 'Laval', 'LVL', NULL, 'LVL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-LYO69', 'COUNTY_CITY', 'Lyon', 'LYO', NULL, 'LYO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MAR13', 'COUNTY_CITY', 'Marseille', 'MAR', NULL, 'MAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MCN71', 'COUNTY_CITY', 'Mâcon', 'MCN', NULL, 'MCN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MDM40', 'COUNTY_CITY', 'Mont-de-Marsan', 'MDM', NULL, 'MDM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MEN48', 'COUNTY_CITY', 'Mende', 'MEN', NULL, 'MEN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MET57', 'COUNTY_CITY', 'Metz', 'MET', NULL, 'MET', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MIP', 'REGION', 'Midi-Pyrénées', 'MIP', NULL, 'MIP', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MLN77', 'COUNTY_CITY', 'Melun', 'MLN', NULL, 'MLN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MON34', 'COUNTY_CITY', 'Montpellier', 'MON', NULL, 'MON', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MOU03', 'COUNTY_CITY', 'Moulins', 'MOU', NULL, 'MOU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-MTB82', 'COUNTY_CITY', 'Montauban', 'MTB', NULL, 'MTB', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NAN44', 'COUNTY_CITY', 'Nantes', 'NAN', NULL, 'NAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NCY54', 'COUNTY_CITY', 'Nancy', 'NCY', NULL, 'NCY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NEV58', 'COUNTY_CITY', 'Nevers', 'NEV', NULL, 'NEV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NIC06', 'COUNTY_CITY', 'Nice', 'NIC', NULL, 'NIC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NIM30', 'COUNTY_CITY', 'Nîmes', 'NIM', NULL, 'NIM', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NIO79', 'COUNTY_CITY', 'Niort', 'NIO', NULL, 'NIO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-NPC', 'REGION', 'Nord-Pas-de-Calais', 'NPC', NULL, 'NPC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-NTR92', 'COUNTY_CITY', 'Nanterre', 'NTR', NULL, 'NTR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ORL45', 'COUNTY_CITY', 'Orléans', 'ORL', NULL, 'ORL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PAC', 'REGION', 'Provence-Alpes-Côte d''Azur', 'PAC', NULL, 'PAC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PAR75', 'COUNTY_CITY', 'Paris', 'PAR', NULL, 'PAR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PAU64', 'COUNTY_CITY', 'Pau', 'PAU', NULL, 'PAU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PDL', 'REGION', 'Pays de la Loire', 'PDL', NULL, 'PDL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('FR-PER24', 'COUNTY_CITY', 'Périgueux', 'PER', NULL, 'PER', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PEV43', 'COUNTY_CITY', 'Le Puy-en-Velay', 'PEV', NULL, 'PEV', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PIC', 'REGION', 'Picardie', 'PIC', NULL, 'PIC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-POC', 'REGION', 'Poitou-Charentes', 'POC', NULL, 'POC', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-POI86', 'COUNTY_CITY', 'Poitiers', 'POI', NULL, 'POI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PPG66', 'COUNTY_CITY', 'Perpignan', 'PPG', NULL, 'PPG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PRI07', 'COUNTY_CITY', 'Privas', 'PRI', NULL, 'PRI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-PTO95', 'COUNTY_CITY', 'Pontoise', 'PTO', NULL, 'PTO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-QUI29', 'COUNTY_CITY', 'Quimper', 'QUI', NULL, 'QUI', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-RAL', 'REGION', 'Rhône-Alpes', 'RAL', NULL, 'RAL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-REN35', 'COUNTY_CITY', 'Rennes', 'REN', NULL, 'REN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ROD12', 'COUNTY_CITY', 'Rodez', 'ROD', NULL, 'ROD', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-ROU76', 'COUNTY_CITY', 'Rouen', 'ROU', NULL, 'ROU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44');
INSERT INTO `geo` (`geo_id`, `geo_type_id`, `geo_name`, `geo_code`, `geo_sec_code`, `abbreviation`, `well_known_text`, `created_date`, `updated_date`) VALUES
('FR-RSY85', 'COUNTY_CITY', 'La Roche-sur-Yon', 'RSY', NULL, 'RSY', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-SBG67', 'COUNTY_CITY', 'Strasbourg', 'SBG', NULL, 'SBG', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-SBR22', 'COUNTY_CITY', 'Saint-Brieuc', 'SBR', NULL, 'SBR', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-SET42', 'COUNTY_CITY', 'Saint-Étienne', 'SET', NULL, 'SET', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-SLO50', 'COUNTY_CITY', 'Saint-Lô', 'SLO', NULL, 'SLO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-TBS65', 'COUNTY_CITY', 'Tarbes', 'TBS', NULL, 'TBS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-TLN83', 'COUNTY_CITY', 'Toulon', 'TLN', NULL, 'TLN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-TLS31', 'COUNTY_CITY', 'Toulouse', 'TLS', NULL, 'TLS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-TOU37', 'COUNTY_CITY', 'Tours', 'TOU', NULL, 'TOU', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-TRO10', 'COUNTY_CITY', 'Troyes', 'TRO', NULL, 'TRO', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-TUL19', 'COUNTY_CITY', 'Tulle', 'TUL', NULL, 'TUL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-VAL26', 'COUNTY_CITY', 'Valence', 'VAL', NULL, 'VAL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-VAN56', 'COUNTY_CITY', 'Vannes', 'VAN', NULL, 'VAN', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-VSL70', 'COUNTY_CITY', 'Vesoul', 'VSL', NULL, 'VSL', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FR-VSS78', 'COUNTY_CITY', 'Versailles', 'VSS', NULL, 'VSS', NULL, '2016-04-30 23:53:44', '2016-04-30 23:53:44'),
('FRA', 'COUNTRY', 'France', 'FR', '250', 'FRA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FRO', 'COUNTRY', 'Faroe Islands', 'FO', '234', 'FRO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FSM', 'COUNTRY', 'Micronesia, Federated States Of', 'FM', '583', 'FSM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FXX', 'COUNTRY', 'France, Metropolitan', 'FX', '249', 'FXX', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GA', 'STATE', 'Georgia', 'GA', NULL, 'GA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GAB', 'COUNTRY', 'Gabon', 'GA', '266', 'GAB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GB-ABDN', 'COUNTY', 'Aberdeenshire', 'ABDN', NULL, 'ABDN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-AGSY', 'COUNTY', 'Anglesey/Sir Fon', 'AGSY', NULL, 'AGSY', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ANGS', 'COUNTY', 'Angus/Forfarshire', 'ANGS', NULL, 'ANGS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ARGL', 'COUNTY', 'Argyllshire', 'ARGL', NULL, 'ARGL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-AYRS', 'COUNTY', 'Ayrshire', 'AYRS', NULL, 'AYRS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BANF', 'COUNTY', 'Banffshire', 'BANF', NULL, 'BANF', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BDFD', 'COUNTY', 'Bedfordshire', 'BDFD', NULL, 'BDFD', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BREK', 'COUNTY', 'Brecknockshire/Sir Frycheiniog', 'BREK', NULL, 'BREK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BRKS', 'COUNTY', 'Berkshire', 'BRKS', NULL, 'BRKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BUCKS', 'COUNTY', 'Buckinghamshire', 'BUCKS', NULL, 'BUCKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BUTE', 'COUNTY', 'Buteshire', 'BUTE', NULL, 'BUTE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-BWKS', 'COUNTY', 'Berwickshire', 'BWKS', NULL, 'BWKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CAMBS', 'COUNTY', 'Cambridgeshire', 'CAMBS', NULL, 'CAMBS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CDGN', 'COUNTY', 'Cardiganshire/Ceredigion', 'CDGN', NULL, 'CDGN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CHES', 'COUNTY', 'Cheshire', 'CHES', NULL, 'CHES', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CLAK', 'COUNTY', 'Clackmannanshire', 'CLAK', NULL, 'CLAK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CMRN', 'COUNTY', 'Carmarthenshire/Sir Gaerfyrddin', 'CMRN', NULL, 'CMRN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CMTY', 'COUNTY', 'Cromartyshire', 'CMTY', NULL, 'CMTY', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CNFN', 'COUNTY', 'Caernarfonshire/Sir Gaernarfon', 'CNFN', NULL, 'CNFN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CNWL', 'COUNTY', 'Cornwall', 'CNWL', NULL, 'CNWL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CTHN', 'COUNTY', 'Caithness', 'CTHN', NULL, 'CTHN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-CUMB', 'COUNTY', 'Cumberland', 'CUMB', NULL, 'CUMB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DENB', 'COUNTY', 'Denbighshire/Sir Ddinbych', 'DENB', NULL, 'DENB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DEVON', 'COUNTY', 'Devon', 'DEVON', NULL, 'DEVON', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DMBR', 'COUNTY', 'Dunbartonshire/Dumbartonshire', 'DMBR', NULL, 'DMBR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DMFS', 'COUNTY', 'Dumfriesshire', 'DMFS', NULL, 'DMFS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DRBYS', 'COUNTY', 'Derbyshire', 'DRBYS', NULL, 'DRBYS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DRHM', 'COUNTY', 'Durham', 'DRHM', NULL, 'DRHM', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-DRST', 'COUNTY', 'Dorset', 'DRST', NULL, 'DRST', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ELOTH', 'COUNTY', 'East Lothian/Haddingtonshire', 'ELOTH', NULL, 'ELOTH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ESSX', 'COUNTY', 'Essex', 'ESSX', NULL, 'ESSX', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-FIFE', 'COUNTY', 'Fife', 'FIFE', NULL, 'FIFE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-FTSH', 'COUNTY', 'Flintshire/Sir Fflint', 'FTSH', NULL, 'FTSH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-GLAM', 'COUNTY', 'Glamorgan/Morgannwg', 'GLAM', NULL, 'GLAM', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-GLOU', 'COUNTY', 'Gloucestershire', 'GLOU', NULL, 'GLOU', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-HAMPS', 'COUNTY', 'Hampshire', 'HAMPS', NULL, 'HAMPS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-HERTS', 'COUNTY', 'Hertfordshire', 'HERTS', NULL, 'HERTS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-HRFDS', 'COUNTY', 'Herefordshire', 'HRFDS', NULL, 'HRFDS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-HUNTS', 'COUNTY', 'Huntingdonshire', 'HUNTS', NULL, 'HUNTS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-INVER', 'COUNTY', 'Inverness-shire', 'INVER', NULL, 'INVER', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-KENT', 'COUNTY', 'Kent', 'KENT', NULL, 'KENT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-KNDN', 'COUNTY', 'Kincardineshire', 'KNDN', NULL, 'KNDN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-KRCUD', 'COUNTY', 'Kirkcudbrightshire', 'KRCUD', NULL, 'KRCUD', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-KRSS', 'COUNTY', 'Kinross-shire', 'KRSS', NULL, 'KRSS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-LANCS', 'COUNTY', 'Lancashire', 'LANCS', NULL, 'LANCS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-LIECS', 'COUNTY', 'Leicestershire', 'LIECS', NULL, 'LIECS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-LINCS', 'COUNTY', 'Lincolnshire', 'LINCS', NULL, 'LINCS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-LRKS', 'COUNTY', 'Lanarkshire', 'LRKS', NULL, 'LRKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-MIENT', 'COUNTY', 'Merioneth/Meirionnydd', 'MIENT', NULL, 'MIENT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-MLOTH', 'COUNTY', 'Midlothian/Edinburghshire', 'MLOTH', NULL, 'MLOTH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-MMTH', 'COUNTY', 'Monmouthshire/Sir Fynwy', 'MMTH', NULL, 'MMTH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-MNTGS', 'COUNTY', 'Montgomeryshire/Sir Drefaldwyn', 'MNTGS', NULL, 'MNTGS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-MORAY', 'COUNTY', 'Morayshire', 'MORAY', NULL, 'MORAY', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-MSEX', 'COUNTY', 'Middlesex', 'MSEX', NULL, 'MSEX', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-NAIRN', 'COUNTY', 'Nairnshire', 'NAIRN', NULL, 'NAIRN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-NFLK', 'COUNTY', 'Norfolk', 'NFLK', NULL, 'NFLK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-NHANTS', 'COUNTY', 'Northamptonshire', 'NHANTS', NULL, 'NHANTS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-NHUMB', 'COUNTY', 'Northumberland', 'NHUMB', NULL, 'NHUMB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-NOTTS', 'COUNTY', 'Nottinghamshire', 'NOTTS', NULL, 'NOTTS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ORK', 'COUNTY', 'Orkney', 'ORK', NULL, 'ORK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-OXFD', 'COUNTY', 'Oxfordshire', 'OXFD', NULL, 'OXFD', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-PEEBS', 'COUNTY', 'Peeblesshire', 'PEEBS', NULL, 'PEEBS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-PERTH', 'COUNTY', 'Perthshire', 'PERTH', NULL, 'PERTH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-PMBRK', 'COUNTY', 'Pembrokeshire/Sir Benfro', 'PMBRK', NULL, 'PMBRK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-RNFR', 'COUNTY', 'Renfrewshire', 'RNFR', NULL, 'RNFR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-RNRS', 'COUNTY', 'Radnorshire/Sir Faesyfed', 'RNRS', NULL, 'RNRS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ROSS', 'COUNTY', 'Ross-shire', 'ROSS', NULL, 'ROSS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-ROXB', 'COUNTY', 'Roxburghshire', 'ROXB', NULL, 'ROXB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-RUTL', 'COUNTY', 'Rutland', 'RUTL', NULL, 'RUTL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SELKS', 'COUNTY', 'Selkirkshire', 'SELKS', NULL, 'SELKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SFFK', 'COUNTY', 'Suffolk', 'SFFK', NULL, 'SFFK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SHET', 'COUNTY', 'Shetland', 'SHET', NULL, 'SHET', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SHROPS', 'COUNTY', 'Shropshire', 'SHROPS', NULL, 'SHROPS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SOMST', 'COUNTY', 'Somerset', 'SOMST', NULL, 'SOMST', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-STAFFS', 'COUNTY', 'Staffordshire', 'STAFFS', NULL, 'STAFFS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-STLNG', 'COUNTY', 'Stirlingshire', 'STLNG', NULL, 'STLNG', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SURR', 'COUNTY', 'Surrey', 'SURR', NULL, 'SURR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SUSX', 'COUNTY', 'Sussex', 'SUSX', NULL, 'SUSX', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-SUTH', 'COUNTY', 'Sutherland', 'SUTH', NULL, 'SUTH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-WGNSH', 'COUNTY', 'Wigtownshire', 'WGNSH', NULL, 'WGNSH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-WILTS', 'COUNTY', 'Wiltshire', 'WILTS', NULL, 'WILTS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-WLOTH', 'COUNTY', 'West Lothian/Linlithgowshire', 'WLOTH', NULL, 'WLOTH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-WMLD', 'COUNTY', 'Westmorland', 'WMLD', NULL, 'WMLD', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-WORCS', 'COUNTY', 'Worcestershire', 'WORCS', NULL, 'WORCS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-WWKS', 'COUNTY', 'Warwickshire', 'WWKS', NULL, 'WWKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GB-YORKS', 'COUNTY', 'Yorkshire', 'YORKS', NULL, 'YORKS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GBR', 'COUNTRY', 'United Kingdom', 'GB', '826', 'GBR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GEO', 'COUNTRY', 'Georgia', 'GE', '268', 'GEO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GHA', 'COUNTRY', 'Ghana', 'GH', '288', 'GHA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GIB', 'COUNTRY', 'Gibraltar', 'GI', '292', 'GIB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GIN', 'COUNTRY', 'Guinea', 'GN', '324', 'GIN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GLP', 'COUNTRY', 'Guadeloupe', 'GP', '312', 'GLP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GMB', 'COUNTRY', 'Gambia', 'GM', '270', 'GMB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GNB', 'COUNTRY', 'Guinea-bissau', 'GW', '624', 'GNB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GNQ', 'COUNTRY', 'Equatorial Guinea', 'GQ', '226', 'GNQ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GRC', 'COUNTRY', 'Greece', 'GR', '300', 'GRC', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GRD', 'COUNTRY', 'Grenada', 'GD', '308', 'GRD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GRL', 'COUNTRY', 'Greenland', 'GL', '304', 'GRL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GTM', 'COUNTRY', 'Guatemala', 'GT', '320', 'GTM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GU', 'STATE', 'Guam', 'GU', NULL, 'GU', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('GUF', 'COUNTRY', 'French Guiana', 'GF', '254', 'GUF', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GUM', 'COUNTRY', 'Guam', 'GU', '316', 'GUM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GUY', 'COUNTRY', 'Guyana', 'GY', '328', 'GUY', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HI', 'STATE', 'Hawaii', 'HI', NULL, 'HI', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('HKG', 'COUNTRY', 'Hong Kong', 'HK', '344', 'HKG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HMD', 'COUNTRY', 'Heard And Mc Donald Islands', 'HM', '334', 'HMD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HND', 'COUNTRY', 'Honduras', 'HN', '340', 'HND', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HRV', 'COUNTRY', 'Croatia (local Name: Hrvatska)', 'HR', '191', 'HRV', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HTI', 'COUNTRY', 'Haiti', 'HT', '332', 'HTI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HUN', 'COUNTRY', 'Hungary', 'HU', '348', 'HUN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IA', 'STATE', 'Iowa', 'IA', NULL, 'IA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('ID', 'STATE', 'Idaho', 'ID', NULL, 'ID', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('IDN', 'COUNTRY', 'Indonesia', 'ID', '360', 'IDN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IL', 'STATE', 'Illinois', 'IL', NULL, 'IL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('IN', 'STATE', 'Indiana', 'IN', NULL, 'IN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('IN-AN', 'STATE', 'ANDAMAN AND NICOBAR', 'AN', NULL, 'AN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-AP', 'STATE', 'ANDHRA PRADESH', 'AP', NULL, 'AP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-AR', 'STATE', 'ARUNACHAL PRADESH', 'AR', NULL, 'AR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-AS', 'STATE', 'ASSAM', 'AS', NULL, 'AS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-BR', 'STATE', 'BIHAR', 'BR', NULL, 'BR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-CH', 'STATE', 'CHANDIGARH', 'CH', NULL, 'CH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-CT', 'STATE', 'CHHATTISGARH', 'CT', NULL, 'CT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-DD', 'STATE', 'DAMAN AND DIU', 'DD', NULL, 'DD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-DN', 'STATE', 'DADRA AND NAGER HAVELI', 'DN', NULL, 'DN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-GA', 'STATE', 'GOA', 'GA', NULL, 'GA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-GJ', 'STATE', 'GUJARAT', 'GJ', NULL, 'GJ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-HP', 'STATE', 'HIMACHAL PRADESH', 'HP', NULL, 'HP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-HR', 'STATE', 'HARYANA', 'HR', NULL, 'HR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-JH', 'STATE', 'JHARKHAND', 'JH', NULL, 'JH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-JK', 'STATE', 'JAMMU AND KASHMIR', 'JK', NULL, 'JK', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-KA', 'STATE', 'KARNATAKA', 'KA', NULL, 'KA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-KL', 'STATE', 'KERALA', 'KL', NULL, 'KL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-LD', 'STATE', 'LAKSHADWEEP', 'LD', NULL, 'LD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-MH', 'STATE', 'MAHARASHTRA', 'MH', NULL, 'MH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-ML', 'STATE', 'MEGHALAYA', 'ML', NULL, 'ML', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-MN', 'STATE', 'MANIPUR', 'MN', NULL, 'MN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-MP', 'STATE', 'MADHYA PRADESH', 'MP', NULL, 'MP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-MZ', 'STATE', 'MIZORAM', 'MZ', NULL, 'MZ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-ND', 'STATE', 'NEW DELHI', 'ND', NULL, 'ND', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-NL', 'STATE', 'NAGALAND', 'NL', NULL, 'NL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-OR', 'STATE', 'ORISSA', 'OR', NULL, 'OR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-PB', 'STATE', 'PUNJAB', 'PB', NULL, 'PB', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-PY', 'STATE', 'PONDICHERRY', 'PY', NULL, 'PY', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-RJ', 'STATE', 'RAJASTHAN', 'RJ', NULL, 'RJ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-SK', 'STATE', 'SIKKIM', 'SK', NULL, 'SK', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-TN', 'STATE', 'TAMILNADU', 'TN', NULL, 'TN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-TR', 'STATE', 'TRIPURA', 'TR', NULL, 'TR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-UP', 'STATE', 'UTTAR PRADESH', 'UP', NULL, 'UP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-UT', 'STATE', 'UTTARANCHAL', 'UT', NULL, 'UT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IN-WB', 'STATE', 'WEST BENGAL', 'WB', NULL, 'WB', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IND', 'COUNTRY', 'India', 'IN', '356', 'IND', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IOT', 'COUNTRY', 'British Indian Ocean Territory', 'IO', '086', 'IOT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IRL', 'COUNTRY', 'Ireland', 'IE', '372', 'IRL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IRL-CAVN', 'COUNTY', 'Cavan', 'CAVN', NULL, 'CAVN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-CLARE', 'COUNTY', 'Clare', 'CLARE', NULL, 'CLARE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-CORK', 'COUNTY', 'Cork', 'CORK', NULL, 'CORK', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-CRLW', 'COUNTY', 'Carlow', 'CRLW', NULL, 'CRLW', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-DBLN', 'COUNTY', 'Dublin', 'DBLN', NULL, 'DBLN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-DNGL', 'COUNTY', 'Donegal', 'DNGL', NULL, 'DNGL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-GALW', 'COUNTY', 'Galway', 'GALW', NULL, 'GALW', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-KERRY', 'COUNTY', 'Kerry', 'KERRY', NULL, 'KERRY', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-KLDR', 'COUNTY', 'Kildare', 'KLDR', NULL, 'KLDR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-KLKNY', 'COUNTY', 'Kilkenny', 'KLKNY', NULL, 'KLKNY', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-LAOIS', 'COUNTY', 'Laois', 'LAOIS', NULL, 'LAOIS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-LGFD', 'COUNTY', 'Longford', 'LGFD', NULL, 'LGFD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-LMRK', 'COUNTY', 'Limerick', 'LMRK', NULL, 'LMRK', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-LOUTH', 'COUNTY', 'Louth', 'LOUTH', NULL, 'LOUTH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-LTRM', 'COUNTY', 'Leitrim', 'LTRM', NULL, 'LTRM', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-MAYO', 'COUNTY', 'Mayo', 'MAYO', NULL, 'MAYO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-MEATH', 'COUNTY', 'Meath', 'MEATH', NULL, 'MEATH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-MNGHN', 'COUNTY', 'Monaghan', 'MNGHN', NULL, 'MNGHN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-OFLY', 'COUNTY', 'Offaly', 'OFLY', NULL, 'OFLY', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-RSCMN', 'COUNTY', 'Roscommon', 'RSCMN', NULL, 'RSCMN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-SLIGO', 'COUNTY', 'Sligo', 'SLIGO', NULL, 'SLIGO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-TPRY', 'COUNTY', 'Tipperary', 'TPRY', NULL, 'TPRY', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-WKLW', 'COUNTY', 'Wicklow', 'WKLW', NULL, 'WKLW', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-WMETH', 'COUNTY', 'West Meath', 'WMETH', NULL, 'WMETH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-WTFD', 'COUNTY', 'Waterford', 'WTFD', NULL, 'WTFD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRL-WXFD', 'COUNTY', 'Wexford', 'WXFD', NULL, 'WXFD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IRN', 'COUNTRY', 'Iran (islamic Republic Of)', 'IR', '364', 'IRN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IRQ', 'COUNTRY', 'Iraq', 'IQ', '368', 'IRQ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ISL', 'COUNTRY', 'Iceland', 'IS', '352', 'ISL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ISR', 'COUNTRY', 'Israel', 'IL', '376', 'ISR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IT-AG', 'PROVINCE', 'Agrigento', 'AG', NULL, 'AG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AL', 'PROVINCE', 'Alessandria', 'AL', NULL, 'AL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AN', 'PROVINCE', 'Ancona', 'AN', NULL, 'AN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AO', 'PROVINCE', 'Valle d''Aosta', 'AO', NULL, 'AO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AP', 'PROVINCE', 'Ascoli Piceno', 'AP', NULL, 'AP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AQ', 'PROVINCE', 'L''Aquila', 'AQ', NULL, 'AQ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AR', 'PROVINCE', 'Arezzo', 'AR', NULL, 'AR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AT', 'PROVINCE', 'Asti', 'AT', NULL, 'AT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-AV', 'PROVINCE', 'Avellino', 'AV', NULL, 'AV', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BA', 'PROVINCE', 'Bari', 'BA', NULL, 'BA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BG', 'PROVINCE', 'Bergamo', 'BG', NULL, 'BG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BI', 'PROVINCE', 'Biella', 'BI', NULL, 'BI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BL', 'PROVINCE', 'Belluno', 'BL', NULL, 'BL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BN', 'PROVINCE', 'Benevento', 'BN', NULL, 'BN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BO', 'PROVINCE', 'Bologna', 'BO', NULL, 'BO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BR', 'PROVINCE', 'Brindisi', 'BR', NULL, 'BR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BS', 'PROVINCE', 'Brescia', 'BS', NULL, 'BS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BT', 'PROVINCE', 'Barletta-Andria-Trani', 'BT', NULL, 'BT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-BZ', 'PROVINCE', 'Bolzano', 'BZ', NULL, 'BZ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CA', 'PROVINCE', 'Cagliari', 'CA', NULL, 'CA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CB', 'PROVINCE', 'Campobasso', 'CB', NULL, 'CB', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CE', 'PROVINCE', 'Caserta', 'CE', NULL, 'CE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CH', 'PROVINCE', 'Chieti', 'CH', NULL, 'CH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CI', 'PROVINCE', 'Carbonia-Iglesias', 'CI', NULL, 'CI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CL', 'PROVINCE', 'Caltanissetta', 'CL', NULL, 'CL', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CN', 'PROVINCE', 'Cuneo', 'CN', NULL, 'CN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CO', 'PROVINCE', 'Como', 'CO', NULL, 'CO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CR', 'PROVINCE', 'Cremona', 'CR', NULL, 'CR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CS', 'PROVINCE', 'Cosenza', 'CS', NULL, 'CS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CT', 'PROVINCE', 'Catania', 'CT', NULL, 'CT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-CZ', 'PROVINCE', 'Catanzaro', 'CZ', NULL, 'CZ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-EN', 'PROVINCE', 'Enna', 'EN', NULL, 'EN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-FC', 'PROVINCE', 'Forli''-Cesena', 'FC', NULL, 'FC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-FE', 'PROVINCE', 'Ferrara', 'FE', NULL, 'FE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-FG', 'PROVINCE', 'Foggia', 'FG', NULL, 'FG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-FI', 'PROVINCE', 'Firenze', 'FI', NULL, 'FI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-FM', 'PROVINCE', 'Fermo', 'FM', NULL, 'FM', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-FR', 'PROVINCE', 'Frosinone', 'FR', NULL, 'FR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-GE', 'PROVINCE', 'Genova', 'GE', NULL, 'GE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-GO', 'PROVINCE', 'Gorizia', 'GO', NULL, 'GO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-GR', 'PROVINCE', 'Grosseto', 'GR', NULL, 'GR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-IM', 'PROVINCE', 'Imperia', 'IM', NULL, 'IM', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-IS', 'PROVINCE', 'Isernia', 'IS', NULL, 'IS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-KR', 'PROVINCE', 'Crotone', 'KR', NULL, 'KR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-LC', 'PROVINCE', 'Lecco', 'LC', NULL, 'LC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-LE', 'PROVINCE', 'Lecce', 'LE', NULL, 'LE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-LI', 'PROVINCE', 'Livorno', 'LI', NULL, 'LI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-LO', 'PROVINCE', 'Lodi', 'LO', NULL, 'LO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-LT', 'PROVINCE', 'Latina', 'LT', NULL, 'LT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-LU', 'PROVINCE', 'Lucca', 'LU', NULL, 'LU', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MC', 'PROVINCE', 'Macerata', 'MC', NULL, 'MC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MD', 'PROVINCE', 'Medio Campidano', 'MD', NULL, 'MD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-ME', 'PROVINCE', 'Messina', 'ME', NULL, 'ME', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MI', 'PROVINCE', 'Milano', 'MI', NULL, 'MI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MN', 'PROVINCE', 'Mantova', 'MN', NULL, 'MN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MO', 'PROVINCE', 'Modena', 'MO', NULL, 'MO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MS', 'PROVINCE', 'Massa-Carrara', 'MS', NULL, 'MS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MT', 'PROVINCE', 'Matera', 'MT', NULL, 'MT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-MZ', 'PROVINCE', 'Monza', 'MZ', NULL, 'MZ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-NA', 'PROVINCE', 'Napoli', 'NA', NULL, 'NA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-NO', 'PROVINCE', 'Novara', 'NO', NULL, 'NO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-NU', 'PROVINCE', 'Nuoro', 'NU', NULL, 'NU', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-OG', 'PROVINCE', 'Ogliastra', 'OG', NULL, 'OG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-OR', 'PROVINCE', 'Oristano', 'OR', NULL, 'OR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-OT', 'PROVINCE', 'Olbia-Tempio', 'OT', NULL, 'OT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PA', 'PROVINCE', 'Palermo', 'PA', NULL, 'PA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PC', 'PROVINCE', 'Piacenza', 'PC', NULL, 'PC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PD', 'PROVINCE', 'Padova', 'PD', NULL, 'PD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PE', 'PROVINCE', 'Pescara', 'PE', NULL, 'PE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PG', 'PROVINCE', 'Perugia', 'PG', NULL, 'PG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PI', 'PROVINCE', 'Pisa', 'PI', NULL, 'PI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PN', 'PROVINCE', 'Pordenone', 'PN', NULL, 'PN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PO', 'PROVINCE', 'Prato', 'PO', NULL, 'PO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PR', 'PROVINCE', 'Parma', 'PR', NULL, 'PR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PT', 'PROVINCE', 'Pistoia', 'PT', NULL, 'PT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PU', 'PROVINCE', 'Pesaro e Urbino', 'PU', NULL, 'PU', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PV', 'PROVINCE', 'Pavia', 'PV', NULL, 'PV', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-PZ', 'PROVINCE', 'Potenza', 'PZ', NULL, 'PZ', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RA', 'PROVINCE', 'Ravenna', 'RA', NULL, 'RA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RC', 'PROVINCE', 'Reggio Calabria', 'RC', NULL, 'RC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RE', 'PROVINCE', 'Reggio Emilia', 'RE', NULL, 'RE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RG', 'PROVINCE', 'Ragusa', 'RG', NULL, 'RG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RI', 'PROVINCE', 'Rieti', 'RI', NULL, 'RI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RM', 'PROVINCE', 'Roma', 'RM', NULL, 'RM', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RN', 'PROVINCE', 'Rimini', 'RN', NULL, 'RN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-RO', 'PROVINCE', 'Rovigo', 'RO', NULL, 'RO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SA', 'PROVINCE', 'Salerno', 'SA', NULL, 'SA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SI', 'PROVINCE', 'Siena', 'SI', NULL, 'SI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SO', 'PROVINCE', 'Sondrio', 'SO', NULL, 'SO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SP', 'PROVINCE', 'La Spezia', 'SP', NULL, 'SP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SR', 'PROVINCE', 'Siracusa', 'SR', NULL, 'SR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SS', 'PROVINCE', 'Sassari', 'SS', NULL, 'SS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-SV', 'PROVINCE', 'Savona', 'SV', NULL, 'SV', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TA', 'PROVINCE', 'Taranto', 'TA', NULL, 'TA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TE', 'PROVINCE', 'Teramo', 'TE', NULL, 'TE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TN', 'PROVINCE', 'Trento', 'TN', NULL, 'TN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TO', 'PROVINCE', 'Torino', 'TO', NULL, 'TO', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TP', 'PROVINCE', 'Trapani', 'TP', NULL, 'TP', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TR', 'PROVINCE', 'Terni', 'TR', NULL, 'TR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TS', 'PROVINCE', 'Trieste', 'TS', NULL, 'TS', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-TV', 'PROVINCE', 'Treviso', 'TV', NULL, 'TV', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-UD', 'PROVINCE', 'Udine', 'UD', NULL, 'UD', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VA', 'PROVINCE', 'Varese', 'VA', NULL, 'VA', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VB', 'PROVINCE', 'Verbano Cusio Ossola', 'VB', NULL, 'VB', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VC', 'PROVINCE', 'Vercelli', 'VC', NULL, 'VC', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VE', 'PROVINCE', 'Venezia', 'VE', NULL, 'VE', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VI', 'PROVINCE', 'Vicenza', 'VI', NULL, 'VI', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VR', 'PROVINCE', 'Verona', 'VR', NULL, 'VR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VT', 'PROVINCE', 'Viterbo', 'VT', NULL, 'VT', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('IT-VV', 'PROVINCE', 'Vibo Valentia', 'VV', NULL, 'VV', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('ITA', 'COUNTRY', 'Italy', 'IT', '380', 'ITA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('JAM', 'COUNTRY', 'Jamaica', 'JM', '388', 'JAM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('JOR', 'COUNTRY', 'Jordan', 'JO', '400', 'JOR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('JPN', 'COUNTRY', 'Japan', 'JP', '392', 'JPN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KAZ', 'COUNTRY', 'Kazakhstan', 'KZ', '398', 'KAZ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KEN', 'COUNTRY', 'Kenya', 'KE', '404', 'KEN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KGZ', 'COUNTRY', 'Kyrgyzstan', 'KG', '417', 'KGZ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KHM', 'COUNTRY', 'Cambodia', 'KH', '116', 'KHM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KIR', 'COUNTRY', 'Kiribati', 'KI', '296', 'KIR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KNA', 'COUNTRY', 'Saint Kitts And Nevis', 'KN', '659', 'KNA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KOR', 'COUNTRY', 'Korea, Republic Of', 'KR', '410', 'KOR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KS', 'STATE', 'Kansas', 'KS', NULL, 'KS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('KWT', 'COUNTRY', 'Kuwait', 'KW', '414', 'KWT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KY', 'STATE', 'Kentucky', 'KY', NULL, 'KY', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('LA', 'STATE', 'Louisiana', 'LA', NULL, 'LA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('LAO', 'COUNTRY', 'Lao People''s Democratic Republic', 'LA', '418', 'LAO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LBN', 'COUNTRY', 'Lebanon', 'LB', '422', 'LBN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LBR', 'COUNTRY', 'Liberia', 'LR', '430', 'LBR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LBY', 'COUNTRY', 'Libyan Arab Jamahiriya', 'LY', '434', 'LBY', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LCA', 'COUNTRY', 'Saint Lucia', 'LC', '662', 'LCA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LIE', 'COUNTRY', 'Liechtenstein', 'LI', '438', 'LIE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LKA', 'COUNTRY', 'Sri Lanka', 'LK', '144', 'LKA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LSO', 'COUNTRY', 'Lesotho', 'LS', '426', 'LSO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LTU', 'COUNTRY', 'Lithuania', 'LT', '440', 'LTU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LUX', 'COUNTRY', 'Luxembourg', 'LU', '442', 'LUX', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LVA', 'COUNTRY', 'Latvia', 'LV', '428', 'LVA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MA', 'STATE', 'Massachusetts', 'MA', NULL, 'MA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MAC', 'COUNTRY', 'Macau', 'MO', '446', 'MAC', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MAR', 'COUNTRY', 'Morocco', 'MA', '504', 'MAR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MB', 'PROVINCE', 'Manitoba', 'MB', NULL, 'MB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MCO', 'COUNTRY', 'Monaco', 'MC', '492', 'MCO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MD', 'STATE', 'Maryland', 'MD', NULL, 'MD', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MDA', 'COUNTRY', 'Moldova, Republic Of', 'MD', '498', 'MDA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MDG', 'COUNTRY', 'Madagascar', 'MG', '450', 'MDG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MDV', 'COUNTRY', 'Maldives', 'MV', '462', 'MDV', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ME', 'STATE', 'Maine', 'ME', NULL, 'ME', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MEX', 'COUNTRY', 'Mexico', 'MX', '484', 'MEX', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MEXCAN', 'GROUP', 'Mexico/Canada', 'MEXCAN', NULL, 'MEXCAN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MH', 'STATE', 'Marshall Islands', 'MH', NULL, 'MH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MHL', 'COUNTRY', 'Marshall Islands', 'MH', '584', 'MHL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MI', 'STATE', 'Michigan', 'MI', NULL, 'MI', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MKD', 'COUNTRY', 'Macedonia, The Former Yugoslav Republic Of', 'MK', '807', 'MKD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MLI', 'COUNTRY', 'Mali', 'ML', '466', 'MLI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MLT', 'COUNTRY', 'Malta', 'MT', '470', 'MLT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MMR', 'COUNTRY', 'Myanmar', 'MM', '104', 'MMR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MN', 'STATE', 'Minnesota', 'MN', NULL, 'MN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MNE', 'COUNTRY', 'Montenegro', 'ME', '499', 'MNE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MNG', 'COUNTRY', 'Mongolia', 'MN', '496', 'MNG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MNP', 'COUNTRY', 'Northern Mariana Islands', 'MP', '580', 'MNP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MO', 'STATE', 'Missouri', 'MO', NULL, 'MO', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MOZ', 'COUNTRY', 'Mozambique', 'MZ', '508', 'MOZ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MP', 'STATE', 'Northern Mariana Islands', 'MP', NULL, 'MP', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MRT', 'COUNTRY', 'Mauritania', 'MR', '478', 'MRT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MS', 'STATE', 'Mississippi', 'MS', NULL, 'MS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MSR', 'COUNTRY', 'Montserrat', 'MS', '500', 'MSR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MT', 'STATE', 'Montana', 'MT', NULL, 'MT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('MTQ', 'COUNTRY', 'Martinique', 'MQ', '474', 'MTQ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MUS', 'COUNTRY', 'Mauritius', 'MU', '480', 'MUS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MWI', 'COUNTRY', 'Malawi', 'MW', '454', 'MWI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MYS', 'COUNTRY', 'Malaysia', 'MY', '458', 'MYS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MYT', 'COUNTRY', 'Mayotte', 'YT', '175', 'MYT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NAM', 'COUNTRY', 'Namibia', 'NA', '516', 'NAM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NB', 'PROVINCE', 'New Brunswick', 'NB', NULL, 'NB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NC', 'STATE', 'North Carolina', 'NC', NULL, 'NC', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NCL', 'COUNTRY', 'New Caledonia', 'NC', '540', 'NCL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ND', 'STATE', 'North Dakota', 'ND', NULL, 'ND', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NE', 'STATE', 'Nebraska', 'NE', NULL, 'NE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NER', 'COUNTRY', 'Niger', 'NE', '562', 'NER', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NFK', 'COUNTRY', 'Norfolk Island', 'NF', '574', 'NFK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NGA', 'COUNTRY', 'Nigeria', 'NG', '566', 'NGA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NH', 'STATE', 'New Hampshire', 'NH', NULL, 'NH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NIC', 'COUNTRY', 'Nicaragua', 'NI', '558', 'NIC', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NIRL', 'COUNTRY', 'N.Ireland', 'NIR', '897', 'NIRL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NIRL-ARMG', 'COUNTY', 'Armagh', 'ARMG', NULL, 'ARMG', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('NIRL-ATRM', 'COUNTY', 'Antrim', 'ATRM', NULL, 'ATRM', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('NIRL-DOWN', 'COUNTY', 'Down', 'DOWN', NULL, 'DOWN', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('NIRL-FMNH', 'COUNTY', 'Fermanagh', 'FMNH', NULL, 'FMNH', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('NIRL-LDRY', 'COUNTY', 'Londonderry', 'LDRY', NULL, 'LDRY', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('NIRL-TYR', 'COUNTY', 'Tyrone', 'TYR', NULL, 'TYR', NULL, '2016-04-30 23:53:45', '2016-04-30 23:53:45'),
('NIU', 'COUNTRY', 'Niue', 'NU', '570', 'NIU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NJ', 'STATE', 'New Jersey', 'NJ', NULL, 'NJ', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL', 'PROVINCE', 'Newfoundland and Labrador', 'NL', NULL, 'NL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-DR', 'PROVINCE', 'Drenthe', 'DR', NULL, 'DR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-FL', 'PROVINCE', 'Flevoland', 'FL', NULL, 'FL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-FR', 'PROVINCE', 'Friesland', 'FR', NULL, 'FR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-GL', 'PROVINCE', 'Gelderland', 'GL', NULL, 'GL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-GR', 'PROVINCE', 'Groningen', 'GR', NULL, 'GR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-LB', 'PROVINCE', 'Limburg', 'LB', NULL, 'LB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-NB', 'PROVINCE', 'Noord-Brabant', 'NB', NULL, 'NB', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-NH', 'PROVINCE', 'Noord-Holland', 'NH', NULL, 'NH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-OV', 'PROVINCE', 'Overijssel', 'OV', NULL, 'OV', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-UT', 'PROVINCE', 'Utrecht', 'UT', NULL, 'UT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-ZE', 'PROVINCE', 'Zeeland', 'ZE', NULL, 'ZE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-ZH', 'PROVINCE', 'Zuid-Holland', 'ZH', NULL, 'ZH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NL-ZL', 'PROVINCE', 'Zeeland', 'ZL', NULL, 'ZL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NLD', 'COUNTRY', 'Netherlands', 'NL', '528', 'NLD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NM', 'STATE', 'New Mexico', 'NM', NULL, 'NM', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NOR', 'COUNTRY', 'Norway', 'NO', '578', 'NOR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NPL', 'COUNTRY', 'Nepal', 'NP', '524', 'NPL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NRU', 'COUNTRY', 'Nauru', 'NR', '520', 'NRU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NS', 'PROVINCE', 'Nova Scotia', 'NS', NULL, 'NS', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NT', 'PROVINCE', 'Northwest Territories', 'NT', NULL, 'NT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NU', 'PROVINCE', 'Nunavut', 'NU', NULL, 'NU', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NV', 'STATE', 'Nevada', 'NV', NULL, 'NV', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NY', 'STATE', 'New York', 'NY', NULL, 'NY', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('NZL', 'COUNTRY', 'New Zealand', 'NZ', '554', 'NZL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('OH', 'STATE', 'Ohio', 'OH', NULL, 'OH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('OK', 'STATE', 'Oklahoma', 'OK', NULL, 'OK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('OMN', 'COUNTRY', 'Oman', 'OM', '512', 'OMN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ON', 'PROVINCE', 'Ontario', 'ON', NULL, 'ON', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('OR', 'STATE', 'Oregon', 'OR', NULL, 'OR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('PA', 'STATE', 'Pennsylvania', 'PA', NULL, 'PA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('PAK', 'COUNTRY', 'Pakistan', 'PK', '586', 'PAK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PAN', 'COUNTRY', 'Panama', 'PA', '591', 'PAN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PCN', 'COUNTRY', 'Pitcairn', 'PN', '612', 'PCN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PE', 'PROVINCE', 'Prince Edward Island', 'PE', NULL, 'PE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('PER', 'COUNTRY', 'Peru', 'PE', '604', 'PER', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PHL', 'COUNTRY', 'Philippines', 'PH', '608', 'PHL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PLW', 'COUNTRY', 'Palau', 'PW', '585', 'PLW', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PNG', 'COUNTRY', 'Papua New Guinea', 'PG', '598', 'PNG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('POL', 'COUNTRY', 'Poland', 'PL', '616', 'POL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PR', 'STATE', 'Puerto Rico', 'PR', NULL, 'PR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('PRI', 'COUNTRY', 'Puerto Rico', 'PR', '630', 'PRI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PRK', 'COUNTRY', 'Korea, Democratic People''s Republic Of', 'KP', '408', 'PRK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PRT', 'COUNTRY', 'Portugal', 'PT', '620', 'PRT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PRY', 'COUNTRY', 'Paraguay', 'PY', '600', 'PRY', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PSE', 'COUNTRY', 'Palestinian Territory, Occupied', 'PS', '275', 'PSE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PW', 'STATE', 'Palau', 'PW', NULL, 'PW', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('PYF', 'COUNTRY', 'French Polynesia', 'PF', '258', 'PYF', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('QAT', 'COUNTRY', 'Qatar', 'QA', '634', 'QAT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('QC', 'PROVINCE', 'Quebec', 'QC', NULL, 'QC', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('REU', 'COUNTRY', 'Reunion', 'RE', '638', 'REU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('RI', 'STATE', 'Rhode Island', 'RI', NULL, 'RI', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('ROU', 'COUNTRY', 'Romania', 'RO', '642', 'ROU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('RUS', 'COUNTRY', 'Russian Federation', 'RU', '643', 'RUS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('RWA', 'COUNTRY', 'Rwanda', 'RW', '646', 'RWA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SAU', 'COUNTRY', 'Saudi Arabia', 'SA', '682', 'SAU', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SC', 'STATE', 'South Carolina', 'SC', NULL, 'SC', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('SCOT', 'COUNTRY', 'Scotland', 'SCT', '895', 'SCOT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SD', 'STATE', 'South Dakota', 'SD', NULL, 'SD', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('SDN', 'COUNTRY', 'Sudan', 'SD', '736', 'SDN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SEN', 'COUNTRY', 'Senegal', 'SN', '686', 'SEN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SGP', 'COUNTRY', 'Singapore', 'SG', '702', 'SGP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SGS', 'COUNTRY', 'South Georgia And The South Sandwich Islands', 'GS', '239', 'SGS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SHN', 'COUNTRY', 'St. Helena', 'SH', '654', 'SHN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SJM', 'COUNTRY', 'Svalbard And Jan Mayen Islands', 'SJ', '744', 'SJM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SK', 'PROVINCE', 'Saskatchewan', 'SK', NULL, 'SK', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('SLB', 'COUNTRY', 'Solomon Islands', 'SB', '090', 'SLB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SLE', 'COUNTRY', 'Sierra Leone', 'SL', '694', 'SLE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SLV', 'COUNTRY', 'El Salvador', 'SV', '222', 'SLV', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SMR', 'COUNTRY', 'San Marino', 'SM', '674', 'SMR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SOM', 'COUNTRY', 'Somalia', 'SO', '706', 'SOM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SPM', 'COUNTRY', 'St. Pierre And Miquelon', 'PM', '666', 'SPM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SRB', 'COUNTRY', 'Serbia', 'RS', '688', 'SRB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('STP', 'COUNTRY', 'Sao Tome And Principe', 'ST', '678', 'STP', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SUR', 'COUNTRY', 'Suriname', 'SR', '740', 'SUR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SVK', 'COUNTRY', 'Slovakia (slovak Republic)', 'SK', '703', 'SVK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43');
INSERT INTO `geo` (`geo_id`, `geo_type_id`, `geo_name`, `geo_code`, `geo_sec_code`, `abbreviation`, `well_known_text`, `created_date`, `updated_date`) VALUES
('SVN', 'COUNTRY', 'Slovenia', 'SI', '705', 'SVN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SWE', 'COUNTRY', 'Sweden', 'SE', '752', 'SWE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SWZ', 'COUNTRY', 'Swaziland', 'SZ', '748', 'SWZ', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SYC', 'COUNTRY', 'Seychelles', 'SC', '690', 'SYC', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SYR', 'COUNTRY', 'Syrian Arab Republic', 'SY', '760', 'SYR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TCA', 'COUNTRY', 'Turks And Caicos Islands', 'TC', '796', 'TCA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TCD', 'COUNTRY', 'Chad', 'TD', '148', 'TCD', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TGO', 'COUNTRY', 'Togo', 'TG', '768', 'TGO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('THA', 'COUNTRY', 'Thailand', 'TH', '764', 'THA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TJK', 'COUNTRY', 'Tajikistan', 'TJ', '762', 'TJK', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TKL', 'COUNTRY', 'Tokelau', 'TK', '772', 'TKL', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TKM', 'COUNTRY', 'Turkmenistan', 'TM', '795', 'TKM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TLS', 'COUNTRY', 'East Timor', 'TL', '626', 'TLS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TN', 'STATE', 'Tennessee', 'TN', NULL, 'TN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('TON', 'COUNTRY', 'Tonga', 'TO', '776', 'TON', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TTO', 'COUNTRY', 'Trinidad And Tobago', 'TT', '780', 'TTO', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TUN', 'COUNTRY', 'Tunisia', 'TN', '788', 'TUN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TUR', 'COUNTRY', 'Turkey', 'TR', '792', 'TUR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TUV', 'COUNTRY', 'Tuvalu', 'TV', '798', 'TUV', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TWN', 'COUNTRY', 'Taiwan', 'TW', '158', 'TWN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TX', 'STATE', 'Texas', 'TX', NULL, 'TX', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('TZA', 'COUNTRY', 'Tanzania, United Republic Of', 'TZ', '834', 'TZA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UGA', 'COUNTRY', 'Uganda', 'UG', '800', 'UGA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UKR', 'COUNTRY', 'Ukraine', 'UA', '804', 'UKR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UM', 'STATE', 'U.S. Minor Outlying Islands', 'UM', NULL, 'UM', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('UMI', 'COUNTRY', 'United States Minor Outlying Islands', 'UM', '581', 'UMI', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('URY', 'COUNTRY', 'Uruguay', 'UY', '858', 'URY', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('US50', 'GROUP', 'US 50 (no APO/FPO)', 'US50', NULL, 'US50', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USA', 'COUNTRY', 'United States', 'US', '840', 'USA', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('USA-84057', 'POSTAL_CODE', '84057', '84057', NULL, '84057', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USA-90049', 'POSTAL_CODE', '90049', '90049', NULL, '90049', NULL, '2016-05-01 00:00:17', '2016-05-01 00:00:17'),
('USA-94590', 'POSTAL_CODE', '94590', '94590', NULL, '94590', NULL, '2016-05-01 00:00:17', '2016-05-01 00:00:17'),
('USAF', 'GROUP', 'US Armed Forces', 'USAF', NULL, 'USAF', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USALL', 'GROUP', 'US All (w/ APO/FPO)', 'USALL', NULL, 'USALL', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USCAN', 'GROUP', 'US/Canada', 'USCAN', NULL, 'USCAN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USCN', 'GROUP', 'US Continental', 'USCN', NULL, 'USCN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USMEXCAN', 'GROUP', 'US/Mexico/Canada', 'USMEXCAN', NULL, 'USMEXCAN', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('USTR', 'GROUP', 'US Territories', 'USTR', NULL, 'USTR', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('UT', 'STATE', 'Utah', 'UT', NULL, 'UT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('UT-SANPETE', 'COUNTY', 'Sanpete', 'SANPETE', NULL, 'SANPETE', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('UT-UTAH', 'COUNTY', 'Utah County', 'UTAH', NULL, 'UTAH', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('UZB', 'COUNTRY', 'Uzbekistan', 'UZ', '860', 'UZB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VA', 'STATE', 'Virginia', 'VA', NULL, 'VA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('VAT', 'COUNTRY', 'Holy See (vatican City State)', 'VA', '336', 'VAT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VCT', 'COUNTRY', 'Saint Vincent And The Grenadines', 'VC', '670', 'VCT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VEN', 'COUNTRY', 'Venezuela', 'VE', '862', 'VEN', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VGB', 'COUNTRY', 'Virgin Islands (british)', 'VG', '092', 'VGB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VI', 'STATE', 'Virgin Islands', 'VI', NULL, 'VI', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('VIR', 'COUNTRY', 'Virgin Islands (u.s.)', 'VI', '850', 'VIR', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VNM', 'COUNTRY', 'Viet Nam', 'VN', '704', 'VNM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VT', 'STATE', 'Vermont', 'VT', NULL, 'VT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('VUT', 'COUNTRY', 'Vanuatu', 'VU', '548', 'VUT', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('WA', 'STATE', 'Washington', 'WA', NULL, 'WA', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('WALS', 'COUNTRY', 'Wales', 'WLS', '898', 'WALS', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('WI', 'STATE', 'Wisconsin', 'WI', NULL, 'WI', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('WLF', 'COUNTRY', 'Wallis And Futuna Islands', 'WF', '876', 'WLF', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('WSM', 'COUNTRY', 'Samoa', 'WS', '882', 'WSM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('WV', 'STATE', 'West Virginia', 'WV', NULL, 'WV', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('WY', 'STATE', 'Wyoming', 'WY', NULL, 'WY', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('YEM', 'COUNTRY', 'Yemen', 'YE', '887', 'YEM', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('YT', 'PROVINCE', 'Yukon', 'YT', NULL, 'YT', NULL, '2016-04-30 23:53:46', '2016-04-30 23:53:46'),
('YUG', 'COUNTRY', 'Yugoslavia', 'YU', '891', 'YUG', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZAF', 'COUNTRY', 'South Africa', 'ZA', '710', 'ZAF', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZMB', 'COUNTRY', 'Zambia', 'ZM', '894', 'ZMB', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZWE', 'COUNTRY', 'Zimbabwe', 'ZW', '716', 'ZWE', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('_NA_', NULL, 'Not Applicable', '_NA_', NULL, '_NA_', NULL, '2016-04-30 23:53:43', '2016-04-30 23:53:43');

-- --------------------------------------------------------

--
-- Table structure for table `geo_type`
--

CREATE TABLE `geo_type` (
  `geo_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `geo_type`
--

INSERT INTO `geo_type` (`geo_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('CITY', NULL, 0, 'City', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('COUNTRY', NULL, 0, 'Country', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('COUNTY', NULL, 0, 'County', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('COUNTY_CITY', NULL, 0, 'County-City', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('GROUP', NULL, 0, 'Group', '2016-05-09 15:20:00', '2016-05-09 15:20:00'),
('POSTAL_CODE', NULL, 0, 'Postal Code', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('PROVINCE', NULL, 0, 'Province', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('REGION', NULL, 0, 'Region', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('STATE', NULL, 0, 'State', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('TERRITORY', NULL, 0, 'Territory', '2016-05-09 15:20:00', '2016-05-09 15:20:00');

-- --------------------------------------------------------

--
-- Table structure for table `note_data`
--

CREATE TABLE `note_data` (
  `note_id` int(11) NOT NULL,
  `note_name` varchar(100) DEFAULT NULL,
  `note_info` longtext,
  `note_date_time` datetime DEFAULT NULL,
  `note_party` int(11) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `note_data`
--

INSERT INTO `note_data` (`note_id`, `note_name`, `note_info`, `note_date_time`, `note_party`, `created_date`, `updated_date`) VALUES
(1, 'this is an internal note', 'this is an internal note', '2016-06-07 01:07:36', 90, '2016-06-07 01:07:36', '2016-06-07 01:07:36'),
(2, 'this is an internal note', 'this is an internal note', '2016-06-07 01:17:02', 91, '2016-06-07 01:17:02', '2016-06-07 01:17:02'),
(3, 'including an intenal note', 'including an intenal note', '2016-06-07 01:31:47', 90, '2016-06-07 01:31:47', '2016-06-07 01:31:47'),
(4, 'this is an intenal note from Dinesh', 'this is an intenal note from Dinesh', '2016-06-09 01:26:22', 90, '2016-06-09 01:26:22', '2016-06-09 01:26:22'),
(5, 'second intenal note from Dinesh', 'second intenal note from Dinesh', '2016-06-09 01:30:33', 90, '2016-06-09 01:30:33', '2016-06-09 01:30:33'),
(6, 'second intenal note from Dinesh', 'second intenal note from Dinesh', '2016-06-09 01:55:27', 90, '2016-06-09 01:55:27', '2016-06-09 01:55:27'),
(7, 'intenal note from Dinesh for case 13', 'intenal note from Dinesh for case 13', '2016-06-09 02:04:00', 90, '2016-06-09 02:04:00', '2016-06-09 02:04:00'),
(8, 'intenal note from Dinesh for case 14', 'intenal note from Dinesh for case 14', '2016-06-09 02:07:28', 90, '2016-06-09 02:07:28', '2016-06-09 02:07:28'),
(9, 'this is an internal note', 'this is an internal note', '2016-06-10 21:05:55', 90, '2016-06-10 21:05:55', '2016-06-10 21:05:55'),
(11, 'this is an internal note', 'this is an internal note', '2016-06-10 21:06:00', 20, '2016-06-10 21:06:00', '2016-06-10 21:06:00'),
(12, 'this is an internal note', 'this is an internal note', '2016-06-10 21:06:37', 90, '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(13, 'this is an internal note', 'this is an internal note', '2016-06-10 21:06:37', 20, '2016-06-10 21:06:37', '2016-06-10 21:06:37'),
(14, 'red light should flash', 'red light should flash', '2016-06-11 11:01:45', 58, '2016-06-11 11:01:45', '2016-06-11 11:01:45'),
(15, 'this is an internal note', 'this is an internal note', '2016-06-11 11:04:42', 90, '2016-06-11 11:04:42', '2016-06-11 11:04:42'),
(17, 'this is an internal note', 'this is an internal note', '2016-06-11 11:09:10', 20, '2016-06-11 11:09:10', '2016-06-11 11:09:10'),
(18, 'red light should flash', 'red light should flash', '2016-06-11 14:10:07', 58, '2016-06-11 14:10:07', '2016-06-11 14:10:07'),
(19, 'this is an internal note', 'this is an internal note', '2016-06-11 14:15:59', 58, '2016-06-11 14:15:59', '2016-06-11 14:15:59'),
(20, 'this is an internal note', 'this is an internal note', '2016-06-11 14:17:28', 58, '2016-06-11 14:17:28', '2016-06-11 14:17:28'),
(21, 'this is an internal note', 'this is an internal note', '2016-06-17 11:53:10', 20, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(22, 'this is an internal note', 'this is an internal note', '2016-06-29 19:26:22', 20, '2016-06-29 19:26:22', '2016-06-29 19:26:22'),
(23, 'this is an internal note', 'this is an internal note', '2016-06-29 19:28:19', 20, '2016-06-29 19:28:19', '2016-06-29 19:28:19');

-- --------------------------------------------------------

--
-- Table structure for table `organization`
--

CREATE TABLE `organization` (
  `party_id` int(11) NOT NULL,
  `organization_name` varchar(100) NOT NULL,
  `office_site_name` varchar(100) NOT NULL,
  `annual_revenue` decimal(18,2) NOT NULL,
  `num_employees` decimal(20,0) NOT NULL,
  `ticker_symbol` varchar(10) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `logo_image_url` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `organization`
--

INSERT INTO `organization` (`party_id`, `organization_name`, `office_site_name`, `annual_revenue`, `num_employees`, `ticker_symbol`, `comments`, `logo_image_url`, `created_date`, `updated_date`) VALUES
(171, 'Standard Industries', '', '0.00', '0', '', '', '', '2016-06-26 22:13:33', '2016-06-26 22:13:33'),
(381, 'example dot com', 'example.com', '10000.00', '50', 'XMPL', 'my company', 'https://rileywolff.com/content/images/2015/09/gnewlogo.jpg', '2016-07-25 04:38:51', '2016-07-25 04:38:51'),
(391, 'example dot com', 'example.com', '10000.00', '20', 'XMPL', 'fasknc', 'https://rileywolff.com/content/images/2015/09/gnewlogo.jpg', '2016-07-25 04:39:58', '2016-07-25 04:39:58'),
(441, 'Acme Advantage', 'Home office', '1000000.00', '500', 'ACA', 'Acme has a real advantage in this market', 'https://acme.com', '2016-07-25 05:23:16', '2016-07-25 05:23:16'),
(451, 'Acme Advantage', 'Home office', '1000000.00', '500', 'ACA', 'Acme has a real advantage in this market', 'https://acme.com', '2016-07-25 05:23:34', '2016-07-25 05:23:34'),
(461, 'Acme Advantage', 'Home office', '1000000.00', '500', 'ACA', 'Acme has a real advantage in this market', 'https://acme.com', '2016-07-25 05:23:54', '2016-07-25 05:23:54'),
(471, 'Acme Advantage', 'Home office', '10000000.00', '50', 'ACA', 'Acme has an advantage', 'https://acme.com', '2016-07-25 05:30:07', '2016-07-25 05:30:07'),
(481, 'Acme Advantage', 'Home office', '10000000.00', '50', 'ACA', 'Acme has an advantage', 'https://acme.com', '2016-07-25 05:30:26', '2016-07-25 05:30:26'),
(491, 'Acme Advantage', 'Home office', '10000000.00', '89', 'ACA', 'Acme has the advantage!', 'https://acme.com', '2016-07-25 06:24:13', '2016-07-25 06:24:13'),
(501, 'Electronics Excellence', 'Headquarters', '22529435.00', '100', 'EEX', 'EE Excels', 'https://ee.com', '2016-07-25 06:26:34', '2016-07-25 06:26:34');

-- --------------------------------------------------------

--
-- Table structure for table `party`
--

CREATE TABLE `party` (
  `party_id` int(11) NOT NULL,
  `party_type_id` varchar(20) NOT NULL,
  `preferred_currency_uom_id` varchar(20) DEFAULT NULL,
  `description` text,
  `status_id` varchar(20) NOT NULL,
  `created_by` varchar(100) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party`
--

INSERT INTO `party` (`party_id`, `party_type_id`, `preferred_currency_uom_id`, `description`, `status_id`, `created_by`, `created_date`, `updated_date`) VALUES
(2, 'PERSON', 'USD', 'user_login_id=admin', 'PARTY_ENABLED', NULL, '2016-05-10 14:00:00', '2016-05-10 14:00:00'),
(3, 'PERSON', 'USD', 'user_login_id=fullAdminABC', 'PARTY_ENABLED', NULL, '2016-05-10 14:00:00', '2016-05-25 10:50:17'),
(4, 'PERSON', 'USD', 'user_login_id=fullAdminDEF', 'PARTY_ENABLED', NULL, '2016-05-10 14:00:00', '2016-05-25 10:51:37'),
(5, 'PERSON', 'USD', 'user_login_id=partyAdminABC', 'PARTY_ENABLED', NULL, '2016-05-10 14:00:00', '2016-05-25 10:54:51'),
(7, 'PERSON', 'USD', 'user_login_id=partyAdminDEF', 'PARTY_ENABLED', NULL, '2016-05-13 00:54:21', '2016-05-13 00:54:21'),
(11, 'PERSON', 'INR', 'user_login_id=acctOwnerABC', 'PARTY_ENABLED', 'admin', '2016-05-25 11:02:01', '2016-05-25 11:02:01'),
(12, 'PERSON', 'USD', 'user_login_id=acctOwnerDEF', 'PARTY_ENABLED', 'admin', '2016-05-20 19:35:43', '2016-05-25 11:06:16'),
(13, 'PERSON', 'USD', 'user_login_id=contactOwnerABC', 'PARTY_ENABLED', 'admin', '2016-05-20 23:20:49', '2016-05-25 11:08:50'),
(14, 'PERSON', 'USD', 'user_login_id=contactOwnerDEF', 'PARTY_ENABLED', 'admin', '2016-05-20 23:31:14', '2016-05-20 23:31:14'),
(15, 'PERSON', 'USD', 'user_login_id=crmsfaContactTasksABC', 'PARTY_ENABLED', 'admin', '2016-05-20 23:31:42', '2016-05-25 11:15:00'),
(16, 'PERSON', 'USD', 'user_login_id=crmsfaContactTasksDEF', 'PARTY_ENABLED', 'admin', '2016-05-20 23:34:00', '2016-05-25 11:17:41'),
(17, 'PERSON', 'USD', 'user_login_id=leadOwnerABC', 'PARTY_ENABLED', 'admin', '2016-05-20 23:35:03', '2016-05-20 23:35:03'),
(18, 'PERSON', 'USD', 'user_login_id = leadOwnerDEF', 'PARTY_ENABLED', 'admin', '2016-05-20 23:36:18', '2016-05-20 23:36:18'),
(19, 'PERSON', 'USD', 'user_login_id=accountOwnerABC', 'PARTY_ENABLED', 'admin', '2016-05-25 10:40:35', '2016-05-29 15:42:52'),
(20, 'PERSON', 'USD', 'blah', 'PARTY_ENABLED', 'fullAdminABC', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(21, 'PERSON', 'USD', 'Contact owned by contactOwnerDEF', 'PARTY_ENABLED', NULL, '2016-05-25 11:21:29', '2016-05-25 11:23:00'),
(22, 'PERSON', 'USD', 'Lead owned by admin', 'PARTY_ENABLED', 'admin', '2016-05-25 11:22:21', '2016-05-25 11:23:14'),
(23, 'PERSON', NULL, 'Contact owned by fullAdminABC', 'PARTY_ENABLED', 'admin', '2016-05-25 17:34:51', '2016-06-22 12:45:14'),
(24, 'PERSON', 'USD', 'Lead owned by fullAdminABC', 'PARTY_ENABLED', 'admin', '2016-05-25 12:35:03', '2016-05-25 12:35:03'),
(25, 'PERSON', 'USD', 'Contact owned by contactOwnerABC', 'PARTY_ENABLED', 'admin', '2016-05-25 12:35:43', '2016-05-25 12:35:43'),
(26, 'PERSON', 'USD', 'add party test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:03:02', '2016-05-25 19:03:02'),
(27, 'PERSON', 'USD', 'nobody in particular', 'PARTY_ENABLED', 'admin', '2016-05-25 19:27:16', '2016-05-25 19:27:16'),
(28, 'PERSON', 'USD', 'added by contactOwnerABC...?', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-25 19:28:24', '2016-05-25 19:28:24'),
(29, 'PERSON', 'USD', 'added just as a test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-25 19:29:20', '2016-05-25 19:29:20'),
(30, 'PERSON', 'USD', 'addPerson test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:31:20', '2016-05-25 19:31:20'),
(31, 'PERSON', 'USD', 'addParty test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:35:09', '2016-05-25 19:35:09'),
(32, 'PERSON', 'USD', 'addParty test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:37:53', '2016-05-25 19:37:53'),
(33, 'PERSON', 'USD', 'addParty test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:39:46', '2016-05-25 19:39:46'),
(34, 'PERSON', 'USD', 'addPerson test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:49:29', '2016-05-25 19:49:29'),
(35, 'PERSON', 'USD', 'addPerson test', 'PARTY_ENABLED', 'admin', '2016-05-25 19:53:14', '2016-05-25 19:53:14'),
(40, 'PERSON', 'USD', 'can I force party_id?', 'PARTY_ENABLED', 'admin', '2016-05-25 23:18:59', '2016-05-25 23:18:59'),
(41, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 14:23:48', '2016-05-26 14:23:48'),
(42, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 14:54:11', '2016-05-26 14:54:11'),
(43, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 15:48:35', '2016-05-26 15:48:35'),
(44, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 15:53:43', '2016-05-26 15:53:43'),
(45, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 15:58:17', '2016-05-26 15:58:17'),
(46, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:18:32', '2016-05-26 16:18:32'),
(47, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:21:30', '2016-05-26 16:21:30'),
(48, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:22:04', '2016-05-26 16:22:04'),
(49, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:33:20', '2016-05-26 16:33:20'),
(50, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:33:55', '2016-05-26 16:33:55'),
(51, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:36:20', '2016-05-26 16:36:20'),
(52, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 16:39:01', '2016-05-26 16:39:01'),
(53, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 17:44:07', '2016-05-26 17:44:07'),
(54, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 18:09:38', '2016-05-26 18:09:38'),
(55, 'PERSON', 'USD', 'Contact owned by contactOwnerABC', 'PARTY_ENABLED', 'admin', '2016-05-26 18:18:07', '2016-05-26 18:18:07'),
(56, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 18:21:41', '2016-05-26 18:21:41'),
(57, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-26 18:28:22', '2016-05-26 18:28:22'),
(58, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-28 05:51:41', '2016-05-28 05:51:41'),
(59, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-28 06:02:20', '2016-05-28 06:02:20'),
(60, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-28 06:03:30', '2016-05-28 06:03:30'),
(61, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-28 06:13:16', '2016-05-28 06:13:16'),
(62, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 06:26:20', '2016-05-28 06:26:20'),
(63, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 06:29:13', '2016-05-28 06:29:13'),
(64, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 06:34:45', '2016-05-28 06:34:45'),
(65, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 14:24:37', '2016-05-28 14:24:37'),
(66, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 19:28:48', '2016-05-28 19:28:48'),
(67, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 19:43:24', '2016-05-28 19:43:24'),
(68, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'fullAdminABC', '2016-05-28 19:50:57', '2016-05-28 19:50:57'),
(69, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:07:04', '2016-05-30 02:07:04'),
(70, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:12:37', '2016-05-30 02:12:37'),
(71, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(72, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(73, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(74, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(75, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(76, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 03:25:45', '2016-05-30 03:25:45'),
(77, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-05-30 03:26:37', '2016-05-30 03:26:37'),
(78, 'PERSON', 'USD', 'user_login_id=testGuy', 'PARTY_ENABLED', NULL, '2016-05-31 01:37:50', '2016-05-31 01:37:50'),
(79, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(80, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(81, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(82, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(83, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(84, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(85, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(86, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(87, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(88, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(89, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(90, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerDEF', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(91, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(100, 'PERSON', 'USD', 'user_login_id=mrQuoteUnquote', 'PARTY_ENABLED', NULL, '2016-06-01 20:49:01', '2016-06-01 20:49:01'),
(101, 'PERSON', 'USD', 'blah', 'PARTY_ENABLED', 'contactOwnerABC', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(102, 'PERSON', 'USD', 'blah', 'PARTY_ENABLED', 'contactOwnerABC', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(103, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(104, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerABC', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(105, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(106, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(107, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(108, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(109, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(110, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-15 23:56:40', '2016-06-15 23:56:40'),
(111, 'PERSON', 'INR', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(112, 'PERSON', 'INR', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(113, 'PERSON', 'USD', 'test', 'PARTY_ENABLED', 'admin', '2016-06-17 04:30:45', '2016-06-17 04:30:45'),
(114, 'PERSON', 'USD', 'ice man', 'PARTY_ENABLED', 'admin', '2016-06-17 04:36:14', '2016-06-17 04:36:14'),
(115, 'PERSON', 'USD', 'Badger', 'PARTY_ENABLED', 'admin', '2016-06-17 04:40:59', '2016-06-17 04:40:59'),
(116, 'PERSON', 'USD', 'skinny', 'PARTY_ENABLED', 'admin', '2016-06-17 04:43:38', '2016-06-17 04:43:38'),
(117, 'PERSON', 'USD', 'new album due out soon', 'PARTY_ENABLED', 'admin', '2016-06-17 04:46:06', '2016-06-17 04:46:06'),
(118, 'PERSON', 'USD', 'has battle plans', 'PARTY_ENABLED', 'admin', '2016-06-17 04:48:31', '2016-06-17 04:48:31'),
(119, 'PERSON', 'USD', 'has battle plans', 'PARTY_ENABLED', 'admin', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(120, 'PERSON', 'USD', 'has battle plans', 'PARTY_ENABLED', 'admin', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(121, 'PERSON', 'USD', 'Los Alomos Scientist', 'PARTY_ENABLED', 'admin', '2016-06-17 05:10:50', '2016-06-17 05:10:50'),
(122, 'PERSON', 'USD', 'knows Vinnie', 'PARTY_ENABLED', 'admin', '2016-06-17 05:12:38', '2016-06-17 05:12:38'),
(123, 'PERSON', 'USD', 'Lovely Rita Meter Maid', 'PARTY_ENABLED', 'admin', '2016-06-17 05:15:38', '2016-06-17 05:15:38'),
(124, 'PERSON', 'USD', 'creepy guy', 'PARTY_ENABLED', 'admin', '2016-06-17 05:23:22', '2016-06-17 05:23:22'),
(125, 'PERSON', 'USD', 'Nearly headless', 'PARTY_ENABLED', 'admin', '2016-06-17 05:29:35', '2016-06-17 05:29:35'),
(126, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-17 05:31:21', '2016-06-17 05:31:21'),
(127, 'PERSON', 'USD', 'likes to ride horses', 'PARTY_ENABLED', 'admin', '2016-06-17 05:42:28', '2016-06-17 05:42:28'),
(128, 'PERSON', 'USD', 'fingers crossed', 'PARTY_ENABLED', 'admin', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(129, 'PERSON', 'INR', 'One more for the road', 'PARTY_ENABLED', 'admin', '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(130, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerDEF', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(131, 'PERSON', NULL, 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(132, 'PERSON', 'USD', 'likes animals', 'PARTY_ENABLED', 'admin', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(133, 'PERSON', 'LRD', 'Uses Liberian Dollar', 'PARTY_ENABLED', 'admin', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(134, 'PERSON', 'SOS', 'rude to ask her birthdate', 'PARTY_ENABLED', 'admin', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(135, 'PERSON', 'VEB', 'Viva Chavez!', 'PARTY_ENABLED', 'admin', '2016-06-17 16:31:02', '2016-06-17 16:31:02'),
(136, 'PERSON', 'HRD', NULL, 'PARTY_ENABLED', 'admin', '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(137, 'PERSON', 'SOL', NULL, 'PARTY_ENABLED', 'admin', '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(138, 'PERSON', 'EUR', 'has to protect dinner from cats', 'PARTY_ENABLED', 'admin', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(139, 'PERSON', 'NOK', NULL, 'PARTY_ENABLED', 'admin', '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(140, 'PERSON', 'BIF', NULL, 'PARTY_ENABLED', 'fullAdminABC', '2016-06-18 15:40:10', '2016-06-18 15:40:10'),
(141, 'PERSON', 'TND', NULL, 'PARTY_ENABLED', 'fullAdminABC', '2016-06-18 15:43:57', '2016-06-18 15:43:57'),
(142, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'fullAdminABC', '2016-06-18 20:45:28', '2016-06-22 22:13:44'),
(143, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-18 17:16:05', '2016-06-18 17:16:05'),
(144, 'PERSON', 'DKK', NULL, 'PARTY_ENABLED', 'admin', '2016-06-18 19:04:42', '2016-07-24 15:57:43'),
(145, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-18 22:12:16', '2016-06-18 22:12:16'),
(146, 'PERSON', 'IRR', NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 00:59:36', '2016-07-24 15:57:30'),
(147, 'PERSON', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDEwJEExUVFja2dRL2hoZnZ4V1RUM3Z4bHV1WlEvRWVweUY1NzBlQnh4SDd4ZDNxT0NwbWpHU2JDIiwicGFzc3dvcmRIaW50IjpudWxsLCJlbmFibGVkIjoxLCJkaXNhYmxlZERhdGUiOm51bGwsInBhcnR5SWQiOjIsImNyZWF0ZWREYXRlIjoiMjAxNi0wNS0xM1QwNjoxNjozNS4wMDBaIiwidXBkYXRlZERhdGUiOiIyMDE2LTA1LTEzVDA2OjE2OjM1LjAwMFoiLCJzZWN1cml0eVBlcm1pc3Npb25zIjpbIkNSTVNGQV9BQ1RfQURNSU4iLCJDUk1TRkFfQUNUX0NMT1NFIiwiQ1JNU0ZBX0FDVF9DUkVBVEUiLCJDUk1TRkFfQUNUX1VQREFURSIsIkNSTVNGQV9BQ1RfVklFVyIsIkNSTVNGQV9DT05UQUNUX0NSRUFURSIsIkNSTVNGQV9DT05UQUNUX0RFQUNUSVZBVEUiLCJDUk1TRkFfQ09OVEFDVF9SRUFTU0lHTiIsIkNSTVNGQV9DT05UQUNUX1VQREFURSIsIkNSTVNGQV9DT05UQUNUX1ZJRVciLCJBQ0NPVU5USU5HX0FETUlOIiwiQUNDT1VOVElOR19DT01NX1ZJRVciLCJBQ0NPVU5USU5HX1BSSU5UX0NIRUNLUyIsIkFDQ1RHX0FUWF9BRE1JTiIsIkFDQ1RHX0ZYX1VQREFURSIsIkFDQ1RHX1BSRUZfQURNSU4iLCJBUlRJRkFDVF9JTkZPX1ZJRVciLCJBU1NFVE1BSU5UX0FETUlOIiwiQ0FUQUxPR19BRE1JTiIsIkNBVEFMT0dfUFJJQ0VfTUFJTlQiLCJDQVRBTE9HX1BVUkNIQVNFX0FMTE9XIiwiQ0FUQUxPR19WSUVXX0FMTE9XIiwiQ09NTU9OX0FETUlOIiwiQ09OVEVOVE1HUl9BRE1JTiIsIkRBVEFGSUxFX01BSU5UIiwiRUJBWV9WSUVXIiwiRU5USVRZX0RBVEFfQURNSU4iLCJFTlRJVFlfTUFJTlQiLCJFTlRJVFlfU1lOQ19BRE1JTiIsIkVOVU1fU1RBVFVTX01BSU5UIiwiRVhBTVBMRV9BRE1JTiIsIkZBQ0lMSVRZX0FETUlOIiwiR09PR0xFQkFTRV9WSUVXIiwiTEFCRUxfTUFOQUdFUl9WSUVXIiwiTUFOVUFMX1BBWU1FTlQiLCJNQU5VRkFDVFVSSU5HX0FETUlOIiwiTUFSS0VUSU5HX0FETUlOIiwiT0FHSVNfVklFVyIsIk9GQlRPT0xTX1ZJRVciLCJPUkRFUk1HUl9BRE1JTiIsIlBBUlRZTUdSX0FETUlOIiwiUEFZUFJPQ19BRE1JTiIsIlBBWV9JTkZPX0FETUlOIiwiUEVSSU9EX01BSU5UIiwiUFJPSkVDVE1HUl9BRE1JTiIsIlNFQ1VSSVRZX0FETUlOIiwiU0VORF9DT05UUk9MX0FQUExFVCIsIlNFUlZFUl9TVEFUU19WSUVXIiwiU0VSVklDRV9JTlZPS0VfQU5ZIiwiU0VSVklDRV9NQUlOVCIsIlNISVBSQVRFX0FETUlOIiwiVEVNUEVYUFJfQURNSU4iLCJVU0VSUFJFRl9BRE1JTiIsIlVUSUxfQ0FDSEVfRURJVCIsIlVUSUxfQ0FDSEVfVklFVyIsIlVUSUxfREVCVUdfRURJVCIsIlVUSUxfREVCVUdfVklFVyIsIlZJU1VBTFRIRU1FX0FETUlOIiwiV0VCVE9PTFNfVklFVyIsIldPUktFRkZPUlRNR1JfQURNSU4iXSwiaWF0IjoxNDY1Nzg1Mzg5LCJleHAiOjE0OTczMjEzODl9.hxwU0JlalYfC57al_yPcK-PAng9GOqW_Q8Xy6FOEIMg', 'PARTY_ENABLED', 'admin', '2016-06-19 15:39:48', '2016-06-19 15:39:48'),
(148, 'PERSON', NULL, 'sdfsds@#$@@#%@#23235', 'PARTY_ENABLED', 'admin', '2016-06-19 16:03:58', '2016-06-19 16:03:58'),
(149, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 16:19:56', '2016-07-24 15:56:09'),
(150, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 16:26:48', '2016-06-19 16:26:48'),
(151, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 16:33:01', '2016-06-19 16:33:01'),
(152, 'PERSON', NULL, 'has no currency uom preference', 'PARTY_ENABLED', 'admin', '2016-06-19 16:46:57', '2016-06-19 16:46:57'),
(153, 'PERSON', NULL, 'also prefers no currency', 'PARTY_ENABLED', 'admin', '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(154, 'PERSON', 'INR', 'addContact test', 'PARTY_ENABLED', 'admin', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(155, 'PERSON', NULL, 'test only including postal address', 'PARTY_ENABLED', 'admin', '2016-06-19 17:03:02', '2016-06-19 17:03:02'),
(156, 'PERSON', NULL, 'test mismatch state and country', 'PARTY_ENABLED', 'admin', '2016-06-19 17:05:27', '2016-06-19 17:05:27'),
(157, 'PERSON', NULL, 'test mismatch state and country', 'PARTY_ENABLED', 'admin', '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(158, 'PERSON', NULL, 'test mismatch state and country', 'PARTY_ENABLED', 'admin', '2016-06-19 17:07:55', '2016-06-19 17:07:55'),
(159, 'PERSON', NULL, 'test mismatch state and country', 'PARTY_ENABLED', 'admin', '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(160, 'PERSON', NULL, 'test mismatch state and country', 'PARTY_ENABLED', 'admin', '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(161, 'PERSON', NULL, 'test mismatch state and country', 'PARTY_ENABLED', 'admin', '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(162, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 17:17:39', '2016-07-24 15:55:55'),
(163, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 17:25:38', '2016-07-24 15:55:40'),
(164, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(165, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(166, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 19:26:14', '2016-07-24 15:55:25'),
(167, 'PERSON', 'MRO', NULL, 'PARTY_ENABLED', 'admin', '2016-06-20 00:45:25', '2016-06-24 03:16:54'),
(168, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-19 23:27:06', '2016-06-19 23:27:06'),
(169, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-06-20 22:13:13', '2016-06-20 22:13:13'),
(170, 'PERSON', 'UGS', NULL, 'PARTY_ENABLED', 'admin', '2016-06-20 22:28:24', '2016-06-20 22:28:24'),
(171, 'ORGANIZATION', 'usd', 'my first Account!  Manually making the party_relationship table entry', 'PARTY_ENABLED', 'admin', '2016-06-21 23:56:12', '2016-06-21 23:56:12'),
(172, 'ORGANIZATION', 'USD', 'another manual Account', 'PARTY_ENABLED', 'admin', '2016-06-22 00:16:49', '2016-06-22 00:16:49'),
(173, 'PERSON', 'USD', 'prefers to pay in galleons, but we don''t have those in the db...', 'PARTY_ENABLED', 'admin', '2016-06-23 00:23:36', '2016-06-24 03:17:56'),
(174, 'PERSON', 'PLZ', 'admin is creating this lead', 'PARTY_ENABLED', 'admin', '2016-06-26 19:04:50', '2016-06-26 19:04:50'),
(175, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(176, 'PERSON', 'GBP', NULL, 'PARTY_ENABLED', 'admin', '2016-06-29 18:02:56', '2016-06-29 18:02:56'),
(177, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerDEF', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(178, 'PERSON', 'USD', 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(179, 'PERSON', 'USD', 'addContact test', 'PARTY_ENABLED', 'contactOwnerDEF', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(180, 'PERSON', 'USD', 'I am a woman', 'PARTY_ENABLED', 'leadOwnerABC', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(181, 'PERSON', 'EGP', NULL, 'PARTY_ENABLED', 'admin', '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(182, 'PERSON', 'AMD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-08 00:45:45', '2016-07-24 15:55:04'),
(183, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-08 00:56:18', '2016-07-24 15:54:48'),
(184, 'PERSON', 'MGF', NULL, 'PARTY_ENABLED', 'admin', '2016-07-10 14:57:27', '2016-07-24 15:54:32'),
(185, 'PERSON', 'AMD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-14 20:17:38', '2016-07-14 20:17:38'),
(186, 'PERSON', 'VEB', NULL, 'PARTY_ENABLED', 'admin', '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(187, 'PERSON', 'ISK', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 16:39:44', '2016-07-24 15:54:15'),
(188, 'PERSON', 'USD', 'manual insert to party table to test datetime and UTC TIMESTAMP issues in Azure deploy . . . ', 'PARTY_ENABLED', 'admin', '2016-07-21 17:53:03', '2016-07-21 17:53:03'),
(189, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 18:06:34', '2016-07-21 18:06:34'),
(190, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 18:18:46', '2016-07-21 18:18:46'),
(191, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 18:18:58', '2016-07-21 18:18:58'),
(192, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 18:24:22', '2016-07-21 18:24:22'),
(193, 'PERSON', 'GBP', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 20:24:11', '2016-07-21 20:24:11'),
(194, 'PERSON', 'BOB', NULL, 'PARTY_ENABLED', 'admin', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(195, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 05:14:20', '2016-07-24 15:22:21'),
(196, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 05:21:13', '2016-07-22 05:21:13'),
(197, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 05:21:57', '2016-07-24 15:53:34'),
(198, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 05:23:13', '2016-07-24 15:52:54'),
(199, 'PERSON', 'GBP', NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 05:49:21', '2016-07-24 15:52:17'),
(200, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 05:52:11', '2016-07-22 05:52:11'),
(201, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 11:39:39', '2016-07-24 15:51:41'),
(202, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 12:03:11', '2016-07-22 12:03:11'),
(203, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 12:14:37', '2016-07-22 12:14:37'),
(204, 'PERSON', 'USD', '1', 'PARTY_ENABLED', 'admin', '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(205, 'PERSON', 'SOL', NULL, 'PARTY_ENABLED', 'admin', '2016-07-22 12:26:23', '2016-07-24 15:50:57'),
(211, 'PERSON', 'MXN', NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 01:32:13', '2016-07-24 15:49:16'),
(221, 'PERSON', 'NZD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 02:02:55', '2016-07-24 15:50:30'),
(231, 'PERSON', 'AZM', NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 03:21:07', '2016-07-24 15:50:13'),
(241, 'PERSON', 'AMD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 03:26:57', '2016-07-23 03:26:57'),
(251, 'PERSON', 'BZD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(261, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 03:35:59', '2016-07-23 03:35:59'),
(262, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-23 04:14:26', '2016-07-23 04:14:26'),
(271, 'PERSON', 'USD', 'this website works  on ie11', 'PARTY_ENABLED', 'admin', '2016-07-24 10:41:15', '2016-07-24 14:55:19'),
(281, 'PERSON', 'UGS', 'This website works on ie11', 'PARTY_ENABLED', 'admin', '2016-07-24 10:42:18', '2016-07-24 14:54:42'),
(291, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-24 10:43:17', '2016-07-24 10:43:17'),
(301, 'PERSON', 'AMD', 'ie11', 'PARTY_ENABLED', 'admin', '2016-07-24 10:44:09', '2016-07-24 15:22:38'),
(311, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-24 10:46:03', '2016-07-24 10:46:03'),
(321, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-24 10:46:10', '2016-07-24 10:46:10'),
(331, 'PERSON', 'GMD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-24 14:57:40', '2016-07-24 14:57:40'),
(341, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-24 15:58:16', '2016-07-24 15:58:16'),
(351, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 01:50:46', '2016-07-25 04:54:48'),
(361, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 04:36:14', '2016-07-25 04:36:14'),
(371, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 04:36:51', '2016-07-25 04:36:51'),
(381, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 04:38:51', '2016-07-25 04:38:51'),
(391, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 04:39:58', '2016-07-25 04:39:58'),
(401, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:05:31', '2016-07-25 05:05:31'),
(411, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:07:05', '2016-07-25 05:07:05'),
(421, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:09:38', '2016-07-25 05:09:38'),
(431, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:22:04', '2016-07-25 05:22:04'),
(441, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:23:16', '2016-07-25 05:23:16'),
(451, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:23:34', '2016-07-25 05:23:34'),
(461, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:23:54', '2016-07-25 05:23:54'),
(471, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:30:07', '2016-07-25 05:30:07'),
(481, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 05:30:26', '2016-07-25 05:30:26'),
(491, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 06:24:13', '2016-07-25 06:24:13'),
(501, 'ORGANIZATION', NULL, NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 06:26:34', '2016-07-25 06:26:34'),
(511, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 14:55:22', '2016-07-25 14:55:22'),
(521, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 14:56:59', '2016-07-25 14:56:59'),
(531, 'PERSON', 'BRR', NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 14:59:27', '2016-07-25 14:59:27'),
(541, 'PERSON', 'USD', NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 17:14:14', '2016-07-25 17:14:14'),
(551, 'PERSON', NULL, NULL, 'PARTY_ENABLED', 'leadOwnerABC', '2016-07-25 18:24:29', '2016-07-25 18:24:29'),
(561, 'PERSON', 'CNY', NULL, 'PARTY_ENABLED', 'admin', '2016-07-25 22:05:44', '2016-07-25 22:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `party_contact_mech`
--

CREATE TABLE `party_contact_mech` (
  `party_id` int(11) NOT NULL,
  `contact_mech_id` int(11) NOT NULL,
  `contact_mech_purpose_type_id` varchar(20) NOT NULL,
  `from_date` datetime NOT NULL,
  `thru_date` datetime DEFAULT NULL,
  `verified` tinyint(1) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_contact_mech`
--

INSERT INTO `party_contact_mech` (`party_id`, `contact_mech_id`, `contact_mech_purpose_type_id`, `from_date`, `thru_date`, `verified`, `comments`, `created_date`, `updated_date`) VALUES
(70, 2, 'PRIMARY_EMAIL', '2016-05-30 02:12:37', NULL, NULL, NULL, '2016-05-30 02:12:37', '2016-05-30 02:12:37'),
(71, 3, 'PRIMARY_EMAIL', '2016-05-30 02:16:51', NULL, NULL, NULL, '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(71, 4, 'PRIMARY_WEB_URL', '2016-05-30 02:16:51', NULL, NULL, NULL, '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(72, 5, 'PRIMARY_EMAIL', '2016-05-30 02:23:39', NULL, NULL, NULL, '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(72, 6, 'PRIMARY_WEB_URL', '2016-05-30 02:23:39', NULL, NULL, NULL, '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(72, 7, 'PRIMARY_PHONE', '2016-05-30 02:23:39', NULL, NULL, NULL, '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(73, 8, 'PRIMARY_EMAIL', '2016-05-30 02:31:29', NULL, NULL, NULL, '2016-05-30 02:31:29', '2016-05-30 02:31:29'),
(73, 9, 'PRIMARY_WEB_URL', '2016-05-30 02:31:29', NULL, NULL, NULL, '2016-05-30 02:31:29', '2016-05-30 02:31:29'),
(73, 10, 'PRIMARY_PHONE', '2016-05-30 02:31:29', NULL, NULL, NULL, '2016-05-30 02:31:29', '2016-05-30 02:31:29'),
(74, 11, 'PRIMARY_EMAIL', '2016-05-30 02:47:23', NULL, NULL, NULL, '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(74, 12, 'PRIMARY_WEB_URL', '2016-05-30 02:47:23', NULL, NULL, NULL, '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(74, 13, 'PRIMARY_LOCATION', '2016-05-30 02:47:23', NULL, NULL, NULL, '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(75, 14, 'PRIMARY_EMAIL', '2016-05-30 02:56:47', NULL, NULL, NULL, '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(75, 15, 'PRIMARY_WEB_URL', '2016-05-30 02:56:47', NULL, NULL, NULL, '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(75, 16, 'PRIMARY_PHONE', '2016-05-30 02:56:47', NULL, NULL, NULL, '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(75, 17, 'PRIMARY_LOCATION', '2016-05-30 02:56:47', NULL, NULL, NULL, '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(76, 20, 'PRIMARY_PHONE', '2016-05-30 03:25:45', NULL, NULL, NULL, '2016-05-30 03:25:45', '2016-05-30 03:25:45'),
(77, 21, 'PRIMARY_LOCATION', '2016-05-30 03:26:37', NULL, NULL, NULL, '2016-05-30 03:26:37', '2016-05-30 03:26:37'),
(82, 34, 'PRIMARY_EMAIL', '2016-05-31 17:56:14', NULL, NULL, NULL, '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(82, 35, 'PRIMARY_WEB_URL', '2016-05-31 17:56:14', NULL, NULL, NULL, '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(82, 36, 'PRIMARY_PHONE', '2016-05-31 17:56:14', NULL, NULL, NULL, '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(86, 49, 'PRIMARY_EMAIL', '2016-05-31 18:40:00', NULL, NULL, NULL, '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(86, 50, 'PRIMARY_PHONE', '2016-05-31 18:40:00', NULL, NULL, NULL, '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(86, 51, 'PRIMARY_WEB_URL', '2016-05-31 18:40:00', NULL, NULL, NULL, '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(86, 52, 'PRIMARY_LOCATION', '2016-05-31 18:40:00', NULL, NULL, NULL, '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(87, 53, 'PRIMARY_PHONE', '2016-05-31 23:14:55', NULL, NULL, NULL, '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(87, 54, 'PRIMARY_LOCATION', '2016-05-31 23:14:55', NULL, NULL, NULL, '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(87, 55, 'PRIMARY_EMAIL', '2016-05-31 23:14:55', NULL, NULL, NULL, '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(87, 56, 'PRIMARY_WEB_URL', '2016-05-31 23:14:55', NULL, NULL, NULL, '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(88, 57, 'PRIMARY_EMAIL', '2016-05-31 23:18:08', NULL, NULL, NULL, '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(88, 58, 'PRIMARY_WEB_URL', '2016-05-31 23:18:08', NULL, NULL, NULL, '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(88, 59, 'PRIMARY_LOCATION', '2016-05-31 23:18:08', NULL, NULL, NULL, '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(88, 60, 'PRIMARY_PHONE', '2016-05-31 23:18:08', NULL, NULL, NULL, '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(89, 61, 'PRIMARY_EMAIL', '2016-05-31 23:19:08', NULL, NULL, NULL, '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(89, 62, 'PRIMARY_WEB_URL', '2016-05-31 23:19:08', NULL, NULL, NULL, '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(89, 63, 'PRIMARY_LOCATION', '2016-05-31 23:19:08', NULL, NULL, NULL, '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(89, 64, 'PRIMARY_PHONE', '2016-05-31 23:19:08', NULL, NULL, NULL, '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(90, 65, 'PRIMARY_PHONE', '2016-06-01 00:15:37', NULL, NULL, NULL, '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(90, 66, 'PRIMARY_EMAIL', '2016-06-01 00:15:37', NULL, NULL, NULL, '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(90, 67, 'PRIMARY_WEB_URL', '2016-06-01 00:15:37', NULL, NULL, NULL, '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(90, 68, 'PRIMARY_LOCATION', '2016-06-01 00:15:37', NULL, NULL, NULL, '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(104, 85, 'PRIMARY_PHONE', '2016-06-09 12:13:41', NULL, NULL, NULL, '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(104, 86, 'PRIMARY_LOCATION', '2016-06-09 12:13:41', NULL, NULL, NULL, '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(104, 87, 'PRIMARY_WEB_URL', '2016-06-09 12:13:41', NULL, NULL, NULL, '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(104, 88, 'PRIMARY_EMAIL', '2016-06-09 12:13:41', NULL, NULL, NULL, '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(111, 491, 'PRIMARY_EMAIL', '2016-06-16 16:29:40', NULL, NULL, NULL, '2016-06-16 16:29:40', '2016-06-16 16:29:40'),
(111, 492, 'PRIMARY_WEB_URL', '2016-06-16 16:29:39', NULL, NULL, NULL, '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(111, 493, 'PRIMARY_PHONE', '2016-06-16 16:29:39', NULL, NULL, NULL, '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(111, 494, 'PRIMARY_LOCATION', '2016-06-16 16:29:39', NULL, NULL, NULL, '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(112, 495, 'PRIMARY_EMAIL', '2016-06-17 04:26:10', NULL, NULL, NULL, '2016-06-17 04:26:10', '2016-06-17 04:26:10'),
(112, 496, 'PRIMARY_WEB_URL', '2016-06-17 04:26:10', NULL, NULL, NULL, '2016-06-17 04:26:10', '2016-06-17 04:26:10'),
(112, 497, 'PRIMARY_PHONE', '2016-06-17 04:26:10', NULL, NULL, NULL, '2016-06-17 04:26:10', '2016-06-17 04:26:10'),
(112, 498, 'PRIMARY_LOCATION', '2016-06-17 04:26:10', NULL, NULL, NULL, '2016-06-17 04:26:10', '2016-06-17 04:26:10'),
(128, 499, 'PRIMARY_EMAIL', '2016-06-17 06:45:47', NULL, NULL, NULL, '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(128, 500, 'PRIMARY_WEB_URL', '2016-06-17 06:45:47', NULL, NULL, NULL, '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(128, 501, 'PRIMARY_PHONE', '2016-06-17 06:45:47', NULL, NULL, NULL, '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(128, 502, 'PRIMARY_LOCATION', '2016-06-17 06:45:47', NULL, NULL, NULL, '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(129, 503, 'PRIMARY_WEB_URL', '2016-06-17 07:14:33', NULL, NULL, NULL, '2016-06-17 07:14:33', '2016-06-17 07:14:33'),
(129, 504, 'PRIMARY_LOCATION', '2016-06-17 07:14:33', NULL, NULL, NULL, '2016-06-17 07:14:33', '2016-06-17 07:14:33'),
(129, 505, 'PRIMARY_EMAIL', '2016-06-17 07:14:33', NULL, NULL, NULL, '2016-06-17 07:14:33', '2016-06-17 07:14:33'),
(129, 506, 'PRIMARY_PHONE', '2016-06-17 07:14:33', NULL, NULL, NULL, '2016-06-17 07:14:33', '2016-06-17 07:14:33'),
(130, 513, 'PRIMARY_EMAIL', '2016-06-17 11:53:10', NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(130, 514, 'PRIMARY_PHONE', '2016-06-17 11:53:10', NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(130, 515, 'PRIMARY_LOCATION', '2016-06-17 11:53:10', NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(130, 516, 'PRIMARY_WEB_URL', '2016-06-17 11:53:10', NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(131, 517, 'PRIMARY_EMAIL', '2016-06-17 11:53:10', NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(131, 518, 'PRIMARY_WEB_URL', '2016-06-17 11:53:10', NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(133, 523, 'PRIMARY_EMAIL', '2016-06-17 14:47:12', NULL, NULL, NULL, '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(133, 524, 'PRIMARY_WEB_URL', '2016-06-17 14:47:12', NULL, NULL, NULL, '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(133, 525, 'PRIMARY_PHONE', '2016-06-17 14:47:12', NULL, NULL, NULL, '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(133, 526, 'PRIMARY_LOCATION', '2016-06-17 14:47:12', NULL, NULL, NULL, '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(134, 527, 'PRIMARY_EMAIL', '2016-06-17 16:09:03', NULL, NULL, NULL, '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(134, 528, 'PRIMARY_WEB_URL', '2016-06-17 16:09:03', NULL, NULL, NULL, '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(134, 529, 'PRIMARY_PHONE', '2016-06-17 16:09:03', NULL, NULL, NULL, '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(134, 530, 'PRIMARY_LOCATION', '2016-06-17 16:09:03', NULL, NULL, NULL, '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(135, 531, 'PRIMARY_LOCATION', '2016-06-17 16:31:03', NULL, NULL, NULL, '2016-06-17 16:31:03', '2016-06-17 16:31:03'),
(136, 532, 'PRIMARY_LOCATION', '2016-06-17 16:57:16', NULL, NULL, NULL, '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(137, 533, 'PRIMARY_EMAIL', '2016-06-17 17:14:25', NULL, NULL, NULL, '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(137, 534, 'PRIMARY_PHONE', '2016-06-17 17:14:25', NULL, NULL, NULL, '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(137, 535, 'PRIMARY_LOCATION', '2016-06-17 17:14:25', NULL, NULL, NULL, '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(138, 536, 'PRIMARY_EMAIL', '2016-06-18 00:26:24', NULL, NULL, NULL, '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(138, 537, 'PRIMARY_WEB_URL', '2016-06-18 00:26:24', NULL, NULL, NULL, '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(138, 538, 'PRIMARY_PHONE', '2016-06-18 00:26:24', NULL, NULL, NULL, '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(138, 539, 'PRIMARY_LOCATION', '2016-06-18 00:26:24', NULL, NULL, NULL, '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(139, 540, 'PRIMARY_LOCATION', '2016-06-18 13:46:44', NULL, NULL, NULL, '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(142, 541, 'PRIMARY_PHONE', '2016-06-18 15:45:28', NULL, NULL, NULL, '2016-06-18 15:45:28', '2016-06-18 15:45:28'),
(144, 542, 'PRIMARY_WEB_URL', '2016-06-18 19:04:42', NULL, NULL, NULL, '2016-06-18 19:04:42', '2016-06-18 19:04:42'),
(146, 543, 'PRIMARY_LOCATION', '2016-06-19 00:59:36', NULL, NULL, NULL, '2016-06-19 00:59:36', '2016-06-19 00:59:36'),
(146, 544, 'PRIMARY_PHONE', '2016-06-19 00:59:36', NULL, NULL, NULL, '2016-06-19 00:59:36', '2016-06-19 00:59:36'),
(153, 545, 'PRIMARY_LOCATION', '2016-06-19 16:51:33', NULL, NULL, NULL, '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(154, 546, 'PRIMARY_EMAIL', '2016-06-19 16:58:10', NULL, NULL, NULL, '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(154, 547, 'PRIMARY_WEB_URL', '2016-06-19 16:58:10', NULL, NULL, NULL, '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(154, 548, 'PRIMARY_PHONE', '2016-06-19 16:58:10', NULL, NULL, NULL, '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(154, 549, 'PRIMARY_LOCATION', '2016-06-19 16:58:10', NULL, NULL, NULL, '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(155, 550, 'PRIMARY_LOCATION', '2016-06-19 17:03:03', NULL, NULL, NULL, '2016-06-19 17:03:03', '2016-06-19 17:03:03'),
(157, 552, 'PRIMARY_LOCATION', '2016-06-19 17:07:32', NULL, NULL, NULL, '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(159, 554, 'PRIMARY_LOCATION', '2016-06-19 17:08:10', NULL, NULL, NULL, '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(160, 555, 'PRIMARY_LOCATION', '2016-06-19 17:09:03', NULL, NULL, NULL, '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(161, 556, 'PRIMARY_LOCATION', '2016-06-19 17:09:54', NULL, NULL, NULL, '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(162, 557, 'PRIMARY_LOCATION', '2016-06-19 17:17:39', NULL, NULL, NULL, '2016-06-19 17:17:39', '2016-06-19 17:17:39'),
(163, 558, 'PRIMARY_LOCATION', '2016-06-19 17:25:38', NULL, NULL, NULL, '2016-06-19 17:25:38', '2016-06-19 17:25:38'),
(164, 559, 'PRIMARY_LOCATION', '2016-06-19 17:28:20', NULL, NULL, NULL, '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(165, 560, 'PRIMARY_EMAIL', '2016-06-19 19:06:10', NULL, NULL, NULL, '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(165, 561, 'PRIMARY_LOCATION', '2016-06-19 19:06:10', NULL, NULL, NULL, '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(165, 562, 'PRIMARY_WEB_URL', '2016-06-19 19:06:10', NULL, NULL, NULL, '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(173, 563, 'PRIMARY_EMAIL', '2016-06-22 14:23:36', NULL, NULL, NULL, '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(173, 564, 'PRIMARY_WEB_URL', '2016-06-22 14:23:36', NULL, NULL, NULL, '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(173, 565, 'PRIMARY_PHONE', '2016-06-22 14:23:36', NULL, NULL, NULL, '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(175, 566, 'PRIMARY_EMAIL', '2016-06-26 19:05:55', NULL, NULL, NULL, '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(175, 567, 'PRIMARY_PHONE', '2016-06-26 19:05:55', NULL, NULL, NULL, '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(177, 574, 'PRIMARY_EMAIL', '2016-06-29 19:26:23', NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(177, 575, 'PRIMARY_PHONE', '2016-06-29 19:26:23', NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(177, 576, 'PRIMARY_LOCATION', '2016-06-29 19:26:23', NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(177, 577, 'PRIMARY_WEB_URL', '2016-06-29 19:26:23', NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(178, 578, 'PRIMARY_EMAIL', '2016-06-29 19:26:23', NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(178, 579, 'PRIMARY_WEB_URL', '2016-06-29 19:26:23', NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(180, 590, 'PRIMARY_EMAIL', '2016-06-29 19:28:19', NULL, NULL, NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(180, 591, 'PRIMARY_WEB_URL', '2016-06-29 19:28:19', NULL, NULL, NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(181, 592, 'PRIMARY_EMAIL', '2016-07-06 01:23:01', NULL, NULL, NULL, '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(181, 593, 'PRIMARY_PHONE', '2016-07-06 01:23:01', NULL, NULL, NULL, '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(182, 594, 'PRIMARY_PHONE', '2016-07-08 00:45:46', NULL, NULL, NULL, '2016-07-08 00:45:46', '2016-07-08 00:45:46'),
(184, 595, 'PRIMARY_EMAIL', '2016-07-10 14:57:28', NULL, NULL, NULL, '2016-07-10 14:57:28', '2016-07-10 14:57:28'),
(186, 596, 'PRIMARY_PHONE', '2016-07-15 00:34:16', NULL, NULL, NULL, '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(186, 597, 'PRIMARY_LOCATION', '2016-07-15 00:34:16', NULL, NULL, NULL, '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(187, 598, 'PRIMARY_PHONE', '2016-07-21 16:39:44', NULL, NULL, NULL, '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(187, 599, 'PRIMARY_WEB_URL', '2016-07-21 16:39:44', NULL, NULL, NULL, '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(187, 600, 'PRIMARY_EMAIL', '2016-07-21 16:39:44', NULL, NULL, NULL, '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(194, 601, 'PRIMARY_PHONE', '2016-07-21 20:29:24', NULL, NULL, NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(194, 602, 'PRIMARY_LOCATION', '2016-07-21 20:29:24', NULL, NULL, NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(194, 603, 'PRIMARY_EMAIL', '2016-07-21 20:29:24', NULL, NULL, NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(194, 604, 'PRIMARY_WEB_URL', '2016-07-21 20:29:24', NULL, NULL, NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(199, 605, 'PRIMARY_EMAIL', '2016-07-22 05:49:21', NULL, NULL, NULL, '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(199, 606, 'PRIMARY_WEB_URL', '2016-07-22 05:49:21', NULL, NULL, NULL, '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(199, 607, 'PRIMARY_LOCATION', '2016-07-22 05:49:21', NULL, NULL, NULL, '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(199, 608, 'PRIMARY_PHONE', '2016-07-22 05:49:21', NULL, NULL, NULL, '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(204, 609, 'PRIMARY_EMAIL', '2016-07-22 12:22:06', NULL, NULL, NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(204, 610, 'PRIMARY_WEB_URL', '2016-07-22 12:22:06', NULL, NULL, NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(204, 611, 'PRIMARY_LOCATION', '2016-07-22 12:22:06', NULL, NULL, NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(204, 612, 'PRIMARY_PHONE', '2016-07-22 12:22:06', NULL, NULL, NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(205, 613, 'PRIMARY_EMAIL', '2016-07-22 12:26:23', NULL, NULL, NULL, '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(205, 614, 'PRIMARY_WEB_URL', '2016-07-22 12:26:23', NULL, NULL, NULL, '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(205, 615, 'PRIMARY_PHONE', '2016-07-22 12:26:23', NULL, NULL, NULL, '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(221, 621, 'PRIMARY_EMAIL', '2016-07-23 02:02:55', NULL, NULL, NULL, '2016-07-23 02:02:55', '2016-07-23 02:02:55'),
(231, 631, 'PRIMARY_EMAIL', '2016-07-23 03:21:07', NULL, NULL, NULL, '2016-07-23 03:21:07', '2016-07-23 03:21:07'),
(231, 641, 'PRIMARY_WEB_URL', '2016-07-23 03:21:07', NULL, NULL, NULL, '2016-07-23 03:21:07', '2016-07-23 03:21:07'),
(251, 671, 'PRIMARY_WEB_URL', '2016-07-23 03:27:49', NULL, NULL, NULL, '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(251, 681, 'PRIMARY_PHONE', '2016-07-23 03:27:49', NULL, NULL, NULL, '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(262, 682, 'PRIMARY_WEB_URL', '2016-07-23 04:14:26', NULL, NULL, NULL, '2016-07-23 04:14:26', '2016-07-23 04:14:26'),
(331, 691, 'PRIMARY_EMAIL', '2016-07-24 14:57:40', NULL, NULL, NULL, '2016-07-24 14:57:40', '2016-07-24 14:57:40'),
(541, 701, 'PRIMARY_EMAIL', '2016-07-25 17:14:15', NULL, NULL, NULL, '2016-07-25 17:14:15', '2016-07-25 17:14:15'),
(551, 711, 'PRIMARY_EMAIL', '2016-07-25 18:24:30', NULL, NULL, NULL, '2016-07-25 18:24:30', '2016-07-25 18:24:30'),
(561, 721, 'PRIMARY_EMAIL', '2016-07-25 22:05:44', NULL, NULL, NULL, '2016-07-25 22:05:44', '2016-07-25 22:05:44'),
(561, 731, 'PRIMARY_WEB_URL', '2016-07-25 22:05:44', NULL, NULL, NULL, '2016-07-25 22:05:44', '2016-07-25 22:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `party_data_source`
--

CREATE TABLE `party_data_source` (
  `party_id` int(11) NOT NULL,
  `data_source_id` varchar(20) NOT NULL,
  `from_date` datetime NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `party_relationship`
--

CREATE TABLE `party_relationship` (
  `party_id_from` int(11) NOT NULL,
  `party_id_to` int(11) NOT NULL,
  `role_type_id_from` varchar(20) NOT NULL,
  `role_type_id_to` varchar(20) NOT NULL,
  `from_date` datetime NOT NULL,
  `thru_date` datetime DEFAULT NULL,
  `status_id` varchar(20) DEFAULT NULL,
  `party_relationship_type_id` varchar(20) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_relationship`
--

INSERT INTO `party_relationship` (`party_id_from`, `party_id_to`, `role_type_id_from`, `role_type_id_to`, `from_date`, `thru_date`, `status_id`, `party_relationship_type_id`, `created_date`, `updated_date`) VALUES
(20, 13, 'CONTACT', 'PERSON_ROLE', '2016-06-29 19:28:19', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(22, 2, 'LEAD', 'PERSON_ROLE', '2016-05-25 11:35:40', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-25 11:35:40', '2016-05-25 11:35:40'),
(23, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-25 17:34:51', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-25 17:34:51', '2016-06-22 12:45:14'),
(24, 3, 'LEAD', 'PERSON_ROLE', '2016-05-25 12:40:31', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-25 12:40:31', '2016-05-25 12:40:31'),
(25, 13, 'CONTACT', 'PERSON_ROLE', '2016-05-25 12:42:30', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-25 12:42:30', '2016-05-25 12:42:30'),
(55, 13, 'CONTACT', 'PERSON_ROLE', '0000-00-00 00:00:00', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '0000-00-00 00:00:00', '2016-05-28 00:16:00'),
(57, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-26 18:28:22', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-26 18:28:22', '2016-05-26 18:28:22'),
(58, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 05:51:41', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 05:51:41', '2016-05-28 05:51:41'),
(59, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 06:02:20', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 06:02:20', '2016-05-28 06:02:20'),
(60, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 06:03:30', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 06:03:30', '2016-05-28 06:03:30'),
(61, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 06:13:16', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 06:13:16', '2016-05-28 06:13:16'),
(62, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 06:26:20', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 06:26:20', '2016-05-28 06:26:20'),
(63, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 06:29:13', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 06:29:13', '2016-05-28 06:29:13'),
(64, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 06:34:45', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 06:34:45', '2016-05-28 06:34:45'),
(65, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 14:24:37', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 14:24:37', '2016-05-28 14:24:37'),
(66, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 19:28:48', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 19:28:48', '2016-05-28 19:28:48'),
(67, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 19:43:24', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 19:43:24', '2016-05-28 19:43:24'),
(68, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-28 19:50:57', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-28 19:50:57', '2016-05-28 19:50:57'),
(69, 13, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:07:04', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:07:04', '2016-05-30 02:07:04'),
(70, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:12:37', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:12:37', '2016-05-30 02:12:37'),
(71, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:16:51', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(72, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:23:39', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(73, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:31:28', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(74, 13, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:47:23', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(75, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-30 02:56:47', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(76, 13, 'CONTACT', 'PERSON_ROLE', '2016-05-30 03:25:45', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 03:25:45', '2016-05-30 03:25:45'),
(77, 13, 'CONTACT', 'PERSON_ROLE', '2016-05-30 03:26:37', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-30 03:26:37', '2016-05-30 03:26:37'),
(79, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 16:12:20', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(80, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 16:48:30', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(81, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 17:53:34', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(82, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 17:56:14', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(83, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 18:09:30', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(84, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 18:13:01', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(85, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 18:13:37', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(86, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 18:40:00', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(87, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 23:14:55', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(88, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 23:18:08', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(89, 3, 'CONTACT', 'PERSON_ROLE', '2016-05-31 23:19:08', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(90, 14, 'CONTACT', 'PERSON_ROLE', '2016-06-01 00:15:37', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(103, 13, 'CONTACT', 'PERSON_ROLE', '2016-06-09 12:07:08', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(104, 13, 'CONTACT', 'PERSON_ROLE', '2016-06-09 12:13:41', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(111, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-16 16:29:39', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(112, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:26:09', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(113, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:30:45', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:30:45', '2016-06-17 04:30:45'),
(114, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:36:14', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:36:14', '2016-06-17 04:36:14'),
(115, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:40:59', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:40:59', '2016-06-17 04:40:59'),
(116, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:43:38', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:43:38', '2016-06-17 04:43:38'),
(117, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:46:06', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:46:06', '2016-06-17 04:46:06'),
(118, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:48:31', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:48:31', '2016-06-17 04:48:31'),
(119, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:48:33', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(120, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 04:48:33', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(121, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:10:50', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:10:50', '2016-06-17 05:10:50'),
(122, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:12:38', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:12:38', '2016-06-17 05:12:38'),
(123, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:15:38', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:15:38', '2016-06-17 05:15:38'),
(124, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:23:22', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:23:22', '2016-06-17 05:23:22'),
(125, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:29:35', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:29:35', '2016-06-17 05:29:35'),
(126, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:31:21', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:31:21', '2016-06-17 05:31:21'),
(127, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 05:42:28', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 05:42:28', '2016-06-17 05:42:28'),
(128, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 06:45:47', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(129, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 07:14:32', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(130, 14, 'CONTACT', 'PERSON_ROLE', '2016-06-17 11:53:10', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(132, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 12:56:40', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(133, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 14:47:12', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(134, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 16:09:03', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(135, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-17 16:31:02', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 16:31:02', '2016-06-17 16:31:02'),
(136, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 16:57:16', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(137, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-17 17:14:25', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(138, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-18 00:26:24', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(139, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-18 13:46:44', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(140, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-18 15:40:10', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 15:40:10', '2016-06-18 15:40:10'),
(141, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-18 15:43:57', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 15:43:57', '2016-06-18 15:43:57'),
(142, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-18 20:45:28', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 20:45:28', '2016-06-22 22:13:44'),
(143, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-18 17:16:05', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 17:16:05', '2016-06-18 17:16:05'),
(144, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-18 19:04:42', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 19:04:42', '2016-07-24 15:57:43'),
(145, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-18 22:12:16', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-18 22:12:16', '2016-06-18 22:12:16'),
(146, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-19 00:59:36', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 00:59:36', '2016-07-24 15:57:30'),
(147, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 15:39:48', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 15:39:48', '2016-06-19 15:39:48'),
(148, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:03:58', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:03:58', '2016-06-19 16:03:58'),
(149, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:19:56', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:19:56', '2016-07-24 15:56:09'),
(150, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:26:48', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:26:48', '2016-06-19 16:26:48'),
(151, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:33:01', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:33:01', '2016-06-19 16:33:01'),
(152, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:46:57', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:46:57', '2016-06-19 16:46:57'),
(153, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:51:33', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(154, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 16:58:10', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(155, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:03:02', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:03:02', '2016-06-19 17:03:02'),
(156, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:05:27', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:05:27', '2016-06-19 17:05:27'),
(157, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:07:32', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(158, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:07:55', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:07:55', '2016-06-19 17:07:55'),
(159, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:08:10', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(160, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:09:03', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(161, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:09:54', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(162, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:17:39', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:17:39', '2016-07-24 15:55:55'),
(163, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:25:38', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:25:38', '2016-07-24 15:55:40'),
(164, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 17:28:20', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(165, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 19:06:10', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(166, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-19 19:26:14', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 19:26:14', '2016-07-24 15:55:25'),
(167, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-20 00:45:25', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-20 00:45:25', '2016-06-24 03:16:54'),
(168, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-19 23:27:06', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-19 23:27:06', '2016-06-19 23:27:06'),
(169, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-20 22:13:13', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-20 22:13:13', '2016-06-20 22:13:13'),
(170, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-20 22:28:24', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-20 22:28:24', '2016-06-20 22:28:24'),
(171, 2, 'ACCOUNT', 'PERSON_ROLE', '2016-06-22 00:03:55', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-22 00:03:55', '2016-06-22 00:03:55'),
(173, 2, 'CONTACT', 'PERSON_ROLE', '2016-06-23 00:23:36', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-23 00:23:36', '2016-06-24 03:17:56'),
(176, 3, 'CONTACT', 'PERSON_ROLE', '2016-06-29 18:02:56', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-29 18:02:56', '2016-06-29 18:02:56'),
(177, 14, 'CONTACT', 'PERSON_ROLE', '2016-06-29 19:26:23', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(181, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-06 01:23:01', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(182, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-08 00:45:45', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-08 00:45:45', '2016-07-24 15:55:04'),
(183, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-08 00:56:18', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-08 00:56:18', '2016-07-24 15:54:48'),
(184, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-10 14:57:27', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-10 14:57:27', '2016-07-24 15:54:32'),
(186, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-15 00:34:16', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(187, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-21 16:39:44', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-21 16:39:44', '2016-07-24 15:54:15'),
(189, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-21 18:06:34', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-21 18:06:34', '2016-07-21 18:06:34'),
(191, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-21 18:45:52', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-21 18:45:52', '2016-07-21 18:45:52'),
(193, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-21 20:24:11', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-21 20:24:11', '2016-07-21 20:24:11'),
(194, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-21 20:29:24', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(195, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 05:14:20', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 05:14:20', '2016-07-24 15:22:21'),
(196, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-22 05:21:13', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 05:21:13', '2016-07-22 05:21:13'),
(197, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 05:21:57', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 05:21:57', '2016-07-24 15:53:34'),
(198, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 05:23:13', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 05:23:13', '2016-07-24 15:52:54'),
(199, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 05:49:21', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 05:49:21', '2016-07-24 15:52:17'),
(201, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 11:39:39', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 11:39:39', '2016-07-24 15:51:41'),
(204, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 12:22:06', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(205, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-22 12:26:23', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-22 12:26:23', '2016-07-24 15:50:57'),
(211, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-23 01:32:13', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-23 01:32:13', '2016-07-24 15:49:16'),
(221, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-23 02:02:55', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-23 02:02:55', '2016-07-24 15:50:30'),
(231, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-23 03:21:07', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-23 03:21:07', '2016-07-24 15:50:13'),
(251, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-23 03:27:49', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(262, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-23 04:14:26', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-23 04:14:26', '2016-07-23 04:14:26'),
(271, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-24 10:41:15', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-24 10:41:15', '2016-07-24 14:55:19'),
(281, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-24 10:42:18', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-24 10:42:18', '2016-07-24 14:54:42'),
(301, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-24 10:44:09', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-24 10:44:09', '2016-07-24 15:22:38'),
(341, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-24 15:58:16', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-24 15:58:16', '2016-07-24 15:58:53'),
(351, 2, 'CONTACT', 'PERSON_ROLE', '2016-07-25 01:50:46', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-25 01:50:46', '2016-07-25 04:54:48'),
(491, 2, 'ACCOUNT', 'PERSON_ROLE', '2016-07-25 06:24:13', NULL, NULL, 'RESPONSIBLE_FOR', '2016-07-25 06:24:13', '2016-07-25 06:24:13'),
(501, 2, 'ACCOUNT', 'PERSON_ROLE', '2016-07-25 06:26:34', NULL, NULL, 'RESPONSIBLE_FOR', '2016-07-25 06:26:34', '2016-07-25 06:26:34'),
(541, 3, 'CONTACT', 'PERSON_ROLE', '2016-07-25 17:14:14', NULL, 'PARTY_ENABLED', 'RESPONSIBLE_FOR', '2016-07-25 17:14:14', '2016-07-25 17:14:14');

-- --------------------------------------------------------

--
-- Table structure for table `party_relationship_type`
--

CREATE TABLE `party_relationship_type` (
  `party_relationship_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `party_relationship_name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_relationship_type`
--

INSERT INTO `party_relationship_type` (`party_relationship_type_id`, `parent_type_id`, `has_table`, `party_relationship_name`, `description`, `created_date`, `updated_date`) VALUES
('CONTACT_REL_INV', NULL, 0, 'Contact Endpoint', 'The opposite of CONTACT_REL in OFBIZ, this relationship is used for contact relationships in the CRM/SFA application.', '2016-05-10 12:05:51', '2016-05-10 12:05:51'),
('RESPONSIBLE_FOR', NULL, 0, 'Responsible Owner', 'An account or contact owner is someone who is responsible for that account', '2016-05-10 12:05:51', '2016-05-10 12:05:51');

-- --------------------------------------------------------

--
-- Table structure for table `party_role`
--

CREATE TABLE `party_role` (
  `party_id` int(11) NOT NULL,
  `role_type_id` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_role`
--

INSERT INTO `party_role` (`party_id`, `role_type_id`, `created_date`, `updated_date`) VALUES
(2, 'PERSON_ROLE', '2016-05-25 11:43:51', '2016-05-25 11:43:51'),
(3, 'PERSON_ROLE', '2016-05-25 11:28:30', '2016-05-25 11:28:30'),
(11, 'PERSON_ROLE', '2016-05-25 12:41:27', '2016-05-25 12:41:27'),
(13, 'PERSON_ROLE', '2016-05-25 12:47:21', '2016-05-25 12:47:21'),
(14, 'PERSON_ROLE', '2016-05-25 11:29:19', '2016-05-25 11:29:19'),
(17, 'PERSON_ROLE', '2016-05-25 13:22:25', '2016-05-25 13:22:25'),
(20, 'CONTACT', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(21, 'CONTACT', '2016-05-25 11:31:13', '2016-05-25 11:31:13'),
(22, 'LEAD', '2016-05-25 11:31:31', '2016-05-25 11:31:31'),
(23, 'CONTACT', '2016-05-25 17:34:51', '2016-06-22 12:45:14'),
(24, 'LEAD', '2016-05-25 12:38:25', '2016-05-25 12:38:25'),
(25, 'CONTACT', '2016-05-25 12:38:46', '2016-05-25 12:38:46'),
(48, 'CONTACT', '2016-05-26 16:22:04', '2016-05-26 16:22:04'),
(49, 'CONTACT', '2016-05-26 16:33:20', '2016-05-26 16:33:20'),
(50, 'CONTACT', '2016-05-26 16:33:55', '2016-05-26 16:33:55'),
(51, 'CONTACT', '2016-05-26 16:36:20', '2016-05-26 16:36:20'),
(52, 'CONTACT', '2016-05-26 16:39:01', '2016-05-26 16:39:01'),
(53, 'CONTACT', '2016-05-26 17:44:07', '2016-05-26 17:44:07'),
(54, 'CONTACT', '2016-05-26 18:09:38', '2016-05-26 18:09:38'),
(55, 'CONTACT', '2016-05-26 18:18:07', '2016-05-26 18:18:07'),
(56, 'CONTACT', '2016-05-26 18:21:41', '2016-05-26 18:21:41'),
(57, 'CONTACT', '2016-05-26 18:28:22', '2016-05-26 18:28:22'),
(58, 'CONTACT', '2016-05-28 05:51:41', '2016-05-28 05:51:41'),
(59, 'CONTACT', '2016-05-28 06:02:20', '2016-05-28 06:02:20'),
(60, 'CONTACT', '2016-05-28 06:03:30', '2016-05-28 06:03:30'),
(61, 'CONTACT', '2016-05-28 06:13:16', '2016-05-28 06:13:16'),
(62, 'CONTACT', '2016-05-28 06:26:20', '2016-05-28 06:26:20'),
(63, 'CONTACT', '2016-05-28 06:29:13', '2016-05-28 06:29:13'),
(64, 'CONTACT', '2016-05-28 06:34:45', '2016-05-28 06:34:45'),
(65, 'CONTACT', '2016-05-28 14:24:37', '2016-05-28 14:24:37'),
(66, 'CONTACT', '2016-05-28 19:28:48', '2016-05-28 19:28:48'),
(67, 'CONTACT', '2016-05-28 19:43:24', '2016-05-28 19:43:24'),
(68, 'CONTACT', '2016-05-28 19:50:57', '2016-05-28 19:50:57'),
(69, 'CONTACT', '2016-05-30 02:07:04', '2016-05-30 02:07:04'),
(70, 'CONTACT', '2016-05-30 02:12:37', '2016-05-30 02:12:37'),
(71, 'CONTACT', '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(72, 'CONTACT', '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(73, 'CONTACT', '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(74, 'CONTACT', '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(75, 'CONTACT', '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(76, 'CONTACT', '2016-05-30 03:25:45', '2016-05-30 03:25:45'),
(77, 'CONTACT', '2016-05-30 03:26:37', '2016-05-30 03:26:37'),
(79, 'CONTACT', '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(80, 'CONTACT', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(81, 'CONTACT', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(82, 'CONTACT', '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(83, 'CONTACT', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(84, 'CONTACT', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(85, 'CONTACT', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(86, 'CONTACT', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(87, 'CONTACT', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(88, 'CONTACT', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(89, 'CONTACT', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(90, 'CONTACT', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(91, 'CONTACT', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(100, 'PERSON_ROLE', '2016-06-03 02:09:24', '2016-06-03 02:09:24'),
(101, 'CONTACT', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(102, 'CONTACT', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(103, 'CONTACT', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(104, 'CONTACT', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(111, 'CONTACT', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(112, 'CONTACT', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(113, 'CONTACT', '2016-06-17 04:30:45', '2016-06-17 04:30:45'),
(114, 'CONTACT', '2016-06-17 04:36:14', '2016-06-17 04:36:14'),
(115, 'CONTACT', '2016-06-17 04:40:59', '2016-06-17 04:40:59'),
(116, 'CONTACT', '2016-06-17 04:43:38', '2016-06-17 04:43:38'),
(117, 'CONTACT', '2016-06-17 04:46:06', '2016-06-17 04:46:06'),
(118, 'CONTACT', '2016-06-17 04:48:31', '2016-06-17 04:48:31'),
(119, 'CONTACT', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(120, 'CONTACT', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(121, 'CONTACT', '2016-06-17 05:10:50', '2016-06-17 05:10:50'),
(122, 'CONTACT', '2016-06-17 05:12:38', '2016-06-17 05:12:38'),
(123, 'CONTACT', '2016-06-17 05:15:38', '2016-06-17 05:15:38'),
(124, 'CONTACT', '2016-06-17 05:23:22', '2016-06-17 05:23:22'),
(125, 'CONTACT', '2016-06-17 05:29:35', '2016-06-17 05:29:35'),
(126, 'CONTACT', '2016-06-17 05:31:21', '2016-06-17 05:31:21'),
(127, 'CONTACT', '2016-06-17 05:42:28', '2016-06-17 05:42:28'),
(128, 'CONTACT', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(129, 'CONTACT', '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(130, 'CONTACT', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(131, 'LEAD', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(132, 'CONTACT', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(133, 'CONTACT', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(134, 'CONTACT', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(135, 'CONTACT', '2016-06-17 16:31:02', '2016-06-17 16:31:02'),
(136, 'CONTACT', '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(137, 'CONTACT', '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(138, 'CONTACT', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(139, 'CONTACT', '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(140, 'CONTACT', '2016-06-18 15:40:10', '2016-06-18 15:40:10'),
(141, 'CONTACT', '2016-06-18 15:43:57', '2016-06-18 15:43:57'),
(142, 'CONTACT', '2016-06-18 20:45:28', '2016-06-22 22:13:44'),
(143, 'CONTACT', '2016-06-18 17:16:05', '2016-06-18 17:16:05'),
(144, 'CONTACT', '2016-06-18 19:04:42', '2016-07-24 15:57:43'),
(145, 'CONTACT', '2016-06-18 22:12:16', '2016-06-18 22:12:16'),
(146, 'CONTACT', '2016-06-19 00:59:36', '2016-07-24 15:57:30'),
(147, 'CONTACT', '2016-06-19 15:39:48', '2016-06-19 15:39:48'),
(148, 'CONTACT', '2016-06-19 16:03:58', '2016-06-19 16:03:58'),
(149, 'CONTACT', '2016-06-19 16:19:56', '2016-07-24 15:56:09'),
(150, 'CONTACT', '2016-06-19 16:26:48', '2016-06-19 16:26:48'),
(151, 'CONTACT', '2016-06-19 16:33:01', '2016-06-19 16:33:01'),
(152, 'CONTACT', '2016-06-19 16:46:57', '2016-06-19 16:46:57'),
(153, 'CONTACT', '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(154, 'CONTACT', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(155, 'CONTACT', '2016-06-19 17:03:02', '2016-06-19 17:03:02'),
(156, 'CONTACT', '2016-06-19 17:05:27', '2016-06-19 17:05:27'),
(157, 'CONTACT', '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(158, 'CONTACT', '2016-06-19 17:07:55', '2016-06-19 17:07:55'),
(159, 'CONTACT', '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(160, 'CONTACT', '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(161, 'CONTACT', '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(162, 'CONTACT', '2016-06-19 17:17:39', '2016-07-24 15:55:55'),
(163, 'CONTACT', '2016-06-19 17:25:38', '2016-07-24 15:55:40'),
(164, 'CONTACT', '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(165, 'CONTACT', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(166, 'CONTACT', '2016-06-19 19:26:14', '2016-07-24 15:55:25'),
(167, 'CONTACT', '2016-06-20 00:45:25', '2016-06-24 03:16:54'),
(168, 'CONTACT', '2016-06-19 23:27:06', '2016-06-19 23:27:06'),
(169, 'CONTACT', '2016-06-20 22:13:13', '2016-06-20 22:13:13'),
(170, 'CONTACT', '2016-06-20 22:28:24', '2016-06-20 22:28:24'),
(171, 'ACCOUNT', '2016-06-22 00:01:08', '2016-06-22 00:01:08'),
(172, 'ACCOUNT', '2016-06-22 00:17:17', '2016-06-22 00:17:17'),
(173, 'CONTACT', '2016-06-23 00:23:36', '2016-06-24 03:17:56'),
(174, 'LEAD', '2016-06-26 19:04:50', '2016-06-26 19:04:50'),
(175, 'LEAD', '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(176, 'CONTACT', '2016-06-29 18:02:56', '2016-06-29 18:02:56'),
(177, 'CONTACT', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(178, 'LEAD', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(179, 'CONTACT', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(180, 'LEAD', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(181, 'CONTACT', '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(182, 'CONTACT', '2016-07-08 00:45:45', '2016-07-24 15:55:04'),
(183, 'CONTACT', '2016-07-08 00:56:18', '2016-07-24 15:54:48'),
(184, 'CONTACT', '2016-07-10 14:57:27', '2016-07-24 15:54:32'),
(185, 'LEAD', '2016-07-14 20:17:38', '2016-07-14 20:17:38'),
(186, 'CONTACT', '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(187, 'CONTACT', '2016-07-21 16:39:44', '2016-07-24 15:54:15'),
(189, 'CONTACT', '2016-07-21 18:06:34', '2016-07-21 18:06:34'),
(191, 'CONTACT', '2016-07-21 18:44:17', '2016-07-21 18:44:17'),
(193, 'CONTACT', '2016-07-21 20:24:11', '2016-07-21 20:24:11'),
(194, 'CONTACT', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(195, 'CONTACT', '2016-07-22 05:14:20', '2016-07-24 15:22:21'),
(196, 'CONTACT', '2016-07-22 05:21:13', '2016-07-22 05:21:13'),
(197, 'CONTACT', '2016-07-22 05:21:57', '2016-07-24 15:53:34'),
(198, 'CONTACT', '2016-07-22 05:23:13', '2016-07-24 15:52:54'),
(199, 'CONTACT', '2016-07-22 05:49:21', '2016-07-24 15:52:17'),
(200, 'LEAD', '2016-07-22 05:52:11', '2016-07-22 05:52:11'),
(201, 'CONTACT', '2016-07-22 11:39:39', '2016-07-24 15:51:41'),
(202, 'LEAD', '2016-07-22 12:03:11', '2016-07-22 12:03:11'),
(203, 'LEAD', '2016-07-22 12:14:37', '2016-07-22 12:14:37'),
(204, 'CONTACT', '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(205, 'CONTACT', '2016-07-22 12:26:23', '2016-07-24 15:50:57'),
(211, 'CONTACT', '2016-07-23 01:32:13', '2016-07-24 15:49:16'),
(221, 'CONTACT', '2016-07-23 02:02:55', '2016-07-24 15:50:30'),
(231, 'CONTACT', '2016-07-23 03:21:07', '2016-07-24 15:50:13'),
(251, 'CONTACT', '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(261, 'LEAD', '2016-07-23 03:35:59', '2016-07-23 03:35:59'),
(262, 'CONTACT', '2016-07-23 04:14:26', '2016-07-23 04:14:26'),
(271, 'CONTACT', '2016-07-24 10:41:15', '2016-07-24 14:55:19'),
(281, 'CONTACT', '2016-07-24 10:42:18', '2016-07-24 14:54:42'),
(291, 'LEAD', '2016-07-24 10:43:17', '2016-07-24 10:43:17'),
(301, 'CONTACT', '2016-07-24 10:44:09', '2016-07-24 15:22:38'),
(331, 'LEAD', '2016-07-24 14:57:40', '2016-07-24 14:57:40'),
(341, 'CONTACT', '2016-07-24 15:58:16', '2016-07-24 15:58:53'),
(351, 'CONTACT', '2016-07-25 01:50:46', '2016-07-25 04:54:48'),
(491, 'ACCOUNT', '2016-07-25 06:24:13', '2016-07-25 06:24:13'),
(501, 'ACCOUNT', '2016-07-25 06:26:34', '2016-07-25 06:26:34'),
(511, 'LEAD', '2016-07-25 14:55:22', '2016-07-25 14:55:22'),
(521, 'LEAD', '2016-07-25 14:56:59', '2016-07-25 14:56:59'),
(531, 'LEAD', '2016-07-25 14:59:27', '2016-07-25 14:59:27'),
(541, 'CONTACT', '2016-07-25 17:14:14', '2016-07-25 17:14:14'),
(551, 'LEAD', '2016-07-25 18:24:29', '2016-07-25 18:24:29'),
(561, 'LEAD', '2016-07-25 22:05:44', '2016-07-25 22:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `party_supplemental_data`
--

CREATE TABLE `party_supplemental_data` (
  `party_id` int(11) NOT NULL,
  `parent_party_id` int(11) NOT NULL,
  `company_name` varchar(100) DEFAULT NULL,
  `annual_revenue` decimal(18,2) DEFAULT NULL,
  `currency_uom_id` varchar(20) DEFAULT NULL,
  `num_employees` decimal(20,0) DEFAULT NULL,
  `industry_enum_id` varchar(20) DEFAULT NULL,
  `ownership_enum_id` varchar(20) DEFAULT NULL,
  `ticker_symbol` varchar(20) DEFAULT NULL,
  `important_note` longtext,
  `primary_postal_address_id` int(11) DEFAULT NULL,
  `primary_telecom_number_id` int(11) DEFAULT NULL,
  `primary_email_id` int(11) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_supplemental_data`
--

INSERT INTO `party_supplemental_data` (`party_id`, `parent_party_id`, `company_name`, `annual_revenue`, `currency_uom_id`, `num_employees`, `industry_enum_id`, `ownership_enum_id`, `ticker_symbol`, `important_note`, `primary_postal_address_id`, `primary_telecom_number_id`, `primary_email_id`, `created_date`, `updated_date`) VALUES
(131, 120, 'Hollywood', '1000000.00', NULL, '1000', 'IND_MEDIA', 'OWN_CCORP', 'this is a ticker', 'this is an important notes', NULL, NULL, 517, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(171, 171, 'company 171', '45.00', 'USD', '50', 'IND_DISTRIBUTION', 'IND_DISTRIBUTION', NULL, NULL, NULL, NULL, NULL, '2016-06-26 22:12:52', '2016-06-26 22:12:52'),
(174, 120, NULL, NULL, 'PLZ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-26 19:04:50', '2016-06-26 19:04:50'),
(175, 120, NULL, NULL, 'USD', '5600', 'IND_GEN_SERVICES', NULL, 'LED', NULL, NULL, 567, 566, '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(178, 120, 'Hollywood', '1000000.00', 'USD', '1000', 'IND_MEDIA', 'OWN_CCORP', 'this is a ticker', 'this is an important notes', NULL, NULL, 578, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(180, 120, 'Hollywood', '1000000.00', 'USD', '1000', 'IND_MEDIA', 'OWN_CCORP', 'this is a ticker', 'this is an important notes', NULL, NULL, 590, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(185, 120, NULL, NULL, 'AMD', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-14 20:17:38', '2016-07-14 20:17:38'),
(200, 171, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-22 05:52:11', '2016-07-22 05:52:11'),
(202, 172, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-22 12:03:11', '2016-07-22 12:03:11'),
(203, 171, 'Mystery Airlines', '0.00', NULL, '1', 'IND_AEROSPACE', 'OWN_PROPRIETOR', NULL, NULL, NULL, NULL, NULL, '2016-07-22 12:14:37', '2016-07-22 12:14:37'),
(261, 120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-23 03:35:59', '2016-07-23 03:35:59'),
(291, 120, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-24 10:43:17', '2016-07-24 10:43:17'),
(331, 171, NULL, NULL, 'GMD', NULL, 'IND_HARDWARE', 'OWN_SCORP', NULL, NULL, NULL, NULL, 691, '2016-07-24 14:57:40', '2016-07-24 14:57:40'),
(491, 171, NULL, '10000000.00', NULL, '89', 'IND_ETAILER', 'OWN_CCORP', 'ACA', 'Acme started as a family owned business', NULL, NULL, NULL, '2016-07-25 06:24:13', '2016-07-25 06:24:13'),
(501, 172, NULL, '22529435.00', NULL, '100', 'IND_TELECOM', 'OWN_PUBLIC_CORP', 'EEX', 'They were audited last year', NULL, NULL, NULL, '2016-07-25 06:26:34', '2016-07-25 06:26:34'),
(511, 171, 'Allied Anything', NULL, 'USD', NULL, 'IND_AEROSPACE', NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-25 14:55:22', '2016-07-25 14:55:22'),
(521, 135, NULL, NULL, 'USD', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-25 14:56:59', '2016-07-25 14:56:59'),
(531, 154, NULL, NULL, 'BRR', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-25 14:59:27', '2016-07-25 14:59:27'),
(551, 23, 'big machine', '9999999.00', NULL, '4', NULL, NULL, NULL, NULL, NULL, NULL, 711, '2016-07-25 18:24:29', '2016-07-25 18:24:29'),
(561, 172, 'Peking University', '0.00', 'CNY', '25000', 'IND_NON_PROFIT', 'OWN_PUBLIC_CORP', 'PKU', 'Disciple of John Dewey', NULL, NULL, 721, '2016-07-25 22:05:44', '2016-07-25 22:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `party_type`
--

CREATE TABLE `party_type` (
  `party_type_id` varchar(20) NOT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `party_type`
--

INSERT INTO `party_type` (`party_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('ORGANIZATION', 1, 'Organization', '2016-05-08 23:54:38', '2016-05-08 23:54:38'),
('PERSON', 1, 'Person', '2016-05-08 23:54:52', '2016-05-08 23:54:52');

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `party_id` int(11) NOT NULL,
  `salutation` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) NOT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) NOT NULL,
  `birth_date` datetime DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`party_id`, `salutation`, `first_name`, `middle_name`, `last_name`, `birth_date`, `comments`, `created_date`, `updated_date`) VALUES
(20, 'Mr.', 'Agent', 'Francis', 'Smith', '2016-06-29 19:28:19', 'nondescript', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(21, 'Mr.', 'Def', NULL, 'Leppard', NULL, 'is hard of hearing now, prefers emails only.', '2016-05-26 11:25:49', '2016-05-26 11:25:49'),
(22, 'Mr.', 'Lead', NULL, 'Belly', NULL, 'likes to sing the blues', '2016-05-26 11:21:08', '2016-05-26 11:21:08'),
(23, 'Mrs.', 'Sheela', NULL, 'Murthy', NULL, NULL, '2016-05-25 17:34:51', '2016-06-22 12:45:14'),
(24, NULL, 'Paul', NULL, 'Farmer', NULL, NULL, '2016-05-26 11:23:03', '2016-05-26 11:23:03'),
(25, '', 'Wesley', NULL, 'Snipes', NULL, 'Not the Wesley Snipes you are thinking of... I asked', '2016-05-26 11:24:39', '2016-05-26 11:24:39'),
(30, 'Mr.', 'Added', NULL, 'Person', '2016-05-10 14:00:00', NULL, '2016-05-25 19:31:20', '2016-05-25 19:31:20'),
(34, 'Ms.', 'Added', NULL, 'Person', '2016-05-10 14:00:00', NULL, '2016-05-25 19:49:29', '2016-05-25 19:49:29'),
(35, 'Son of', 'Added', NULL, 'Person', '2016-05-10 14:00:00', NULL, '2016-05-25 19:53:14', '2016-05-25 19:53:14'),
(41, 'Mr.', 'First', 'Added', 'Contact', '2016-05-10 14:00:00', 'first try duplicate addPerson at least', '2016-05-26 14:23:48', '2016-05-26 14:23:48'),
(42, 'Ms.', 'Second', 'Added', 'Contact', '2016-05-10 14:00:00', 'second use of repaired Contact entity', '2016-05-26 14:54:11', '2016-05-26 14:54:11'),
(43, NULL, 'Third', 'Added', 'Contact', '2016-05-10 14:00:00', NULL, '2016-05-26 15:48:35', '2016-05-26 15:48:35'),
(44, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 15:53:43', '2016-05-26 15:53:43'),
(45, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 15:58:17', '2016-05-26 15:58:17'),
(46, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:18:32', '2016-05-26 16:18:32'),
(47, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:21:30', '2016-05-26 16:21:30'),
(48, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:22:04', '2016-05-26 16:22:04'),
(49, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:33:20', '2016-05-26 16:33:20'),
(50, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:33:55', '2016-05-26 16:33:55'),
(51, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:36:20', '2016-05-26 16:36:20'),
(52, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'did party_role get insert?', '2016-05-26 16:39:01', '2016-05-26 16:39:01'),
(53, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'testing userEntity', '2016-05-26 17:44:07', '2016-05-26 17:44:07'),
(54, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'testing userEntity', '2016-05-26 18:09:38', '2016-05-26 18:09:38'),
(55, NULL, 'Wendy', 'Fiona', 'Martin', '2016-05-10 14:00:00', 'testing userEntity', '2016-05-26 18:18:07', '2016-05-28 00:16:59'),
(56, NULL, 'Bye ', 'Bye', 'Contact', '2016-05-10 14:00:00', 'testing delete', '2016-05-26 18:21:41', '2016-05-26 18:21:41'),
(57, NULL, 'Fourth', 'Added', 'Contact', '2016-05-10 14:00:00', 'testing userEntity', '2016-05-26 18:28:22', '2016-05-26 18:28:22'),
(58, 'Mr.', 'Tom', NULL, 'Riddle', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 05:51:41', '2016-05-28 05:51:41'),
(59, 'Mr.', 'Tom', NULL, 'Riddle', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 06:02:20', '2016-05-28 06:02:20'),
(60, 'Madam', 'Olympie', NULL, 'Maxine', NULL, NULL, '2016-06-15 17:56:34', '2016-06-15 17:56:34'),
(61, 'Mr.', 'Tom', NULL, 'Brady', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 06:13:16', '2016-05-28 06:13:16'),
(62, 'Mrs.', 'Butter', NULL, 'Worth', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 06:26:20', '2016-05-28 06:26:20'),
(63, 'Mrs.', 'Butter', NULL, 'Worth', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 06:29:13', '2016-05-28 06:29:13'),
(64, 'Mrs.', 'Butter', NULL, 'Worth', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 06:34:45', '2016-05-28 06:34:45'),
(65, 'Mr.', 'Pete', NULL, 'Pettigrew', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 14:24:37', '2016-05-28 14:24:37'),
(66, 'Mr.', 'You-Know-Who', NULL, 'Riddle', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 19:28:48', '2016-05-28 19:28:48'),
(67, 'Mr.', 'You-Know-Who Part II', NULL, 'Riddle', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 19:43:24', '2016-05-28 19:43:24'),
(68, 'Mr.', 'You-Know-Who Part III', NULL, 'Riddle', '2016-05-10 14:00:00', 'testing addContact', '2016-05-28 19:50:57', '2016-05-28 19:50:57'),
(69, 'Sir', 'Percival', 'Wemys', 'Madison', NULL, 'testing addContact', '2016-05-30 02:07:04', '2016-05-30 02:07:04'),
(70, 'Ms.', 'Samantha', NULL, 'Wainwright', NULL, 'testing addContact WITH email address', '2016-05-30 02:12:37', '2016-05-30 02:12:37'),
(71, 'DCS', 'Christopher', NULL, 'Foyle', NULL, 'testing addContact email address and web address both', '2016-05-30 02:16:51', '2016-05-30 02:16:51'),
(72, 'Sargeant', 'Paul', NULL, 'Milner', NULL, 'testing addContact email address, web address and contact number', '2016-05-30 02:23:39', '2016-05-30 02:23:39'),
(73, 'Mr.', 'Walter', 'Hartwell', 'White', NULL, 'testing addContact email address, web address and contact number', '2016-05-30 02:31:28', '2016-05-30 02:31:28'),
(74, 'ASAC', 'Harrold', NULL, 'Schrader', NULL, 'testing addContact email address, web address and postal address', '2016-05-30 02:47:23', '2016-05-30 02:47:23'),
(75, 'Mr.', 'Walter', 'Hartwell', 'White', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-30 02:56:47', '2016-05-30 02:56:47'),
(76, 'Mr.', 'Walter', 'Hartwell', 'White', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-30 03:25:45', '2016-05-30 03:25:45'),
(77, 'Mr.', 'Walter', 'Hartwell', 'White', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-30 03:26:37', '2016-05-30 03:26:37'),
(79, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(80, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(81, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(82, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(83, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(84, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(85, 'Dr.', 'Dee', NULL, 'Mento', NULL, 'testing addContact with email address, web address, telecom number and postal address', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(86, 'Sir', 'Winston', NULL, 'Churchill', NULL, 'all four contact mechs coming in....', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(87, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(88, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(89, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(90, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(91, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(101, 'Mr.', 'Agent', 'Francis', 'Smith', '2016-06-09 02:56:27', 'nondescript', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(102, 'Mr.', 'Agent', 'Francis', 'Smith', '2016-06-09 02:56:27', 'nondescript', '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(103, 'Mrs.', 'Sunita', NULL, 'Baliga', NULL, 'all four contact mechs coming in....', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(104, 'Mrs.', 'Sunita', NULL, 'Baliga', NULL, 'all four contact mechs coming in....', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(105, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(106, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(107, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(108, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(109, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(110, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-15 23:56:40', '2016-06-15 23:56:40'),
(111, 'Mr.', 'Hal', NULL, 'Lindsey', NULL, 'all four contact mechs coming in....', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(112, 'Mr.', 'Hal', NULL, 'Lindsey', NULL, 'all four contact mechs coming in....', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(113, NULL, 'Dinesh', NULL, 'Shenoy', NULL, 'test', '2016-06-17 04:30:45', '2016-06-17 04:30:45'),
(114, 'Mr', 'Jesse', 'Ryan', 'Pinkman', '2016-06-23 00:00:00', 'glass man', '2016-06-17 04:36:14', '2016-06-17 04:36:14'),
(115, 'Mr', 'Brandon', 'Lawrence', 'Mayhew', '2016-06-29 00:00:00', 'Friends with Skinny Pete', '2016-06-17 04:40:59', '2016-06-17 04:40:59'),
(116, 'Mr', 'Peter', 'L', 'Simpson', '2016-06-24 00:00:00', 'skinny pete', '2016-06-17 04:43:38', '2016-06-17 04:43:38'),
(117, 'Mr', 'Axl', 'David', 'Rose', '2016-06-17 00:00:00', 'or maybe not', '2016-06-17 04:46:06', '2016-06-17 04:46:06'),
(118, 'Princess', 'Leia', NULL, 'Organa', '2016-06-16 00:00:00', 'will not share battle plans', '2016-06-17 04:48:31', '2016-06-17 04:48:31'),
(119, 'Princess', 'Leia', NULL, 'Organa', '2016-06-16 00:00:00', 'will not share battle plans', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(120, 'Princess', 'Leia', NULL, 'Organa', '2016-06-16 00:00:00', 'will not share battle plans', '2016-06-17 04:48:33', '2016-06-17 04:48:33'),
(121, 'Dr.', 'Wen', 'Ho', 'Lee', '2016-06-24 00:00:00', 'I think', '2016-06-17 05:10:50', '2016-06-17 05:10:50'),
(122, 'Sgr', 'Vincent', 'Martin', 'Giovanni', '2016-06-30 00:00:00', 'hates Vinnie', '2016-06-17 05:12:38', '2016-06-17 05:12:38'),
(123, 'Ms', 'Rita', 'Lovely', 'MeterMaid', NULL, NULL, '2016-06-17 05:15:38', '2016-06-17 05:15:38'),
(124, 'Sir', 'Edgar', 'Allen', 'Poe', '2016-06-22 00:00:00', 'fun to talk to', '2016-06-17 05:23:22', '2016-06-17 05:23:22'),
(125, 'Sir', 'Nicholas', 'de Mimsy', 'Poppington', '2016-06-06 00:00:00', 'still attached', '2016-06-17 05:29:35', '2016-06-17 05:29:35'),
(126, NULL, 'Don', NULL, 'Juan', NULL, NULL, '2016-06-17 05:31:21', '2016-06-17 05:31:21'),
(127, 'Mr', 'Genghis', 'Leopold', 'Khan', '2016-06-16 00:00:00', 'sensitive about his empire', '2016-06-17 05:42:28', '2016-06-17 05:42:28'),
(128, 'Mr', 'Dinesh', 'P', 'Shenoy', '2016-06-09 00:00:00', 'really crossed', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(129, 'Mr.', 'Raj', 'Manu', 'Kumar', '2016-06-17 00:00:00', 'why not try it', '2016-06-17 07:14:32', '2016-06-17 07:14:32'),
(130, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(131, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(132, 'Mr', 'Gabriel', 'Louis', 'Shenoy', '2005-10-14 00:00:00', 'rising 5th grader', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(133, 'Mr', 'Moses', 'Ben', 'Johnson', '1965-12-30 00:00:00', 'It is pretty stable I think', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(134, 'Ms', 'Joan', NULL, 'Rivers', NULL, 'she passed away recently, too', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(135, NULL, 'Minimal', NULL, 'Name', NULL, 'hyperinflation sucks', '2016-06-17 16:31:02', '2016-06-17 16:31:02'),
(136, NULL, 'Ivan', NULL, 'Shukhov', NULL, NULL, '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(137, NULL, 'Earvin', NULL, 'Johnson', NULL, NULL, '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(138, 'Ms.', 'Reena', 'Louise', 'Shenoy', '2002-05-14 00:00:00', 'still loves the cats', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(139, NULL, 'Lars', 'Antonio', 'Larson', NULL, NULL, '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(140, NULL, 'Dinesh', NULL, 'Yanglee', NULL, NULL, '2016-06-18 15:40:10', '2016-06-18 15:40:10'),
(141, NULL, 'Dinesh', NULL, 'Kumar', NULL, NULL, '2016-06-18 15:43:57', '2016-06-18 15:43:57'),
(142, NULL, 'Lucas', 'Cool', 'Yang', NULL, NULL, '2016-06-18 20:45:28', '2016-06-22 22:13:44'),
(143, NULL, 'Diesh', NULL, 'Smieth', NULL, NULL, '2016-06-18 17:16:05', '2016-06-18 17:16:05'),
(144, NULL, 'Ali', NULL, 'Ismali', '2016-07-24 00:00:00', NULL, '2016-06-18 19:04:42', '2016-07-24 15:57:43'),
(145, NULL, 'Jane', NULL, 'Doe', NULL, NULL, '2016-06-18 22:12:16', '2016-06-18 22:12:16'),
(146, NULL, 'Arnie', 'Barnie', 'Kilikillarney', '2016-07-24 00:00:00', NULL, '2016-06-19 00:59:36', '2016-07-24 15:57:30'),
(147, 'Ms.', 'Jane', 'Anne', 'Doe', NULL, NULL, '2016-06-19 15:39:48', '2016-06-19 15:39:48'),
(148, 'Mr.', 'DukJin', NULL, 'Ahn', NULL, NULL, '2016-06-19 16:03:58', '2016-06-19 16:03:58'),
(149, NULL, 'Dinesh', NULL, 'Shenoy', '2016-07-24 00:00:00', NULL, '2016-06-19 16:19:56', '2016-07-24 15:56:09'),
(150, NULL, 'NoDollar', NULL, 'Dude', NULL, NULL, '2016-06-19 16:26:48', '2016-06-19 16:26:48'),
(151, NULL, 'StateSide', NULL, 'Dude', NULL, NULL, '2016-06-19 16:33:01', '2016-06-19 16:33:01'),
(152, NULL, 'Distinctive', NULL, 'Guy', NULL, NULL, '2016-06-19 16:46:57', '2016-06-19 16:46:57'),
(153, 'Mr.', 'Unique', NULL, 'Man', NULL, NULL, '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(154, 'Mr.', 'Hal', NULL, 'Lindsey', NULL, 'all four contact mechs coming in....', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(155, 'Mrs.', 'Hanna', NULL, 'Wright', NULL, 'add ONLY postal address with contact', '2016-06-19 17:03:02', '2016-06-19 17:03:02'),
(156, 'Sir', 'Filbert', NULL, 'Walnut', NULL, 'mismatch state and country', '2016-06-19 17:05:27', '2016-06-19 17:05:27'),
(157, 'Sir', 'Filbert', NULL, 'Walnut', NULL, 'mismatch state and country', '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(158, 'Sir', 'Filbert', NULL, 'Walnut', NULL, 'mismatch state and country', '2016-06-19 17:07:55', '2016-06-19 17:07:55'),
(159, 'Sir', 'Filbert', NULL, 'Walnut', NULL, 'mismatch state and country', '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(160, 'Sir', 'Filbert', NULL, 'Walnut', NULL, 'mismatch state and country', '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(161, 'Sir', 'Filbert', NULL, 'Walnut', NULL, 'mismatch state and country', '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(162, NULL, 'Flaubert', NULL, 'Watson', '2016-07-24 00:00:00', NULL, '2016-06-19 17:17:39', '2016-07-24 15:55:55'),
(163, NULL, 'Paulie', NULL, 'Gatto', '2016-07-24 00:00:00', NULL, '2016-06-19 17:25:38', '2016-07-24 15:55:40'),
(164, 'Dr.', 'Kumar', NULL, 'Baloney', NULL, NULL, '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(165, 'Mrs.', 'Julia', NULL, 'Jones', '2016-06-08 00:00:00', 'It is impolite to ask a Contact''s ae', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(166, NULL, 'Jonan', NULL, 'Janen', '2016-07-24 00:00:00', NULL, '2016-06-19 19:26:14', '2016-07-24 15:55:25'),
(167, NULL, 'Diesh', NULL, 'Shwno', NULL, NULL, '2016-06-20 00:45:25', '2016-06-24 03:16:54'),
(168, NULL, 'Jane', NULL, 'Doe', NULL, NULL, '2016-06-19 23:27:06', '2016-06-19 23:27:06'),
(169, NULL, 'Jane', NULL, 'Doe', NULL, NULL, '2016-06-20 22:13:13', '2016-06-20 22:13:13'),
(170, NULL, 'Kelly', NULL, 'Clarkson', NULL, NULL, '2016-06-20 22:28:24', '2016-06-20 22:28:24'),
(173, 'Prof.', 'Neville', 'J', 'Longbottom', '2016-06-23 00:00:00', NULL, '2016-06-23 00:23:36', '2016-06-24 03:17:56'),
(174, 'Mr.', 'Lead', NULL, 'Guy', '2016-06-26 00:00:00', NULL, '2016-06-26 19:04:50', '2016-06-26 19:04:50'),
(175, 'Mrs', 'Lead', 'Anne', 'Jones', '2016-06-26 00:00:00', NULL, '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(176, NULL, 'Dinesh', NULL, 'shenoy', NULL, NULL, '2016-06-29 18:02:56', '2016-06-29 18:02:56'),
(177, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(178, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(179, 'Mr.', 'Pete', NULL, 'Davis', NULL, 'all four contact mechs coming in....', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(180, 'Dear Ms.', 'Marilyn', 'Monroe', 'Kennedy', NULL, 'famous actress', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(181, NULL, 'Jane', NULL, 'Doe', NULL, NULL, '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(182, NULL, 'Jane', NULL, 'Doe', '2016-07-24 00:00:00', NULL, '2016-07-08 00:45:45', '2016-07-24 15:55:04'),
(183, NULL, 'Lucas', NULL, 'Yang', '2016-07-24 00:00:00', NULL, '2016-07-08 00:56:18', '2016-07-24 15:54:48'),
(184, NULL, 'John', NULL, 'Smith', '2016-07-24 00:00:00', NULL, '2016-07-10 14:57:27', '2016-07-24 15:54:32'),
(185, 'Dr.', 'Niels', NULL, 'Bohr', '2016-07-14 00:00:00', NULL, '2016-07-14 20:17:38', '2016-07-14 20:17:38'),
(186, 'Ms.', 'Rebecca', NULL, 'Thatcher', '2016-02-04 00:00:00', NULL, '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(187, NULL, 'Thomas', NULL, 'Sawyer', '2016-07-24 00:00:00', NULL, '2016-07-21 16:39:44', '2016-07-24 15:54:15'),
(189, 'Mr.', 'Huckleberry', NULL, 'Finn', '2016-07-21 00:00:00', NULL, '2016-07-21 18:06:34', '2016-07-21 18:06:34'),
(191, 'Mr.', 'Huckleberry', NULL, 'Finn', '2016-07-21 00:00:00', NULL, '2016-07-21 18:42:01', '2016-07-21 18:42:01'),
(193, NULL, 'Dumbledore', 'Brian', 'Albus', '1900-03-03 00:00:00', NULL, '2016-07-21 20:24:11', '2016-07-21 20:24:11'),
(194, 'Mr.', 'Potter', NULL, 'James', '2016-07-21 00:00:00', NULL, '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(195, NULL, 'Dean', NULL, 'Thomas', '2016-07-24 00:00:00', NULL, '2016-07-22 05:14:20', '2016-07-24 15:22:21'),
(196, NULL, 'Seamus', NULL, 'Finnegan', NULL, NULL, '2016-07-22 05:21:13', '2016-07-22 05:21:13'),
(197, NULL, 'William', NULL, 'O''Brien', '2016-07-24 00:00:00', NULL, '2016-07-22 05:21:57', '2016-07-24 15:53:34'),
(198, NULL, 'Wolfman', NULL, 'Jack', '1938-01-21 00:00:00', NULL, '2016-07-22 05:23:13', '2016-07-24 15:52:54'),
(199, 'Ms.', 'Lily', NULL, 'Evans', '1960-01-30 00:00:00', NULL, '2016-07-22 05:49:21', '2016-07-24 15:52:17'),
(200, 'Dr.', 'Marie', NULL, 'Curie', NULL, NULL, '2016-07-22 05:52:11', '2016-07-22 05:52:11'),
(201, NULL, 'Gulam', NULL, 'Singh', '1994-01-31 00:00:00', NULL, '2016-07-22 11:39:39', '2016-07-24 15:51:41'),
(202, 'Mr.', 'Robert', 'Louis', 'Stevenson', NULL, NULL, '2016-07-22 12:03:11', '2016-07-22 12:03:11'),
(203, 'Ms.', 'Earhart', NULL, 'Amelia', NULL, NULL, '2016-07-22 12:14:37', '2016-07-22 12:14:37'),
(204, 'Ms.', 'Susan', 'B', 'Anthony', '1865-07-22 00:00:00', NULL, '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(205, 'Mrs.', 'Elizabeth', 'Cady', 'Stanton', '1820-01-01 00:00:00', NULL, '2016-07-22 12:26:23', '2016-07-24 15:50:57'),
(211, NULL, 'Carlos', NULL, 'Santillo', '0001-01-01 00:00:00', NULL, '2016-07-23 01:32:13', '2016-07-24 15:49:16'),
(221, 'Madam', 'Constance', NULL, 'Llewellyn', '2005-05-05 00:00:00', NULL, '2016-07-23 02:02:55', '2016-07-24 15:50:30'),
(231, NULL, 'Philip', NULL, 'Underwood', '1935-01-01 00:00:00', NULL, '2016-07-23 03:21:07', '2016-07-24 15:50:13'),
(251, 'Mrs.', 'Julia', NULL, 'Child', '1984-07-23 00:00:00', NULL, '2016-07-23 03:27:49', '2016-07-23 03:27:49'),
(261, 'Ms.', 'Julia', NULL, 'Child', '1945-03-15 00:00:00', NULL, '2016-07-23 03:35:59', '2016-07-23 03:35:59'),
(262, 'Mr.', 'James', NULL, 'Beard', '1932-02-08 00:00:00', NULL, '2016-07-23 04:14:26', '2016-07-23 04:14:26'),
(271, 'Dr.', 'Sally', NULL, 'Ride', '1962-03-23 00:00:00', NULL, '2016-07-24 10:41:15', '2016-07-24 14:55:19'),
(281, 'Mr.', 'Paul', NULL, 'Allen', '2016-07-22 00:00:00', NULL, '2016-07-24 10:42:18', '2016-07-24 14:54:42'),
(291, 'Ms.', 'Harriet', 'am', 'Tubman', NULL, 'this works on ie11', '2016-07-24 10:43:17', '2016-07-24 10:43:17'),
(301, 'Mr.', 'William', NULL, 'Gates', '2016-07-24 00:00:00', 'this is from ie11', '2016-07-24 10:44:09', '2016-07-24 15:22:38'),
(331, 'Sir', 'Archibald', NULL, 'Cox', '1955-12-31 00:00:00', NULL, '2016-07-24 14:57:40', '2016-07-24 14:57:40'),
(341, 'General', 'George', NULL, 'Washington', NULL, NULL, '2016-07-24 15:58:16', '2016-07-24 15:58:16'),
(351, 'Mr.', 'Thomas', NULL, 'Jefferson', '1743-04-13 00:00:00', NULL, '2016-07-25 01:50:46', '2016-07-25 04:54:48'),
(511, 'Dr.', 'Sally', 'K.', 'Ride', '1951-05-26 00:00:00', NULL, '2016-07-25 14:55:22', '2016-07-25 14:55:22'),
(521, 'Mr.', 'James', NULL, 'Madison', '1751-03-16 00:00:00', 'Formerly member of Virginia State Legislature', '2016-07-25 14:56:59', '2016-07-25 14:56:59'),
(531, 'Pelé', 'Edson', NULL, 'Arantes do Nascimento', '1940-10-23 00:00:00', NULL, '2016-07-25 14:59:27', '2016-07-25 14:59:27'),
(541, 'Mr.', 'John', 'Andrew', 'Smith', '2016-07-25 00:00:00', NULL, '2016-07-25 17:14:14', '2016-07-25 17:14:14'),
(551, NULL, 'taylor', 'm', 'swift', '1989-12-13 00:00:00', NULL, '2016-07-25 18:24:29', '2016-07-25 18:24:29'),
(561, 'Mr.', 'Shih', NULL, 'Hu', '1891-12-17 00:00:00', NULL, '2016-07-25 22:05:44', '2016-07-25 22:05:44');

-- --------------------------------------------------------

--
-- Table structure for table `postal_address`
--

CREATE TABLE `postal_address` (
  `contact_mech_id` int(11) NOT NULL,
  `to_name` varchar(100) DEFAULT NULL,
  `attn_name` varchar(100) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `directions` varchar(255) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `country_geo_id` varchar(20) DEFAULT NULL,
  `state_province_geo_id` varchar(20) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `postal_address`
--

INSERT INTO `postal_address` (`contact_mech_id`, `to_name`, `attn_name`, `address1`, `address2`, `directions`, `city`, `postal_code`, `country_geo_id`, `state_province_geo_id`, `created_date`, `updated_date`) VALUES
(52, 'Winston Churchill', 'The Boss', '10 Downing Street', 'Basement', 'turn left past Kings Cross station', 'London', NULL, 'USA', 'NM', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(54, 'Pete Williams', 'Pete Williams', '1045 Maple Ave.', '', 'use Google maps', 'Ventura', NULL, 'USA', 'CA', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(59, 'Pete Williams', 'Pete Williams', '1045 Maple Ave.', '', 'use Google maps', 'Ventura', NULL, 'USA', 'CA', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(63, 'Pete Williams', 'Pete Williams', '1045 Maple Ave.', '', 'use Google maps', 'Ventura', NULL, 'USA', 'CA', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(68, 'Pete Davis', 'Pete Davis', '1045 Maple Ave.', '', 'use Google maps', 'Ventura', NULL, 'USA', 'CA', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(71, 'Pete Davis', 'Pete Davis', '1045 Maple Ave.', '', 'use Google maps', 'Ventura', NULL, 'USA', 'CA', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(74, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(78, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(81, 'Sunita Baliga', 'Sunita Baliga', '234 Tupperware Lane', 'Apt. 34', 'look for the giant house made of Tupperware, you cannot miss it', 'Bloomington', '55455', 'USA', 'NM', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(86, 'Sunita Baliga', 'Sunita Baliga', '234 Tupperware Lane', 'Apt. 34', 'look for the giant house made of Tupperware, you cannot miss it', 'Bloomington', '55455', 'USA', 'NM', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(91, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(94, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(100, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-14 23:57:37', '2016-06-14 23:57:37'),
(102, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-14 23:57:37', '2016-06-14 23:57:37'),
(106, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(108, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(111, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(114, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(117, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(120, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:06:14', '2016-06-15 00:06:14'),
(123, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:06:55', '2016-06-15 00:06:55'),
(126, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:06:55', '2016-06-15 00:06:55'),
(129, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:07:35', '2016-06-15 00:07:35'),
(132, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:07:35', '2016-06-15 00:07:35'),
(135, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(138, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 00:10:44', '2016-06-15 00:10:44'),
(141, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(144, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(149, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(152, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(157, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(160, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(163, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(166, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(169, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(172, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(177, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(180, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(185, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(188, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(191, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(194, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(197, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(200, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(205, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(208, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(211, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(214, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(217, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(220, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(223, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(226, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(229, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(232, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(235, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:28:05', '2016-06-16 00:28:05'),
(238, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:28:05', '2016-06-16 00:28:05'),
(241, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(244, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(247, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(250, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(253, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(256, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(259, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(262, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(265, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(268, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(271, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:59:34', '2016-06-16 00:59:34'),
(274, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 00:59:34', '2016-06-16 00:59:34'),
(277, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(280, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(283, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(286, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(289, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(292, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(295, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(298, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(301, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(304, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(307, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(310, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(313, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(316, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(320, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(322, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(325, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(328, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(331, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(334, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(337, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(340, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(343, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(346, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(349, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(352, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(355, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(358, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(361, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:29:03', '2016-06-16 02:29:03'),
(364, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:29:03', '2016-06-16 02:29:03'),
(367, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(370, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(373, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(376, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(379, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(382, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(385, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(388, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(391, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(394, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(397, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(400, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(403, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(406, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(409, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(412, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(415, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(418, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(421, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(424, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(427, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(430, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(433, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(436, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(439, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(442, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(445, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(448, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(451, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(454, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(457, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(460, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(463, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(466, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(469, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(472, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(475, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(478, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(481, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(484, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(487, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(490, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(494, 'Hal Lindsey', 'Hal Lindsey', '13 Mockingbird Lane', NULL, 'former home of Encyclopedia Brown', 'Canton', '99999', 'USA', 'OH', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(498, 'Hal Lindsey', 'Hal Lindsey', '13 Mockingbird Lane', NULL, 'former home of Encyclopedia Brown', 'Canton', '99999', 'USA', 'OH', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(502, 'Dinesh Shenoy', 'Mr. Cool guy', '2614 McKinley St. N', 'Suite 100', 'half past monday', 'Mars', '55418', 'USA', 'MN', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(504, 'Raj K', 'Raj', '234 Mriklsr St.', '560', 'do you believe', 'Kokwnroai', '4331234', 'USA', 'WI', '2016-06-17 07:14:33', '2016-06-17 07:14:33'),
(509, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(512, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(515, 'Pete Davis', 'Pete Davis', '1045 Maple Ave.', NULL, 'use Google maps', 'Ventura', '90210', 'USA', 'CA', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(526, 'Moses Johnson', 'Moses', '234 Massgg', '324', 'werwreqwr', 'Monrovia', '234234', 'USA', 'WI', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(530, 'Joan', 'Joan', '123 Sunset Blvd', NULL, 'testing State or Province pull-down', 'Hollywood', '34343', 'USA', 'CO-NSA', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(531, 'Hugo', NULL, '2342 Ddss  Rwetw', NULL, NULL, 'Caracas', '23424', 'VEN', 'CO-ATL', '2016-06-17 16:31:02', '2016-06-17 16:31:02'),
(532, NULL, NULL, NULL, NULL, NULL, NULL, '', 'FJI', 'DE-BE', '2016-06-17 16:57:16', '2016-06-17 16:57:16'),
(535, NULL, NULL, NULL, NULL, NULL, NULL, '', 'GMB', 'BR-AC', '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(539, '2614 McKinley St NE', NULL, '2614 McKinley St NE', NULL, 'Why is Alaska in England', 'Minneapolis', '55418', 'ENGL', 'AK', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(540, NULL, NULL, NULL, NULL, NULL, NULL, '', 'NOR', 'IT-MZ', '2016-06-18 13:46:44', '2016-06-18 13:46:44'),
(543, NULL, NULL, NULL, NULL, NULL, 'Dublin', '', 'IRL', 'ES-PO', '2016-06-19 00:59:36', '2016-06-19 00:59:36'),
(545, 'Unique Man', 'Unique Man', '123 Hot and Dry St.', 'Apt 5', 'turn left at gate', 'Tucson', '12345', 'USA', 'AZ', '2016-06-19 16:51:33', '2016-06-19 16:51:33'),
(549, 'Hal Lindsey', 'Hal Lindsey', '13 Mockingbird Lane', NULL, 'former home of Encyclopedia Brown', 'Canton', '99999', 'USA', 'OH', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(550, 'Hanna', 'Hanna W.', '13 Mockingbird Lane', NULL, 'former home of Encyclopedia Brown', 'Canton', '99999', 'USA', 'OH', '2016-06-19 17:03:03', '2016-06-19 17:03:03'),
(552, 'Filbert', 'Filbert W.', '243 Nutcracker lane', 'Suite 400', 'this guy is nuts', 'Upside Down', '99999', 'USA', 'OH', '2016-06-19 17:07:32', '2016-06-19 17:07:32'),
(554, 'Filbert', 'Filbert W.', '243 Nutcracker lane', 'Suite 400', 'this guy is nuts', 'Upside Down', '99999', 'USA', 'AK', '2016-06-19 17:08:10', '2016-06-19 17:08:10'),
(555, 'Filbert', 'Filbert W.', '243 Nutcracker lane', 'Suite 400', 'this guy is nuts', 'Upside Down', '99999', 'IND', 'AK', '2016-06-19 17:09:03', '2016-06-19 17:09:03'),
(556, 'Filbert', 'Filbert W.', '243 Nutcracker lane', 'Suite 400', 'this guy is nuts', 'Upside Down', '99999', 'AFG', 'OH', '2016-06-19 17:09:54', '2016-06-19 17:09:54'),
(557, 'Flaubert Watson', 'Flaubert Watson', '123 Sunset Blvd', 'Suite 100', NULL, 'Pillbox', '', 'AFG', 'OH', '2016-06-19 17:17:39', '2016-06-19 17:17:39'),
(558, 'Paulie', 'Paulie', '5432 Brooklyn Ave', 'Suite 20', NULL, 'New York', '', 'BEL', 'IN-MN', '2016-06-19 17:25:38', '2016-06-19 17:25:38'),
(559, 'Kumar Baloney', 'Kumar Baloney', '1234 asrqwer', NULL, NULL, 'Jwerw', '23423', 'AZE', 'CO-VID', '2016-06-19 17:28:20', '2016-06-19 17:28:20'),
(561, NULL, NULL, NULL, NULL, NULL, NULL, '', 'LBY', 'IT-AL', '2016-06-19 19:06:10', '2016-06-19 19:06:10'),
(571, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(573, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(576, 'Pete Davis', 'Pete Davis', '1045 Maple Ave.', NULL, 'use Google maps', 'Ventura', '90210', 'USA', 'CA', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(582, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(585, 'test address', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(588, 'Pete Davis', 'Pete Davis', '1045 Maple Ave.', NULL, 'use Google maps', 'Ventura', '90210', 'USA', 'CA', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(597, 'Rebecca Thatcher', 'Becky Thatcher', '1 Main Street', NULL, 'Ask for Judge Thatcher''s house, everyone knows where it is!', 'Hannibal', '12345', 'USA', 'MO', '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(602, 'James Potter', 'James Potter', '123 Sunset Blvd', NULL, NULL, 'Godrics Hollow', '234234', 'ITA', 'CO-COR', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(607, 'Lily Evans', 'Lily Evans', '70 Seventh St', 'Suite 7', NULL, 'Miami', '99999', 'USA', 'FL', '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(611, 'Susan B. Anthony', 'Susan B. Anthony', '2614 McKinley St NE', NULL, NULL, 'Minneapolis', '55418', 'USA', 'MN', '2016-07-22 12:22:06', '2016-07-22 12:22:06');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` varchar(20) NOT NULL,
  `product_type_id` varchar(20) DEFAULT NULL,
  `primary_product_category_id` varchar(20) DEFAULT NULL,
  `manufacturer_party_id` int(11) DEFAULT NULL,
  `introduction_date` datetime DEFAULT NULL,
  `support_discontinuation_date` datetime DEFAULT NULL,
  `sales_discontinuation_date` datetime DEFAULT NULL,
  `internal_name` varchar(255) DEFAULT NULL,
  `brand_name` varchar(100) DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `long_description` longtext,
  `price_detail_text` varchar(255) DEFAULT NULL,
  `small_image_url` varchar(255) DEFAULT NULL,
  `medium_image_url` varchar(255) DEFAULT NULL,
  `large_image_url` varchar(255) DEFAULT NULL,
  `detail_image_url` varchar(255) DEFAULT NULL,
  `original_image_url` varchar(255) DEFAULT NULL,
  `quantity_uom_id` varchar(20) DEFAULT NULL,
  `quantity_included` decimal(18,6) DEFAULT NULL,
  `pieces_included` decimal(20,0) DEFAULT NULL,
  `require_amount` tinyint(1) DEFAULT NULL,
  `fixed_amount` decimal(18,2) DEFAULT NULL,
  `amount_uom_type_id` varchar(20) DEFAULT NULL,
  `weight_uom_id` varchar(20) DEFAULT NULL,
  `weight` decimal(18,6) DEFAULT NULL,
  `height_uom_id` varchar(20) DEFAULT NULL,
  `product_height` decimal(18,6) DEFAULT NULL,
  `shipping_height` decimal(18,6) DEFAULT NULL,
  `width_uom_id` varchar(20) DEFAULT NULL,
  `product_width` decimal(18,6) DEFAULT NULL,
  `shipping_width` decimal(18,6) DEFAULT NULL,
  `depth_uom_id` varchar(20) DEFAULT NULL,
  `product_depth` decimal(18,6) DEFAULT NULL,
  `shipping_depth` decimal(18,6) DEFAULT NULL,
  `product_rating` decimal(18,6) DEFAULT NULL,
  `returnable` tinyint(1) DEFAULT NULL,
  `taxable` tinyint(1) DEFAULT NULL,
  `charge_shipping` tinyint(1) DEFAULT NULL,
  `include_in_promotions` tinyint(1) DEFAULT NULL,
  `is_virtual` tinyint(1) DEFAULT NULL,
  `is_variant` tinyint(1) DEFAULT NULL,
  `origin_geo_id` varchar(20) DEFAULT NULL,
  `bill_of_material_level` decimal(20,0) DEFAULT NULL,
  `created_by_user_login` varchar(250) DEFAULT NULL,
  `last_modified_by_user_login` varchar(250) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `product_type_id`, `primary_product_category_id`, `manufacturer_party_id`, `introduction_date`, `support_discontinuation_date`, `sales_discontinuation_date`, `internal_name`, `brand_name`, `comments`, `product_name`, `description`, `long_description`, `price_detail_text`, `small_image_url`, `medium_image_url`, `large_image_url`, `detail_image_url`, `original_image_url`, `quantity_uom_id`, `quantity_included`, `pieces_included`, `require_amount`, `fixed_amount`, `amount_uom_type_id`, `weight_uom_id`, `weight`, `height_uom_id`, `product_height`, `shipping_height`, `width_uom_id`, `product_width`, `shipping_width`, `depth_uom_id`, `product_depth`, `shipping_depth`, `product_rating`, `returnable`, `taxable`, `charge_shipping`, `include_in_promotions`, `is_virtual`, `is_variant`, `origin_geo_id`, `bill_of_material_level`, `created_by_user_login`, `last_modified_by_user_login`, `is_active`, `created_date`, `updated_date`) VALUES
('cardboard boxes', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('consulting services', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('diamond tip drill', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('engine parts', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('hinges', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('insurance', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('laser cutter', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('light bulbs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('tech support', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
('testProd1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Dinesh added just for some tests', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-03 03:34:22', '2016-06-03 03:34:22'),
('testProd2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Dinesh manual insert', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-06-03 17:03:51', '2016-06-03 17:03:51'),
('widgets', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `product_category`
--

CREATE TABLE `product_category` (
  `product_category_id` varchar(20) NOT NULL,
  `product_category_type_id` varchar(20) DEFAULT NULL,
  `primary_parent_category_id` varchar(20) DEFAULT NULL,
  `category_name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `long_description` longtext,
  `category_image_url` varchar(255) DEFAULT NULL,
  `link_one_image_url` varchar(255) DEFAULT NULL,
  `link_two_image_url` varchar(255) DEFAULT NULL,
  `show_in_select` tinyint(1) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_category`
--

INSERT INTO `product_category` (`product_category_id`, `product_category_type_id`, `primary_parent_category_id`, `category_name`, `description`, `long_description`, `category_image_url`, `link_one_image_url`, `link_two_image_url`, `show_in_select`, `created_date`, `updated_date`) VALUES
('100', 'CATALOG_CATEGORY', 'CATALOG1', NULL, NULL, 'long description of Gizmos', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('101', 'CATALOG_CATEGORY', '100', NULL, NULL, 'long description of Small Gizmos', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('102', 'CATALOG_CATEGORY', '100', NULL, NULL, 'long description of Large Gizmos', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('200', 'CATALOG_CATEGORY', 'CATALOG1', NULL, NULL, 'long description of Widgets', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('201', 'CATALOG_CATEGORY', '200', NULL, NULL, 'long description of Small Widgets', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('2011', 'CATALOG_CATEGORY', '201', NULL, NULL, 'long description of Mini Widgets', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('20111', 'CATALOG_CATEGORY', '2011', NULL, NULL, 'long description of Micro Widgets', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('2012', 'CATALOG_CATEGORY', '201', NULL, NULL, 'long description of Other Mini Widgets', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('202', 'CATALOG_CATEGORY', '200', NULL, NULL, 'long description of Large Widgets', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('BoatRental', 'CATALOG_CATEGORY', 'RentBrowseRoot', NULL, 'Boat Rental', 'long description of Boat rentals', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('CATALOG1', 'CATALOG_CATEGORY', NULL, 'Demo Browse Root', NULL, 'Demo Catalog Primary Browse Root Category', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('CATALOG1_QUICKADD1', 'QUICKADD_CATEGORY', NULL, 'Main Quick Add', NULL, 'For quick orders, you have found the right place!', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('CATALOG1_QUICKADD2', 'QUICKADD_CATEGORY', NULL, 'Widget Quick Add', NULL, 'Get all you widgets here!', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('CATALOG1_SEARCH', 'SEARCH_CATEGORY', NULL, 'Demo Default Search', NULL, 'Catalog1 Search Products - only products in this category will show up in a search in catalog1', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('COMM_CATEGORY_A', 'COMMISSION_CATEGORY', NULL, 'Commission Category A', 'Category A products that qualify for commission.', NULL, NULL, NULL, NULL, NULL, '2016-05-01 00:00:12', '2016-05-01 00:00:12'),
('COMM_CATEGORY_B', 'COMMISSION_CATEGORY', NULL, 'Commission Category B', 'Category B products that qualify for commission.', NULL, NULL, NULL, NULL, NULL, '2016-05-01 00:00:12', '2016-05-01 00:00:12'),
('COMM_CATEGORY_C', 'COMMISSION_CATEGORY', NULL, 'Commission Category C', 'Category C products that qualify for commission.', NULL, NULL, NULL, NULL, NULL, '2016-05-01 00:00:12', '2016-05-01 00:00:12'),
('ConfRooms', 'CATALOG_CATEGORY', 'HotelFac', NULL, 'Conference Rooms', 'long description of Hotel conference rooms', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('dropShip', 'CATALOG_CATEGORY', 'CATALOG1', NULL, 'DropShip Products', NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:58:24', '2016-04-30 23:58:24'),
('FA-100', 'CATALOG_CATEGORY', NULL, NULL, 'Account Activation', NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:58:28', '2016-04-30 23:58:28'),
('FOOD-001', 'CATALOG_CATEGORY', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:57:42', '2016-04-30 23:57:42'),
('GC-100', 'CATALOG_CATEGORY', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:57:28', '2016-04-30 23:57:28'),
('GC-101', 'CATALOG_CATEGORY', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:57:28', '2016-04-30 23:57:28'),
('GC-102', 'CATALOG_CATEGORY', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:57:28', '2016-04-30 23:57:28'),
('HotelFac', 'CATALOG_CATEGORY', 'RentBrowseRoot', NULL, 'Hotel Facilities', 'long description of Hotel facilities', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('MotorBoats', 'CATALOG_CATEGORY', 'BoatRental', NULL, 'Motor Boats', 'long description of Motor Boats', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('PC-100', 'CATALOG_CATEGORY', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:57:41', '2016-04-30 23:57:41'),
('PROMOTIONS', 'CATALOG_CATEGORY', NULL, 'Featured Products', NULL, NULL, NULL, NULL, NULL, NULL, '2016-05-01 00:02:03', '2016-04-30 23:57:15'),
('RentalPromo', 'CATALOG_CATEGORY', NULL, NULL, 'Rental Promotions', 'Rental Catalog Primary Browse Root Category', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('RentBrowseRoot', 'CATALOG_CATEGORY', NULL, NULL, 'Rental Browse Root', 'Rental Catalog Primary Browse Root Category', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('RentBrowseRoot_SRCH', 'CATALOG_CATEGORY', NULL, NULL, 'Rental Browse Root to search', 'Rental Catalog Primary Browse Root Category', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('Rooms', 'CATALOG_CATEGORY', 'HotelFac', NULL, 'Rooms', 'long description of Hotel rooms', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('RowBoats', 'CATALOG_CATEGORY', 'BoatRental', NULL, 'Row Boats', 'long description of Row Boats', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('SailBoats', 'CATALOG_CATEGORY', 'BoatRental', NULL, 'Sailing Boats', 'long description of Sailing Boats', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('SERV-001', 'CATALOG_CATEGORY', NULL, NULL, 'Services', NULL, NULL, NULL, NULL, NULL, '2016-04-30 23:57:21', '2016-04-30 23:57:21'),
('SpeedBoats', 'CATALOG_CATEGORY', 'BoatRental', NULL, 'Speed Boats', 'long description of Speed Boats', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('STRGRP_CAT', 'CATALOG_CATEGORY', NULL, 'Store Group Demo Browse Root', NULL, 'Store Group Demo Catalog Primary Browse Root Category', NULL, NULL, NULL, NULL, '2016-05-01 00:01:06', '2016-05-01 00:01:06'),
('STRGRP_CAT100', 'CATALOG_CATEGORY', 'STRGRP_CAT', NULL, NULL, 'long description of store group category 100', NULL, NULL, NULL, NULL, '2016-05-01 00:01:06', '2016-05-01 00:01:06'),
('Suites', 'CATALOG_CATEGORY', 'HotelFac', NULL, 'Suites', 'long description of Hotel suites', NULL, NULL, NULL, NULL, '2016-04-30 23:57:45', '2016-04-30 23:57:45'),
('TSTCSL', 'CROSS_SELL_CATEGORY', NULL, 'Test Cross Sell Category', NULL, 'Test Cross Sell Category', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15'),
('TSTLTDADMIN', 'CATALOG_CATEGORY', NULL, 'Test Limited Admin Category', NULL, 'Test Limited Admin Category', NULL, NULL, NULL, NULL, '2016-04-30 23:57:15', '2016-04-30 23:57:15');

-- --------------------------------------------------------

--
-- Table structure for table `product_category_type`
--

CREATE TABLE `product_category_type` (
  `product_category_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` char(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_category_type`
--

INSERT INTO `product_category_type` (`product_category_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('CATALOG_CATEGORY', NULL, 'N', 'Catalog', '2016-04-30 23:54:12', '2016-04-30 23:54:12'),
('COMMISSION_CATEGORY', NULL, 'N', 'Products in this kind of category qualify for commissions', '2016-04-30 23:55:20', '2016-04-30 23:55:20'),
('CROSS_SELL_CATEGORY', NULL, 'N', 'Cross Sell', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('INDUSTRY_CATEGORY', NULL, 'N', 'Industry', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('INTERNAL_CATEGORY', NULL, 'N', 'Internal', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('MATERIALS_CATEGORY', NULL, 'N', 'Materials', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('MIXMATCH_CATEGORY', NULL, 'N', 'Mix and Match', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('QUICKADD_CATEGORY', NULL, 'N', 'Quick Add', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('SEARCH_CATEGORY', NULL, 'N', 'Search', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('TAX_CATEGORY', NULL, 'N', 'Tax', '2016-04-30 23:54:13', '2016-04-30 23:54:13'),
('USAGE_CATEGORY', NULL, 'N', 'Usage', '2016-04-30 23:54:13', '2016-04-30 23:54:13');

-- --------------------------------------------------------

--
-- Table structure for table `product_type`
--

CREATE TABLE `product_type` (
  `product_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `is_physical` tinyint(1) DEFAULT NULL,
  `is_digital` tinyint(1) DEFAULT NULL,
  `has_table` tinyint(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_type`
--

INSERT INTO `product_type` (`product_type_id`, `parent_type_id`, `is_physical`, `is_digital`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('AGGREGATED', 'GOOD', 0, 0, 0, 'Configurable Good', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('AGGREGATED_CONF', 'AGGREGATED', 0, 0, 0, 'Configurable Good Configuration', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('ASSET_USAGE', NULL, 0, 0, 0, 'Fixed Asset Usage', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('DIGITAL_GOOD', 'GOOD', 0, 0, 0, 'Digital Good', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('FINDIG_GOOD', 'GOOD', 0, 0, 0, 'Finished/Digital Good', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('FINISHED_GOOD', 'GOOD', 0, 0, 0, 'Finished Good', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('FIXED_ASSET', NULL, 0, 0, 0, 'Fixed Asset', '2016-04-30 23:55:05', '2016-04-30 23:55:05'),
('GOOD', NULL, 0, 0, 0, 'Good', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('MARKETING_PKG_AUTO', 'GOOD', 0, 0, 0, 'Marketing Package: Auto Manufactured', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('MARKETING_PKG_PICK', 'GOOD', 0, 0, 0, 'Marketing Package: Pick Assembly', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('PURCH_PKG_AUTO', 'GOOD', 0, 0, 0, 'Purchasing Package', '2016-04-30 23:55:05', '2016-04-30 23:55:05'),
('RAW_MATERIAL', 'GOOD', 0, 0, 0, 'Raw Material', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('SERVICE', NULL, 0, 0, 0, 'Service', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('SERVICE_CONTRACT_MFG', 'SERVICE', 0, 0, 0, 'Contracted Manufacturing Service', '2016-04-30 23:55:05', '2016-04-30 23:55:05'),
('SUBASSEMBLY', 'GOOD', 0, 0, 0, 'Subassembly', '2016-04-30 23:54:16', '2016-04-30 23:54:16'),
('SUPPLIES', NULL, 0, 0, 0, 'Supplies', '2016-04-30 23:55:05', '2016-04-30 23:55:05'),
('WIP', 'GOOD', 0, 0, 0, 'Work In Process', '2016-04-30 23:54:16', '2016-04-30 23:54:16');

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE `quote` (
  `quote_id` int(11) NOT NULL,
  `quote_type_id` varchar(20) NOT NULL,
  `party_id` int(11) DEFAULT NULL,
  `issue_date` datetime NOT NULL,
  `status_id` varchar(20) DEFAULT NULL,
  `currency_uom_id` varchar(20) DEFAULT NULL,
  `sales_channel_enum_id` varchar(20) NOT NULL,
  `valid_from_date` datetime DEFAULT NULL,
  `valid_thru_date` datetime DEFAULT NULL,
  `quote_name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `contact_party_id` int(11) DEFAULT NULL,
  `created_by_party_id` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quote`
--

INSERT INTO `quote` (`quote_id`, `quote_type_id`, `party_id`, `issue_date`, `status_id`, `currency_uom_id`, `sales_channel_enum_id`, `valid_from_date`, `valid_thru_date`, `quote_name`, `description`, `contact_party_id`, `created_by_party_id`, `created_date`, `updated_date`) VALUES
(1, 'PRODUCT_QUOTE', 91, '2016-06-04 10:49:22', 'QUOTE_SENT', 'USD', 'IND_AEROSPACE', '2016-06-04 10:49:22', '2016-12-04 10:49:22', 'Saturday afternoon quote', 'This is a test for the demo', 91, 100, '2016-06-03 02:07:00', '2016-06-11 20:37:04'),
(2, 'PRODUCT_QUOTE', 91, '2016-06-03 17:06:27', 'QUOTE_CREATED', 'USD', 'IND_TELECOM', '2016-06-03 17:06:27', '2016-06-03 17:06:27', 'Quote 2', 'For testing addQuoteItem', 91, 100, '2016-06-03 17:06:27', '2016-06-03 17:06:27'),
(3, 'PRODUCT_QUOTE', 91, '2016-06-04 00:48:03', 'QUOTE_CREATED', 'USD', 'IND_AEROSPACE', '2016-06-04 00:48:03', NULL, 'third quote', 'Third manually created quote', 91, 100, '2016-06-04 00:48:03', '2016-06-04 00:48:03'),
(4, 'PRODUCT_QUOTE', 91, '2016-06-04 10:49:22', 'QUOTE_SENT', 'USD', 'IND_GEN_SERVICES', '2016-06-04 10:49:22', '2016-12-04 10:49:22', 'Saturday morning quote', 'created on Saturday morning', 91, 100, '2016-06-04 10:49:22', '2016-06-29 19:28:20'),
(5, 'PRODUCT_QUOTE', 70, '2016-06-11 20:45:23', 'QUOTE_FINALIZED', 'USD', 'IND_AEROSPACE', '2016-06-11 20:45:23', '2016-09-11 20:45:23', 'test quote to add items to soon...', 'UPDATED:  changed sales channel enum id', 70, 100, '2016-06-11 20:45:23', '2016-06-29 19:28:20'),
(6, 'PRODUCT_QUOTE', 91, '2016-06-04 10:49:22', 'QUOTE_SENT', 'USD', 'IND_GEN_SERVICES', '2016-06-04 10:49:22', '2016-12-04 10:49:22', 'Saturday morning quote', 'created on Saturday morning', 91, 100, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'PRODUCT_QUOTE', 70, '2016-06-21 14:29:48', 'QUOTE_CREATED', NULL, 'IND_AEROSPACE', '2016-06-11 20:45:23', '2016-09-11 20:45:23', 'test addQuote', 'testing addQuote', 70, 100, '2016-06-21 14:29:48', '2016-06-21 14:29:48'),
(11, 'PRODUCT_QUOTE', 117, '2016-06-21 14:31:24', 'QUOTE_CREATED', NULL, 'IND_GEN_SERVICES', '2016-06-11 20:45:23', '2016-09-11 20:45:23', 'test addQuote', 'testing addQuote', 117, 100, '2016-06-21 14:31:24', '2016-06-21 14:31:24'),
(12, 'PRODUCT_QUOTE', 70, '2016-06-11 20:45:23', 'QUOTE_FINALIZED', 'USD', 'IND_AEROSPACE', '2016-06-11 20:45:23', '2016-12-11 20:45:23', 'test quote to add items to soon...', 'UPDATED:  changed sales channel enum id', 70, 100, '2016-06-21 14:32:26', '2016-06-21 14:37:03'),
(13, 'PRODUCT_QUOTE', 172, '2016-06-22 02:26:23', 'QUOTE_CREATED', NULL, 'IND_HEALTH_CARE', '2016-06-22 00:00:00', '2016-07-01 00:00:00', 'new parts', 'they need new parts', 25, 100, '2016-06-22 02:26:23', '2016-06-22 02:26:23'),
(14, 'PRODUCT_QUOTE', 171, '2016-06-22 02:36:42', 'QUOTE_CREATED', NULL, 'IND_AEROSPACE', NULL, NULL, NULL, NULL, 20, 100, '2016-06-22 02:36:42', '2016-06-22 02:36:42'),
(15, 'PROPOSAL', 172, '2016-06-22 02:37:54', 'QUOTE_CREATED', NULL, 'IND_PRESS', '2016-06-24 00:00:00', '2016-09-08 00:00:00', 'Press parts', 'press broke down with competitor''s parts', 126, 100, '2016-06-22 02:37:54', '2016-06-22 02:37:54'),
(16, 'PROPOSAL', 171, '2016-06-22 02:43:01', 'QUOTE_CREATED', NULL, 'IND_INSURANCE', '2016-06-21 00:00:00', '2016-11-11 00:00:00', NULL, NULL, 81, 100, '2016-06-22 02:43:01', '2016-06-22 02:43:01'),
(17, 'PRODUCT_QUOTE', 171, '2016-06-22 02:45:32', 'QUOTE_CREATED', NULL, 'IND_GEN_SERVICES', '2016-06-21 00:00:00', '2016-06-24 00:00:00', 'Quote for services', 'They need services', 112, 2, '2016-06-22 02:45:32', '2016-06-22 02:45:32'),
(18, 'PROPOSAL', 172, '2016-06-22 03:09:45', 'QUOTE_CREATED', NULL, 'IND_INSURANCE', '2016-06-21 00:00:00', '2016-10-07 00:00:00', 'Insurance for parts', 'parts break down, insurance is a good idea', 48, 100, '2016-06-22 03:09:45', '2016-06-22 03:09:45'),
(19, 'OTHER_QUOTE', 171, '2016-06-22 03:14:10', 'QUOTE_CREATED', NULL, 'IND_RETAIL', '2016-06-21 00:00:00', '2016-06-23 00:00:00', 'Retail items', 'Items for retail', 58, 100, '2016-06-22 03:14:10', '2016-06-22 03:14:10'),
(20, 'PURCHASE_QUOTE', 172, '2016-06-22 08:19:24', 'QUOTE_CREATED', 'TOP', 'IND_MEDIA', '2016-06-21 05:00:00', '2016-09-14 05:00:00', 'Bandages', 'two month supply for hospital', 90, 100, '2016-06-22 03:19:24', '2016-07-09 12:59:25'),
(21, 'PRODUCT_QUOTE', 172, '2016-06-25 21:11:58', 'QUOTE_CREATED', 'GBP', 'IND_HEALTH_CARE', '2016-07-01 10:00:00', '2016-10-15 10:00:00', 'Boxes of Tissues', 'They need tissues', 141, 2, '2016-06-24 20:11:58', '2016-07-18 01:52:34'),
(22, 'PROPOSAL', 171, '2016-06-27 12:22:41', 'QUOTE_CREATED', 'GTQ', 'IND_TELECOM', '2016-06-26 12:00:00', '2017-02-18 12:00:00', 'Phone cable', NULL, 55, 2, '2016-06-25 00:22:41', '2016-07-02 03:47:00'),
(23, 'PRODUCT_QUOTE', 171, '2016-06-26 22:34:03', 'QUOTE_CREATED', 'OMR', 'IND_HARDWARE', '2016-07-23 00:00:00', '2016-07-23 00:00:00', 'quote for widgets', NULL, 91, 2, '2016-06-26 22:34:03', '2016-07-26 01:03:35'),
(24, 'PRODUCT_QUOTE', 172, '2016-07-07 00:11:02', 'QUOTE_CREATED', 'KZT', 'IND_INSURANCE', '2016-07-15 20:00:00', '2016-07-24 01:00:00', 'product insurance', NULL, 70, 2, '2016-07-05 23:11:02', '2016-07-23 14:51:26'),
(25, 'PRODUCT_QUOTE', 2, '2016-07-21 18:16:40', 'QUOTE_CREATED', 'USD', 'IND_GEN_SERVICES', '2016-07-21 18:16:40', '2016-07-21 18:16:40', 'manual from phpMyAdmin', NULL, NULL, 2, '2016-07-21 18:16:40', '2016-07-21 18:16:40'),
(26, 'PRODUCT_QUOTE', 2, '2016-07-21 18:17:43', 'QUOTE_CREATED', 'USD', 'IND_GEN_SERVICES', '2016-07-21 18:17:43', '2016-07-21 18:17:43', 'manual from phpMyAdmin', NULL, NULL, 2, '2016-07-21 18:17:43', '2016-07-21 18:17:43'),
(27, 'PRODUCT_QUOTE', 171, '2016-07-22 06:06:51', 'QUOTE_CREATED', 'HKD', 'IND_PRESS', '2016-07-28 00:00:00', '2016-09-09 00:00:00', 'Printing Press parts', NULL, 191, 2, '2016-07-21 20:06:51', '2016-07-25 01:53:58'),
(31, 'PRODUCT_QUOTE', 172, '2016-07-23 02:10:01', 'QUOTE_CREATED', 'KMF', 'IND_MANUFACTURING', '2016-07-22 00:00:00', '2016-08-26 00:00:00', 'Widgets for factory overhaul', NULL, 61, 2, '2016-07-23 02:10:01', '2016-07-23 14:57:32'),
(41, 'PRODUCT_QUOTE', 491, '2016-07-25 00:00:00', 'QUOTE_CREATED', 'GBP', 'IND_HARDWARE', '2016-07-25 00:00:00', '2016-10-14 00:00:00', 'Widgets for new install', NULL, 125, 2, '2016-07-25 17:15:01', '2016-07-25 22:36:15');

-- --------------------------------------------------------

--
-- Table structure for table `quote_item`
--

CREATE TABLE `quote_item` (
  `quote_id` int(11) NOT NULL,
  `quote_item_seq_id` varchar(20) NOT NULL,
  `product_id` varchar(20) DEFAULT NULL,
  `quantity` decimal(18,6) DEFAULT NULL,
  `selected_amount` decimal(18,6) DEFAULT NULL,
  `quote_unit_price` decimal(18,2) DEFAULT NULL,
  `estimated_delivery_date` datetime DEFAULT NULL,
  `comments` varchar(255) DEFAULT NULL,
  `is_promo` tinyint(1) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quote_item`
--

INSERT INTO `quote_item` (`quote_id`, `quote_item_seq_id`, `product_id`, `quantity`, `selected_amount`, `quote_unit_price`, `estimated_delivery_date`, `comments`, `is_promo`, `description`, `created_date`, `updated_date`) VALUES
(1, '1', 'testProd1', '10.300000', '12.200000', '34.56', NULL, 'test addQuoteItem', NULL, 'test addQuoteItem', '2016-06-03 03:46:30', '2016-06-03 03:46:30'),
(1, '2', 'testProd1', '9.300000', '7.600000', '98.23', NULL, 'test addQuoteItem', NULL, 'manually incrementing quoteItemSeqId', '2016-06-03 03:48:35', '2016-06-03 03:48:35'),
(1, '3', 'testProd1', '8.000000', '1.200000', '8.34', NULL, 'test addQuoteItem', NULL, 'testing returning quoteItemSeqId', '2016-06-03 04:06:34', '2016-06-03 04:06:34'),
(2, '1', 'testProd2', '5.000000', '12.000000', '45.00', NULL, 'test addQuoteItem', NULL, 'test addQuoteItem', '2016-06-03 17:32:07', '2016-06-03 17:32:07'),
(2, '2', 'testProd2', '7.000000', '10.000000', '45.00', NULL, 'manually incremented quote_item_seq_id', NULL, 'test addQuoteItem', '2016-06-03 17:33:26', '2016-06-03 17:33:26'),
(2, '3', 'testProd2', '7.000000', '10.000000', '45.00', NULL, 'what if kept quote_item_seq_id the same?', NULL, 'test addQuoteItem', '2016-06-03 17:36:06', '2016-06-03 17:36:06'),
(2, '4', 'testProd2', '5.000000', '12.000000', '45.00', NULL, 'test addQuoteItem', NULL, 'test addQuoteItem', '2016-06-03 18:30:52', '2016-06-03 18:30:52'),
(3, '1', 'testProd2', '8.300000', '12.200000', '8723.00', NULL, 'test addQuoteItem', NULL, 'test addQuoteItem', '2016-06-04 01:06:33', '2016-06-04 01:06:33'),
(3, '2', 'testProd1', '5.000000', '10.000000', '7834.00', NULL, 'test addQuoteItem', NULL, 'test addQuoteItem', '2016-06-04 01:13:17', '2016-06-04 01:13:17'),
(4, '1', 'testProd1', NULL, NULL, NULL, NULL, 'testProd1 is less good than testProd2, but he wants it', NULL, 'customers stick with testProd1 out of loyalty', '2016-06-04 14:18:18', '2016-06-04 14:38:11'),
(4, '2', 'testProd2', NULL, NULL, NULL, NULL, 'testProd2 is high quality', NULL, 'customers love this product', '2016-06-04 15:22:40', '2016-06-04 15:23:24'),
(4, '3', 'testProd2', NULL, NULL, NULL, NULL, 'testProd2 gets better with age', NULL, 'old customers love this product', '2016-06-04 18:12:09', '2016-06-11 21:40:20'),
(5, '1', 'testProd1', NULL, NULL, NULL, NULL, 'testProd1 instead', NULL, 'testProd1 is nice', '2016-06-11 21:04:45', '2016-06-16 03:08:20'),
(5, '2', 'testProd1', NULL, NULL, NULL, NULL, 'testProd1 adding as item 2', NULL, 'this is a test of addQuoteItem', '2016-06-14 16:16:37', '2016-06-14 16:16:37'),
(5, '3', 'testProd1', NULL, NULL, NULL, NULL, 'testProd1 adding as item 3', NULL, 'this is a test of addQuoteItem', '2016-06-14 19:22:21', '2016-06-14 19:22:21'),
(5, '4', 'testProd1', NULL, NULL, NULL, NULL, 'testProd1 adding as item 2', NULL, 'testProd1 is well tested', '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(5, '5', 'testProd2', NULL, NULL, NULL, NULL, 'testing', NULL, 'customers love this product', '2016-06-16 02:53:59', '2016-06-16 02:53:59'),
(21, '1', 'testProd2', NULL, NULL, NULL, '2016-07-29 00:00:00', 'try something old', NULL, 'new description', '2016-07-05 20:23:30', '2016-07-18 01:52:03'),
(21, '2', 'testProd2', NULL, NULL, NULL, '2016-07-17 00:00:00', 'second item on this quote', NULL, 'hello there', '2016-07-05 20:24:12', '2016-07-18 01:52:13'),
(22, '1', 'testProd2', NULL, NULL, NULL, '2016-07-21 10:00:00', 'got my forms sorted out', NULL, NULL, '2016-07-05 04:02:40', '2016-07-05 22:00:16'),
(22, '2', 'testProd1', NULL, NULL, NULL, '2016-07-22 00:00:00', 'changed comment and not date', NULL, 'customer hates to wait', '2016-07-05 18:09:55', '2016-07-05 21:35:41'),
(22, '3', 'testProd2', NULL, NULL, NULL, '2016-07-14 00:00:00', 'a third item to add', NULL, NULL, '2016-07-05 20:16:58', '2016-07-05 22:01:27'),
(22, '4', 'testProd1', NULL, NULL, NULL, '2016-07-23 00:00:00', 'hello', NULL, NULL, '2016-07-05 22:00:33', '2016-07-05 22:00:33'),
(23, '2', 'widgets', NULL, NULL, NULL, '2016-08-13 00:00:00', 'they need widgets', NULL, NULL, '2016-07-04 03:43:16', '2016-07-25 04:55:33'),
(23, '3', 'testProd2', NULL, NULL, NULL, '2016-07-22 05:00:00', 'testing UI AddItemPage', NULL, 'testing UI AddItemPage', '2016-07-04 19:31:06', '2016-07-15 02:57:51'),
(23, '4', 'testProd2', NULL, NULL, NULL, '2016-07-15 00:00:00', 'testing add item in accordion', NULL, NULL, '2016-07-05 04:20:34', '2016-07-05 04:20:34'),
(24, '1', 'insurance', NULL, NULL, NULL, '2016-07-23 00:00:00', 'insure all installations', NULL, NULL, '2016-07-05 23:11:40', '2016-07-23 14:51:51'),
(24, '2', 'testProd2', NULL, NULL, NULL, '2016-07-29 00:00:00', 'comment', NULL, NULL, '2016-07-05 23:12:34', '2016-07-05 23:12:34'),
(27, '1', 'laser cutter', NULL, NULL, NULL, '2016-07-15 00:00:00', 'test parts', NULL, NULL, '2016-07-21 20:19:07', '2016-07-25 01:54:20'),
(31, '1', 'cardboard boxes', NULL, NULL, NULL, '2016-07-29 00:00:00', 'minimum 55K needed', NULL, NULL, '2016-07-23 02:10:19', '2016-07-23 23:50:59'),
(31, '2', 'widgets', NULL, NULL, NULL, '2016-07-30 00:00:00', 'need more widgets', NULL, NULL, '2016-07-24 13:26:13', '2016-07-25 16:24:13');

-- --------------------------------------------------------

--
-- Table structure for table `quote_item_option`
--

CREATE TABLE `quote_item_option` (
  `quote_id` int(11) NOT NULL,
  `quote_item_seq_id` varchar(20) NOT NULL,
  `quote_item_option_seq_id` varchar(20) NOT NULL,
  `quantity` decimal(18,6) NOT NULL,
  `quote_unit_price` decimal(18,2) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quote_item_option`
--

INSERT INTO `quote_item_option` (`quote_id`, `quote_item_seq_id`, `quote_item_option_seq_id`, `quantity`, `quote_unit_price`, `created_date`, `updated_date`) VALUES
(3, '1', '1', '8.300000', '8723.00', '2016-06-04 01:06:33', '2016-06-04 01:06:33'),
(3, '2', '1', '5.000000', '7834.00', '2016-06-04 01:13:17', '2016-06-04 01:13:17'),
(4, '1', '1', '15.000000', '2.37', '2016-06-04 14:55:24', '2016-06-04 15:20:04'),
(4, '2', '1', '25.000000', '30.00', '2016-06-04 15:24:34', '2016-06-04 15:26:32'),
(4, '2', '2', '50.000000', '25.00', '2016-06-04 15:26:56', '2016-06-04 15:26:56'),
(4, '2', '3', '100.000000', '20.00', '2016-06-04 15:27:14', '2016-06-04 15:27:14'),
(4, '3', '1', '20.000000', '10.20', '2016-06-04 18:23:39', '2016-06-11 21:40:20'),
(5, '1', '1', '25.000000', '5.00', '2016-06-14 20:39:35', '2016-06-14 23:05:38'),
(5, '1', '2', '10.000000', '3.00', '2016-06-16 02:22:31', '2016-06-29 19:28:20'),
(5, '1', '3', '23.000000', '11.47', '2016-06-16 03:13:26', '2016-06-16 03:16:13');

-- --------------------------------------------------------

--
-- Table structure for table `quote_note`
--

CREATE TABLE `quote_note` (
  `quote_id` int(11) NOT NULL,
  `note_id` int(11) NOT NULL,
  `internal_note` tinyint(1) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `quote_role`
--

CREATE TABLE `quote_role` (
  `quote_id` int(11) NOT NULL,
  `party_id` int(11) NOT NULL,
  `role_type_id` varchar(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quote_role`
--

INSERT INTO `quote_role` (`quote_id`, `party_id`, `role_type_id`, `created_date`, `updated_date`) VALUES
(1, 100, 'PERSON_ROLE', '2016-06-03 02:10:13', '2016-06-03 02:10:13'),
(2, 100, 'PERSON_ROLE', '2016-06-03 17:06:49', '2016-06-03 17:06:49'),
(3, 100, 'PERSON_ROLE', '2016-06-04 00:48:39', '2016-06-04 00:48:39'),
(4, 100, 'PERSON_ROLE', '2016-06-04 10:50:27', '2016-06-04 10:50:27'),
(6, 100, 'PERSON_ROLE', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 100, 'PERSON_ROLE', '2016-06-21 14:29:48', '2016-06-21 14:29:48'),
(11, 100, 'PERSON_ROLE', '2016-06-21 14:31:24', '2016-06-21 14:31:24'),
(12, 100, 'PERSON_ROLE', '2016-06-21 14:32:26', '2016-06-21 14:32:26'),
(13, 100, 'PERSON_ROLE', '2016-06-22 02:26:23', '2016-06-22 02:26:23'),
(14, 100, 'PERSON_ROLE', '2016-06-22 02:36:42', '2016-06-22 02:36:42'),
(15, 100, 'PERSON_ROLE', '2016-06-22 02:37:54', '2016-06-22 02:37:54'),
(16, 100, 'PERSON_ROLE', '2016-06-22 02:43:01', '2016-06-22 02:43:01'),
(17, 2, 'PERSON_ROLE', '2016-06-22 02:45:32', '2016-06-22 02:45:32'),
(18, 100, 'PERSON_ROLE', '2016-06-22 03:09:45', '2016-06-22 03:09:45'),
(19, 100, 'PERSON_ROLE', '2016-06-22 03:14:10', '2016-06-22 03:14:10'),
(20, 100, 'PERSON_ROLE', '2016-06-22 03:19:24', '2016-06-22 03:19:24'),
(21, 2, 'PERSON_ROLE', '2016-06-24 20:11:58', '2016-06-24 20:11:58'),
(22, 2, 'PERSON_ROLE', '2016-06-25 00:22:41', '2016-06-25 00:22:41'),
(23, 2, 'PERSON_ROLE', '2016-07-04 04:17:39', '2016-07-04 04:17:39'),
(24, 2, 'PERSON_ROLE', '2016-07-05 23:11:02', '2016-07-05 23:11:02'),
(27, 2, 'PERSON_ROLE', '2016-07-21 20:06:51', '2016-07-21 20:06:51'),
(31, 2, 'PERSON_ROLE', '2016-07-23 02:10:01', '2016-07-23 02:10:01'),
(41, 2, 'PERSON_ROLE', '2016-07-25 17:15:01', '2016-07-25 17:15:01');

-- --------------------------------------------------------

--
-- Table structure for table `quote_type`
--

CREATE TABLE `quote_type` (
  `quote_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quote_type`
--

INSERT INTO `quote_type` (`quote_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('OTHER_QUOTE', NULL, 0, 'Other', '2016-05-26 17:15:47', '2016-05-26 17:15:47'),
('PRODUCT_QUOTE', NULL, 0, 'Product', '2016-05-26 17:15:47', '2016-05-26 17:15:47'),
('PROPOSAL', NULL, 0, 'Proposal', '2016-05-26 17:15:47', '2016-05-26 17:15:47'),
('PURCHASE_QUOTE', NULL, 0, 'Product Purchase', '2016-05-26 17:15:47', '2016-05-26 17:15:47');

-- --------------------------------------------------------

--
-- Table structure for table `role_type`
--

CREATE TABLE `role_type` (
  `role_type` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `role_type`
--

INSERT INTO `role_type` (`role_type`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('ACCOUNT', 'CUSTOMER', 0, 'Account', '2016-05-10 11:43:45', '2016-05-10 11:43:45'),
('ACCOUNT_MANAGER', 'SALES_REP', 0, 'Account Manager', '2016-05-10 11:44:46', '2016-05-10 11:44:46'),
('CONTACT', NULL, 0, 'Contact', '2016-05-10 11:42:32', '2016-05-10 11:42:32'),
('CUSTOMER', NULL, 0, 'Customer', '2016-05-10 11:42:32', '2016-05-10 11:42:32'),
('LEAD', NULL, 0, 'Lead or prospect', '2016-05-10 11:42:32', '2016-05-10 11:42:32'),
('PERSON_ROLE', NULL, 0, 'Person', '2016-05-10 11:42:32', '2016-05-10 11:42:32'),
('SALES_REP', 'PERSON_ROLE', 0, 'Sales Representative', '2016-05-10 11:43:45', '2016-05-10 11:43:45');

-- --------------------------------------------------------

--
-- Table structure for table `security_group`
--

CREATE TABLE `security_group` (
  `group_id` varchar(60) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `security_group`
--

INSERT INTO `security_group` (`group_id`, `description`, `created_date`, `updated_date`) VALUES
('ACCOUNT_OWNER', 'Permissions granted to account owners, including view and update on the contacts of the account', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('CONTACT_OWNER', 'Permissions granted to contact owners', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('CRMSFA_ACCOUNT_TASKS', 'Use CRMSFA for tasks, activities, and emails only', '2016-05-29 15:39:39', '2016-05-29 15:39:39'),
('CRMSFA_CASE_TASKS', 'Use CRMSFA for tasks, activities, and emails only', '2016-05-29 11:07:33', '2016-05-29 11:07:33'),
('CRMSFA_CONTACT_TASKS', 'Use CRMSFA for tasks, activities, and emails only', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('CRMSFA_LEAD_TASKS', 'Use CRMSFA for tasks, activities, and emails only', '2016-05-29 14:55:08', '2016-05-29 14:55:08'),
('CRMSFA_LOGIN_ONLY', 'For testing: Permission to login and view basic screens only.  No permission to see or modify data', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('CRMSFA_QUOTE_TASKS', 'Use CRMSFA for tasks, activities, and emails only', '2016-06-01 20:45:58', '2016-06-01 20:45:58'),
('CRMSFA_SYSTEM', 'System user privileges for automatically performed functions in CRM/SFA', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('CRMSFA_TASKS_ONLY', 'Use CRMSFA for tasks, activities, and emails only', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('FULLADMIN', 'Full Admin group, has all general permissions.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('LEAD_OWNER', 'Permissions granted to lead owners', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERADMIN', 'Order Admin group, has all order permissions.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERADMIN_LTD', 'Limited Order Admin group, has all limited order permissions.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERENTRY', 'Order Entry Admin group; permissions for creating orders.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERENTRY_ALL', 'Order entry permission for all stores.  No special role is needed.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERPROC', 'Admin group for restricted order processing.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERPURCH', 'Order entry with purchasing permissions', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('ORDERSUPPLIER_LTD', 'Limited Order Admin group for Supplier Agents.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('PARTYADMIN', 'Party Admin group, has all party permissions.', '2016-05-18 18:37:08', '2016-05-18 18:37:08'),
('SECURITYADMIN', 'Security Admin group, has all permissions to modify security settings in party manager.', '2016-05-18 18:37:08', '2016-05-18 18:37:08');

-- --------------------------------------------------------

--
-- Table structure for table `security_group_permission`
--

CREATE TABLE `security_group_permission` (
  `group_id` varchar(60) NOT NULL,
  `permission_id` varchar(60) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `security_group_permission`
--

INSERT INTO `security_group_permission` (`group_id`, `permission_id`, `created_date`, `updated_date`) VALUES
('ACCOUNT_OWNER', 'CRMSFA_ACCOUNT_DEACTIVATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACCOUNT_REASSIGN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACCOUNT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACCOUNT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACT_ADMIN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACT_CLOSE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACT_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_ACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_CONTACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_CONTACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_OPP_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_OPP_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_OPP_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_TEAM_ASSIGN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_TEAM_REMOVE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ACCOUNT_OWNER', 'CRMSFA_TEAM_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_ACT_ADMIN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_ACT_CLOSE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_ACT_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_ACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_ACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_CONTACT_CREATE', '2016-05-28 18:55:58', '2016-05-28 18:55:58'),
('CONTACT_OWNER', 'CRMSFA_CONTACT_DEACTIVATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_CONTACT_REASSIGN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_CONTACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CONTACT_OWNER', 'CRMSFA_CONTACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNT_TASKS', 'CRMSFA_ACCOUNT_CREATE', '2016-05-29 15:40:07', '2016-05-29 15:40:07'),
('CRMSFA_CASE_TASKS', 'CRMSFA_CASE_CREATE', '2016-05-29 11:11:52', '2016-05-29 11:11:52'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_ACTS_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_ACT_CLOSE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_ACT_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_ACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_ACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_CONTACTS_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_CONTACT_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_CONTACT_DEACTIVATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_CONTACT_REASSIGN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_CONTACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_CONTACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'CRMSFA_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_CME_CREATE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_CME_DELETE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_CME_UPDATE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_GRP_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_NOTE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_PCM_CREATE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_PCM_DELETE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_PCM_UPDATE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_REL_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_REL_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_ROLE_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_ROLE_DELETE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_SRC_CREATE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'PARTYMGR_STS_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_TASKS', 'WORKEFFORTMGR_ADMIN', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_TASKS', 'CRMSFA_LEADS_VIEW', '2016-06-26 19:09:54', '2016-06-26 19:09:54'),
('CRMSFA_LEAD_TASKS', 'CRMSFA_LEAD_CREATE', '2016-05-29 14:56:24', '2016-05-29 14:56:24'),
('CRMSFA_LOGIN_ONLY', 'CRMSFA_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_QUOTE_TASKS', 'CRMSFA_QUOTE_CREATE', '2016-06-01 20:46:28', '2016-06-01 20:46:28'),
('CRMSFA_SYSTEM', 'CRMSFA_4C_UPDATE', '2016-04-30 23:56:07', '2016-04-30 23:56:05'),
('CRMSFA_TASKS_ONLY', 'CRMSFA_ACTS_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_TASKS_ONLY', 'CRMSFA_ACT_CLOSE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_TASKS_ONLY', 'CRMSFA_ACT_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_TASKS_ONLY', 'CRMSFA_ACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_TASKS_ONLY', 'CRMSFA_ACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('CRMSFA_TASKS_ONLY', 'CRMSFA_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('FULLADMIN', 'ACCOUNTING_ADMIN', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'ACCOUNTING_COMM_VIEW', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'ACCOUNTING_PRINT_CHECKS', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'ACCTG_ATX_ADMIN', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'ACCTG_FX_UPDATE', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'ACCTG_PREF_ADMIN', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'ARTIFACT_INFO_VIEW', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'ASSETMAINT_ADMIN', '2016-04-30 23:54:42', '2016-04-30 23:54:42'),
('FULLADMIN', 'CATALOG_ADMIN', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('FULLADMIN', 'CATALOG_PRICE_MAINT', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('FULLADMIN', 'CATALOG_PURCHASE_ALLOW', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('FULLADMIN', 'CATALOG_VIEW_ALLOW', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('FULLADMIN', 'COMMON_ADMIN', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('FULLADMIN', 'CONTENTMGR_ADMIN', '2016-04-30 23:54:08', '2016-04-30 23:54:08'),
('FULLADMIN', 'DATAFILE_MAINT', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'EBAY_VIEW', '2016-04-30 23:54:44', '2016-04-30 23:54:44'),
('FULLADMIN', 'ENTITY_DATA_ADMIN', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'ENTITY_MAINT', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'ENTITY_SYNC_ADMIN', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'ENUM_STATUS_MAINT', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'EXAMPLE_ADMIN', '2016-04-30 23:53:50', '2016-04-30 23:53:50'),
('FULLADMIN', 'FACILITY_ADMIN', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('FULLADMIN', 'GOOGLEBASE_VIEW', '2016-04-30 23:54:43', '2016-04-30 23:54:43'),
('FULLADMIN', 'LABEL_MANAGER_VIEW', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'MANUAL_PAYMENT', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'MANUFACTURING_ADMIN', '2016-04-30 23:54:21', '2016-04-30 23:54:21'),
('FULLADMIN', 'MARKETING_ADMIN', '2016-04-30 23:54:41', '2016-04-30 23:54:41'),
('FULLADMIN', 'OAGIS_VIEW', '2016-04-30 23:54:43', '2016-04-30 23:54:43'),
('FULLADMIN', 'OFBTOOLS_VIEW', '2016-04-30 23:53:39', '2016-04-30 23:53:38'),
('FULLADMIN', 'ORDERMGR_ADMIN', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('FULLADMIN', 'PARTYMGR_ADMIN', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('FULLADMIN', 'PAYPROC_ADMIN', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'PAY_INFO_ADMIN', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('FULLADMIN', 'PERIOD_MAINT', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'PROJECTMGR_ADMIN', '2016-04-30 23:54:43', '2016-04-30 23:54:43'),
('FULLADMIN', 'SECURITY_ADMIN', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('FULLADMIN', 'SEND_CONTROL_APPLET', '2016-04-30 23:54:08', '2016-04-30 23:54:08'),
('FULLADMIN', 'SERVER_STATS_VIEW', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'SERVICE_INVOKE_ANY', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'SERVICE_MAINT', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'SHIPRATE_ADMIN', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('FULLADMIN', 'TEMPEXPR_ADMIN', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('FULLADMIN', 'USERPREF_ADMIN', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('FULLADMIN', 'UTIL_CACHE_EDIT', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'UTIL_CACHE_VIEW', '2016-04-30 23:53:49', '2016-04-30 23:53:48'),
('FULLADMIN', 'UTIL_DEBUG_EDIT', '2016-04-30 23:53:49', '2016-04-30 23:53:48'),
('FULLADMIN', 'UTIL_DEBUG_VIEW', '2016-04-30 23:53:49', '2016-04-30 23:53:48'),
('FULLADMIN', 'VISUALTHEME_ADMIN', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('FULLADMIN', 'WEBTOOLS_VIEW', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('FULLADMIN', 'WORKEFFORTMGR_ADMIN', '2016-04-30 23:54:11', '2016-04-30 23:54:11'),
('LEAD_OWNER', 'CRMSFA_ACT_ADMIN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_ACT_CLOSE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_ACT_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_ACT_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_ACT_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_LEAD_DEACTIVATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_LEAD_DELETE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_LEAD_REASSIGN', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_LEAD_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_LEAD_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_OPP_CREATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_OPP_UPDATE', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('LEAD_OWNER', 'CRMSFA_OPP_VIEW', '2016-04-30 23:56:06', '2016-04-30 23:56:05'),
('ORDERADMIN', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN', 'ORDERMGR_ADMIN', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN_LTD', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN_LTD', 'ORDERMGR_ROLE_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN_LTD', 'ORDERMGR_ROLE_DELETE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN_LTD', 'ORDERMGR_ROLE_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN_LTD', 'ORDERMGR_ROLE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERADMIN_LTD', 'ORDERMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'CATALOG_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_CRQ_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_ROLE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_SALES_ENTRY', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'ORDERMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PARTYMGR_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PARTYMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PARTYMGR_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PARTYMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PAY_INFO_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PAY_INFO_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY', 'PAY_INFO_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'CATALOG_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_CRQ_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_ROLE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_SALES_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_SALES_ENTRY', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_SALES_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_SEND_CONFIRMATION', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'ORDERMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PARTYMGR_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PARTYMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PARTYMGR_PCM_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PARTYMGR_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PARTYMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PAY_INFO_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PAY_INFO_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERENTRY_ALL', 'PAY_INFO_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPROC', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPROC', 'ORDERMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPROC', 'ORDERMGR_ROLE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPROC', 'PARTYMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPROC', 'PARTYMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'CATALOG_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'ORDERMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'ORDERMGR_PURCHASE_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'ORDERMGR_PURCHASE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'ORDERMGR_ROLE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'ORDERMGR_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'ORDERMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PARTYMGR_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PARTYMGR_NOTE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PARTYMGR_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PARTYMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PAY_INFO_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PAY_INFO_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERPURCH', 'PAY_INFO_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERSUPPLIER_LTD', 'OFBTOOLS_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERSUPPLIER_LTD', 'ORDERMGR_ROLE_CREATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERSUPPLIER_LTD', 'ORDERMGR_ROLE_UPDATE', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERSUPPLIER_LTD', 'ORDERMGR_ROLE_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERSUPPLIER_LTD', 'ORDERMGR_VIEW', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('PARTYADMIN', 'OFBTOOLS_VIEW', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYADMIN', 'PARTYMGR_ADMIN', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('SECURITYADMIN', 'SECURITY_ADMIN', '2016-04-30 23:53:58', '2016-04-30 23:53:58');

-- --------------------------------------------------------

--
-- Table structure for table `security_permission`
--

CREATE TABLE `security_permission` (
  `permission_id` varchar(60) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `security_permission`
--

INSERT INTO `security_permission` (`permission_id`, `description`, `created_date`, `updated_date`) VALUES
('ACCOUNTING_ADMIN', 'ALL operations in the Accounting Manager.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('ACCOUNTING_COMM_VIEW', 'View commission rates', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('ACCOUNTING_PRINT_CHECKS', 'Print checks.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('ACCTG_ATX_ADMIN', 'ALL operations involving general ledger accounting transactions and entries.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('ACCTG_FX_UPDATE', 'Set foreign exchange rates', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('ACCTG_PREF_ADMIN', 'ALL organization accounting preferences operations', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('ARTIFACT_INFO_VIEW', 'View the Artifact Info pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('ASSETMAINT_ADMIN', 'ALL Asset Maintenance operations.', '2016-04-30 23:54:42', '2016-04-30 23:54:42'),
('CATALOG_ADMIN', 'ALL operations in the Catalog Manager.', '2016-04-30 23:54:17', '2016-04-30 23:54:17'),
('CATALOG_PRICE_MAINT', 'To be able to maintain product prices, promotions, and price rules.', '2016-04-30 23:54:17', '2016-04-30 23:54:17'),
('CATALOG_PURCHASE_ALLOW', 'Allow create/update of ''Purchase Allow'' in the Catalog Manager.', '2016-04-30 23:54:17', '2016-04-30 23:54:17'),
('CATALOG_VIEW', 'View operations in the Catalog Manager.', '2016-04-30 23:54:17', '2016-04-30 23:54:17'),
('CATALOG_VIEW_ALLOW', 'Allow create/update of ''View Allow'' in the Catalog Manager.', '2016-04-30 23:54:17', '2016-04-30 23:54:17'),
('COMMON_ADMIN', 'Admin operations in the Common Component.', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('CONTENTMGR_ADMIN', 'ALL operations in the Content Manager.', '2016-04-30 23:54:08', '2016-04-30 23:54:08'),
('CRMSFA_4C_CREATE', 'Create a forecast', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_4C_UPDATE', 'Update a forecast', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_4C_VIEW', 'Access to forecast function of application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_4C_VIEWALL', 'View all forecasts', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNTS_VIEW', 'Access to the Accounts function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNT_CREATE', 'Create a new account.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNT_DEACTIVATE', 'Deactivate any existing account.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNT_REASSIGN', 'Reassign owner of an existing account.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNT_UPDATE', 'Update any existing account.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACCOUNT_VIEW', 'View any Account.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACTS_VIEW', 'Access to the Activities function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACT_ADMIN', 'View and set scope for public, private and confidential activities.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACT_CLOSE', 'Close an existing Activity: Event or Task.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACT_CREATE', 'Create a new Activity: Event or Task.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACT_UPDATE', 'Update an existing Activity: Event or Task.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ACT_VIEW', 'View an Activity: Event or Task.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CAMP_CREATE', 'Create marketing campaigns in CRMSFA.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CAMP_UPDATE', 'Update marketing campaigns in CRMSFA and add, update or remove contact lists to them.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CASES_VIEW', 'Access to the Cases function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CASE_CLOSE', 'Close an existing Case.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CASE_CREATE', 'Create a new Case.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CASE_UPDATE', 'Update an existing Case.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CASE_VIEW', 'View a Case.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CONTACTS_VIEW', 'Access to the Contacts function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_CREATE', 'Create a new Contact.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_DEACTIVATE', 'Deactivate any existing Contact.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_REASSIGN', 'Reassign owner of an existing contact.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_UPDATE', 'Update any existing Contact.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_CONTACT_VIEW', 'View any Contact.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_INVOICE_VIEW', 'View an invoice.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEADS_VIEW', 'Access to the Leads function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_CREATE', 'Create a new Lead.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_DEACTIVATE', 'Deactivate any existing Lead.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_DELETE', 'Delete a lead that hasn''t been converted.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_REASSIGN', 'Reassign owner of an existing lead.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_UPDATE', 'Update any existing Lead.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_LEAD_VIEW', 'View any Lead.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_MKTG_VIEW', 'Access to the Marketing function of the application', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_OPPS_VIEW', 'Access to the Opportunities function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_OPP_CREATE', 'Create a new Opportunity.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_OPP_DEACTIVATE', 'Deactivate any existing Opportunity.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_OPP_UPDATE', 'Update any existing Opportunity.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_OPP_VIEW', 'View any Opportunity.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ORDERS_VIEW', 'Access to the Orders function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ORDER_CREATE', 'Create a new Order.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_ORDER_VIEW', 'View any Order.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_PARTNER_CREATE', 'Create a new Partner.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_PARTNER_UPDATE', 'Update any existing Partner.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_PARTNER_VIEW', 'Access to the Partners function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_PASS_UPDATE', 'Update passwords for accounts/leads/contacts.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_PAY_UPDATE', 'Update payment methods of a party', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_PAY_VIEW', 'View payment methods of a party.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_QUOTES_VIEW', 'Access to the Quotes function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_QUOTE_CREATE', 'Create a new Quote.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_QUOTE_UPDATE', 'Update any existing Quote.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_QUOTE_VIEW', 'View any Quote.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_RETURN_ACCEPT', 'Accept returns.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_RETURN_CANCEL', 'Cancel returns.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_RETURN_COMP', 'Force complete returns.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_RETURN_CREATE', 'Create returns.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_RPT_VIEW', 'View operations in the  [Reports] tab and all of the reports inside it.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_SLT_UPDATE', 'Update shopping lists.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_SLT_VIEW', 'View shopping lists.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_SURVEY_VIEW', 'View survey results from CRMSFA.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_ASSIGN', 'Assign new members to an account or team', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_CALVIEW', 'See team''s calendar events', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_CREATE', 'Create a new sales team', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_DEACTIVATE', 'Deactivate a sales team', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_REMOVE', 'Remove account or team member', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_UPDATE', 'Update roles of account or team member', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_TEAM_VIEW', 'Access to the Team Management function of the application.', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('CRMSFA_VIEW', 'Access to the CRM/SFA Application', '2016-04-30 23:56:05', '2016-04-30 23:56:05'),
('DATAFILE_MAINT', 'Use the Data File Maintenance pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EBAY_VIEW', 'View operations in the eBay application.', '2016-04-30 23:54:44', '2016-04-30 23:54:44'),
('ENTITY_DATA_ADMIN', 'ALL with the Entity Data Maintenance pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('ENTITY_MAINT', 'Use the Entity Maintenance pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('ENTITY_SYNC_ADMIN', 'Use the Entity Sync Admin pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('ENUM_STATUS_MAINT', 'Use the Enum and Status Maintenance pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EXAMPLE_ADMIN', 'ALL operations in the Example Management Screens.', '2016-04-30 23:53:50', '2016-04-30 23:53:50'),
('FACILITY_ADMIN', 'ALL operations in the Facility Manager.', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('GOOGLEBASE_VIEW', 'View operations in the Google Base application.', '2016-04-30 23:54:43', '2016-04-30 23:54:43'),
('LABEL_MANAGER_VIEW', 'View the Labels Info pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('MANUAL_PAYMENT', 'Manual Payment Transaction.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('MANUFACTURING_ADMIN', 'ALL operations in the Manufacturing Manager.', '2016-04-30 23:54:21', '2016-04-30 23:54:21'),
('MARKETING_ADMIN', 'ALL operations in the Marketing Manager.', '2016-04-30 23:54:41', '2016-04-30 23:54:41'),
('OAGIS_VIEW', 'View operations in the Oagis application.', '2016-04-30 23:54:43', '2016-04-30 23:54:43'),
('OFBTOOLS_VIEW', 'Permission to access the Stock OFBiz Manager Applications.', '2016-04-30 23:53:39', '2016-04-30 23:53:38'),
('ORDERMGR_ADMIN', 'ALL operations in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_CREATE', 'Create operations in the Order Manager.', '2016-04-30 23:54:39', '2016-04-30 23:54:39'),
('ORDERMGR_CRQ_CREATE', 'Create Customer Requests in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_NOTE', 'Create notes in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_PURCHASE_CREATE', 'Create purchase orders in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_PURCHASE_VIEW', 'View purchase orders in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_ROLE_CREATE', 'Limited Create operations in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_ROLE_DELETE', 'Limited Delete operations in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_ROLE_UPDATE', 'Limited Update operations in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_ROLE_VIEW', 'Limited view operations in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_SALES_CREATE', 'Create sales orders for all stores in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_SALES_ENTRY', 'Sales Order Entry in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_SALES_UPDATE', 'Update sales orders for all stores in the Order Manager.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_SEND_CONFIRMATION', 'Send order confirmation notification.', '2016-04-30 23:54:40', '2016-04-30 23:54:39'),
('ORDERMGR_UPDATE', 'Update operations in the Order Manager.', '2016-04-30 23:54:39', '2016-04-30 23:54:39'),
('ORDERMGR_VIEW', 'View operations in the Order Manager.', '2016-04-30 23:54:39', '2016-04-30 23:54:39'),
('PARTYMGR_ADMIN', 'ALL operations in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_CME_CREATE', 'Create communication event, any from/to party.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_CME_DELETE', 'Delete communication event, any from/to party.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_CME_UPDATE', 'Update communication event, any from/to party.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_CREATE', 'Create operations in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_GRP_UPDATE', 'Update PartyGroup or Person detail information.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_NOTE', 'Create notes in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_PCM_CREATE', 'Create party contact mechs in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_PCM_DELETE', 'Delete party contact mechs in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_PCM_UPDATE', 'Update party contact mechs in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_REL_CREATE', 'Create party relationships in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_REL_UPDATE', 'Update party relationships in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_ROLE_CREATE', 'Create party roles in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_ROLE_DELETE', 'Delete party roles in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_SRC_CREATE', 'Create party to data source relations.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_STS_UPDATE', 'Update party status in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_UPDATE', 'Update operations in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PARTYMGR_VIEW', 'View operations in the Party Manager.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('PAYPROC_ADMIN', 'ALL operations in the Payment Processors Setup.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('PAY_INFO_ADMIN', 'ALL Payment Information Operations.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('PAY_INFO_CREATE', 'Create Payment Information.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('PAY_INFO_UPDATE', 'Update Payment Information.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('PAY_INFO_VIEW', 'View Payment Information.', '2016-04-30 23:54:31', '2016-04-30 23:54:31'),
('PERIOD_MAINT', 'Use the Period Maintenance pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('PROJECTMGR_ADMIN', 'ALL operations in the Project Manager.', '2016-04-30 23:54:43', '2016-04-30 23:54:43'),
('SECURITY_ADMIN', 'ALL operations in the Security Management Screens.', '2016-04-30 23:53:58', '2016-04-30 23:53:58'),
('SEND_CONTROL_APPLET', 'Send to the Control Applet.', '2016-04-30 23:54:08', '2016-04-30 23:54:08'),
('SERVER_STATS_VIEW', 'View the Server Statistics pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('SERVICE_INVOKE_ANY', 'Permission to invoke any service remotely.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('SERVICE_MAINT', 'Use the Service Maintenance pages.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('SHIPRATE_ADMIN', 'ALL operations in the Shipping Rate Editor.', '2016-04-30 23:54:18', '2016-04-30 23:54:17'),
('TEMPEXPR_ADMIN', 'Temporal expression admin', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('USERPREF_ADMIN', 'User preferences admin', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('UTIL_CACHE_EDIT', 'Edit a UtilCache instance.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('UTIL_CACHE_VIEW', 'View a UtilCache instance.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('UTIL_DEBUG_EDIT', 'Edit a UtilDebug instance.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('UTIL_DEBUG_VIEW', 'View a UtilDebug instance.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('VISUALTHEME_ADMIN', 'ALL operations on Visual Themes and Visual Theme Resources.', '2016-04-30 23:53:39', '2016-04-30 23:53:39'),
('WEBTOOLS_VIEW', 'Permission to access the WebTools Menu.', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('WORKEFFORTMGR_ADMIN', 'ALL operations in the Work Effort Manager.', '2016-04-30 23:54:11', '2016-04-30 23:54:11');

-- --------------------------------------------------------

--
-- Table structure for table `status_item`
--

CREATE TABLE `status_item` (
  `status_id` varchar(20) NOT NULL,
  `status_type_id` varchar(20) NOT NULL,
  `status_code` varchar(60) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_item`
--

INSERT INTO `status_item` (`status_id`, `status_type_id`, `status_code`, `description`, `created_date`, `updated_date`) VALUES
('CASE_ACCEPTED', 'CASE_STATUS', 'ACCEPTED', 'Accepted', '2016-04-30 23:54:37', '2016-04-30 23:54:37'),
('CASE_CANCELLED', 'CASE_STATUS', 'CANCELLED', 'Cancelled', '2016-04-30 23:54:37', '2016-04-30 23:54:37'),
('CASE_COMPLETED', 'CASE_STATUS', 'COMPLETED', 'Completed', '2016-04-30 23:54:37', '2016-04-30 23:54:37'),
('CASE_REJECTED', 'CASE_STATUS', 'REJECTED', 'Rejected', '2016-04-30 23:54:37', '2016-04-30 23:54:37'),
('CASE_REOPENED', 'CASE_STATUS', 'REOPENED', 'Reopened', '2016-04-30 23:56:03', '2016-04-30 23:56:03'),
('CASE_REVIEWED', 'CASE_STATUS', 'REVIEWED', 'Reviewed', '2016-04-30 23:54:37', '2016-04-30 23:54:37'),
('CASE_SUBMITTED', 'CASE_STATUS', 'SUBMITTED', 'Submitted', '2016-04-30 23:54:37', '2016-04-30 23:54:37'),
('PARTY_DISABLED', 'PARTY_STATUS', 'DISABLED', 'Disabled', '2016-05-22 05:14:55', '2016-05-22 05:14:55'),
('PARTY_ENABLED', 'PARTY_STATUS', 'ENABLED', 'Enabled', '2016-05-10 13:08:11', '2016-05-10 13:08:11'),
('PTYLEAD_CONVERTED', 'PARTY_LEAD_STATUS', 'CONVERTED', 'Party Lead Converted', '2016-05-10 13:08:11', '2016-05-10 13:08:11'),
('QUOTE_APPROVED', 'QUOTE_STATUS', 'APPROVED', 'Approved', '2016-06-01 20:40:19', '2016-06-01 20:40:19'),
('QUOTE_CANCELLED', 'QUOTE_STATUS', 'CANCELLED', 'Cancelled', '2016-06-01 20:43:00', '2016-06-01 20:43:00'),
('QUOTE_CREATED', 'QUOTE_STATUS', 'CREATED', 'Created', '2016-06-01 20:39:06', '2016-06-01 20:39:06'),
('QUOTE_FINALIZED', 'QUOTE_STATUS', 'FINALIZED', 'Finalized', '2016-06-01 20:41:06', '2016-06-01 20:41:06'),
('QUOTE_ORDERED', 'QUOTE_STATUS', 'ORDERED', 'Ordered', '2016-06-01 20:43:33', '2016-06-01 20:43:33'),
('QUOTE_REJECTED', 'QUOTE_STATUS', 'REJECTED', 'Rejected', '2016-06-01 20:42:20', '2016-06-01 20:42:20'),
('QUOTE_SENT', 'QUOTE_STATUS', 'SENT', 'Sent', '2016-06-01 20:41:44', '2016-06-01 20:41:44');

-- --------------------------------------------------------

--
-- Table structure for table `status_type`
--

CREATE TABLE `status_type` (
  `status_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status_type`
--

INSERT INTO `status_type` (`status_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('CASE_STATUS', NULL, 0, 'Case Status', '2016-05-22 05:13:48', '2016-05-22 05:13:48'),
('PARTY_LEAD_STATUS', 'PARTY_STATUS', 0, 'Status codes for parties which are leads (role = PROSPECT)', '2016-05-10 12:59:38', '2016-05-10 12:59:38'),
('PARTY_STATUS', NULL, 0, 'Party Status', '2016-05-10 12:59:07', '2016-05-10 12:59:07'),
('QUOTE_STATUS', NULL, 0, 'Quote Status', '2016-06-01 20:30:54', '2016-06-01 20:30:54');

-- --------------------------------------------------------

--
-- Table structure for table `telecom_number`
--

CREATE TABLE `telecom_number` (
  `contact_mech_id` int(11) NOT NULL,
  `country_code` varchar(10) DEFAULT NULL,
  `area_code` varchar(10) DEFAULT NULL,
  `contact_number` varchar(60) NOT NULL,
  `ask_for_name` varchar(100) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `telecom_number`
--

INSERT INTO `telecom_number` (`contact_mech_id`, `country_code`, `area_code`, `contact_number`, `ask_for_name`, `created_date`, `updated_date`) VALUES
(24, '1', '432', '982-5097', 'The Doctor', '2016-05-31 16:12:20', '2016-05-31 16:12:20'),
(28, '1', '432', '982-5097', 'The Doctor', '2016-05-31 16:48:30', '2016-05-31 16:48:30'),
(33, '1', '432', '982-5097', 'The Doctor', '2016-05-31 17:53:34', '2016-05-31 17:53:34'),
(36, '1', '432', '982-5097', NULL, '2016-05-31 17:56:14', '2016-05-31 17:56:14'),
(40, '1', '432', '982-5097', 'The Doctor', '2016-05-31 18:09:30', '2016-05-31 18:09:30'),
(43, '1', '432', '982-5097', 'The Doctor', '2016-05-31 18:13:01', '2016-05-31 18:13:01'),
(48, '1', '432', '982-5097', 'The Doctor', '2016-05-31 18:13:37', '2016-05-31 18:13:37'),
(50, '44', '935', '9838-2342', 'Mr. Prime Minister', '2016-05-31 18:40:00', '2016-05-31 18:40:00'),
(53, '1', '212', '123-4567', 'Petey', '2016-05-31 23:14:55', '2016-05-31 23:14:55'),
(60, '1', '212', '123-4567', 'Petey', '2016-05-31 23:18:08', '2016-05-31 23:18:08'),
(64, '1', '212', '123-4567', 'Petey', '2016-05-31 23:19:08', '2016-05-31 23:19:08'),
(65, '1', '212', '123-4567', 'Petey', '2016-06-01 00:15:37', '2016-06-01 00:15:37'),
(72, '1', '212', '123-4567', 'Petey', '2016-06-01 00:26:46', '2016-06-01 00:26:46'),
(76, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(77, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-09 02:56:27', '2016-06-09 02:56:27'),
(82, '1', '952', '012-3456', 'Sunny', '2016-06-09 12:07:08', '2016-06-09 12:07:08'),
(85, '1', '952', '012-3456', 'Sunny', '2016-06-09 12:13:41', '2016-06-09 12:13:41'),
(90, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(93, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-14 23:53:57', '2016-06-14 23:53:57'),
(98, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-14 23:57:37', '2016-06-14 23:57:37'),
(101, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-14 23:57:37', '2016-06-14 23:57:37'),
(103, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(107, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:01:34', '2016-06-15 00:01:34'),
(110, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(113, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:05:22', '2016-06-15 00:05:22'),
(116, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(119, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:06:06', '2016-06-15 00:06:06'),
(121, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:06:55', '2016-06-15 00:06:55'),
(125, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:06:55', '2016-06-15 00:06:55'),
(128, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:07:35', '2016-06-15 00:07:35'),
(131, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:07:35', '2016-06-15 00:07:35'),
(134, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:10:39', '2016-06-15 00:10:39'),
(137, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 00:10:44', '2016-06-15 00:10:44'),
(139, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(143, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:02:24', '2016-06-15 18:02:24'),
(148, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(151, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:03:45', '2016-06-15 18:03:45'),
(156, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(159, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:10:21', '2016-06-15 18:10:21'),
(162, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(165, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:10:57', '2016-06-15 18:10:57'),
(168, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(171, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:18:21', '2016-06-15 18:18:21'),
(176, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(179, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:19:13', '2016-06-15 18:19:13'),
(184, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(187, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:23:37', '2016-06-15 18:23:37'),
(190, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(193, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 18:36:21', '2016-06-15 18:36:21'),
(196, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(199, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 23:56:39', '2016-06-15 23:56:39'),
(204, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(207, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-15 23:57:23', '2016-06-15 23:57:23'),
(210, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(213, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:18:47', '2016-06-16 00:18:47'),
(216, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(219, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:24:17', '2016-06-16 00:24:17'),
(222, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(225, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:25:16', '2016-06-16 00:25:16'),
(228, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(231, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:26:16', '2016-06-16 00:26:16'),
(234, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:28:05', '2016-06-16 00:28:05'),
(237, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:28:05', '2016-06-16 00:28:05'),
(240, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(243, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:40:22', '2016-06-16 00:40:22'),
(246, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(249, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:49:35', '2016-06-16 00:49:35'),
(252, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(255, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:53:24', '2016-06-16 00:53:24'),
(258, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(261, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:57:10', '2016-06-16 00:57:10'),
(264, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(267, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:57:42', '2016-06-16 00:57:42'),
(270, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:59:34', '2016-06-16 00:59:34'),
(273, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 00:59:34', '2016-06-16 00:59:34'),
(276, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(279, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:16:35', '2016-06-16 01:16:35'),
(282, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(285, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:21:58', '2016-06-16 01:21:58'),
(288, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(291, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:22:56', '2016-06-16 01:22:56'),
(294, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(297, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:26:30', '2016-06-16 01:26:30'),
(300, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(303, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:26:59', '2016-06-16 01:26:59'),
(306, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(309, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:29:01', '2016-06-16 01:29:01'),
(312, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(315, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:36:32', '2016-06-16 01:36:32'),
(318, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(321, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:52:20', '2016-06-16 01:52:20'),
(324, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(327, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:53:37', '2016-06-16 01:53:37'),
(330, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(333, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:54:35', '2016-06-16 01:54:35'),
(336, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(339, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:57:47', '2016-06-16 01:57:47'),
(342, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(345, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 01:58:15', '2016-06-16 01:58:15'),
(348, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(351, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:22:31', '2016-06-16 02:22:31'),
(354, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(357, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:25:01', '2016-06-16 02:25:01'),
(360, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:29:03', '2016-06-16 02:29:03'),
(363, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:29:03', '2016-06-16 02:29:03'),
(366, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(369, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:32:07', '2016-06-16 02:32:07'),
(372, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(375, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:37:33', '2016-06-16 02:37:33'),
(378, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(381, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:40:03', '2016-06-16 02:40:03'),
(384, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(387, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:42:09', '2016-06-16 02:42:09'),
(390, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(393, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:43:04', '2016-06-16 02:43:04'),
(396, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(399, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:47:53', '2016-06-16 02:47:53'),
(402, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(405, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:48:32', '2016-06-16 02:48:32'),
(408, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(411, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:49:11', '2016-06-16 02:49:11'),
(414, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(417, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:52:30', '2016-06-16 02:52:30'),
(420, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(423, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:53:58', '2016-06-16 02:53:58'),
(426, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(429, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 02:58:15', '2016-06-16 02:58:15'),
(432, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(435, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:01:43', '2016-06-16 03:01:43'),
(438, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(441, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:03:43', '2016-06-16 03:03:43'),
(444, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(447, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:04:25', '2016-06-16 03:04:25'),
(450, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(453, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:06:13', '2016-06-16 03:06:13'),
(456, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(459, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:08:20', '2016-06-16 03:08:20'),
(462, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(465, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:12:56', '2016-06-16 03:12:56'),
(468, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(471, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:13:25', '2016-06-16 03:13:25'),
(474, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(477, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:16:13', '2016-06-16 03:16:13'),
(480, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(483, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:28:33', '2016-06-16 03:28:33'),
(486, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(489, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-16 03:29:24', '2016-06-16 03:29:24'),
(493, '1', '612', '555-5555', 'Hal', '2016-06-16 16:29:39', '2016-06-16 16:29:39'),
(497, '1', '612', '555-5555', 'Hal', '2016-06-17 04:26:09', '2016-06-17 04:26:09'),
(501, '1', '612', '710-7746', 'Dinesh', '2016-06-17 06:45:47', '2016-06-17 06:45:47'),
(506, '44', '542', '555-1111', 'Raj', '2016-06-17 07:14:33', '2016-06-17 07:14:33'),
(508, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(511, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(514, '1', '212', '123-4567', 'Petey', '2016-06-17 11:53:10', '2016-06-17 11:53:10'),
(521, '1', '612', '787-1098', 'Gabe', '2016-06-17 12:56:40', '2016-06-17 12:56:40'),
(525, '23', '4324', '234234', 'Moses', '2016-06-17 14:47:12', '2016-06-17 14:47:12'),
(529, '1', '202', '555-2342', 'Joan', '2016-06-17 16:09:03', '2016-06-17 16:09:03'),
(534, '1', '212', '555-1234', 'Magic', '2016-06-17 17:14:25', '2016-06-17 17:14:25'),
(538, '1', '612', '408-1120', 'Cats', '2016-06-18 00:26:24', '2016-06-18 00:26:24'),
(541, NULL, NULL, '555-1231', NULL, '2016-06-18 15:45:28', '2016-06-18 15:45:28'),
(544, '2', '22', '2342424', NULL, '2016-06-19 00:59:36', '2016-06-19 00:59:36'),
(548, '1', '612', '555-5555', 'Hal', '2016-06-19 16:58:10', '2016-06-19 16:58:10'),
(565, '44', '22', '5242-2342', NULL, '2016-06-22 14:23:36', '2016-06-22 14:23:36'),
(567, NULL, NULL, '555-1111', NULL, '2016-06-26 19:05:55', '2016-06-26 19:05:55'),
(570, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(572, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(575, '1', '212', '123-4567', 'Petey', '2016-06-29 19:26:23', '2016-06-29 19:26:23'),
(581, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(584, NULL, NULL, '1-800-MoreNumbers', NULL, '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(589, '1', '212', '123-4567', 'Petey', '2016-06-29 19:28:19', '2016-06-29 19:28:19'),
(593, NULL, NULL, '555-1234', NULL, '2016-07-06 01:23:01', '2016-07-06 01:23:01'),
(594, NULL, NULL, '555-1111', NULL, '2016-07-08 00:45:46', '2016-07-08 00:45:46'),
(596, '1', '212', '555-9822', 'Becky', '2016-07-15 00:34:16', '2016-07-15 00:34:16'),
(598, '22', '321', '555-3224', NULL, '2016-07-21 16:39:44', '2016-07-21 16:39:44'),
(601, '44', '351', '555-8917', 'Jimmy', '2016-07-21 20:29:24', '2016-07-21 20:29:24'),
(608, '44', '55', '555-4444', 'Lily', '2016-07-22 05:49:21', '2016-07-22 05:49:21'),
(612, '1', '212', '555-8234', 'Susan', '2016-07-22 12:22:06', '2016-07-22 12:22:06'),
(615, '1', '212', '555-3224', 'Lizzy', '2016-07-22 12:26:23', '2016-07-22 12:26:23'),
(661, '1', '352', '555-8823', NULL, '2016-07-23 03:26:57', '2016-07-23 03:26:57'),
(681, '1', '352', '555-2342', NULL, '2016-07-23 03:27:49', '2016-07-23 03:27:49');

-- --------------------------------------------------------

--
-- Table structure for table `uom`
--

CREATE TABLE `uom` (
  `uom_id` varchar(20) NOT NULL,
  `uom_type_id` varchar(20) DEFAULT NULL,
  `abbreviation` varchar(60) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uom`
--

INSERT INTO `uom` (`uom_id`, `uom_type_id`, `abbreviation`, `description`, `created_date`, `updated_date`) VALUES
('ADP', 'CURRENCY_MEASURE', 'ADP', 'Andoran peseta', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AED', 'CURRENCY_MEASURE', 'AED', 'United Arab Emirates Dirham', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AFA', 'CURRENCY_MEASURE', 'AFA', 'Afghani', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ALL', 'CURRENCY_MEASURE', 'ALL', 'Albanian Lek', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AMD', 'CURRENCY_MEASURE', 'AMD', 'Armenian Dram', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ANG', 'CURRENCY_MEASURE', 'ANG', 'West Indian Guilder', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AOK', 'CURRENCY_MEASURE', 'AOK', 'Angolan Kwanza', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ARA', 'CURRENCY_MEASURE', 'ARA', 'Argentinian Austral', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AREA_A', 'AREA_MEASURE', 'a', 'Are', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_cm2', 'AREA_MEASURE', 'cm2', 'Square Centimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_ft2', 'AREA_MEASURE', 'ft2', 'Square Foot', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_ha', 'AREA_MEASURE', 'ha', 'Hectare', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_in2', 'AREA_MEASURE', 'in2', 'Square Inch', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_km2', 'AREA_MEASURE', 'km2', 'Square Kilometer', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_m2', 'AREA_MEASURE', 'm2', 'Square Meter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_mi2', 'AREA_MEASURE', 'mi2', 'Square Mile', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_mm2', 'AREA_MEASURE', 'mm2', 'Square Millimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_rd2', 'AREA_MEASURE', 'rd2', 'Square Rod', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('AREA_yd2', 'AREA_MEASURE', 'yd2', 'Square Yard', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('ARS', 'CURRENCY_MEASURE', 'ARS', 'Argentina Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AUD', 'CURRENCY_MEASURE', 'AUD', 'Australian Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AWG', 'CURRENCY_MEASURE', 'AWG', 'Aruban Guilder', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('AZM', 'CURRENCY_MEASURE', 'AZM', 'Azerbaijan Manat', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BAD', 'CURRENCY_MEASURE', 'BAD', 'Bosnia-Herzogovinian Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BBD', 'CURRENCY_MEASURE', 'BBD', 'Barbados Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BDT', 'CURRENCY_MEASURE', 'BDT', 'Bangladesh Taka', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BGN', 'CURRENCY_MEASURE', 'BGN', 'Bulgarian Lev', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('BHD', 'CURRENCY_MEASURE', 'BHD', 'Bahrain Dinar', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BIF', 'CURRENCY_MEASURE', 'BIF', 'Burundi Franc', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BMD', 'CURRENCY_MEASURE', 'BMD', 'Bermudan Dollar', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BND', 'CURRENCY_MEASURE', 'BND', 'Brunei Dollar', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BOB', 'CURRENCY_MEASURE', 'BOB', 'Bolivian Boliviano', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BRL', 'CURRENCY_MEASURE', 'BRL', 'Brazilian Real', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BRR', 'CURRENCY_MEASURE', 'BRR', 'Brazil', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BSD', 'CURRENCY_MEASURE', 'BSD', 'Bahaman Dollar', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BWP', 'CURRENCY_MEASURE', 'BWP', 'Botswana Pula', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BYR', 'CURRENCY_MEASURE', 'BYR', 'Belorussian Ruble', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('BZD', 'CURRENCY_MEASURE', 'BZD', 'Belize Dollar', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CAD', 'CURRENCY_MEASURE', 'CAD', 'Canadian Dollar', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CDP', 'CURRENCY_MEASURE', 'CDP', 'Santo Domiongo', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CHF', 'CURRENCY_MEASURE', 'CHF', 'Swiss Franc', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CLP', 'CURRENCY_MEASURE', 'CLP', 'Chilean Peso', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CNY', 'CURRENCY_MEASURE', 'CNY', 'China', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('COP', 'CURRENCY_MEASURE', 'COP', 'Colombian Peso', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CRC', 'CURRENCY_MEASURE', 'CRC', 'Costa Rica Colon', '2016-04-30 23:53:42', '2016-04-30 23:53:42'),
('CUP', 'CURRENCY_MEASURE', 'CUP', 'Cuban Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CVE', 'CURRENCY_MEASURE', 'CVE', 'Cape Verde Escudo', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CYP', 'CURRENCY_MEASURE', 'CYP', 'Cyprus Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('CZK', 'CURRENCY_MEASURE', 'CZK', 'Czech Krona', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DATASPD_bps', 'DATASPD_MEASURE', 'bps', 'Bit-per-second of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATASPD_Gbps', 'DATASPD_MEASURE', 'Gbps', 'Gigabit-per-second of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATASPD_Kbps', 'DATASPD_MEASURE', 'Kbps', 'Kilobit-per-second of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATASPD_Mbps', 'DATASPD_MEASURE', 'Mbps', 'Megabit-per-second of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATASPD_Tbps', 'DATASPD_MEASURE', 'Tbps', 'Terabit-per-second of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATA_b', 'DATA_MEASURE', 'B', 'Byte of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATA_Gb', 'DATA_MEASURE', 'GB', 'Gigabyte of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATA_Kb', 'DATA_MEASURE', 'KB', 'Kilobyte of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATA_Mb', 'DATA_MEASURE', 'MB', 'Megabyte of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATA_PB', 'DATA_MEASURE', 'PB', 'Petabyte of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DATA_Tb', 'DATA_MEASURE', 'TB', 'Terabyte of Data', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('DJF', 'CURRENCY_MEASURE', 'DJF', 'Djibouti Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DKK', 'CURRENCY_MEASURE', 'DKK', 'Danish Krone', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DOP', 'CURRENCY_MEASURE', 'DOP', 'Dominican Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DRP', 'CURRENCY_MEASURE', 'DRP', 'Dominican Republic Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('DZD', 'CURRENCY_MEASURE', 'DZD', 'Algerian Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ECS', 'CURRENCY_MEASURE', 'ECS', 'Ecuador Sucre', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EEK', 'CURRENCY_MEASURE', 'EEK', 'Estonian Krone', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EGP', 'CURRENCY_MEASURE', 'EGP', 'Egyptian Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EN_Btu', 'ENERGY_MEASURE', 'Btu', 'British Thermal Unit', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EN_cal15', 'ENERGY_MEASURE', 'cal15', 'Calorie (@15.5c)', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EN_HP', 'ENERGY_MEASURE', 'HP', 'Horsepower (mechanical)', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EN_J', 'ENERGY_MEASURE', 'J', 'Joule (absolute)', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EN_Kw', 'ENERGY_MEASURE', 'Kw', 'Kilowatt', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('EN_w', 'ENERGY_MEASURE', 'w', 'Watt', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('ETB', 'CURRENCY_MEASURE', 'ETB', 'Ethiopian Birr', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('EUR', 'CURRENCY_MEASURE', 'EUR', 'Euro', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FJD', 'CURRENCY_MEASURE', 'FJD', 'Fiji Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('FKP', 'CURRENCY_MEASURE', 'FKP', 'Falkland Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GBP', 'CURRENCY_MEASURE', 'GBP', 'British Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GEK', 'CURRENCY_MEASURE', 'GEK', 'Georgian Kupon', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GHC', 'CURRENCY_MEASURE', 'GHC', 'Ghanian Cedi', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GIP', 'CURRENCY_MEASURE', 'GIP', 'Gibraltar Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GMD', 'CURRENCY_MEASURE', 'GMD', 'Gambian Dalasi', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GNF', 'CURRENCY_MEASURE', 'GNF', 'Guinea Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GTQ', 'CURRENCY_MEASURE', 'GTQ', 'Guatemalan Quedzal', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GWP', 'CURRENCY_MEASURE', 'GWP', 'Guinea Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('GYD', 'CURRENCY_MEASURE', 'GYD', 'Guyanese Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HKD', 'CURRENCY_MEASURE', 'HKD', 'Hong Kong Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HNL', 'CURRENCY_MEASURE', 'HNL', 'Honduran Lempira', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HRD', 'CURRENCY_MEASURE', 'HRD', 'Croatian Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HTG', 'CURRENCY_MEASURE', 'HTG', 'Haitian Gourde', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('HUF', 'CURRENCY_MEASURE', 'HUF', 'Hungarian forint', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IDR', 'CURRENCY_MEASURE', 'IDR', 'Indeonesian Rupiah', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ILS', 'CURRENCY_MEASURE', 'ILS', 'Israeli Scheckel', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('INR', 'CURRENCY_MEASURE', 'INR', 'Indian Rupee', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IQD', 'CURRENCY_MEASURE', 'IQD', 'Iraqui Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('IRR', 'CURRENCY_MEASURE', 'IRR', 'Iranian Rial', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ISK', 'CURRENCY_MEASURE', 'ISK', 'Iceland Krona', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('JMD', 'CURRENCY_MEASURE', 'JMD', 'Jamaican Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('JOD', 'CURRENCY_MEASURE', 'JOD', 'Jordanian Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('JPY', 'CURRENCY_MEASURE', 'JPY', 'Japanese Yen', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KES', 'CURRENCY_MEASURE', 'KES', 'Kenyan Shilling', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KHR', 'CURRENCY_MEASURE', 'KHR', 'Cambodian Riel', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KIS', 'CURRENCY_MEASURE', 'KIS', 'Kirghizstan Som', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KMF', 'CURRENCY_MEASURE', 'KMF', 'Comoros Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KPW', 'CURRENCY_MEASURE', 'KPW', 'North Korean Won', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KRW', 'CURRENCY_MEASURE', 'KRW', 'South Korean Won', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KWD', 'CURRENCY_MEASURE', 'KWD', 'Kuwaiti Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KYD', 'CURRENCY_MEASURE', 'KYD', 'Cayman Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('KZT', 'CURRENCY_MEASURE', 'KZT', 'Kazakhstani Tenge', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LAK', 'CURRENCY_MEASURE', 'LAK', 'Laotian Kip', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LBP', 'CURRENCY_MEASURE', 'LBP', 'Lebanese Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LEN_A', 'LENGTH_MEASURE', 'A', 'Angstrom', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_cb', 'LENGTH_MEASURE', 'cb', 'Cable', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_chG', 'LENGTH_MEASURE', 'chG', 'Chain (Gunter''s/surveyor''s)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_chR', 'LENGTH_MEASURE', 'chR', 'Chain (Ramden''s/engineer''s)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_cm', 'LENGTH_MEASURE', 'cm', 'Centimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_dam', 'LENGTH_MEASURE', 'dam', 'Dekameter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_dm', 'LENGTH_MEASURE', 'dm', 'Decimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_fm', 'LENGTH_MEASURE', 'fm', 'Fathom', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_ft', 'LENGTH_MEASURE', 'ft', 'Foot', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_fur', 'LENGTH_MEASURE', 'fur', 'Furlong', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_hand', 'LENGTH_MEASURE', 'hand', 'Hand (horse''s height)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_in', 'LENGTH_MEASURE', 'in', 'Inch', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_km', 'LENGTH_MEASURE', 'km', 'Kilometer', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_league', 'LENGTH_MEASURE', 'league', 'League', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_lnG', 'LENGTH_MEASURE', 'lnG', 'Link (Gunter''s)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_lnR', 'LENGTH_MEASURE', 'lnR', 'Link (Ramden''s)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_m', 'LENGTH_MEASURE', 'm', 'Meter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_mi', 'LENGTH_MEASURE', 'mi', 'Mile (statute/land)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_mil', 'LENGTH_MEASURE', 'mil', 'Mil (Milli-inch)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_mm', 'LENGTH_MEASURE', 'mm', 'Millimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_nmi', 'LENGTH_MEASURE', 'nmi', 'Mile (nautical/sea)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_pica', 'LENGTH_MEASURE', 'pica', 'Pica (type size)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_point', 'LENGTH_MEASURE', 'point', 'Point (type size)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_rd', 'LENGTH_MEASURE', 'rd', 'Rod', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_u', 'LENGTH_MEASURE', 'u', 'Micrometer (Micron)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LEN_yd', 'LENGTH_MEASURE', 'yd', 'Yard', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('LKR', 'CURRENCY_MEASURE', 'LKR', 'Sri Lankan Rupee', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LRD', 'CURRENCY_MEASURE', 'LRD', 'Liberian Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LSL', 'CURRENCY_MEASURE', 'LSL', 'Lesotho Loti', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LTL', 'CURRENCY_MEASURE', 'LTL', 'Lithuanian Lita', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LVL', 'CURRENCY_MEASURE', 'LVL', 'Latvian Lat', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('LYD', 'CURRENCY_MEASURE', 'LYD', 'Libyan Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MAD', 'CURRENCY_MEASURE', 'MAD', 'Moroccan Dirham', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MDL', 'CURRENCY_MEASURE', 'MDL', 'Moldavian Lei', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MGF', 'CURRENCY_MEASURE', 'MGF', 'Madagascan Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MNT', 'CURRENCY_MEASURE', 'MNT', 'Mongolian Tugrik', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MOP', 'CURRENCY_MEASURE', 'MOP', 'Macao Pataca', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MRO', 'CURRENCY_MEASURE', 'MRO', 'Mauritanian Ouguiya', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MTL', 'CURRENCY_MEASURE', 'MTL', 'Maltese Lira', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MUR', 'CURRENCY_MEASURE', 'MUR', 'Mauritius Rupee', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MVR', 'CURRENCY_MEASURE', 'MVR', 'Maldive Rufiyaa', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MWK', 'CURRENCY_MEASURE', 'MWK', 'Malawi Kwacha', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MXN', 'CURRENCY_MEASURE', 'MXN', 'Mexican Peso (new)', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MXP', 'CURRENCY_MEASURE', 'MXP', 'Mexican Peso (old)', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MYR', 'CURRENCY_MEASURE', 'MYR', 'Malaysian Ringgit', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('MZM', 'CURRENCY_MEASURE', 'MZM', 'Mozambique Metical', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NGN', 'CURRENCY_MEASURE', 'NGN', 'Nigerian Naira', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NIC', 'CURRENCY_MEASURE', 'NIC', 'Nicaragua', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NIO', 'CURRENCY_MEASURE', 'NIO', 'Nicaraguan Cordoba', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NIS', 'CURRENCY_MEASURE', 'NIS', 'New Israeli Shekel', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NOK', 'CURRENCY_MEASURE', 'NOK', 'Norwegian Krone', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NPR', 'CURRENCY_MEASURE', 'NPR', 'Nepalese Rupee', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('NZD', 'CURRENCY_MEASURE', 'NZD', 'New Zealand Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('OMR', 'CURRENCY_MEASURE', 'OMR', 'Omani Rial', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('OTH_A', 'OTHER_MEASURE', 'A', 'Amphere - Electric current', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('OTH_cd', 'OTHER_MEASURE', 'cd', 'Candela - Luminosity (intensity of light)', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('OTH_ea', 'OTHER_MEASURE', 'ea', 'Each', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('OTH_mol', 'OTHER_MEASURE', 'mol', 'Mole - Substance (molecule)', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('OTH_pp', 'OTHER_MEASURE', 'pp', 'Per Person', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('PAB', 'CURRENCY_MEASURE', 'PAB', 'Panamanian Balboa', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PEI', 'CURRENCY_MEASURE', 'PEI', 'Peruvian Inti', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PEN', 'CURRENCY_MEASURE', 'PEN', 'Peruvian Sol - New', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PES', 'CURRENCY_MEASURE', 'PES', 'Peruvian Sol', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PGK', 'CURRENCY_MEASURE', 'PGK', 'Papua New Guinea Kina', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PHP', 'CURRENCY_MEASURE', 'PHP', 'Philippino Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PKR', 'CURRENCY_MEASURE', 'PKR', 'Pakistan Rupee', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PLN', 'CURRENCY_MEASURE', 'PLN', 'Polish Zloty', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PLZ', 'CURRENCY_MEASURE', 'PLZ', 'Poland', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('PYG', 'CURRENCY_MEASURE', 'PYG', 'Paraguayan Guarani', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('QAR', 'CURRENCY_MEASURE', 'QAR', 'Qatar Riyal', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ROL', 'CURRENCY_MEASURE', 'ROL', 'Romanian Leu', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('RUR', 'CURRENCY_MEASURE', 'RUR', 'Russian Rouble', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('RWF', 'CURRENCY_MEASURE', 'RWF', 'Rwanda Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SAR', 'CURRENCY_MEASURE', 'SAR', 'Saudi Riyal', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SBD', 'CURRENCY_MEASURE', 'SBD', 'Solomon Islands Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SCR', 'CURRENCY_MEASURE', 'SCR', 'Seychelles Rupee', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SDP', 'CURRENCY_MEASURE', 'SDP', 'Sudanese Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SEK', 'CURRENCY_MEASURE', 'SEK', 'Swedish Krona', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SGD', 'CURRENCY_MEASURE', 'SGD', 'Singapore Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SHP', 'CURRENCY_MEASURE', 'SHP', 'St.Helena Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SLL', 'CURRENCY_MEASURE', 'SLL', 'Leone', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SOL', 'CURRENCY_MEASURE', 'SOL', 'Peru', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SOS', 'CURRENCY_MEASURE', 'SOS', 'Somalian Shilling', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SRG', 'CURRENCY_MEASURE', 'SRG', 'Surinam Guilder', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('STD', 'CURRENCY_MEASURE', 'STD', 'Sao Tome / Principe Dobra', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SUR', 'CURRENCY_MEASURE', 'SUR', 'Russian Ruble (old)', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SVC', 'CURRENCY_MEASURE', 'SVC', 'El Salvador Colon', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SYP', 'CURRENCY_MEASURE', 'SYP', 'Syrian Pound', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('SZL', 'CURRENCY_MEASURE', 'SZL', 'Swaziland Lilangeni', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TEMP_C', 'TEMP_MEASURE', 'C', 'Degrees Celsius', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('TEMP_F', 'TEMP_MEASURE', 'F', 'Degrees Fahrenheit', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('TEMP_K', 'TEMP_MEASURE', 'K', 'Kelvin', '2016-04-30 23:53:48', '2016-04-30 23:53:48'),
('TF_century', 'TIME_FREQ_MEASURE', 'century', 'Time in Centuries', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_day', 'TIME_FREQ_MEASURE', 'day', 'Time in Days', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_decade', 'TIME_FREQ_MEASURE', 'decade', 'Time in Decades', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_hr', 'TIME_FREQ_MEASURE', 'hr', 'Time in Hours', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_millenium', 'TIME_FREQ_MEASURE', 'millenium', 'Time in Millenia', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_min', 'TIME_FREQ_MEASURE', 'min', 'Time in Minutes', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_mon', 'TIME_FREQ_MEASURE', 'mon', 'Time in Months', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_ms', 'TIME_FREQ_MEASURE', 'ms', 'Time in Milli-Seconds', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_s', 'TIME_FREQ_MEASURE', 's', 'Time in Seconds', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_score', 'TIME_FREQ_MEASURE', 'score', 'Time in Scores', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_wk', 'TIME_FREQ_MEASURE', 'wk', 'Time in Weeks', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('TF_yr', 'TIME_FREQ_MEASURE', 'yr', 'Time in Years', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('THB', 'CURRENCY_MEASURE', 'THB', 'Thailand Baht', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TJR', 'CURRENCY_MEASURE', 'TJR', 'Tadzhikistani Ruble', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TMM', 'CURRENCY_MEASURE', 'TMM', 'Turkmenistani Manat', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TND', 'CURRENCY_MEASURE', 'TND', 'Tunisian Dinar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TOP', 'CURRENCY_MEASURE', 'TOP', 'Tongan Pa''anga', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TPE', 'CURRENCY_MEASURE', 'TPE', 'Timor Escudo', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TRY', 'CURRENCY_MEASURE', 'TRY', 'Turkish Lira', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TTD', 'CURRENCY_MEASURE', 'TTD', 'Trinidad and Tobago Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TWD', 'CURRENCY_MEASURE', 'TWD', 'New Taiwan Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('TZS', 'CURRENCY_MEASURE', 'TZS', 'Tanzanian Shilling', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UAH', 'CURRENCY_MEASURE', 'UAH', 'Ukrainian Hryvnia', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UGS', 'CURRENCY_MEASURE', 'UGS', 'Ugandan Shilling', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('USD', 'CURRENCY_MEASURE', 'USD', 'American Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UYP', 'CURRENCY_MEASURE', 'UYP', 'Uruguayan New Peso', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('UYU', 'CURRENCY_MEASURE', 'UYU', 'Uruguay', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VDRY_cm3', 'VOLUME_DRY_MEASURE', 'cm3', 'Cubic centimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VDRY_ft3', 'VOLUME_DRY_MEASURE', 'ft3', 'Cubic foot', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VDRY_in3', 'VOLUME_DRY_MEASURE', 'in3', 'Cubic inch', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VDRY_m3', 'VOLUME_DRY_MEASURE', 'm3', 'Cubic meter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VDRY_mm3', 'VOLUME_DRY_MEASURE', 'mm3', 'Cubic millimeter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VDRY_ST', 'VOLUME_DRY_MEASURE', 'ST', 'Stere (cubic meter)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VDRY_yd3', 'VOLUME_DRY_MEASURE', 'yd3', 'Cubic yard', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VEB', 'CURRENCY_MEASURE', 'VEB', 'Venezuelan Bolivar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VLIQ_bbl', 'VOLUME_LIQ_MEASURE', 'bbl', 'Barrel (US)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_cup', 'VOLUME_LIQ_MEASURE', 'cup', 'Cup', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_dr', 'VOLUME_LIQ_MEASURE', 'dr', 'Dram (US)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_galUK', 'VOLUME_LIQ_MEASURE', 'gal', 'Gallon (UK)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_galUS', 'VOLUME_LIQ_MEASURE', 'gal', 'Gallon (US)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_gi', 'VOLUME_LIQ_MEASURE', 'gi', 'Gill (1/4 UK pint)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_L', 'VOLUME_LIQ_MEASURE', 'L', 'Liter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_ml', 'VOLUME_LIQ_MEASURE', 'ml', 'Milliliter', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_ozUK', 'VOLUME_LIQ_MEASURE', 'fl. oz (UK)', 'Ounce, fluid (UK)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_ozUS', 'VOLUME_LIQ_MEASURE', 'fl. oz (US)', 'Ounce, fluid (US)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_ptUK', 'VOLUME_LIQ_MEASURE', 'pt (UK)', 'Pint (UK)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_ptUS', 'VOLUME_LIQ_MEASURE', 'pt (US)', 'Pint (US)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_qt', 'VOLUME_LIQ_MEASURE', 'qt', 'Quart', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_Tbs', 'VOLUME_LIQ_MEASURE', 'Tbs', 'Tablespoon', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VLIQ_tsp', 'VOLUME_LIQ_MEASURE', 'tsp', 'Teaspoon', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('VND', 'CURRENCY_MEASURE', 'VND', 'Vietnamese Dong', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('VUV', 'CURRENCY_MEASURE', 'VUV', 'Vanuatu Vatu', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('WST', 'CURRENCY_MEASURE', 'WST', 'Samoan Tala', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('WT_dr_avdp', 'WEIGHT_MEASURE', 'dr avdp', 'Dram (avdp)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_dwt', 'WEIGHT_MEASURE', 'dwt', 'Pennyweight', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_g', 'WEIGHT_MEASURE', 'g', 'Gram', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_gr', 'WEIGHT_MEASURE', 'gr', 'Grain', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_kg', 'WEIGHT_MEASURE', 'kg', 'Kilogram', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_lb', 'WEIGHT_MEASURE', 'lb', 'Pound (avdp)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_lt', 'WEIGHT_MEASURE', 'lt', 'Ton (long or British)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_mg', 'WEIGHT_MEASURE', 'mg', 'Milligram', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_mt', 'WEIGHT_MEASURE', 'mt', 'Ton (metric)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_oz', 'WEIGHT_MEASURE', 'oz', 'Ounce (avdp)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_oz_tr', 'WEIGHT_MEASURE', 'oz tr', 'Ounce (troy)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_sh_t', 'WEIGHT_MEASURE', 'sh t', 'Ton (short)', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('WT_st', 'WEIGHT_MEASURE', 'st', 'Stone', '2016-04-30 23:53:47', '2016-04-30 23:53:47'),
('XAF', 'CURRENCY_MEASURE', 'XAF', 'Gabon C.f.A Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('XCD', 'CURRENCY_MEASURE', 'XCD', 'East Carribean Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('XOF', 'CURRENCY_MEASURE', 'XOF', 'Benin C.f.A. Franc', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('YER', 'CURRENCY_MEASURE', 'YER', 'Yemeni Ryal', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZAR', 'CURRENCY_MEASURE', 'ZAR', 'South African Rand', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZMK', 'CURRENCY_MEASURE', 'ZMK', 'Zambian Kwacha', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZRZ', 'CURRENCY_MEASURE', 'ZRZ', 'Zaire', '2016-04-30 23:53:43', '2016-04-30 23:53:43'),
('ZWD', 'CURRENCY_MEASURE', 'ZWD', 'Zimbabwean Dollar', '2016-04-30 23:53:43', '2016-04-30 23:53:43');

-- --------------------------------------------------------

--
-- Table structure for table `uom_type`
--

CREATE TABLE `uom_type` (
  `uom_type_id` varchar(20) NOT NULL,
  `parent_type_id` varchar(20) DEFAULT NULL,
  `has_table` tinyint(1) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `uom_type`
--

INSERT INTO `uom_type` (`uom_type_id`, `parent_type_id`, `has_table`, `description`, `created_date`, `updated_date`) VALUES
('AREA_MEASURE', NULL, 0, 'Area', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('CURRENCY_MEASURE', NULL, 0, 'Currency', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('DATASPD_MEASURE', NULL, 0, 'Data Speed', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('DATA_MEASURE', NULL, 0, 'Data Size', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('ENERGY_MEASURE', NULL, 0, 'Energy', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('LENGTH_MEASURE', NULL, 0, 'Length', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('OTHER_MEASURE', NULL, 0, 'Other', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('TEMP_MEASURE', NULL, 0, 'Temperature', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('TIME_FREQ_MEASURE', NULL, 0, 'Time/Frequency', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('VOLUME_DRY_MEASURE', NULL, 0, 'Dry Volume', '2016-04-30 23:53:40', '2016-04-30 23:53:39'),
('VOLUME_LIQ_MEASURE', NULL, 0, 'Liquid Volume', '2016-04-30 23:53:40', '2016-04-30 23:53:40'),
('WEIGHT_MEASURE', NULL, 0, 'Weight', '2016-04-30 23:53:40', '2016-04-30 23:53:39');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `user_login_id` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `password_hint` varchar(255) DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL,
  `disabled_date` datetime DEFAULT NULL,
  `party_id` int(11) NOT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`user_login_id`, `password`, `password_hint`, `enabled`, `disabled_date`, `party_id`, `created_date`, `updated_date`) VALUES
('accountOwnerABC', '$2a$08$6D3pEyRE3tREWuy/3O9sUu3fgOSU1XEf/pRLI6CfcTdaNx3OU839q', NULL, 1, NULL, 19, '2016-05-29 15:43:56', '2016-05-29 15:43:56'),
('acctOwnerABC', '$2a$08$lhP4sYwN1vux1iTOSXckEelmCJN47ifl40rgwiwgRaPjISjzwL1ci', NULL, 1, NULL, 11, '2016-05-25 11:01:22', '2016-05-25 11:01:22'),
('acctOwnerDEF', '$2a$08$c13ijYX1S4JFRWCc9X32.e1xtjP1MSuJSup8oi7DNXsHsPt7z0UXO', NULL, 1, NULL, 12, '2016-05-25 11:05:11', '2016-05-25 11:05:11'),
('admin', '$2a$10$A1QQckgQ/hhfvxWTT3vxluuZQ/EepyF570eBxxH7xd3qOCpmjGSbC', NULL, 1, NULL, 2, '2016-05-13 01:16:35', '2016-05-13 01:16:35'),
('contactOwnerABC', '$2a$08$iTaPqQ/4W8LSDNBDT18opegvSxo4kWC8SjWNojHP/lhN7eOSTYHJu', NULL, 1, NULL, 13, '2016-05-25 11:07:11', '2016-05-25 11:07:11'),
('contactOwnerDEF', '$2a$08$H/jGQdzkk1YrMJh92vtZH.sblwGrgnbOpKYhwxrHmdaFRe7h6E4/q', NULL, 1, NULL, 14, '2016-05-25 11:11:12', '2016-05-25 11:11:12'),
('crmsfaContactTasksABC', '$2a$08$CB.AAzCvAM7ghsIgD9HurePO3BsLDAJ0tBGIPHLhv9ijyay1E24O2', NULL, 1, NULL, 15, '2016-05-25 11:14:33', '2016-05-25 11:14:33'),
('crmsfaContactTasksDEF', '$2a$08$uqe3rKbDeVzAeSzQhP6RVuxKsnss0EJUuW0rsba7J/laB2p1vylmK', NULL, 1, NULL, 16, '2016-05-25 11:17:03', '2016-05-25 11:17:03'),
('fullAdminABC', '$2a$08$sJPUoxXV5fkcdgf9Ga8yeubPQ8WAzJVJVCUW3LrD0vgI9HsHQqkNO', NULL, 1, NULL, 3, '2016-05-25 10:28:01', '2016-05-25 10:28:01'),
('fullAdminDEF', '$2a$08$ad7XcDpVh0wpnuL9FqTwSechN8QPk/rd2q9imGZ5hmv9gez4/I5IS', NULL, 1, NULL, 4, '2016-05-25 10:52:26', '2016-05-25 10:52:26'),
('leadOwnerABC', '$2a$08$5RdFI2AF2Qwl5UHpBqy0Ve67wHhMB4ctOyPpaDMe8Yw/CZA66TutW', NULL, 1, NULL, 17, '2016-05-25 13:14:31', '2016-05-25 13:14:31'),
('leadOwnerDEF', '$2a$08$Y/fQPgblCV2ZK6UtopnyveZpn.VoY1ZP4oPK6R3JOuzTi9FU42Hiu', NULL, 1, NULL, 18, '2016-05-27 22:34:11', '2016-05-27 22:34:11'),
('mrQuoteUnquote', '$2a$08$1/nJhCSD6bkTK0YbJD9T2OTYJ9ocJ9.HlUGIuqtEeie4yi3pfuLbS', NULL, 1, NULL, 100, '2016-06-01 20:50:16', '2016-06-01 20:50:16'),
('partyAdminABC', '$2a$08$pUshY95nXvnDW/5/aB3KReIYIUjo7AiVDXoxK4/AYjIKPjRF33ms2', NULL, 1, NULL, 5, '2016-05-25 10:54:19', '2016-05-25 10:54:19'),
('partyAdminDEF', '$2a$08$vUx4jjmAf74hlcB5WvM6Lu.usTZTtgSLrRhMM.rK90yK9AyPPolV2', NULL, 1, NULL, 7, '2016-05-25 10:57:29', '2016-05-25 10:57:29'),
('testGuy', '$2a$08$1f1p9BGm/lrtwidq1SVRw.fVbQ2TSqr3vSO9IAShbcn.DHXvZ41N2', NULL, 1, NULL, 78, '2016-05-31 01:39:28', '2016-05-31 01:39:28');

-- --------------------------------------------------------

--
-- Table structure for table `user_login_security_group`
--

CREATE TABLE `user_login_security_group` (
  `user_login_id` varchar(250) NOT NULL,
  `permission_group_id` varchar(20) NOT NULL,
  `from_date` datetime NOT NULL,
  `thru_date` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `updated_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_login_security_group`
--

INSERT INTO `user_login_security_group` (`user_login_id`, `permission_group_id`, `from_date`, `thru_date`, `created_date`, `updated_date`) VALUES
('accountOwnerABC', 'CRMSFA_ACCOUNT_TASKS', '2016-05-29 15:45:52', NULL, '2016-05-29 15:45:52', '2016-05-29 15:45:52'),
('acctOwnerABC', 'ACCOUNT_OWNER', '2016-05-25 11:49:48', NULL, '2016-05-25 11:49:48', '2016-05-25 11:49:48'),
('acctOwnerDEF', 'ACCOUNT_OWNER', '2016-05-25 11:50:03', NULL, '2016-05-25 11:50:03', '2016-05-25 11:50:03'),
('admin', 'CONTACT_OWNER', '2016-05-28 21:57:44', NULL, '2016-05-28 21:57:44', '2016-05-28 21:57:44'),
('admin', 'CRMSFA_LEAD_TASKS', '2016-06-26 19:02:19', NULL, '2016-06-26 19:02:19', '2016-06-26 19:02:19'),
('admin', 'CRMSFA_QUOTE_TASKS', '2016-06-22 02:44:02', NULL, '2016-06-22 02:44:02', '2016-06-22 02:44:02'),
('admin', 'FULLADMIN', '2016-05-01 00:00:00', '2016-12-31 00:00:00', '2016-05-19 01:16:54', '2016-05-19 01:16:54'),
('admin', 'LEAD_OWNER', '2016-06-26 19:06:48', NULL, '2016-06-26 19:06:48', '2016-06-26 19:06:48'),
('contactOwnerABC', 'CONTACT_OWNER', '2016-05-25 11:59:00', NULL, '2016-05-25 11:59:00', '2016-05-25 11:59:00'),
('contactOwnerABC', 'CRMSFA_CASE_TASKS', '2016-05-29 13:42:50', NULL, '2016-05-29 13:42:50', '2016-05-29 13:42:50'),
('contactOwnerABC', 'CRMSFA_CONTACT_TASKS', '2016-05-30 02:02:49', NULL, '2016-05-30 02:02:49', '2016-05-30 02:02:49'),
('contactOwnerDEF', 'CONTACT_OWNER', '2016-05-25 11:59:22', NULL, '2016-05-25 11:59:22', '2016-05-25 11:59:22'),
('crmsfaContactTasksABC', 'CRMSFA_CASE_TASKS', '2016-05-30 01:30:00', NULL, '2016-05-30 01:30:00', '2016-05-30 01:30:00'),
('crmsfaContactTasksABC', 'CRMSFA_CONTACT_TASKS', '2016-05-25 12:00:15', NULL, '2016-05-25 12:00:15', '2016-05-25 12:00:15'),
('crmsfaContactTasksDEF', 'CRMSFA_CONTACT_TASKS', '2016-05-25 12:01:27', NULL, '2016-05-25 12:01:27', '2016-05-25 12:01:27'),
('fullAdminABC', 'CONTACT_OWNER', '2016-05-25 11:49:17', NULL, '2016-05-25 11:49:17', '2016-05-25 11:49:17'),
('fullAdminABC', 'FULLADMIN', '2016-05-25 13:07:52', NULL, '2016-05-25 13:07:52', '2016-05-25 13:07:52'),
('fullAdminABC', 'PARTYADMIN', '2016-05-25 13:07:28', '2016-05-27 00:00:00', '2016-05-25 13:07:28', '2016-05-25 13:07:28'),
('fullAdminDEF', 'CRMSFA_CASE_TASKS', '2016-05-29 20:19:27', NULL, '2016-05-29 20:19:27', '2016-05-29 20:19:27'),
('fullAdminDEF', 'FULLADMIN', '2016-05-25 12:01:50', NULL, '2016-05-25 12:01:50', '2016-05-25 12:01:50'),
('leadOwnerABC', 'CRMSFA_LEAD_TASKS', '2016-05-29 15:05:04', NULL, '2016-05-29 15:05:04', '2016-05-29 15:05:04'),
('leadOwnerABC', 'LEAD_OWNER', '2016-05-25 13:17:16', NULL, '2016-05-25 13:17:16', '2016-05-25 13:17:16'),
('leadOwnerDEF', 'LEAD_OWNER', '2016-05-27 22:35:06', NULL, '2016-05-27 22:35:06', '2016-05-27 22:35:06'),
('mrQuoteUnquote', 'CRMSFA_QUOTE_TASKS', '2016-06-01 20:50:44', NULL, '2016-06-01 20:50:44', '2016-06-01 20:50:44'),
('partyAdminABC', 'PARTYADMIN', '2016-05-25 12:02:15', NULL, '2016-05-25 12:02:15', '2016-05-25 12:02:15'),
('partyAdminDEF', 'PARTYADMIN', '2016-05-25 12:02:32', NULL, '2016-05-25 12:02:32', '2016-05-25 12:02:32'),
('testGuy', 'CRMSFA_CONTACT_TASKS', '2016-05-31 01:46:32', NULL, '2016-05-31 01:46:32', '2016-05-31 01:46:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `case_`
--
ALTER TABLE `case_`
  ADD PRIMARY KEY (`case_id`),
  ADD KEY `case_type_id` (`case_type_id`),
  ADD KEY `case_category_id` (`case_category_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `from_party_id` (`from_party_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `resolution_id` (`resolution_id`);

--
-- Indexes for table `case_category`
--
ALTER TABLE `case_category`
  ADD PRIMARY KEY (`case_category_id`);

--
-- Indexes for table `case_note`
--
ALTER TABLE `case_note`
  ADD PRIMARY KEY (`case_id`,`note_id`),
  ADD KEY `case_id` (`case_id`),
  ADD KEY `note_id` (`note_id`);

--
-- Indexes for table `case_resolution`
--
ALTER TABLE `case_resolution`
  ADD PRIMARY KEY (`case_resolution_id`),
  ADD KEY `case_type_id` (`case_type_id`);

--
-- Indexes for table `case_role`
--
ALTER TABLE `case_role`
  ADD PRIMARY KEY (`case_id`,`party_id`,`role_type_id`),
  ADD KEY `case_id` (`case_id`),
  ADD KEY `party_id` (`party_id`),
  ADD KEY `role_type_id` (`role_type_id`);

--
-- Indexes for table `case_status`
--
ALTER TABLE `case_status`
  ADD PRIMARY KEY (`case_status_id`),
  ADD KEY `case_id` (`case_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `case_type`
--
ALTER TABLE `case_type`
  ADD PRIMARY KEY (`case_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `contact_mech`
--
ALTER TABLE `contact_mech`
  ADD PRIMARY KEY (`contact_mech_id`),
  ADD KEY `contact_mech_type_id` (`contact_mech_type_id`);

--
-- Indexes for table `contact_mech_purpose_type`
--
ALTER TABLE `contact_mech_purpose_type`
  ADD PRIMARY KEY (`contact_mech_purpose_type_id`);

--
-- Indexes for table `contact_mech_type`
--
ALTER TABLE `contact_mech_type`
  ADD PRIMARY KEY (`contact_mech_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `contact_mech_type_purpose`
--
ALTER TABLE `contact_mech_type_purpose`
  ADD PRIMARY KEY (`contact_mech_type_id`,`contact_mech_purpose_type_id`),
  ADD KEY `contact_mech_type_id` (`contact_mech_type_id`),
  ADD KEY `contact_mech_purpose_type_id` (`contact_mech_purpose_type_id`);

--
-- Indexes for table `data_source`
--
ALTER TABLE `data_source`
  ADD PRIMARY KEY (`data_source_id`),
  ADD KEY `data_source_type_id` (`data_source_type_id`);

--
-- Indexes for table `data_source_type`
--
ALTER TABLE `data_source_type`
  ADD PRIMARY KEY (`data_source_type_id`);

--
-- Indexes for table `enumeration`
--
ALTER TABLE `enumeration`
  ADD PRIMARY KEY (`enum_id`),
  ADD KEY `enum_type_id` (`enum_type_id`),
  ADD KEY `parent_enum_id` (`parent_enum_id`);

--
-- Indexes for table `enumeration_type`
--
ALTER TABLE `enumeration_type`
  ADD PRIMARY KEY (`enum_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `geo`
--
ALTER TABLE `geo`
  ADD PRIMARY KEY (`geo_id`),
  ADD KEY `geo_type_id` (`geo_type_id`);

--
-- Indexes for table `geo_type`
--
ALTER TABLE `geo_type`
  ADD PRIMARY KEY (`geo_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `note_data`
--
ALTER TABLE `note_data`
  ADD PRIMARY KEY (`note_id`),
  ADD KEY `note_party` (`note_party`);

--
-- Indexes for table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`party_id`),
  ADD KEY `party_id` (`party_id`);

--
-- Indexes for table `party`
--
ALTER TABLE `party`
  ADD PRIMARY KEY (`party_id`),
  ADD KEY `party_type_id` (`party_type_id`),
  ADD KEY `created_by` (`created_by`),
  ADD KEY `preferred_currency_uom_id` (`preferred_currency_uom_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `party_contact_mech`
--
ALTER TABLE `party_contact_mech`
  ADD PRIMARY KEY (`party_id`,`contact_mech_id`,`contact_mech_purpose_type_id`),
  ADD KEY `party_id` (`party_id`),
  ADD KEY `contact_mech_id` (`contact_mech_id`),
  ADD KEY `contact_mech_purpose_type_id` (`contact_mech_purpose_type_id`);

--
-- Indexes for table `party_data_source`
--
ALTER TABLE `party_data_source`
  ADD PRIMARY KEY (`party_id`,`data_source_id`,`from_date`),
  ADD KEY `party_id` (`party_id`),
  ADD KEY `data_source_id` (`data_source_id`);

--
-- Indexes for table `party_relationship`
--
ALTER TABLE `party_relationship`
  ADD PRIMARY KEY (`party_id_from`,`party_id_to`,`role_type_id_from`,`role_type_id_to`,`from_date`),
  ADD KEY `party_id_from` (`party_id_from`),
  ADD KEY `party_id_to` (`party_id_to`),
  ADD KEY `role_type_id_from` (`role_type_id_from`),
  ADD KEY `role_type_id_to` (`role_type_id_to`),
  ADD KEY `party_relationship_type_id` (`party_relationship_type_id`),
  ADD KEY `status_id` (`status_id`);

--
-- Indexes for table `party_relationship_type`
--
ALTER TABLE `party_relationship_type`
  ADD PRIMARY KEY (`party_relationship_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `party_role`
--
ALTER TABLE `party_role`
  ADD PRIMARY KEY (`party_id`,`role_type_id`),
  ADD KEY `party_id` (`party_id`),
  ADD KEY `role_type_id` (`role_type_id`);

--
-- Indexes for table `party_supplemental_data`
--
ALTER TABLE `party_supplemental_data`
  ADD PRIMARY KEY (`party_id`),
  ADD KEY `party_id` (`party_id`),
  ADD KEY `parent_party_id` (`parent_party_id`),
  ADD KEY `currency_uom_id` (`currency_uom_id`),
  ADD KEY `industry_enum_id` (`industry_enum_id`),
  ADD KEY `ownership_enum_id` (`ownership_enum_id`),
  ADD KEY `primary_postal_address_id` (`primary_postal_address_id`),
  ADD KEY `primary_telecom_number_id` (`primary_telecom_number_id`),
  ADD KEY `primary_email_id` (`primary_email_id`);

--
-- Indexes for table `party_type`
--
ALTER TABLE `party_type`
  ADD PRIMARY KEY (`party_type_id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`party_id`),
  ADD KEY `party_id` (`party_id`);

--
-- Indexes for table `postal_address`
--
ALTER TABLE `postal_address`
  ADD PRIMARY KEY (`contact_mech_id`),
  ADD KEY `contact_mech_id` (`contact_mech_id`),
  ADD KEY `country_geo_id` (`country_geo_id`),
  ADD KEY `state_province_geo_id` (`state_province_geo_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_type_id` (`product_type_id`),
  ADD KEY `primary_product_category_id` (`primary_product_category_id`),
  ADD KEY `manufacturer_party_id` (`manufacturer_party_id`),
  ADD KEY `quantity_uom_id` (`quantity_uom_id`),
  ADD KEY `amount_uom_type_id` (`amount_uom_type_id`),
  ADD KEY `weight_uom_id` (`weight_uom_id`),
  ADD KEY `height_uom_id` (`height_uom_id`),
  ADD KEY `width_uom_id` (`width_uom_id`),
  ADD KEY `depth_uom_id` (`depth_uom_id`),
  ADD KEY `origin_geo_id` (`origin_geo_id`),
  ADD KEY `created_by_user_login` (`created_by_user_login`),
  ADD KEY `last_modified_by_user_login` (`last_modified_by_user_login`);

--
-- Indexes for table `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`product_category_id`),
  ADD KEY `product_category_type_id` (`product_category_type_id`),
  ADD KEY `primary_parent_category_id` (`primary_parent_category_id`);

--
-- Indexes for table `product_category_type`
--
ALTER TABLE `product_category_type`
  ADD PRIMARY KEY (`product_category_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `product_type`
--
ALTER TABLE `product_type`
  ADD PRIMARY KEY (`product_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `quote`
--
ALTER TABLE `quote`
  ADD PRIMARY KEY (`quote_id`),
  ADD KEY `quote_type_id` (`quote_type_id`),
  ADD KEY `party_id` (`party_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `currency_uom_id` (`currency_uom_id`),
  ADD KEY `sales_channel_enum_id` (`sales_channel_enum_id`),
  ADD KEY `contact_party_id` (`contact_party_id`),
  ADD KEY `created_by_party_id` (`created_by_party_id`);

--
-- Indexes for table `quote_item`
--
ALTER TABLE `quote_item`
  ADD PRIMARY KEY (`quote_id`,`quote_item_seq_id`),
  ADD KEY `quote_id` (`quote_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `quote_item_option`
--
ALTER TABLE `quote_item_option`
  ADD PRIMARY KEY (`quote_id`,`quote_item_seq_id`,`quote_item_option_seq_id`);

--
-- Indexes for table `quote_note`
--
ALTER TABLE `quote_note`
  ADD PRIMARY KEY (`quote_id`,`note_id`),
  ADD KEY `FOREIGN_quo_note_note` (`note_id`);

--
-- Indexes for table `quote_role`
--
ALTER TABLE `quote_role`
  ADD PRIMARY KEY (`quote_id`,`party_id`,`role_type_id`),
  ADD KEY `FOREIGN_quote_role_party_role_1` (`party_id`),
  ADD KEY `FOREIGN_quote_role_party_role_2` (`role_type_id`);

--
-- Indexes for table `quote_type`
--
ALTER TABLE `quote_type`
  ADD PRIMARY KEY (`quote_type_id`);

--
-- Indexes for table `role_type`
--
ALTER TABLE `role_type`
  ADD PRIMARY KEY (`role_type`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `security_group`
--
ALTER TABLE `security_group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `security_group_permission`
--
ALTER TABLE `security_group_permission`
  ADD PRIMARY KEY (`group_id`,`permission_id`),
  ADD KEY `FOREIGN_security_group_permission_security_permission` (`permission_id`);

--
-- Indexes for table `security_permission`
--
ALTER TABLE `security_permission`
  ADD PRIMARY KEY (`permission_id`);

--
-- Indexes for table `status_item`
--
ALTER TABLE `status_item`
  ADD PRIMARY KEY (`status_id`),
  ADD KEY `status_type_id` (`status_type_id`);

--
-- Indexes for table `status_type`
--
ALTER TABLE `status_type`
  ADD PRIMARY KEY (`status_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `telecom_number`
--
ALTER TABLE `telecom_number`
  ADD PRIMARY KEY (`contact_mech_id`),
  ADD KEY `contact_mech_id` (`contact_mech_id`);

--
-- Indexes for table `uom`
--
ALTER TABLE `uom`
  ADD PRIMARY KEY (`uom_id`),
  ADD KEY `UOM_TO_TYPE` (`uom_type_id`);

--
-- Indexes for table `uom_type`
--
ALTER TABLE `uom_type`
  ADD PRIMARY KEY (`uom_type_id`),
  ADD KEY `parent_type_id` (`parent_type_id`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`user_login_id`),
  ADD KEY `party_id` (`party_id`);

--
-- Indexes for table `user_login_security_group`
--
ALTER TABLE `user_login_security_group`
  ADD PRIMARY KEY (`user_login_id`,`permission_group_id`,`from_date`),
  ADD KEY `FOREIGN_ulsg_security_group` (`permission_group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `case_`
--
ALTER TABLE `case_`
  MODIFY `case_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
--
-- AUTO_INCREMENT for table `case_status`
--
ALTER TABLE `case_status`
  MODIFY `case_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `contact_mech`
--
ALTER TABLE `contact_mech`
  MODIFY `contact_mech_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=741;
--
-- AUTO_INCREMENT for table `note_data`
--
ALTER TABLE `note_data`
  MODIFY `note_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `party`
--
ALTER TABLE `party`
  MODIFY `party_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=571;
--
-- AUTO_INCREMENT for table `quote`
--
ALTER TABLE `quote`
  MODIFY `quote_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `case_`
--
ALTER TABLE `case_`
  ADD CONSTRAINT `FOREIGN_case_case_category` FOREIGN KEY (`case_category_id`) REFERENCES `case_category` (`case_category_id`),
  ADD CONSTRAINT `FOREIGN_case_case_resolution` FOREIGN KEY (`resolution_id`) REFERENCES `case_resolution` (`case_resolution_id`),
  ADD CONSTRAINT `FOREIGN_case_case_type` FOREIGN KEY (`case_type_id`) REFERENCES `case_type` (`case_type_id`),
  ADD CONSTRAINT `FOREIGN_case_party` FOREIGN KEY (`from_party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_case_status_item` FOREIGN KEY (`status_id`) REFERENCES `status_item` (`status_id`),
  ADD CONSTRAINT `FOREIGN_case_user_login` FOREIGN KEY (`created_by`) REFERENCES `user_login` (`user_login_id`);

--
-- Constraints for table `case_note`
--
ALTER TABLE `case_note`
  ADD CONSTRAINT `FOREIGN_case_note_case` FOREIGN KEY (`case_id`) REFERENCES `case_` (`case_id`),
  ADD CONSTRAINT `FOREIGN_case_note_note_data` FOREIGN KEY (`note_id`) REFERENCES `note_data` (`note_id`);

--
-- Constraints for table `case_resolution`
--
ALTER TABLE `case_resolution`
  ADD CONSTRAINT `FOREIGN_case_resolution_case_type` FOREIGN KEY (`case_type_id`) REFERENCES `case_type` (`case_type_id`);

--
-- Constraints for table `case_role`
--
ALTER TABLE `case_role`
  ADD CONSTRAINT `FOREIGN_case_role_case` FOREIGN KEY (`case_id`) REFERENCES `case_` (`case_id`),
  ADD CONSTRAINT `FOREIGN_case_role_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_case_role_party_role` FOREIGN KEY (`role_type_id`) REFERENCES `party_role` (`role_type_id`);

--
-- Constraints for table `case_status`
--
ALTER TABLE `case_status`
  ADD CONSTRAINT `FOREIGN_case_status_case` FOREIGN KEY (`case_id`) REFERENCES `case_` (`case_id`),
  ADD CONSTRAINT `FOREIGN_case_status_status_item` FOREIGN KEY (`status_id`) REFERENCES `status_item` (`status_id`);

--
-- Constraints for table `case_type`
--
ALTER TABLE `case_type`
  ADD CONSTRAINT `FOREIGN_case_type_case_type` FOREIGN KEY (`parent_type_id`) REFERENCES `case_type` (`case_type_id`);

--
-- Constraints for table `contact_mech`
--
ALTER TABLE `contact_mech`
  ADD CONSTRAINT `FOREIGN_contact_mech_contact_mech_type` FOREIGN KEY (`contact_mech_type_id`) REFERENCES `contact_mech_type` (`contact_mech_type_id`);

--
-- Constraints for table `contact_mech_type`
--
ALTER TABLE `contact_mech_type`
  ADD CONSTRAINT `FOREIGN_contact_mech_type_contact_mech_type` FOREIGN KEY (`parent_type_id`) REFERENCES `contact_mech_type` (`contact_mech_type_id`);

--
-- Constraints for table `contact_mech_type_purpose`
--
ALTER TABLE `contact_mech_type_purpose`
  ADD CONSTRAINT `FOREIGN_contact_mech_type_purpose_contact_mech_purpose_type` FOREIGN KEY (`contact_mech_purpose_type_id`) REFERENCES `contact_mech_purpose_type` (`contact_mech_purpose_type_id`),
  ADD CONSTRAINT `FOREIGN_contact_mech_type_purpose_contact_mech_type` FOREIGN KEY (`contact_mech_type_id`) REFERENCES `contact_mech_type` (`contact_mech_type_id`);

--
-- Constraints for table `data_source`
--
ALTER TABLE `data_source`
  ADD CONSTRAINT `FOREIGN_data_source_data_source_type` FOREIGN KEY (`data_source_type_id`) REFERENCES `data_source_type` (`data_source_type_id`);

--
-- Constraints for table `enumeration`
--
ALTER TABLE `enumeration`
  ADD CONSTRAINT `FOREIGN_enum_enum` FOREIGN KEY (`parent_enum_id`) REFERENCES `enumeration` (`enum_id`),
  ADD CONSTRAINT `FOREIGN_enum_enum_type` FOREIGN KEY (`enum_type_id`) REFERENCES `enumeration_type` (`enum_type_id`);

--
-- Constraints for table `enumeration_type`
--
ALTER TABLE `enumeration_type`
  ADD CONSTRAINT `FOREIGN_enum_type_enum_type` FOREIGN KEY (`parent_type_id`) REFERENCES `enumeration_type` (`enum_type_id`);

--
-- Constraints for table `geo`
--
ALTER TABLE `geo`
  ADD CONSTRAINT `FOREIGN_geo_geo_type` FOREIGN KEY (`geo_type_id`) REFERENCES `geo_type` (`geo_type_id`);

--
-- Constraints for table `geo_type`
--
ALTER TABLE `geo_type`
  ADD CONSTRAINT `FOREIGN_geo_type_geo_type` FOREIGN KEY (`parent_type_id`) REFERENCES `geo_type` (`geo_type_id`);

--
-- Constraints for table `note_data`
--
ALTER TABLE `note_data`
  ADD CONSTRAINT `FOREIGN_note_data_party` FOREIGN KEY (`note_party`) REFERENCES `party` (`party_id`);

--
-- Constraints for table `organization`
--
ALTER TABLE `organization`
  ADD CONSTRAINT `FOREIGN_organization_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`);

--
-- Constraints for table `party`
--
ALTER TABLE `party`
  ADD CONSTRAINT `FOREIGN_party_party_type` FOREIGN KEY (`party_type_id`) REFERENCES `party_type` (`party_type_id`),
  ADD CONSTRAINT `FOREIGN_party_status_item` FOREIGN KEY (`status_id`) REFERENCES `status_item` (`status_id`),
  ADD CONSTRAINT `FOREIGN_party_uom` FOREIGN KEY (`preferred_currency_uom_id`) REFERENCES `uom` (`uom_id`),
  ADD CONSTRAINT `FOREIGN_party_user_login` FOREIGN KEY (`created_by`) REFERENCES `user_login` (`user_login_id`);

--
-- Constraints for table `party_contact_mech`
--
ALTER TABLE `party_contact_mech`
  ADD CONSTRAINT `FOREIGN_party_contact_mech_contact_mech` FOREIGN KEY (`contact_mech_id`) REFERENCES `contact_mech` (`contact_mech_id`),
  ADD CONSTRAINT `FOREIGN_party_contact_mech_contact_mech_purpose_type` FOREIGN KEY (`contact_mech_purpose_type_id`) REFERENCES `contact_mech_purpose_type` (`contact_mech_purpose_type_id`),
  ADD CONSTRAINT `FOREIGN_party_contact_mech_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`);

--
-- Constraints for table `party_data_source`
--
ALTER TABLE `party_data_source`
  ADD CONSTRAINT `FOREIGN_pds_data_source` FOREIGN KEY (`data_source_id`) REFERENCES `data_source` (`data_source_id`),
  ADD CONSTRAINT `FOREIGN_pds_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`);

--
-- Constraints for table `party_relationship`
--
ALTER TABLE `party_relationship`
  ADD CONSTRAINT `FOREIGN_party_relationship_party_relationship_type` FOREIGN KEY (`party_relationship_type_id`) REFERENCES `party_relationship_type` (`party_relationship_type_id`),
  ADD CONSTRAINT `FOREIGN_party_relationship_party_role_3` FOREIGN KEY (`role_type_id_from`) REFERENCES `party_role` (`role_type_id`),
  ADD CONSTRAINT `FOREIGN_party_relationship_party_role_4` FOREIGN KEY (`role_type_id_to`) REFERENCES `party_role` (`role_type_id`),
  ADD CONSTRAINT `FOREIGN_party_relationship_status_item` FOREIGN KEY (`status_id`) REFERENCES `status_item` (`status_id`);

--
-- Constraints for table `party_relationship_type`
--
ALTER TABLE `party_relationship_type`
  ADD CONSTRAINT `FOREIGN_party_relationship_type_party_relationship_type` FOREIGN KEY (`parent_type_id`) REFERENCES `party_relationship_type` (`party_relationship_type_id`);

--
-- Constraints for table `party_role`
--
ALTER TABLE `party_role`
  ADD CONSTRAINT `FOREIGN_party_role_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_party_role_role_type` FOREIGN KEY (`role_type_id`) REFERENCES `role_type` (`role_type`);

--
-- Constraints for table `party_supplemental_data`
--
ALTER TABLE `party_supplemental_data`
  ADD CONSTRAINT `FOREIGN_party_sup_contact_mech_1` FOREIGN KEY (`primary_postal_address_id`) REFERENCES `contact_mech` (`contact_mech_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_contact_mech_2` FOREIGN KEY (`primary_telecom_number_id`) REFERENCES `contact_mech` (`contact_mech_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_contact_mech_3` FOREIGN KEY (`primary_email_id`) REFERENCES `contact_mech` (`contact_mech_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_enum_1` FOREIGN KEY (`industry_enum_id`) REFERENCES `enumeration` (`enum_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_enum_2` FOREIGN KEY (`ownership_enum_id`) REFERENCES `enumeration` (`enum_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_party_1` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_party_2` FOREIGN KEY (`parent_party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_party_sup_uom` FOREIGN KEY (`currency_uom_id`) REFERENCES `uom` (`uom_id`);

--
-- Constraints for table `person`
--
ALTER TABLE `person`
  ADD CONSTRAINT `FOREIGN_person_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`);

--
-- Constraints for table `postal_address`
--
ALTER TABLE `postal_address`
  ADD CONSTRAINT `FOREIGN_postal_address_contact_mech` FOREIGN KEY (`contact_mech_id`) REFERENCES `contact_mech` (`contact_mech_id`),
  ADD CONSTRAINT `FOREIGN_postal_address_geo_1` FOREIGN KEY (`country_geo_id`) REFERENCES `geo` (`geo_id`),
  ADD CONSTRAINT `FOREIGN_postal_address_geo_2` FOREIGN KEY (`state_province_geo_id`) REFERENCES `geo` (`geo_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FOREIGN_prod_geo` FOREIGN KEY (`origin_geo_id`) REFERENCES `geo` (`geo_id`),
  ADD CONSTRAINT `FOREIGN_prod_party` FOREIGN KEY (`manufacturer_party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_prod_prod_cat` FOREIGN KEY (`primary_product_category_id`) REFERENCES `product_category` (`product_category_id`),
  ADD CONSTRAINT `FOREIGN_prod_prod_type` FOREIGN KEY (`product_type_id`) REFERENCES `product_type` (`product_type_id`),
  ADD CONSTRAINT `FOREIGN_prod_uom_1` FOREIGN KEY (`quantity_uom_id`) REFERENCES `uom` (`uom_id`),
  ADD CONSTRAINT `FOREIGN_prod_uom_2` FOREIGN KEY (`weight_uom_id`) REFERENCES `uom` (`uom_id`),
  ADD CONSTRAINT `FOREIGN_prod_uom_3` FOREIGN KEY (`height_uom_id`) REFERENCES `uom` (`uom_id`),
  ADD CONSTRAINT `FOREIGN_prod_uom_4` FOREIGN KEY (`width_uom_id`) REFERENCES `uom` (`uom_id`),
  ADD CONSTRAINT `FOREIGN_prod_uom_5` FOREIGN KEY (`depth_uom_id`) REFERENCES `uom` (`uom_id`),
  ADD CONSTRAINT `FOREIGN_prod_uom_type` FOREIGN KEY (`amount_uom_type_id`) REFERENCES `uom_type` (`uom_type_id`),
  ADD CONSTRAINT `FOREIGN_prod_user_login_1` FOREIGN KEY (`created_by_user_login`) REFERENCES `user_login` (`user_login_id`),
  ADD CONSTRAINT `FOREIGN_prod_user_login_2` FOREIGN KEY (`last_modified_by_user_login`) REFERENCES `user_login` (`user_login_id`);

--
-- Constraints for table `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `FOREIGN_prod_cat_prod_cat` FOREIGN KEY (`primary_parent_category_id`) REFERENCES `product_category` (`product_category_id`),
  ADD CONSTRAINT `FOREIGN_prod_cat_prod_cat_type` FOREIGN KEY (`product_category_type_id`) REFERENCES `product_category_type` (`product_category_type_id`);

--
-- Constraints for table `product_category_type`
--
ALTER TABLE `product_category_type`
  ADD CONSTRAINT `FOREIGN_product_category_type_product_category_type` FOREIGN KEY (`parent_type_id`) REFERENCES `product_category_type` (`product_category_type_id`);

--
-- Constraints for table `product_type`
--
ALTER TABLE `product_type`
  ADD CONSTRAINT `FOREIGN_product_type_product_type` FOREIGN KEY (`parent_type_id`) REFERENCES `product_type` (`product_type_id`);

--
-- Constraints for table `quote`
--
ALTER TABLE `quote`
  ADD CONSTRAINT `FOREIGN_quote_enum` FOREIGN KEY (`sales_channel_enum_id`) REFERENCES `enumeration` (`enum_id`),
  ADD CONSTRAINT `FOREIGN_quote_party_1` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_quote_party_2` FOREIGN KEY (`contact_party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_quote_party_3` FOREIGN KEY (`created_by_party_id`) REFERENCES `party` (`party_id`),
  ADD CONSTRAINT `FOREIGN_quote_quote_type` FOREIGN KEY (`quote_type_id`) REFERENCES `quote_type` (`quote_type_id`),
  ADD CONSTRAINT `FOREIGN_quote_status` FOREIGN KEY (`status_id`) REFERENCES `status_item` (`status_id`),
  ADD CONSTRAINT `FOREIGN_quote_uom` FOREIGN KEY (`currency_uom_id`) REFERENCES `uom` (`uom_id`);

--
-- Constraints for table `quote_item`
--
ALTER TABLE `quote_item`
  ADD CONSTRAINT `FOREIGN_quote_item_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `FOREIGN_quote_item_quote` FOREIGN KEY (`quote_id`) REFERENCES `quote` (`quote_id`);

--
-- Constraints for table `quote_item_option`
--
ALTER TABLE `quote_item_option`
  ADD CONSTRAINT `FOREIGN_quo_itm_opt_quo` FOREIGN KEY (`quote_id`) REFERENCES `quote` (`quote_id`),
  ADD CONSTRAINT `FOREIGN_quo_itm_opt_quo_itm` FOREIGN KEY (`quote_id`,`quote_item_seq_id`) REFERENCES `quote_item` (`quote_id`, `quote_item_seq_id`);

--
-- Constraints for table `quote_note`
--
ALTER TABLE `quote_note`
  ADD CONSTRAINT `FOREIGN_quo_note_note` FOREIGN KEY (`note_id`) REFERENCES `note_data` (`note_id`),
  ADD CONSTRAINT `FOREIGN_quo_note_quo` FOREIGN KEY (`quote_id`) REFERENCES `quote` (`quote_id`);

--
-- Constraints for table `quote_role`
--
ALTER TABLE `quote_role`
  ADD CONSTRAINT `FOREIGN_quote_role_party_role_1` FOREIGN KEY (`party_id`) REFERENCES `party_role` (`party_id`),
  ADD CONSTRAINT `FOREIGN_quote_role_party_role_2` FOREIGN KEY (`role_type_id`) REFERENCES `party_role` (`role_type_id`),
  ADD CONSTRAINT `FOREIGN_quote_role_quote` FOREIGN KEY (`quote_id`) REFERENCES `quote` (`quote_id`);

--
-- Constraints for table `role_type`
--
ALTER TABLE `role_type`
  ADD CONSTRAINT `FOREIGN_role_type_role_type` FOREIGN KEY (`parent_type_id`) REFERENCES `role_type` (`role_type`);

--
-- Constraints for table `security_group_permission`
--
ALTER TABLE `security_group_permission`
  ADD CONSTRAINT `FOREIGN_security_group_permission_security_group` FOREIGN KEY (`group_id`) REFERENCES `security_group` (`group_id`),
  ADD CONSTRAINT `FOREIGN_security_group_permission_security_permission` FOREIGN KEY (`permission_id`) REFERENCES `security_permission` (`permission_id`);

--
-- Constraints for table `status_item`
--
ALTER TABLE `status_item`
  ADD CONSTRAINT `FOREIGN_status_item_status_type` FOREIGN KEY (`status_type_id`) REFERENCES `status_type` (`status_type_id`);

--
-- Constraints for table `status_type`
--
ALTER TABLE `status_type`
  ADD CONSTRAINT `FOREIGN_status_type_status_type` FOREIGN KEY (`parent_type_id`) REFERENCES `status_type` (`status_type_id`);

--
-- Constraints for table `telecom_number`
--
ALTER TABLE `telecom_number`
  ADD CONSTRAINT `FOREIGN_telecom_num_contact_mech` FOREIGN KEY (`contact_mech_id`) REFERENCES `contact_mech` (`contact_mech_id`);

--
-- Constraints for table `uom`
--
ALTER TABLE `uom`
  ADD CONSTRAINT `UOM_TO_TYPE` FOREIGN KEY (`uom_type_id`) REFERENCES `uom_type` (`uom_type_id`);

--
-- Constraints for table `uom_type`
--
ALTER TABLE `uom_type`
  ADD CONSTRAINT `FOREIGN_uom_type_uom_type` FOREIGN KEY (`parent_type_id`) REFERENCES `uom_type` (`uom_type_id`);

--
-- Constraints for table `user_login`
--
ALTER TABLE `user_login`
  ADD CONSTRAINT `FOREIGN_user_login_party` FOREIGN KEY (`party_id`) REFERENCES `party` (`party_id`);

--
-- Constraints for table `user_login_security_group`
--
ALTER TABLE `user_login_security_group`
  ADD CONSTRAINT `FOREIGN_ulsg_security_group` FOREIGN KEY (`permission_group_id`) REFERENCES `security_group` (`group_id`),
  ADD CONSTRAINT `FOREIGN_ulsg_user_login` FOREIGN KEY (`user_login_id`) REFERENCES `user_login` (`user_login_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
