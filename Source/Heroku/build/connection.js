

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
var con=''
if(env==='dev') {
    con ='mongodb://localhost:27017/test'
}
else
{
    con='mongodb://arvind:arvind@ds147167.mlab.com:47167/arvind';
}
console.log(con);
exports.connectionString= con;