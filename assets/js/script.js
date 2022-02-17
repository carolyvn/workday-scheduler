// Display today's date and time
var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentDay);

var saveBtn = $(".saveBtn");

// Add event listener to save value to local storage
saveBtn.on("click", function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,text);
});

// Display value from local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

var currentHour = moment().hour();

// Assign number to time-block
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;

// Change the background-color of time-block with associate class (present, past, or future)

if (currentHour < hour9) {
    $("#hour9 .description").addClass("future");
} else if (currentHour === hour9) {
    $("#hour9 .description").addClass("present");
} else if (currentHour > hour9) {
    $("#hour9 .description").addClass("past");
};

if (currentHour < hour10) {
    $("#hour10 .description").addClass("future");
} else if (currentHour === hour10) {
    $("#hour10 .description").addClass("present");
} else if (currentHour > hour10) {
    $("#hour10 .description").addClass("past");
};

if (currentHour < hour11) {
    $("#hour11 .description").addClass("future");
} else if (currentHour === hour11) {
    $("#hour11 .description").addClass("present");
} else if (currentHour > hour11) {
    $("#hour11 .description").addClass("past");
};

if (currentHour < hour12) {
    $("#hour12 .description").addClass("future");
} else if (currentHour === hour12) {
    $("#hour12 .description").addClass("present");
} else if (currentHour > hour12) {
    $("#hour12 .description").addClass("past");
};

if (currentHour < hour13) {
    $("#hour13 .description").addClass("future");
} else if (currentHour === hour13) {
    $("#hour13 .description").addClass("present");
} else if (currentHour > hour13) {
    $("#hour13 .description").addClass("past");
};

if (currentHour < hour14) {
    $("#hour14 .description").addClass("future");
} else if (currentHour === hour14) {
    $("#hour14 .description").addClass("present");
} else if (currentHour > hour14) {
    $("#hour14 .description").addClass("past");
};

if (currentHour < hour15) {
    $("#hour15 .description").addClass("future");
} else if (currentHour === hour15) {
    $("#hour15 .description").addClass("present");
} else if (currentHour > hour15) {
    $("#hour15 .description").addClass("past");
};

if (currentHour < hour16) {
    $("#hour16 .description").addClass("future");
} else if (currentHour === hour16) {
    $("#hour16 .description").addClass("present");
} else if (currentHour > hour16) {
    $("#hour16 .description").addClass("past");
};

if (currentHour < hour17) {
    $("#hour17 .description").addClass("future");
} else if (currentHour === hour17) {
    $("#hour17 .description").addClass("present");
} else if (currentHour > hour17) {
    $("#hour17 .description").addClass("past");
};
