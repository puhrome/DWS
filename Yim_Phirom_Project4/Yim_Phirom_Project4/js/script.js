/**
 * Created by puhrome on 9/22/14.
 */


var today = new Date();
var hourNow = today.getHours();

if (hourNow >18) {
    greeting = ("Good Evening!");

}else if (hourNow > 12) {
    greeting = ("Good Afternoon!");

}else if (hourNow > 0) {
    greeting = ("Good Morning!");
}else {
    greeting = ("Welcome!");
}
document.write(greeting);

document.getElementById('h1');