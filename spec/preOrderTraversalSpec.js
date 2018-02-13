describe('preOrderTraversal', ()=> {
  var preOrderTraversal = require('../lib/preOrderTraversal');

  it('Throws an exception for a falsey root', ()=> {
    const error = new Error('Please provide a root element');

    expect(()=> { 
      preOrderTraversal(null); 
    }).toThrow(error);
  });

  it('Runs pre order traversal for a tree', function() {
    
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

    const expected = '125346';
    const result = preOrderTraversal(node).join('');

    expect(expected).toEqual(result);
  });

});