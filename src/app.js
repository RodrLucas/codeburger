import express from 'express';
import routes from './routes';
import './database'; // SÓ DE IMPORTAR ELE INSTANCIA O DB E FAZ A CONEXÃO COM TODOS OS MODELS

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
