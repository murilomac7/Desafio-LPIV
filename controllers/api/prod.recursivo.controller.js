var express = require('express');
var config = require('config');
var router = express.Router();

router.post('/', produtorio);

module.exports = router;

async function getProdutorio(m, n, result = 1) {

   result = result * (m + 1/m)

   if(m == n)
      return result
   else
   {
      m++;
      return getProdutorio(m, n, result)
   }
      

}

async function produtorio(req, res) {
   let m = parseInt(req.body.m)
   let n = parseInt(req.body.n)
   let info = await getProdutorio(m, n);
   res.send(
      {
         result : info
      }
   );
}
