describe('breadthFirstTraversal', function() {
  var breadthFirstTraversal = require('../lib/breadthFirstTraversal');

  it('Throws an exception for a falsey root', function() {
    const error = new Error('Please provide a root element');

    expect(()=> { 
      breadthFirstTraversal(null); 
    }).toThrow(error);
  });

  it('Runs breadth first traversal for a tree', function() {
    
    class Node {
      constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
      }
    }

    const node = new Node(1);
    node.right = new Node(2);
    node.right.right = new Node(5);
    node.right.right.left = new Node(3);
    node.right.right.left.right = new Node(4);
    node.right.right.right = new Node(6);

    const expected = '125364';
    const result = breadthFirstTraversal(node).join('');

    expect(expected).toEqual(result);
  });

});