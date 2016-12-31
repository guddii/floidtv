import jsonServer from 'json-server';

export default function (server) {
  server = jsonServer.create();
  server.use(jsonServer.rewriter({
    '/front/': '/',
    '/category/:category': '/post?category=:category'
  }));
  server.use(jsonServer.router('infra/data/db.json'));
  return server;
}
