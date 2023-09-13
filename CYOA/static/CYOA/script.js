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
    goLeft() {
        console.log("clicked left");
        this.currentNode = this.currentNode.left;
        this.update();
    }
    goRight() {
        console.log("clicked right");
        this.currentNode = this.currentNode.right;
        this.update();
    }
    update() {
        let imagesrc = document.getElementById("imagesrc");
        imagesrc.src = this.currentNode.imageURL;
        imagesrc.alt= "image";
        
        let story = document.getElementById('story');
        let newText = document.createElement('p');
        newText.textContent = this.currentNode.text;
        story.appendChild(newText);

        let firstOption = document.getElementById('first')
        if (this.currentNode.left != null) {
            firstOption.textContent = this.currentNode.left.decision;
        }
        else {
            firstOption.remove()
        }

        let secondOption = document.getElementById('second')
        if (this.currentNode.right != null) {
            secondOption.textContent = this.currentNode.right.decision;
        }
        else {
            secondOption.remove()
        }
        
        let decisions = document.getElementById('decisions')
        if (decisions.children.length == 0) {
            decisions.remove()
        }
    }
    
}
var audio = new Audio('/static/CYOA/Extraterra.mp3');
audio.play();

let firstOption = document.getElementById("first");
firstOption.textContent = "test";
//gets the h1 tag
let secondOption = document.getElementById("second");
let textsrc = document.getElementById("text");


const test = new BinaryTree();



