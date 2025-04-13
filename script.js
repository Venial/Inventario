// Mostrar fecha actual
function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  };
  document.getElementById("current-date").textContent = now.toLocaleDateString(
    "es-AR",
    options
  );
}
updateDate();
setInterval(updateDate, 60000); // Actualizar cada minuto

// Datos de ejemplo (en una app real, esto vendría de una base de datos)
let inventory = [
  {
    id: 1,
    name: "CORAZON",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 2,
    name: "CHINCHULIN",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 3,
    name: "HIGADO",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 4,
    name: "LENGUA",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 5,
    name: "MOLLEJAS",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 6,
    name: "MONDONGO",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 7,
    name: "RABO",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 8,
    name: "RIÑON",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 9,
    name: "SESOS",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 10,
    name: "TRIPA GORDA",
    category: "ACHURAS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 11,
    name: "ALITAS",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 12,
    name: "CAJON DE POLLO",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 13,
    name: "CHURRASCO DE POLLO",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 14,
    name: "CODITOS",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 15,
    name: "CUARTO TRASERO",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 16,
    name: "PAVITA",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 17,
    name: "PECHUGA",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 18,
    name: "POLLO DE GRANJA",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 19,
    name: "POLLO DESHUESADO",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 20,
    name: "SUPREMAS DE POLLO",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 21,
    name: "CHIVITO",
    category: "AVES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 22,
    name: "COCHINILLO",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 23,
    name: "CONEJO",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 24,
    name: "CORDERO",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 25,
    name: "CORDERO TROZADO",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 26,
    name: "LECHON TROZADO",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 27,
    name: "LECHON COCIDO",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 28,
    name: "LECHON",
    category: "BICHOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 29,
    name: "ARAÑITA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 30,
    name: "MOCHO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 31,
    name: "ASADO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 32,
    name: "ASADO AMERICANO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 33,
    name: "BIFE ANCHO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 34,
    name: "BIFE ANGOSTO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 35,
    name: "BIFE CON LOMO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 36,
    name: "BIFE DE CHORIZO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 37,
    name: "BIFE AMERICANO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 38,
    name: "BIFE MEDIANO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 39,
    name: "BIFES ENTEROS  /LOMO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 40,
    name: "BIFES ENTEROS  /LOMO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 41,
    name: "BOLA DE LOMO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 42,
    name: "CENTRO ENTRAÑA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 43,
    name: "CHIQUIZUELA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 44,
    name: "COLITA DE CUADRIL",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 45,
    name: "CUADRADA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 46,
    name: "CUADRIL",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 47,
    name: "CUARTO MAYORISTA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 48,
    name: "ENTRAÑA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 49,
    name: "FALDA PARRILLERA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 50,
    name: "HUESO CON CARNE",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 51,
    name: "LOMO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 52,
    name: "MATAMBRE ESPECIAL",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 53,
    name: "MEDIA RES MAYORISTA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 54,
    name: "NALGA CON TAPA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 55,
    name: "NALGA SIN TAPA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 56,
    name: "OJO DE BIFE",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 57,
    name: "OSOBUCO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 58,
    name: "PALETA ESPECIAL",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 59,
    name: "PALETA C/HUESO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 60,
    name: "PALOMITA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 61,
    name: "PARRILLERO SIN BIFE MAYORISTA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 62,
    name: "PASTRON",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 63,
    name: "PECETO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 64,
    name: "PICADA PREMIUN",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 65,
    name: "PICAÑIA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 66,
    name: "RECORTES PARA HAMBURGUESA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 67,
    name: "RECORTES PARA PICADA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 68,
    name: "RIÑONADA DE CUADRIL",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 69,
    name: "ROAST BEEF",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 70,
    name: "ROAST BEEF C/HUESO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 71,
    name: "TOMAHAWK",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 72,
    name: "TAPA DE ASADO",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 73,
    name: "TAPA DE BIFE",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 74,
    name: "TAPA DE NALGA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 75,
    name: "TORTUGUITA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 76,
    name: "VACIO ESPECIAL RES",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 77,
    name: "HAMBURGUESA GORINA",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 78,
    name: "HAMBURGUESA RES PACK X12",
    category: "CARNE",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 79,
    name: "MEDIAS RES CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 80,
    name: "BOLA DE LOMO CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 81,
    name: "BONDIOLA C/ HUESO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 82,
    name: "BONDIOLA DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 83,
    name: "CARRE C/HUESO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 84,
    name: "CARRE DESHUESADO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 85,
    name: "CARRE PREPARADO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 86,
    name: "CHULETA CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 87,
    name: "CHURRASCO DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 88,
    name: "CODILLO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 89,
    name: "COLITA DECUADRIL CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 90,
    name: "COSTILLITAS DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 91,
    name: "CUADRADA CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 92,
    name: "CUADRIL CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 93,
    name: "MATAMBRITO DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 94,
    name: "MEDIA DE CERDO MAYORISTA",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 95,
    name: "NALGA CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 96,
    name: "OREJA",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 97,
    name: "OSOBUCO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 98,
    name: "PALETA DE CERDO PIEZA ENTERA",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 99,
    name: "PATITA",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 100,
    name: "PECETO CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 101,
    name: "PECHITO DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 102,
    name: "PERNIL DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 103,
    name: "RIBS DE CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 104,
    name: "SOLOMILLO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 105,
    name: "CORTES DE CERDO PA",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 106,
    name: "TAPA DE NALGA CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 107,
    name: "TORTUGUITA CERDO",
    category: "CERDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 108,
    name: "CHORIZO BOMBON",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 109,
    name: "chorizo colorado calchaqui",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 110,
    name: "CHORIZO TRADICIONAL",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 111,
    name: "CHORIZO CON PARMESANO",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 112,
    name: "MORCILLA ATADA",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 113,
    name: "MORCILLA VASCA LA",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 114,
    name: "MORCILLA BOMBOM",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 115,
    name: "SALCHICHA AL VACIO",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 116,
    name: "MORCILLA ROSCA",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 117,
    name: "chorizo copetin la divisa",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 118,
    name: "morcilla copetin la divisa",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 119,
    name: "salchicha parrillera la divisa",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 120,
    name: "SALCHICHA FRESCA ATADA",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 121,
    name: "RECORTE PARA CHORIZO",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 122,
    name: "SALCHICHA PARRILLERA",
    category: "EMBUTIDO",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 123,
    name: "ALBONDIGAS DE CARNE",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 124,
    name: "PAN DE CARNE",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 125,
    name: "BASTONCITOS DE POLLO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 126,
    name: "BROCHETTES DE LOMO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 127,
    name: "BROCHETTES DE POLLO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 128,
    name: "HAMBURGUESA DE CERDO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 129,
    name: "HAMBURGUESA DE POLLO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 130,
    name: "HAMBURGUESA DE CARNE",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 131,
    name: "LENGUA A LA VINAGRETA",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 132,
    name: "MATAM DE CARNE COCIDO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 133,
    name: "MATAM DE CARNE PREPARADO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 134,
    name: "MATAM DE POLLO PREPARADO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 135,
    name: "PAMPLONA",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 136,
    name: "MILANESAS DE CERDO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 137,
    name: "MILANESA DE POLLO PATA",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 138,
    name: "MILANESA DE PECETO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 139,
    name: "MILANESA DE POLLO PECHUGA",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 140,
    name: "MILANESA DE TERNERA",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 141,
    name: "MILANESA DE LOMO",
    category: "PREPARADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 142,
    name: "NUGGETS DE POLLO",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 143,
    name: "MEDALLON DE POLLO",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 144,
    name: "PATITAS DE POLLO",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 145,
    name: "TIRITAS DE POLLO",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 146,
    name: "PAPAS SMILES",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 147,
    name: "NOISSET",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 148,
    name: "PAPAS CLASICAS",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 149,
    name: "AROS DE CEBOLLA",
    category: "CONGELADOS",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 150,
    name: "Salamin fino calchaqui",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 151,
    name: "Panceta Salada Calchaqui",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 152,
    name: "PANCETA AHUMADA LUVINKA",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 153,
    name: "PROVOLETA SANTA ROSA",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 154,
    name: "provoleta Veronica",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 155,
    name: "Muzza Barra Barraza",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 156,
    name: "Pategras Veronica",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 157,
    name: "BASTONES DE MUZZA",
    category: "FIAMBRES",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 158,
    name: "BOLSA CARBON",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 159,
    name: "bolsas leña",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 160,
    name: "Pastillas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 161,
    name: "Atados",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 162,
    name: "huevos x 6",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 163,
    name: "maple huevos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 164,
    name: "Pan Rayado",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 165,
    name: "Pan rayado crunch",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 166,
    name: "rebozador preferido",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 167,
    name: "Ajo picado en limon principe lujan",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 168,
    name: "Ajo picado en oliva principe lujan",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 169,
    name: "aceite oliva",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 170,
    name: "Jalapeño rojo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 171,
    name: "jalapeño ahumado",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 172,
    name: "jalapeño verde",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 173,
    name: "pepinos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 174,
    name: "morron entero",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 175,
    name: "morron agridulce",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 176,
    name: "berenjenas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 177,
    name: "Chimichurris los franciscos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 178,
    name: "Chimichurri picante los franciscos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 179,
    name: "Provenzal los franciscos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 180,
    name: "Salsa criolla los franciscos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 181,
    name: "salsa criolla picante los franciscos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 182,
    name: "ajo en girasol picante principe lujan",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 183,
    name: "Salsa Parrillera los franciscos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 184,
    name: "Aceitunas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 185,
    name: "aceitunas rellenas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 186,
    name: "jumbalay pimientos agridulces",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 187,
    name: "jumbalay pimientos morrones",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 188,
    name: "jumbalay ceboliitas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 189,
    name: "jumbalay pepinos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 190,
    name: "jumbalay berenjenas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 191,
    name: "jumbalay zapallos en almibar",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 192,
    name: "jumbalay higos en almibar",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 193,
    name: "ketchup Hellmanns",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 194,
    name: "Barbacoa hellmanns",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 195,
    name: "Savora Helmanns *250",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 196,
    name: "Mayo Hellmans *250",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 197,
    name: "Mayo Hellmans*250 LIVIANA",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 198,
    name: "Mayo Hellmans AJO *250",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 199,
    name: "kansas mayonesa",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 200,
    name: "kansas cesar",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 201,
    name: "kansas aioli",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 202,
    name: "kansas barbacoa",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 203,
    name: "Sazon pollo horno limon",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 204,
    name: "Sazon pollo horno criollo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 205,
    name: "Zazon barbacoa",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 206,
    name: "sazon romero",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 207,
    name: "sazon ajo y cebolla",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 208,
    name: "sazon hierbas y especias",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 209,
    name: "Pan Hamburguesa papa",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 210,
    name: "Pan Hamburguesa con queso",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 211,
    name: "Pure knor",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 212,
    name: "Pure knor (receta completa)",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 213,
    name: "Arroz Gallo Semillas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 214,
    name: "Arroz Gallo Verdeo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 215,
    name: "Arroz Gallo Vegetales",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 216,
    name: "Arroz gallo queso",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 217,
    name: "arroz gallo oro",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 218,
    name: "pure tomate inca",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 219,
    name: "pure de tomate la huerta",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 220,
    name: "pure tomate la campagnola",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 221,
    name: "tomate triturado HORVINDUL",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 222,
    name: "matarazzo spaghetti",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 223,
    name: "matarazzo mostachol",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 224,
    name: "matarazzo tirabuzon",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 225,
    name: "aceite cañuelas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 226,
    name: "jugo de limon minerva 500cc",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 227,
    name: "polenta presto pronta",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 228,
    name: "lentejas san remo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 229,
    name: "queso rallado milkaut 40 g",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 230,
    name: "queso rallado milkaut 120 g",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 231,
    name: "pringles clasicas",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 232,
    name: "pringles cebolla",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 233,
    name: "pringles queso",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 234,
    name: "pringles bife de chorizo / bacon",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 235,
    name: "lays",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 236,
    name: "3D",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 237,
    name: "3D (43 g)",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 238,
    name: "cheetos",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 239,
    name: "mani pehuamar",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 240,
    name: "Coca cola 1.75",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 241,
    name: "Coca Cola 500CC",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 242,
    name: "Coca Cola Zero 1.75",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 243,
    name: "Coca Cola Zero 500CC",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 244,
    name: "Fanta 1.75",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 245,
    name: "fanta pomelo 1.75",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 246,
    name: "Sprite 1.75",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 247,
    name: "Agua Smart 1.5",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 248,
    name: "Agua Smart 500cc",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 249,
    name: "Agua Benedictino 1.5",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 250,
    name: "aquarius manzana 1.5 L",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 251,
    name: "Aquarius pera 1.5 L",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 252,
    name: "powerade manzana",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 253,
    name: "Powerade blast",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 254,
    name: "heineken 473 ml",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 255,
    name: "monster energy 473 ml",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 256,
    name: "hielo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 257,
    name: "Fernet Branca 750cc",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 258,
    name: "Alamos Chardonay",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 259,
    name: "Alamos Malbec",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 260,
    name: "Alma Mora Malbec",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 261,
    name: "Alma Mora Chardonay",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 262,
    name: "Rutini trumpeter",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 263,
    name: "vino familia gascon",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 264,
    name: "vino cordero con piel de lobo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 265,
    name: "vino lopez",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 266,
    name: "vino nicasia",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 267,
    name: "Corona 330cc",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 268,
    name: "Vino blanco chacabuco",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 269,
    name: "Jugo de limon silva 1litro",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 270,
    name: "aceite de oliva x250ml",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 271,
    name: "Coca cola 2.5",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 272,
    name: "sprite 2.25",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 273,
    name: "pan de molde",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 274,
    name: "Huevos por x12",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 275,
    name: "arroz luchetti",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
  {
    id: 276,
    name: "coditos matarazzo",
    category: "ALMACEN",
    quantity: 0,
    unit: "unidades",
  },
];

// Elementos del DOM
const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("search-input");
const addProductBtn = document.getElementById("add-product-btn");
const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".close");
const productForm = document.getElementById("product-form");
const modalTitle = document.getElementById("modal-title");

