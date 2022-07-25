var save = $(".saveBtn"); 

// this code displays the current day at the top of the page using moment.js libdrary
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));
console.log(moment().format('dddd MMMM Do YYYY'))

//this code controls the colors of the timeblocks dependant upon the current moment.js clock/date vs the id given to the time-blocks in html
function tbColor() {
    // moment().hours () checks moment hours against the id of the timeblock and runs in military time 0-23
    var h = moment().hours();

    $(".time-block").each(function() {
        var current = parseInt($(this).attr("id"));

        if (current > h) {
            $(this).addClass("future");
        } else if (current === h) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

//this code saves any of the appointment information entered in the time blocks once the save button is selected
save.on("click", function() {

    var hour = $(this).siblings(".hour").text();
    var appointment = $(this).siblings(".appointment").val();

    localStorage.setItem(hour, appointment);
});

//this code displays the appointments and times that are set on the calendar
function setCalendar() {
    $(".hour").each(function() {
        var now = $(this).text();
        var whatsHappening = localStorage.getItem(now);

        if(now !== null) {
            $(this).siblings(".appointment").val(whatsHappening);
        }
    });
}


//this calls the functions 
tbColor();
setCalendar();