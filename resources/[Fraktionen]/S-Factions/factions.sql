ALTER TABLE owned_vehicles
ADD `star` varchar(10) DEFAULT false;

CREATE TABLE IF NOT EXISTS `S_Factions_Storage` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `gangname` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `label` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `count` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `typeofitem` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`index`) USING BTREE,
  KEY `item` (`item`)
) ENGINE=InnoDB AUTO_INCREMENT=346 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

CREATE TABLE IF NOT EXISTS `S_Factions_Factions` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `gangname` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wallet`int(20) COLLATE utf8mb4_unicode_ci DEFAULT "0",
  `upgradestatestorage` int(20) COLLATE utf8mb4_unicode_ci DEFAULT "0",
  `upgradeautohaus`int(20) COLLATE utf8mb4_unicode_ci DEFAULT "0",
  `upgradekonto` int(20) COLLATE utf8mb4_unicode_ci DEFAULT "0",
  `upgradeshop`int(20) COLLATE utf8mb4_unicode_ci DEFAULT "0",
  PRIMARY KEY (`index`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=346 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

CREATE TABLE IF NOT EXISTS `S_Factions_PlayTime` (
  `index` int(11) NOT NULL AUTO_INCREMENT,
  `identifier` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day`varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,  
  `date`varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `playtime` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT "0",
  PRIMARY KEY (`index`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=346 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

ALTER TABLE job_grades
ADD `invite` varchar(10) DEFAULT "false";

ALTER TABLE users
ADD `frakspeere` varchar(10) DEFAULT "false";


ALTER TABLE owned_vehicles
ADD `job` varchar(15) DEFAULT NULL;