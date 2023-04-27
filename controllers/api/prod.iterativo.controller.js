var express = require('express');
var config = require('config');
var router = express.Router();

router.post('/', produtorio);

module.exports = router;

async function getProdutorio(req) {

   let result = 1

   let m = parseInt(req.body.m)
   let n = parseInt(req.body.n)

   for(let i = m; i <= n; i++)
   {
      result = result * (i + 1/i)
   }

   return {
      result : result
   }
}

async function produtorio(req, res) {
   let info = await getProdutorio(req);
   res.send(
      info
   );
}
