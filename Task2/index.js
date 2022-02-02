    function setAlarm() {
        var hrs = document.getElementById("hrs").value;
        var min = document.getElementById("min").value;
        var sec = document.getElementById("sec").value;

        period = Number((Number(sec.value) + (Number(min.value) * 60) + Number((hrs.value * 3600))) * 1000);
        setTimeout(startAlarm, period);
    }
    function startAlarm() {
        var block = document.getElementsByClassName("block")[0];
        block.innerHTML = "alert";
    }
    function clearAlarm() {
        hrs.val = 0;
        min.val = 0;
        sec.val = 0;
        var block = document.getElementsByClassName("block")[0];
        block.innerHTML = "clear alarm";
    }
    function updateWatch() {
        var watch = document.getElementsByClassName("innerclk")[0];
        watch.innerHTML = (new Date()).toLocaleTimeString();
        var val = toString((new Date()).toLocaleTimeString());
        arr = val.split(":");
    }
    setInterval(updateWatch, 1000);