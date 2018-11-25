// para correr el servidor, pararse en la carpeta servidores y tipear en la consola
// node server
// luego hacer el request a localhost:3001

var http = require("http");

var servidor = http.createServer(function(req, res) {
  console.log("el request fue: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  var eventos = [
    {
      id: 1,
      nombre: "Hosen Fest",
      ubicacion: "Club Ciudad",
      fechaInicio: "10-11-18 22:00",
      fechaFin: "11-11-18 22:00",
      precio: 100
    },
    {
      id: 2,
      nombre: "Noel Gallagher",
      ubicacion: "Luna Park",
      fechaInicio: "12-11-18 23:00",
      fechaFin: "13-11-18 23:00",
      precio: 200
    },
    {
      id: 3,
      nombre: "Fiesta Clandestina",
      ubicacion: "Groove",
      fechaInicio: "12-11-18 21:00",
      fechaFin: "13-11-18 21:00",
      precio: 300
    },
    {
      id: 4,
      nombre: "Padel Master",
      ubicacion: "La Rural",
      fechaInicio: "15-11-18 19:00",
      fechaFin: "16-11-18 19:00",
      precio: 400
    },
    {
      id: 5,
      nombre: "LEGO Fun Fest",
      ubicacion: "La Rural",
      fechaInicio: "15-11-18 12:30",
      fechaFin: "15-11-18 12:30",
      precio: 500
    },
    {
      id: 6,
      nombre: "Solid Rock",
      ubicacion: "Tecnópolis",
      fechaInicio: "18-11-18 23:00",
      fechaFin: "19-11-18 23:00",
      precio: 600
    },
    {
      id: 7,
      nombre: "Fiesta D-lirante",
      ubicacion: "Palermo Club",
      fechaInicio: "18-11-18 23:00",
      fechaFin: "19-11-18 23:00",
      precio: 700
    },
    {
      id: 8,
      nombre: "Foster the People",
      ubicacion: "Estadio Obras",
      fechaInicio: "22-11-18 23:00",
      fechaFin: "23-11-18 23:00",
      precio: 800
    },
    {
      id: 9,
      nombre: "Hosen Fest",
      ubicacion: "Club Ciudad",
      fechaInicio: "23-11-18 20:00",
      fechaFin: "24-11-18 20:00",
      precio: 900
    }
  ];

  switch (req.url) {
    case "/eventos-interesantes":
      res.end(JSON.stringify(eventos));
      break;
    default:
      res.end(JSON.stringify("no la pegaste"));
  }
});

servidor.listen(3001, "127.0.0.1");
console.log("escuchando puerto 3001");
