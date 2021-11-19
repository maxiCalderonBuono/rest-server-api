const {Router} = require ('express') ;
const { productsGet, productsPost, productsPut, productsDelete } = require('../controllers/products');

const router = Router() ;

router.get('/', productsGet);

router.post('/', productsPost);

router.put('/:id', productsPut);

router.delete('/:id', productsDelete);

module.exports= router;