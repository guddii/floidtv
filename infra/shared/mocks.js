import jsonServer from 'json-server';
import fs from 'fs';

export default function () {

  let server = jsonServer.create();
  let router = jsonServer.router('infra/data/db.json');

  router.render = function (req, res) {
    res.jsonp(
      {
        post: res.locals.data,
        menu: JSON.parse(fs.readFileSync('infra/data/menu.json', 'utf8')),
        site: JSON.parse(fs.readFileSync('infra/data/site.json', 'utf8'))
      });
  };

  server.use(jsonServer.rewriter({
    '/front/': '/post?post_type=video&post_type=testimonial',
    '/catalogue/:type/': '/post?post_type=:type',
    '/catalogue/:type/:category': '/post?post_type=:type&category=:category',
    '/search': '/post'
  }));

  server.use(router);

  return server;
}
