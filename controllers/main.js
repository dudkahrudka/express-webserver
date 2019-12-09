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
  }
}