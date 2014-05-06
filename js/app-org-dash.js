$(document).foundation();

var data = {
  labels : ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40,28,49,18,75,53]
    },
    {
      fillColor : "rgba(72,183,71,.5)",
      strokeColor : "rgba(69,151,68,1)",
      pointColor : "rgba(11,135,10,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,78,100,69,78,57,20,58]
    }
  ]
}

var fundsRaised = document.getElementById("fundsRaised").getContext("2d");
var fundsRaisedChart = new Chart(fundsRaised).Line(data);



var dataViews = {
  labels : ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"],
  datasets : [
    // {
    //   fillColor : "rgba(220,220,220,0.5)",
    //   strokeColor : "rgba(220,220,220,1)",
    //   pointColor : "rgba(220,220,220,1)",
    //   pointStrokeColor : "#fff",
    //   data : [65,59,90,81,56,55,40,28,49,18,75,53]
    // },
    {
      fillColor : "rgba(203,73,105,.5)",
      strokeColor : "rgba(168,49,79,1)",
      pointColor : "rgba(241,67,110,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,78,100,69,78,57,20,58]
    }
  ]
}

var pageViews = document.getElementById("pageViews").getContext("2d");
var pageViewsChart = new Chart(pageViews).Line(dataViews);


