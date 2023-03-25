class Node {
    constructor(text, imageURL, decision) {
        this.decision = decision;
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
    update() {
        let firstOption = document.getElementById("first");
        let secondOption = document.getElementById("second");
        let imagesrc = document.getElementById("imagesrc")
        if(this.currentNode.left != null || this.currentNode.right != null) {
            firstOption.textContent = this.currentNode.left.decision;
            secondOption.textContent = this.currentNode.right.decision;
            imagesrc.src = this.currentNode.imageURL;
            imagesrc.alt= "image";
            
        }
        else {
            firstOption.textContent = "THE";
            secondOption.textContent = "END"
        }
        
        let textBox = document. getElementById("text");
        textBox.textContent = this.currentNode.text;
    }
    goLeft() {
        this.currentNode = this.currentNode.left;
        this.update();
    }
    goRight() {
        this.currentNode = this.currentNode.right;
        this.update();
    }
    
}


let firstOption = document.getElementById("first");
firstOption.textContent = "test";
//gets the h1 tag
let secondOption = document.getElementById("second");
let textsrc = document.getElementById("text");


const test = new BinaryTree();



test.root = new Node("root", "/static/CYOA/download.jpg", "d");
test.currentNode = test.root;
test.root.left = new Node("left", "/static/CYOA/download2.jpg", "d");
test.root.right = new Node("right", "/static/CYOA/download2.jpg", "dd");
test.root.left.left = new Node("leftleft", "/static/CYOA/download2.jpg" ,"ddd");
test.root.left.right = new Node("leftright", "/static/CYOA/download2.jpg", "dddd");
test.root.right.left = new Node("rightleft", "/static/CYOA/download2.jpg", "ddddd");
test.root.right.right = new Node("rightright", "/static/CYOA/download2.jpg", "dddddd");
test.root.left.left.left = new Node("leftleftleft", "/static/CYOA/download2.jpg", "ddddddd");
test.root.left.left.right = new Node("leftleftright", "/static/CYOA/download2.jpg", "dddddddd");
test.root.left.right.left = new Node("leftrightleft", "/static/CYOA/download2.jpg", "ddddddddd");
test.root.left.right.right = new Node("leftrightright", "/static/CYOA/download2.jpg", "dddddddddd");
test.root.right.left.left = new Node("rightleftleft", "/static/CYOA/download2.jpg", "ddddddddddd");
test.root.right.left.right = new Node("rightleftright", "/static/CYOA/download2.jpg", "ddddddddddddd");
test.root.right.right.left = new Node("rightrightleft", "/static/CYOA/download2.jpg", "dddddddddddddd");
test.root.right.right.right = new Node("rightrightright", "/static/CYOA/download2.jpg", "dddddddddddddd");

firstOption.textContent = test.currentNode.left.decision;
secondOption.textContent = test.currentNode.right.decision;
textsrc.textContent = test.currentNode.text;



console.log(test.currentNode.text);

//gets the h1 tag


firstOption.onclick = function() {
    console.log("clicked");
    //Call a function that goes to the left of the current node
    test.goLeft();
}
secondOption.onclick = function() {
    console.log("clicked");
    //Call a function that goes to the right of the current node
    test.goRight();
}