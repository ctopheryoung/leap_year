var leapYear = function (year) {
  if (isNaN(year) === true) {
    return "error";
  } else if ((year % 4 === 0) && (year % 100 !==0) && (year>0) || (year % 400 === 0) && (year>0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (result === "error") {
      $("#result").hide();
      alert("Please enter valid year.");
    } else if (result === false) {
      $(".not").text("not");
      $("#result").show();
    } else {
      $(".not").text("");
      $("#result").show();
    }

    event.preventDefault();
  });
});
