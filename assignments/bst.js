function BST() {
    this.root = null;
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(val) {
    // If there is no root, create the root with given value, return

    // Else if there is a root, create a runner to point to root node
    // - Move the runner to the left or right, until we find a node with no child(leaf node)
};

var first = new BST();
first.root = new Node(30);
first.root.right = new Node(50);