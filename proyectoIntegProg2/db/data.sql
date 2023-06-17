-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2023 at 02:36 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datamsn`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--
DROP schema datamsn;
Create schema datamsn;
	USE datamsn;
CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `cumpleaños` datetime NOT NULL,
  `DNI` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `email`, `password`, `foto_perfil`, `cumpleaños`, `DNI`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Mateo', 'mp@gmail.com', 'pupo123', NULL, '2003-10-08 00:00:00', 45074659, '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(2, 'ElPela', 'peladooo@gmail.com', 'sinpelo123', NULL, '0000-00-00 00:00:00', 46026839, '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(3, 'Shakant', 'nico-tina@outlook.com', 'andapaalla', NULL, '2002-03-06 00:00:00', 46834788, '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(4, 'Simon10p', 'nomon@yahoo.com', 'quincepeso', NULL, '2003-09-27 00:00:00', 45072284, '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(5, 'ElBro', 'broccoli@gmail.com', 'broston', NULL, '2022-12-18 00:00:00', 45678901, '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(6, 'simon', 'spdiezpena@gmail.com', '$2a$12$PJmfcW0SQzgAWNhXfGBmtOG3lnKIdv.jsJ0Tg29.e/NIKgoplNBUu', '', '0000-00-00 00:00:00', 2147483647, '2023-06-10 23:45:47', '2023-06-10 23:45:47', '2023-06-10 23:45:47'),
(11, 'pepe', 'pepe@pepe.com', '$2a$12$.mtj7Vp.SoXjfpZlE/qIQ.ZJri.sJJ8.CJds.mApPj8GIQmGBX7Uy', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.fundacion-affinity.org%2Fcdn%2Ffarfuture%2FPVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE%2Fmtime%3A1643275542%2Fsites%2Fdefault%2Ffiles%2Flos-10-sonidos-principales-del-perro.jpg&tbnid=UmrqAOU7A1ZfBM', '2023-06-23 00:00:00', 987654321, '2023-06-12 18:37:00', '2023-06-12 18:37:00', '2023-06-12 18:37:00'),
(13, 'pepitoo', 'nelson@pepe.com', '$2a$12$Ts1k18DES0Sjn2uxhmmj5.HpfMzWAOUOtC2MWdodHZvkPeYtfWzQa', '', '2023-06-16 00:00:00', 192837465, '2023-06-12 18:39:08', '2023-06-16 21:02:46', '2023-06-16 21:02:46'),
(15, 'yas', 'yas@rein.com', '$2a$12$/eYWSBmoTVNQa/NrQ8s44.T094vuE3KlYVNJFD1Gr8s3UeDtW8lvu', '', '0000-00-00 00:00:00', 12345678, '2023-06-16 21:15:13', '2023-06-16 21:15:51', '2023-06-16 21:15:51'),
(19, 'yas', 'yasmine@gmail.com', '$2a$12$Ach.AXBculyx4mzZJbTkyOCoUgR3tjK/3jhhaXDQ/PArb1YJE8Ji2', '', '0000-00-00 00:00:00', 123456788, '2023-06-16 21:58:46', '2023-06-16 21:59:40', '2023-06-16 21:59:40'),
(21, '45072284', 'tomas@gmail.com', '$2a$12$OlnkLB4lrDZZqa6WeiYRC.i7UjXIv4WULjZKhwWGKogF7OO2BULLe', 'https://www.clarin.com/img/2022/10/02/guido-kaczka-recibio-el-oro___UYdG5qULP_2000x1500__1.jpg', '0000-00-00 00:00:00', 1234567, '2023-06-16 22:08:12', '2023-06-16 22:15:56', '2023-06-16 22:15:56');

CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `img_url` varchar(300) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id`, `usuario_id`, `nombre_producto`, `descripcion`, `img_url`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, 'Argentina 1986', 'Camiseta vintage de fÃºtbol de Argentina, ganador de la Copa del Mundo 1986 en MÃ©xico, Argentina-Alemania 3-2', '/images/argentina-1986-1-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(2, 5, 'Barcelona 1973-74', 'Camiseta vintage de fÃºtbol del Barcelona 1973/74. Ganador de la Liga, campeÃ³n de EspaÃ±a', '/images/barcelona-1973-74-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(3, 4, 'Arabia Saudita 1998', 'Camiseta vintage de fÃºtbol de Arabia Saudita. Copa del Mundo 1998 en Francia', '/images/saudi-arabia-1998-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(4, 1, 'Atletico Madrid 1985-86', 'Camiseta vintage de fÃºtbol del AtlÃ©tico Madrid 1985/86. Ganador de la Supercopa de EspaÃ±a, AtlÃ©tico Madrid-Barcelona 3-1', '/images/atletico-madrid-1985-86-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(5, 5, 'Austria 1938', 'Camiseta vintage de fÃºtbol de Austria 1938, segunda equipaciÃ³n. Camiseta usada en el partido del Anschluss entre Austria y Alemania para celebrar la anexiÃ³n a este Ãºltima que tenÃ­a que terminar con un empate pero Austria ganÃ³ gracias a las hazaÃ±as de Matthias Sindelar', '/images/Austira-1938.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(6, 4, 'Botafogo 1968', 'Camiseta vintage de fÃºtbol del Botafogo 1968. Ganador de la TaÃ§a Brasil, Botafogo-Fortaleza 2-2 e 4-0. Ganador del Campeonato Carioca, Botafogo-Vasco da Gama 4-0', '/images/botafogo-1968-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(7, 2, 'Birmingham City 1972-73', 'Camiseta vintage de fÃºtbol del Birmingham City 1972/73', '/images/birmingham-city-1972-73-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(8, 1, 'Arsenal 1985-86', 'Camiseta vintage de fÃºtbol del Arsenal 1985/86', '/images/arsenal-1985-86-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(9, 4, 'Checoslovaquia 1976', 'Camiseta vintage de fÃºtbol della Cecoslovacchia. Ganador de la Eurocopa 1976 en Yugoslavia, Checoslovaquia-Alemania 5-3 (penaltis)', '/images/ceskoslovensko-1976-1.jpeg', '2023-05-29 18:14:21', '2023-06-14 21:10:46', '2023-06-14 21:10:46'),
(10, 13, 'Juventus 1984-85', 'Camiseta vintage de fÃºtbol de la Juventus 1984/85. Ganador de la Copa de Europa, Juventus-Liverpool 1-0', '/images/juventus-1984-85-10.jpeg', '2023-05-29 18:14:21', '2023-06-15 23:21:35', '2023-06-15 23:21:35');


CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `comentario` varchar(300) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `producto_id`, `usuario_id`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'QUIERO SER CAMPEON MUNDIAAAAAL', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(2, 1, 1, 'QUIERO GANAR LA TERCERAAAAA', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(3, 1, 1, 'AHORA NOS VOLVIMO A ILUSIONAAAAAAR', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(4, 1, 1, 'MUCHAAAAAAACHOOOOOS', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(5, 2, 1, 'Que ondaaaa. siganme en ig @messilover2007', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(6, 2, 1, 'Necesito 3, no tienen mas?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(7, 2, 1, 'me muero porfa que entre stock', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(8, 2, 1, 'Que equipazo que tenia el barca', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(9, 3, 2, 'Ufff que casacon', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(10, 3, 2, 'Que miedo que me dio cuando perdimos contra estos', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(11, 3, 2, 'Holaaaaa. Porque no me responde nadie', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(12, 3, 2, 'Queda stock?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(13, 4, 2, 'Gran regalo de cumpleaños para mis nietos. Muchas Gracias!', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(14, 4, 2, 'Queda la de grizu?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(15, 4, 2, 'No queda stock ni a palos no?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(16, 4, 2, 'Garate y el kÃ¼n fueron los mayores idolos de este club. Creados en EspaÃ±a, coronados por Argentinos.', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(17, 5, 3, 'NOOOO NO HAY MAS STOCK LPMMMM', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(18, 5, 3, 'Alta casaca. Buenisma calidad', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(19, 5, 3, '-Baldu, Â¿Seleneitor o una Big Mac? -Amigo la respuesta es obvia. Una buena triple queso, de que estamos hablando amigo? Que c*rajo man?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(20, 5, 3, 'Solo en este lugar encontras camisetas de Austria originales', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(21, 6, 3, 'Like si vienes de TikTok <3', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(22, 6, 3, 'Como va? Tienen la de ese aÃ±o pero visitante?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(23, 6, 3, 'QUARENTINHA melhor que Neymar', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(24, 6, 3, 'NÃLTON SANTOS >> PELE', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(25, 7, 4, 'La verdad el que se quejo por la calidad no tiene ni brasileÃ±oidea. Esta es una replica muy completa de la original', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(26, 7, 4, 'Muy buena aunque decepcionado con la calidad', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(27, 7, 4, 'RECOMIENDO 100/10, NO LA COMPRE PERO TIENE ALTA PINTA', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(28, 7, 4, 'Uuu la del birmingham, la vengo buscando hace aÃ±os', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(29, 8, 4, 'Todo bien con Nial Quinn pero Bergkamp es el mejor de los Gunners All-time', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(30, 8, 4, 'Ozil todavia no jugaba en esta epoca no?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(31, 8, 4, 'NO LA COMPREN. NO ME LLEGO, LA FUI A RECLAMAR Y ME MANDARON A *****', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(32, 8, 4, 'Es la de Tony Woodcock?!?!?!', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(33, 9, 5, 'ke onda amio alta pilcha', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(34, 9, 5, 'De quien es la remera?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(35, 9, 5, 'Tienen talle XL?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(36, 9, 5, 'Ni sabia que Checoslovakia tenia una seleccion', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(37, 10, 5, 'Hola, todavia no me llego. La compre hace 1 semana. Espero su respuesta', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(38, 10, 13, 'Solo la compre porque tengo pasaporte tano. No juego al fulbol pero me encanto', '2023-05-29 18:14:21', '2023-06-15 23:25:58', '2023-06-15 23:25:58'),
(39, 10, 13, 'Impresionado con la calidad, la misma que uso cr7 en su momento', '2023-05-29 18:14:21', '2023-06-15 23:25:58', '2023-06-15 23:25:58'),
(40, 10, 5, 'Buenas tienen stock?', '2023-05-29 18:14:21', '2023-05-29 18:14:21', '2023-05-29 18:14:21'),
(41, 3, 13, 'muy lindaa', '2023-06-15 23:49:39', '2023-06-15 23:49:39', '2023-06-15 23:49:39'),
(42, 2, 21, 'holaa', '2023-06-16 23:18:36', '2023-06-16 23:18:36', '2023-06-16 23:18:36'),
(43, 2, 21, 'gol', '2023-06-16 23:18:40', '2023-06-16 23:18:40', '2023-06-16 23:18:40'),
(44, 1, 21, 'holaa', '2023-06-16 23:32:59', '2023-06-16 23:32:59', '2023-06-16 23:32:59');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--


-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--


--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario2_id` (`usuario_id`),
  ADD KEY `fk_producto_id` (`producto_id`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario_id` (`usuario_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `DNI` (`DNI`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `fk_usuario2_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

