const mysql = require('mysql2')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
})

module.exports = {
  index: (req, res) => {
    res.render('index', {
      title: 'moj web',
      message: 'hlavny nadpis na stranke'
    })
  },
  produkty: (req,res) => {
    res.render('produkty', {
      title: 'produkty',
      prods: [
        'Produkt 1',
        'Produkt 2',
        'Produkt 3'
      ]
    })
  },
  galeria: (req,res) => {
    res.render('galeria', {
      title: 'galeria'
    })
  },
  kontakt: (req,res) => {
    res.render('kontakt', {
      title: 'kontakt'
    })
  },
  posts: (req,res) => {
    conn.query(`SELECT title FROM posts WHERE id = ${req.params.id}`, function (err, results, fields) {
      res.render('posts', {
        title: 'prispevky',
        id: req.params.id,
        text: results[0].title
      })
    })
  }
}