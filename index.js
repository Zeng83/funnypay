"use strict";

require("babel-core/register");

const Hapi = require("hapi");
const Inert = require("inert");

const server = new Hapi.Server();

const Home = require("./client/components/home.jsx").Home;

const React = require("react");
const ReactDom = require("react-dom/server");

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
      handler: function(req, reply) {
        const html = ReactDom.renderToString(React.createElement(Home));
        reply(`<!DOCTYPE html><div id="container">SSR: ${html}</div>
          <script src="http://localhost:2992/js/bundle.dev.js"></script>`);
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
