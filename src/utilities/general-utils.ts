/**
 * Used to iterate key/value arrays where the K keyof <TYPE>
 * Will get the first key from an Object
 * { 'K': any }[]
 **/
export function getFirstKey(obj: object) {
  return Object.keys(obj)[0];
}
