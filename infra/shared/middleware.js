import twig from 'twig';
import url from 'url';
import request from 'request';
import fs from 'fs';

// TODO: Split code into modules
export default function (req, res, next) {

  const options = {
    url: 'http://localhost:' + (process.env.PORT || 3000) + '/api'
  };

  let parsed = url.parse(req.url);
  let pathname = parsed.pathname;
  let file;

  if (!pathname.match(/api/) && !pathname.match(/\.(.*)$/)) {

    let data = parsed.path;

    if (parsed.pathname === '/') {
      file = 'front';
      data = '/front/';
    } else {
      file = pathname.split('/')[1];
    }

    let template = 'dist/views/page/' + file + '.twig';

    if (!fs.existsSync(template)) {
      console.log('Template not found');
      next();
    }

    request.get({url: options.url + data}, (error, response, body) => {

      if (error) {
        next();
      }

      if (response.statusCode === 404) {
        template = 'dist/views/page/404.twig';
      }

      twig.cache(false);
      twig.renderFile(
        template,
        JSON.parse(body),
        (err, html) => {
          res.set({'Content-Type': 'text/html; charset=UTF-8'});
          res.end(html);
        }
      );

    });

  } else {
    next();
  }

}
