var encode = encodeURIComponent;
/**
 * <span style='color:red;font-weight:bold'>序列化 query 对象</span>
 * @example
 * ```
 *   import { Url } from '@xhs_npm/JsCommonTools';
 *   Url.stringifyQuery({ a: 1, b: 2 }); // 'a=1&b=2' 
 * ```
 * @param  {Object} query
 * @return {Object} - 返回 query 字符串
 */
export function stringifyQuery(query: Object) {
  return Object.keys(query)
    .map(function (key) {
      var value = query[key];
      return encode(key) + "=" + encode(value);
    })
    .join("&");
}
/**
 * @description <span style='color:red;font-weight:bold'>解析 query 字符串</span>
 * @example
 * ```
 *  import { Url } from '@xhs_npm/JsCommonTools'; 
 *  Url.parseQuery('?a=1&b=2'); // { a: '1', b: '2' } 
 *  Url.parseQuery('a=1&b=2'); // { a: '1', b: '2' }
 * ```
 * @param  {string} str
 * @return {Object} - 返回 query 字符串
 * @version 1.1.7
 */
export function parseQuery(str: string) {
  var pairs = (str[0] === "?" ? str.slice(1) : str).split("&");
  return pairs.reduce(function (acc, value) {
    let _v = value.split("=");
    acc[_v[0]] = _v[1];
    return acc;
  }, {});
}
