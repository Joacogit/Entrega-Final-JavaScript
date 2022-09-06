// ARRAY EN EL QUE ESTARAN GUARDADOS TODOS LOS PRODUCTOS QUE TRABAJO

let lista_productos = [];

lista_productos.push( new Producto("APLIQUE DE PARED", 1000, 1, "Construido con madera pintada y laqueada, caños, portalámpara vintage con perilla de encendido/apagado y lámpara de filamentos led cálida decorativa. Envíos a todo el país ¡Consultanos lo que necesites!", imagen="Cards/aplique_de_pared.jpeg")),

lista_productos.push( new Producto("CUADRO CON LÁMPARA", 2000, 2, "Madera Pintada y Laqueada. Portalámparas vintage con perilla de encendido/apagado. Lámpara 5 w cálida de filamentos decorativa. Cable textil de color a elección. Medidas: 60 x 38 cm Ideal para apoyar tus llaves, el celu, adornos, una plantita o tus libros preferidos. Envíos a todo el país ¡Consultanos lo que necesites!", imagen= "Cards/cuadro_con_lampara.jpeg")),

lista_productos.push( new Producto("CUADRO DECO CON LUZ", 3000, 3, "Construido con madera laqueada, lienzo y luces a pilas. Medidas: 68 x 30 cm. Ideal para decorar tu hogar con la palabra o frase que mas te gusta y darle ese toque de iluminación cálido a tu espacio favorito. Envíos a todo el país ¡Consultanos lo que necesites!", imagen= "Cards/cuadro_deco_con_luz.jpeg")),

lista_productos.push( new Producto("VELADOR DE PARED", 4000, 4, "Construido con madera pintada y laqueada, caños, portalámpara vintage con perilla de encendido/apagado, cable decorativo textil de color y lámpara de filamentos led cálida decorativa. Muy práctico y cómodo, ideal para colgar sobre tu mesita de luz y tener mas espacio en ella. Consultanos por WhatsApp disponibilidad y colores.", imagen= "Cards/velador_de_pared.jpeg")),

lista_productos.push( new Producto("CUADRO CON ESTANTE", 5000, 5, "Madera Pintada y Laqueada. Medidas: 60 x 38 cm Ideal para apoyar tus llaves, el celu, adornos, una plantita o tus libros preferidos. Envíos a todo el país ¡Consultanos lo que necesites!", imagen= "Cards/cuadro_con_estante.jpeg")),

lista_productos.push( new Producto("LÁMPARA DECO", 6000, 6, "Construida con base de madera pintada y laqueada, caños, portalámpara vintage con perilla de encendido/apagado, cable decorativo textil de color y lámpara de filamentos led cálida decorativa. Medidas de la base: 30 x 12 cm.", imagen="Cards/lampara_deco.jpeg"))



// ______________ LocalStorage____________________

localStorage.setItem("lista", JSON.stringify(lista_productos));

lista_productos =JSON.parse(localStorage.getItem("lista"));



