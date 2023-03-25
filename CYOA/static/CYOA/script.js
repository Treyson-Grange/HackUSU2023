console.log("hello")



class Node {
    constructor(text, imageURL) {
        this.imageURL = imageURL;
        this.text = text;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
        this.currentNode = this.root
    }
    insert(data, imageURL) {
        var newNode = new Node(data, imageURL);
        if(this.root === null) {
            this.root = newNode;
            console.log("asdf")
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if(node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    goLeft() {
        this.currentNode = this.currentNode.left;
    }
    goRight() {
        this.currentNode = this.currentNode.right;
    }
}
const test = new BinaryTree();
test.insert("1", "1");
console.log(test.root.text);
test.insert("2","2");
test.insert("3","3");
test.insert("3","3");
test.insert("3","3");
test.insert("3","3");
test.insert("4","4");
test.insert("6","6");
test.insert("7","8");
test.insert("2","9");
// console.log(test.root.left.left);



//gets the h1 tag
let firstOption = document.getElementById("first");
firstOption.textContent = "test";
//gets the h1 tag
let secondOption = document.getElementById("second");

firstOption.onclick = function() {
    console.log("clicked");
    //Call a function that goes to the left of the current node
    
}
secondOption.onclick = function() {
    console.log("clicked");
    //Call a function that goes to the right of the current node
}