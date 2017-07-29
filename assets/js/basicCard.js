
BasicCard = function(front, back) {
    this.front = front;
    this.back = back;

    this.cardInfo = function() {
        console.log (front);
        console.log (back);
    };
};

// new basic card info
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back);


// making this infomation usable in other scripts
module.exports = BasicCard;