module.exports = function postOrderTraversal(node) {
  
  if(!node) {
    throw new Error('Please provide a root element');
  }

  const stack = [node];
  const output = [];

  while(stack.length > 0) {
    const currentNode = stack[stack.length -1];

    if(!currentNode.left && !currentNode.right) {
      const node = stack.pop();
      output.push(currentNode.data);
    } 
    else {
      if(currentNode.right) {
        stack.push(currentNode.right);
        currentNode.right = null;
      }
      
      if(currentNode.left) {
        stack.push(currentNode.left);
        currentNode.left = null;
      }
    }
  }

  return output;
}