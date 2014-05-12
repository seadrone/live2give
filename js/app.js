$(document).foundation();

var expenses = [
  {
    value: 7,
    color:"#e0e0e0"
  },
  {
    value : 93,
    color : "#48b747"
  }
];

var options = {
  percentageInnerCutout : 74
};

// var exp = $("#expenses").get(0).getContext("2d");
// var orgExp = new Chart(exp).Doughnut(expenses, options);

var exp = $("#expenses").get(0).getContext("2d");
new Chart(exp).Doughnut(expenses, options);
