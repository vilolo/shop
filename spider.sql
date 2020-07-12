CREATE TABLE `sp_store_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '1',
  `remark` varchar(200) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_time` timestamp NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `sp_store_detail_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `crawlid` int(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `products` varchar(50) DEFAULT NULL,
  `joined` varchar(50) DEFAULT NULL,
  `followers` varchar(50) DEFAULT NULL,
  `following` varchar(50) DEFAULT NULL,
  `rating` varchar(50) DEFAULT NULL,
  `remark` varchar(200) DEFAULT NULL,
  `log_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `sp_product_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `crawlid` int(11) DEFAULT NULL,
  `pcode` varchar(50) DEFAULT NULL,
  `cover` varchar(255) DEFAULT NULL,
  `discount` varchar(50) DEFAULT NULL,
  `activity` varchar(50) DEFAULT NULL,
  `multiple_offer` varchar(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `likes` varchar(20) DEFAULT NULL,
  `sales` varchar(50) DEFAULT NULL,
  `categorys` varchar(255) DEFAULT NULL,
  `popular_ranking` varchar(50) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



