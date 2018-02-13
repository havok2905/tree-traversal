module.exports = function preOrderTraversal(node) {
  
  if(!node) {
    throw new Error('Please provide a root element');
  }

  const stack = [node];
  const output = [];

  while(stack.length > 0) {
    const currentNode = stack.pop();

    output.push(currentNode.data);

    if(currentNode.right) {
      stack.push(currentNode.right);
    }
    
    if(currentNode.left) {
      stack.push(currentNode.left);
    }
  }

  return output;
}