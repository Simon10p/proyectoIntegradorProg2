USE dataMSN;m

CREATE TABLE usuarios ( 
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(200) NOT NULL,
foto_perfil VARCHAR(255),
cumpleaños DATETIME NOT NULL,
DNI INT NOT NULL UNIQUE,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 


CREATE TABLE productos(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED,
nombre_producto VARCHAR(100) NOT NULL,
descripcion VARCHAR(300) NOT NULL,
img_url VARCHAR(300),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT fk_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
); 


CREATE TABLE comentarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
producto_id INT UNSIGNED,
usuario_id INT UNSIGNED,
comentario VARCHAR(300) NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
CONSTRAINT fk_usuario2_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
CONSTRAINT fk_producto_id FOREIGN KEY (producto_id) REFERENCES productos(id)
); 

INSERT INTO usuarios(username, email, password, cumpleaños, dni)
VALUES('Mateo', 'mp@gmail.com', 'pupo123', '2003-10-08', 45074659);

INSERT INTO usuarios(username, email, password, cumpleaños, dni)
VALUES('ElPela', 'peladooo@gmail.com', 'sinpelo123', '2004-2usuarios-25', 46026839);

INSERT INTO usuarios(username, email, password, cumpleaños, dni)
VALUES('Shakant', 'nico-tina@outlook.com', 'andapaalla', '2002-03-06', 46834788);

INSERT INTO usuarios(username, email, password, cumpleaños, dni)
VALUES('Simon10p', 'nomon@yahoo.com', 'quincepeso', '2003-09-27', 45072284);

INSERT INTO usuarios(username, email, password, cumpleaños, dni)
VALUES('ElBro', 'broccoli@gmail.com', 'broston', '2022-12-18', 45678901);

INSERT INTO productos(nombre_producto, descripcion,img_url)
VALUES('Argentina 1986', 'Camiseta vintage de fútbol de Argentina, ganador de la Copa del Mundo 1986 en México, Argentina-Alemania 3-2','/images/argentina-1986-1-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES('Barcelona 1973-74','Camiseta vintage de fútbol del Barcelona 1973/74. Ganador de la Liga, campeón de España', '/images/barcelona-1973-74-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES('Arabia Saudita 1998','Camiseta vintage de fútbol de Arabia Saudita. Copa del Mundo 1998 en Francia','/images/saudi-arabia-1998-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES('Atletico Madrid 1985-86','Camiseta vintage de fútbol del Atlético Madrid 1985/86. Ganador de la Supercopa de España, Atlético Madrid-Barcelona 3-1','/images/atletico-madrid-1985-86-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES ('Austria 1938','Camiseta vintage de fútbol de Austria 1938, segunda equipación. Camiseta usada en el partido del Anschluss entre Austria y Alemania para celebrar la anexión a este última que tenía que terminar con un empate pero Austria ganó gracias a las hazañas de Matthias Sindelar','/images/Austira-1938.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES ('Botafogo 1968', 'Camiseta vintage de fútbol del Botafogo 1968. Ganador de la Taça Brasil, Botafogo-Fortaleza 2-2 e 4-0. Ganador del Campeonato Carioca, Botafogo-Vasco da Gama 4-0', '/images/botafogo-1968-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES ('Birmingham City 1972-73','Camiseta vintage de fútbol del Birmingham City 1972/73', '/images/birmingham-city-1972-73-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES ('Arsenal 1985-86', 'Camiseta vintage de fútbol del Arsenal 1985/86',  '/images/arsenal-1985-86-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES ('Checoslovaquia 1976','Camiseta vintage de fútbol della Cecoslovacchia. Ganador de la Eurocopa 1976 en Yugoslavia, Checoslovaquia-Alemania 5-3 (penaltis)', '/images/ceskoslovensko-1976-1.jpeg');

INSERT INTO productos(nombre_producto, descripcion, img_url)
VALUES ('Juventus 1984-85','Camiseta vintage de fútbol de la Juventus 1984/85. Ganador de la Copa de Europa, Juventus-Liverpool 1-0', '/images/juventus-1984-85-10.jpeg');


INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (1,1, 'QUIERO SER CAMPEON MUNDIAAAAAL');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (1,1, 'QUIERO GANAR LA TERCERAAAAA');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (1,1, 'AHORA NOS VOLVIMO A ILUSIONAAAAAAR');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (1,1, 'MUCHAAAAAAACHOOOOOS');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (2,1, 'Que ondaaaa. siganme en ig @messilover2007');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (2,1, 'Necesito 3, no tienen mas?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (2,1, 'me muero porfa que entre stock');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (2,1,'Que equipazo que tenia el barca');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (3,2, 'Ufff que casacon');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (3,2, 'Que miedo que me dio cuando perdimos contra estos');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (3,2, 'Holaaaaa. Porque no me responde nadie');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (3,2, 'Queda stock?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (4,2, 'Gran regalo de cumpleaños para mis nietos. Muchas Gracias!');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (4,2, 'Queda la de grizu?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (4,2, 'No queda stock ni a palos no?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (4,2, 'Garate y el kün fueron los mayores idolos de este club. Creados en España, coronados por Argentinos.');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (5,3, 'NOOOO NO HAY MAS STOCK LPMMMM');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (5,3, 'Alta casaca. Buenisma calidad');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (5,3, '-Baldu, ¿Seleneitor o una Big Mac? -Amigo la respuesta es obvia. Una buena triple queso, de que estamos hablando amigo? Que c*rajo man?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (5,3, 'Solo en este lugar encontras camisetas de Austria originales');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (6,3, 'Like si vienes de TikTok <3');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (6,3, 'Como va? Tienen la de ese año pero visitante?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (6,3, 'QUARENTINHA melhor que Neymar');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (6,3, 'NÍLTON SANTOS >> PELE');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (7,4, 'La verdad el que se quejo por la calidad no tiene ni brasileñoidea. Esta es una replica muy completa de la original');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (7,4, 'Muy buena aunque decepcionado con la calidad');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (7,4, 'RECOMIENDO 100/10, NO LA COMPRE PERO TIENE ALTA PINTA');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (7,4, 'Uuu la del birmingham, la vengo buscando hace años');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (8,4, 'Todo bien con Nial Quinn pero Bergkamp es el mejor de los Gunners All-time');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (8,4, 'Ozil todavia no jugaba en esta epoca no?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (8,4, 'NO LA COMPREN. NO ME LLEGO, LA FUI A RECLAMAR Y ME MANDARON A *****');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (8,4, 'Es la de Tony Woodcock?!?!?!');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (9,5, 'ke onda amio alta pilcha');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (9,5, 'De quien es la remera?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (9,5, 'Tienen talle XL?');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (9,5,'Ni sabia que Checoslovakia tenia una seleccion');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (10,5, 'Hola, todavia no me llego. La compre hace 1 semana. Espero su respuesta');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (10,5, 'Solo la compre porque tengo pasaporte tano. No juego al fulbol pero me encanto');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (10,5, 'Impresionado con la calidad, la misma que uso cr7 en su momento');

INSERT INTO comentarios(producto_id, usuario_id, comentario)
VALUES (10,5, 'Buenas tienen stock?');



