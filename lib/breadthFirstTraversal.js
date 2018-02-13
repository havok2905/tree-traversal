module.exports = function breadthFirstTraversal(node) {
  
  if(!node) {
    throw new Error('Please provide a root element');
  }

  const queue = [node];
  const output = [];

  while(queue.length > 0) {
    const currentNode = queue.shift();

    output.push(currentNode.data);

    if(currentNode.left) {
      queue.push(currentNode.left);
    }

    if(currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return output;
}