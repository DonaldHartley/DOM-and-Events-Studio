// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function() {
    let rocketObj = document.getElementById("rocket");
    rocketObj.style.left = "0px";
    let shuttleBkg = document.getElementById("shuttleBackground");
    let takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function (event){
        window.confirm("Confirm that the shuttle is ready for takeoff.") 
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        shuttleBkg.setAttribute("id", "bluebkg");
        document.getElementById("spaceShuttleHeight").innerHTML=10000;
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(){
        window.alert("he shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        shuttleBkg.setAttribute("id", "shuttleBackground");
        document.getElementById("spaceShuttleHeight").innerHTML=0;
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function (){
        window.confirm("Confirm that you want to abort the mission.");
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        shuttleBkg.setAttribute("id", "shuttleBackground");
        document.getElementById("spaceShuttleHeight").innerHTML=0;
    });

    let upButton = document.getElementById("up");
    upButton.addEventListener("click", function (){ 
        let val = document.getElementById("spaceShuttleHeight").innerHTML
        document.getElementById("spaceShuttleHeight").innerHTML=Number(val)+10000;
    });

    let downButton = document.getElementById("down");
    downButton.addEventListener("click", function (){ 
        document.getElementById("spaceShuttleHeight").innerHTML-=10000;
    });

    function moveRight() {
        document.getElementById("rocket").style.left = parseInt(rocketObj.style.left)+10+"px";
    }
    let rightButton = document.getElementById("right");
    rightButton.addEventListener("click", moveRight);

    function moveLeft() {
        document.getElementById("rocket").style.left = parseInt(rocketObj.style.left)-10+"px";
    }
    let leftButton = document.getElementById("left");
    leftButton.addEventListener("click", moveLeft);

});