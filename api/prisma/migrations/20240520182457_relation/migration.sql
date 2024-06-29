-- AlterTable
ALTER TABLE `products` ADD COLUMN `usersId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
