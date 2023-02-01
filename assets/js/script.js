let saveButton = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//Different colours of blocks based on past,present or future
function colourTblock() {
    let hour = moment().hours();

    $(".time-block").each(function() {
        const currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// Function to save entry for each time block
saveButton.on("click", function() {

   
    let time = $(this).siblings(".hour").text();
    let plan = $(this).siblings(".plan").val().trim();

    // To store enter text in local storage
    localStorage.setItem(time, plan);
});

//To show user enter data from local storage when user refresh page
function userPlanner() {

    $(".hour").each(function() {
        let currHour = $(this).text();
        let currPlan = localStorage.getItem(currHour);

        if(currPlan !== null) {
            $(this).siblings(".plan").val(currPlan);
        }
    });
}

// 

colourTblock();
userPlanner();
