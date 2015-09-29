google.load("visualization", "1", {packages:["corechart"]});
function drawData()
{
  var dataArray =[['Task', 'Hours per Day']];
  var arr1=['Work','Eat','Commute','Watch TV','Sleep'];
  var arr2=[11,2,2,2,7]; 
  for(var n=0; n < arr2.length; n++)
  { 
    dataArray.push([arr1[n], parseInt(arr2[n])]);
  }
  var data = new google.visualization.arrayToDataTable(dataArray);
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
//google.setOnLoadCallback(drawData);

$(function()
{
  console.log("loaded");
  drawData();
});

$( window ).resize(function()
{
  console.log("resize");
  drawData();
});