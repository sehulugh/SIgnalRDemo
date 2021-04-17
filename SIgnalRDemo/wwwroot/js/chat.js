"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

// run the cehcktime function every 3 sesconds after connection starts
connection.start().then(function () {
    window.setInterval(checkTime, 3000)
}).catch(function (err) {
    return console.error(err.toString());
});

// checktime function calls SendMessage server side function from the ChatHub.cs
function checkTime() {
    connection.invoke("SendMessage").catch(function (err) {
        return console.error(err.toString());
    });
}
// Receive Message js function will be called by SendMessage on ChatHub.cs to update Label
connection.on("ReceiveMessage", function (time) {   
    document.getElementById("message").innerHTML = time;
});



////Disable send button until connection is established
//document.getElementById("sendButton").disabled = true;

//connection.on("ReceiveMessage", function (user, message) {
//    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//    var encodedMsg = user + " says " + msg;
//    var li = document.createElement("li");
//    li.textContent = encodedMsg;
//    document.getElementById("messagesList").appendChild(li);
//});

//connection.start().then(function () {
//    document.getElementById("sendButton").disabled = false;
//}).catch(function (err) {
//    return console.error(err.toString());
//});

//document.getElementById("sendButton").addEventListener("click", function (event) {
//    var user = document.getElementById("userInput").value;
//    var message = document.getElementById("messageInput").value;
//    connection.invoke("SendMessage", user, message).catch(function (err) {
//        return console.error(err.toString());
//    });
//    event.preventDefault();
//});