test.root = new Node("You wake up to the sound of a blaring alarm and red light blinking throughout the cabin. Your crew mates have been gone to the nearby planet to gather supplies for several weeks and have yet to return. Their missing presence echos through the connecting hallway as you make your way to the spaceships control room. The systems are failing. You have the expertise to fix the problem, or you could join your crew mates in whatever fate they have encountered and take the escape pod to the planet below. What will you choose?", "/static/CYOA/1spaceship.png", "d");
test.currentNode = test.root;
test.root.left = new Node("You choose to take the escape pod. As you hurdle towards the planet, from the window you can see the ground slowly getting closer. The parachute deploys and you gently land in a lush forest. When you exit the escape pod, you notice mountains to the east, and to the west, you can hear the rush of a river nearby. Will you go to the mountains or to the river?", "/static/CYOA/2path.png", "Take escape pod");
test.root.right = new Node("With your knowledge of spaceship mechanics, you decide to go ahead and attempt to fix the issue. The system analysis from the control panel pinpointed the problem to the first compartment. The door to the first compartment has no windows due to the frequent changes in pressure from the airlock within. Without being able to see the issue, there are two possible ways to fix it. You could enter the compartment to fix the issue manually, or you could separate the compartment from the spaceship which will remove the issue completely.", "/static/CYOA/9compartment.png", "Try to fix spaceship");
test.root.left.left = new Node("You decide to make your way to the mountains. The view from the top will surely allow you to get better bearings for where you are and what resources are available to you. As you reach the top of the mountain, you find your crew mate, Erik Falor. He welcomes you to the planet, however, his tone begins to change. He has been here the longest out of all of the crew mates. He begins to speak of git in a religious context, thanking the git gods for git adding, git committing, and git pushing you to his life once more. The loneliness for those weeks has gotten to him and he has completely rejected society and created a new religion, or as he calls it, his git repo. Will you join in worshipping the git gods, or will you reject? ", "/static/CYOA/3erik.png" ,"Mountains");
test.root.left.right = new Node("As you make your way to the river, the sounds of rushing water get progressively louder. Once you make your way out of the forest and onto the beach of the river, you see in the distance one of your crew mates, Chad Mano. He's only been on the planet for a couple weeks, but from what you can see, he seems quite content, fishing in the river. He approaches you and welcomes you to the planet, telling you of his stories and his interactions with the aliens. He's called them the orbians, their bodies are relatively simple shapes, consisting of a body the shape of a cylinder and a head the shape of a sphere. They've graciously accepted him into their community and is now living with an orbian family. Chad invites you to meet his orbian family for a grand meal, do you accept or decline?", "/static/CYOA/6chad.png", "River");
test.root.right.left = new Node("You decide to put on a space suit and check the compartment for what the issue could be. When you open the door, you are quickly met with the vaccum of space, pulled through a large crater in the side of the room. Luckily you don't have damage to your space suit, but now you are hurtling through space. Do you try to float back towards the spaceship, or do you accept your fate and allow yourself to float way?", "/static/CYOA/10hole.png", "Go check compartment");
test.root.right.right = new Node("You decide to separate the compartment from the space ship. The blaring alarms turn off and the lights return to normal. With not much to do, would you like to check the other compartments or go back to the control room?", "/static/CYOA/13separate.png", "Separate compartment from spaceship");
test.root.left.left.left = new Node("The words Erik spoke to you of the git gods resonated with your soul and you decide to join his git repo. You spend the rest of your life on the planet, developing a society with the aliens you find and converting them to Gitism. Hoping that one day, the git gods will accept you into the great GitHub in the sky.", "/static/CYOA/4gitgod.png", "Join Erik's git repo and worship the git gods");
test.root.left.left.right = new Node("Erik has seemingly gone insane and you want no part in whatever gibberish he is speaking of. As you turn to walk away, Erik begins chanting, 'git add, git commit, git push! git add, git commit, git push!'. Suddenly a portal enters before you. Inside, you can see a seemingly never ending, recursive universe. Erik pushes you in, banishing you to the recursive universe for eternity.", "/static/CYOA/fractal.jpg", "Dont join");
test.root.left.right.left = new Node("You accept Chad's invitation to meet the orbians and have a meal with his orbian family. After the meal, you decide to join the orbian community and live the rest of your days on the new found planet and live a happy and peaceful life.", "/static/CYOA/7thanksgiving.png", "Accept the invitation");
test.root.left.right.right = new Node("You decline the offer to meet Chad's orbian family. He seems quite distraught with you from your decision. As you turn to walk away, Chad pulls out an Infinity Gauntlet, and with a single snap, you are turned to dust and float away with the wind.", "/static/CYOA/8thanos.png", "Decline the invitation");
test.root.right.left.left = new Node("As you try to float back to the spaceship to no avail, you realize that your space suit has thrusters. When you make it back to the space ship, you decide to separate the broken compartment from the rest of the ship to resolve the issue. You then continue on your journey safely.", "/static/CYOA/11fly.png", "Try to float back to the spaceship");
test.root.right.left.right = new Node("As you float away from the spaceship, understanding how the vaccuum of space works, you eventually come to accept that you will be stranded in space forever and allow yourself to peacefully float away. Suddenly a robot arm reaches for you and you see your crew mate, Joseph Ditton, in a space ship returning from his trip to the planet, controlling the robot arm via a VR headset. He brings you back to his spaceship and you both make it back to the main spaceship and continue on your journey.", "/static/CYOA/12joseph.png", "Accept your death");
test.root.right.right.left = new Node("You go to check the other compartments in the spaceship. As you walk into the last room, you stop at the sight of two red orbs staring at you in the darkness, the last thing you see before your world turns to black.", "/static/CYOA/14eyes.png", "Check other compartment");
test.root.right.right.right = new Node("You decide to go back to the control room and continue the journey. Eventually you make it to your destination and are welcomed to the new planet where humanity will have their new start. However, unknown to you, on the day of the incident on the spaceship, a robot made its way into one of the compartments. When you landed on the new planet, the robot left the spaceship and became an unstoppable force, killing all life on planet.", "/static/CYOA/15planet.png", "Go back to control room");

firstOption.textContent = test.currentNode.left.decision;
secondOption.textContent = test.currentNode.right.decision;
textsrc.textContent = test.currentNode.text;



console.log(test.currentNode.text);

//gets the h1 tag


firstOption.onclick = function() {
    //Call a function that goes to the left of the current node
    test.goLeft();
}
secondOption.onclick = function() {
    
    //Call a function that goes to the right of the current node
    test.goRight();
}