// Variables para controlar si estamos editando
let isEditing = false;
let currentEditId = null;

// Formatear unidad para mostrar
function formatUnit(unit) {
  const unitsMap = {
    unidades: "Unidades",
    kg: "Kg",
    mg: "Mg",
  };
  return unitsMap[unit] || unit;
}

// Mostrar productos en la tabla
function renderInventory(products = inventory) {
  tableBody.innerHTML = "";

  // Filtrar productos con cantidad mayor a 0 para la impresión
  const productsToDisplay = products.filter((product) => {
    if (window.printing) {
      // Esta variable se establece antes de la impresión
      return product.quantity > 0;
    }
    return true; // Mostrar todos los productos en la vista normal
  });

  // Ordenar por rubro y luego por nombre
  productsToDisplay.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  productsToDisplay.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
              <td>${product.name}</td>
              <td>${product.category}</td>
              <td>${product.quantity}</td>
              <td>${formatUnit(product.unit)}</td>
              <td class="no-print action-btns">
                  <button class="edit-btn" data-id="${
                    product.id
                  }">✏️ Editar</button>
                  <button class="btn-danger delete-btn" data-id="${
                    product.id
                  }">🗑️ Eliminar</button>
              </td>
          `;

    tableBody.appendChild(row);
  });

  // Agregar event listeners a los botones de editar y eliminar
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", handleEdit);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", handleDelete);
  });
}

// Buscar productos
function searchProducts(query) {
  if (!query) {
    renderInventory();
    return;
  }

  const normalizedQuery = normalizeString(query.toLowerCase());

  const results = inventory.filter((product) => {
    const normalizedName = normalizeString(product.name.toLowerCase());
    const normalizedCategory = normalizeString(product.category.toLowerCase());

    return (
      normalizedName.includes(normalizedQuery) ||
      normalizedCategory.includes(normalizedQuery)
    );
  });

  renderInventory(results);
}

// Normalizar string para búsqueda(quitar acentos)
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Manejar búsqueda en tiempo real
searchInput.addEventListener("input", (e) => {
  searchProducts(e.target.value);
});

// Abrir modal para agregar producto
addProductBtn.addEventListener("click", () => {
  isEditing = false;
  currentEditId = null;
  modalTitle.textContent = "Agregar Producto";
  productForm.reset();
  document.getElementById("product-id").value = "";
  modal.style.display = "block";
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cerrar modal al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Manejar envío del formulario (agregar/editar)
productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const productData = {
    name: document.getElementById("product-name").value,
    category: document.getElementById("product-category").value,
    quantity: parseFloat(document.getElementById("product-quantity").value),
    unit: document.getElementById("product-unit").value,
  };

  if (isEditing) {
    // Editar producto existente
    const index = inventory.findIndex((p) => p.id === currentEditId);
    if (index !== -1) {
      inventory[index] = { ...inventory[index], ...productData };
    }
  } else {
    // Agregar nuevo producto
    const newId =
      inventory.length > 0 ? Math.max(...inventory.map((p) => p.id)) + 1 : 1;
    inventory.push({ id: newId, ...productData });
  }

  renderInventory();
  modal.style.display = "none";
  searchProducts(searchInput.value);
});

// Manejar edición de producto
function handleEdit(e) {
  const productId = parseInt(e.target.getAttribute("data-id"));
  const product = inventory.find((p) => p.id === productId);

  if (product) {
    isEditing = true;
    currentEditId = productId;
    modalTitle.textContent = "Editar Producto";

    document.getElementById("product-id").value = product.id;
    document.getElementById("product-name").value = product.name;
    document.getElementById("product-category").value = product.category;
    document.getElementById("product-quantity").value = product.quantity;
    document.getElementById("product-unit").value = product.unit;

    modal.style.display = "block";
  }
}

// Manejar eliminación de producto
function handleDelete(e) {
  if (confirm("¿Estás seguro de que querés eliminar este producto?")) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    inventory = inventory.filter((p) => p.id !== productId);
    renderInventory();
    searchProducts(searchInput.value);
  }
}

// Antes de imprimir, establecer una variable para indicar que estamos imprimiendo
window.addEventListener("beforeprint", () => {
  window.printing = true;
});

// Después de imprimir, restablecer la variable
window.addEventListener("afterprint", () => {
  window.printing = false;
  renderInventory(); // Volver a renderizar con todos los productos
});

// Inicializar la tabla
renderInventory();
