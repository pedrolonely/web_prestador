module.exports = (app) => {
      app.get('/', (req, res, next) => {
            res.render('landing');
      })

      app.post('/', (req, res, next) => {
            res.redirect('landing');
      })

      app.get('/cadastro',(req, res, next) => {
            res.render('cadastro_usuarios');
      })

      app.post('/cadastro', (req, res ,next) => {
            res.redirect('cadastro_usuarios');
      })

      app.get('/login', (req, res, next) => {
            res.render('login');
      })

      app.post('/login', (req, res, next) => {
            console.log(req.body);
            res.redirect('/');
      })

      app.get('/recuperar_senha', (req, res, next) =>{
            res.rendr('forgot');
      })

      app.post('/recuperar_senha', (req, res, next) => {
            res.redirect('forgot');
      })

      app.get('/servicos', (req, res, next) => {
            res.render('descserv');
      })

      app.post('/servicos', (req, res, next) => {
            res.redirect('descserv');
      })
}