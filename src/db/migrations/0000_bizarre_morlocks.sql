CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`phone` text NOT NULL,
	`address` text NOT NULL,
	`city` text NOT NULL,
	`postal_code` text NOT NULL,
	`region` text NOT NULL,
	`country` text NOT NULL
);
