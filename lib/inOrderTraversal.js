module.exports = function inOrderTraversal(node) {
  
  if(!node) {
    throw new Error('Please provide a root element');
  }

  const stack = [];
  const output = [];
  let currentNode = node;

  while(stack.length > 0 || currentNode) {
    if(currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      currentNode = stack.pop();
      output.push(currentNode.data);
      currentNode = currentNode.right;
    }
  }

  return output;
}