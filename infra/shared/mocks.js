import jsonServer from 'json-server';

export default function (server) {
  server = jsonServer.create();
  server.use(jsonServer.rewriter({
    '/front/': '/',
    '/catalogue/:type/': '/post?post_type=:type',
    '/catalogue/:type/:category': '/post?post_type=:type&category=:category'
  }));
  server.use(jsonServer.router('infra/data/db.json'));
  return server;
}
