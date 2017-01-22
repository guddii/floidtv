import jsonServer from 'json-server';
import fs from 'fs';

export default function () {

  let server = jsonServer.create();
  let router = jsonServer.router('infra/data/db.json');

  router.render = function (req, res) {
    let aside = JSON.parse(fs.readFileSync('infra/data/db.json', 'utf8'));
    res.jsonp(
      {
        post: res.locals.data,
        menu: JSON.parse(fs.readFileSync('infra/data/menu.json', 'utf8')),
        site: JSON.parse(fs.readFileSync('infra/data/site.json', 'utf8')),
        aside: {
          categories: aside.categories,
          overview: {
            overview1: {
              title: 'Campus Compact',
              posts: aside.post.filter(function (item) {
                if (item.category === 'kompakt') {
                  return item;
                }
              })
            },

            overview2: {
              title: 'Shuffle',
              posts: aside.post.filter(function (item) {
                if (item.category === 'shuffle') {
                  return item;
                }
              })
            }
          },
          testimonials: aside.post.filter(function (item) {
            if (item.post_type === 'quote') {
              return item;
            }
          })
        }
      });
  };

  server.use(jsonServer.rewriter({
    '/front/': '/post?post_type=video',
    '/catalogue/:type/': '/post?post_type=:type',
    '/catalogue/:type/:category': '/post?post_type=:type&category=:category',
    '/feed/:type/': '/post?post_type=:type',
    '/feed/:type/:category': '/post?post_type=:type&category=:category',
    '/search': '/post',
    '/author/:name': '/post?name=:name'
  }));

  server.use(router);

  return server;
}
