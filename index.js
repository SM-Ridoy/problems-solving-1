let value;
let text = "Honest is the best policy";

/* function reverse(str) {
    return str.split("").reverse().join("");
} */

/* function reverse(str) {
    let textSplit = str.split("");
    let textSplitReverse = textSplit.reverse();
    let textSplitReverseJoin = textSplitReverse.join("");
    return textSplitReverseJoin;
} 
console.log(reverse(text));
*/

/* function reverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}
reverse(text); */

/* function reverse(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverse(text)); */

/* function perfectFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        element = friends[i];
        if (element.length == 5) {
            break;
        }
    }
    return element;
}
const allFriends = ["alamin hossen", "abul ahmed", "babul", "kabul", "hamid"];
const friendsName = perfectFriend(allFriends);
console.log(friendsName); */

let num = [12, 344, 67, 8, 98, 12, 13, 34, 56, 78, 900, 11];

function matchNum(num) {
    for (let i = 0; i < num.length; i++) {
        element = num[i];
        if (Number(element) === Number(13)) {
            break;
        }
    }
    return element;
}
console.log(matchNum(num));