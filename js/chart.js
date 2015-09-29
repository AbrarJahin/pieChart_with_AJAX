google.load("visualization", "1", {packages:["corechart"]});
function drawData()
{
  var data = new google.visualization.arrayToDataTable(getAJAXData('Task','Hours per Day'));
  //var data = new google.visualization.DataTable(jsonData);
  var options = {
                  title: 'My Daily Activities',
                  is3D: true,
                  width: '100%',
                  height: '100%',
                  chartArea:
                  {
                      left: "0%",
                      top: "10%",
                      height: "90%",
                      width: "100%"
                  }
                };
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

function getAJAXData(title_header,value_object)
{
  var jsonData = $.ajax({
                          url: "ajax.php",
                          dataType: "json",
                          async: false
                        }).responseText;
  /////////////////////////////////////////////
  var obj = JSON.parse(jsonData);
  //Received from AJAX is like - {"Work":11,"Eat":2,"Commute":2,"Watch TV":2,"Sleep":7}
  var dataArray =[[title_header, value_object]];

  for (var key in obj)
  {
      dataArray.push([key, parseInt(obj[key])]);
  }
  return dataArray;
}

$(function()
{
  //console.log("loaded");
  drawData();
});

$( window ).resize(function()
{
  //console.log("resize");
  drawData();
});