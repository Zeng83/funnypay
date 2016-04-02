"use strict";

const Hapi = require("hapi");
const Inert = require("inert");

const server = new Hapi.Server();

server.connection({
  host: "localhost",
  port: 3000
});

function registerRoutes() {
  server.route([
    {
      path: "/js/{param*}",
      method: "GET",
      handler: {
        directory: {
          path: "dist/js"
        }
      }
    },
    {
      path: "/{param*}",
      method: "GET",
      handler: {
        directory: {
          path: "dist/html"
        }
      }
    }
  ]);
}

server.register(
  [
    {register: Inert}
  ],

  (err) => {
    if (err) {
      throw err;
    }

    registerRoutes();

    server.start((serverstartError) => {
      if (serverstartError) {
        throw serverStartError;
      }

      console.log("server running @ " + server.info.uri);
    });
  }
);
