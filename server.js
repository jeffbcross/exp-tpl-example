

const app = require('express')();
app.set('views', '.');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/', function(req, res) {
  loadMyData(req.url)
    .then(metadata => res.render('index.html', metadata));
});

function loadMyData(url) {
  // Would load data from some other async source, for now we'll fake it.
  const metadata = {
    title: 'My Company - Home',
    meta: [{
      name: 'description',
      content: 'This is my company\'s home page'
    }]
  }
  return Promise.resolve(metadata);
}

app.listen(3000);

