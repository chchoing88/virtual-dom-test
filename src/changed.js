
/**
 * 
 * @param {node} node1 
 * @param {node} node2 
 * @return {boolean}
 * 
 *
 */
function changed(node1, node2) {
  return typeof node1 !== typeof node2 ||
    typeof node1 === 'string' && node1 !== node2 ||
    node1.type !== node2.type
}