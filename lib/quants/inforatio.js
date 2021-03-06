/**
 * Risk metrics
 */
 module.exports = function($u) {
/**
 * @method inforatio
 * @summary Information Ratio
 * @description Information Ratio
 * 
 * @param  {array|matrix} x asset/portfolio values
 * @param  {array} y benchmark values
 * @param  {number} dim dimension 0: row, 1: column (def: 1)
 * @return {number|matrix}      
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var z = [0.04,-0.022,0.043,0.028,-0.078,-0.011,0.033,-0.049,0.09,0.087];
 *
 * ubique.inforatio(x,y);
 * // 0.0936915
 * ubique.inforatio(ubique.cat(1,x,y),z);
 * // [[0.0263019, -0.0597049]]
 */
 $u.inforatio = function(x,y,dim) {
   if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    dim = 1;
  }
  var _ir = function(a,b) {
    return $u.xreturn(a,b) / $u.std($u.minus(a,b));
  }
  if ($u.isarray(x) && $u.isarray(y)) {
    return  _ir(x,y);
  } else
  if ($u.ismatrix(x) && $u.isarray(y)) {
    return $u.vectorfun(x,function(val){return _ir(val,y);},dim);
  } else {
   throw new Error('first input must be an array/matrix, the second one an array');
 }
}
}
