
/**
 * 
 * @param {*} $parent
 * @param {node} newNode 
 * @param {node} oldNode 
 * @param {number} index 
 */
function updateElement($parent, newNode, oldNode, index = 0) {
  // oldNode 가 없다면 새롭운 노드를 부모 안에 삽입한다. ( add )
  if (!oldNode) {
    $parent.apppend(
      createElement(newNode)
    );
  } else if (!newNode) {  // 새로운 노드가 없다면. 그 부모의 첫번째 자식을 지워라. ( remove )
    $parent.removeChild(
      $parent.childNodes[index]
    )
  } else if (changed(newNode, oldNode)) { // 변화를 감지했다면. 부모의 자식을 새로운 노드로 대체. ( replace )

    $parent.replaceChild(
      createElement(newNode),
      $parent.childNodes[index]
    );
  } else if (newNode.type) { // 타입이 있다는건 children 프로퍼티가 존재한다는것. ( compare child node )
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;

    for (let i = 0; i < newLength || i < oldLength; i++) { // 둘중 자식이 많은걸로 기준을 돌려라.
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      );
    }
  }
}