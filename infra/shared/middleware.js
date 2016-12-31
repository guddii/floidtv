import twig from 'twig';
import url from 'url';
import request from 'request';
import fs from 'fs';

// TODO: Split code into modules
export default function (req, res, next) {

  const options = {
    url: 'http://localhost:' + (process.env.PORT || 3000) + '/mocks'
  };

  let parsed = url.parse(req.url);
  let pathname = parsed.pathname;
  let file;
  let obj = JSON.parse(fs.readFileSync('infra/data/frame.json', 'utf8'));

  if (!pathname.match(/mocks/) && !pathname.match(/\.(.*)$/)) {

    let data = parsed.path;

    if (parsed.pathname === '/') {
      file = 'front';
      data = '/front';
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

      let copy = Object.assign({post: JSON.parse(body)}, obj);

      twig.cache(false);
      twig.renderFile(
        template,
        copy,
        (err, html) => {
          res.end(html);
        }
      );

    });

  } else {
    next();
  }

}
