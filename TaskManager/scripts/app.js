var isImportant = false;
var detailsVisible = true;

function toggleImportant() {
  if (isImportant) {
    $("#imp-star").removeClass("fas").addClass("far");
    isImportant = false;
  } else {
    $("#imp-star").removeClass("far").addClass("fas");
    isImportant = true;
  }
}

function saveTask() {
  // get the values from controls
  let title = $("#txtTitle").val();
  let desc = $("#txtDesc").val();
  let date = $("#dateDue").val();
  let alert = $("#selAlert").val();
  let location = $("#txtLocation").val();

  // create an object
  let aTask = new Task(title, desc, isImportant, date, alert, location);

  // console log the object
  console.log(aTask);
}

function init() {
  $("#imp-star").click(toggleImportant);
  $("#details-btn").click(function () {
    $("#details").toggle();
  });
  $("#save-btn").click(saveTask);
}

window.onload = init;
