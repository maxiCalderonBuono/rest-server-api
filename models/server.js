
/*------- SERVER FUNCIONAL ------------

//IMPORTS

const express = require("express");

const server = express();

//MIDDLEWARES
server.use(express.static("public"));
//ROUTES
server.get("/", (req, resp) => {});

server.get("/otraruta", (req, resp) => {});

//LISTEN

server.listen(8080, () => console.log("Servidor corriendo en el puerto 8080")); */

// ------- SERVER ORIENTADO A OBJETOS ------------


//IMPORTS

const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config");

class Server {

    constructor () {
        this.app = express ();
        this.port= process.env.PORT;
        this.productsPath = '/api/products';

       //MIDDLEWARES
       this.middlewares();
       //ROUTES
       this.routes();

       //DB conection
       this.dbConnect();
    }
    

    async dbConnect() {
       await dbConnection();
    }


    middlewares() {
        //CORS

        this.app.use(cors())

        //Leer y parseo de body

        this.app.use(express.json())

        //Servir contenido estático
        this.app.use(express.static('public'))
    }

    routes() {
         this.app.use(this.productsPath, require('../routes/products'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }
}

module.exports = Server;