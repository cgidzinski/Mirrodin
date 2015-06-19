
app.controller('HomeCtrl', ['$scope', function($scope) {
	console.log("Home Loaded");
   $("#wrapper").toggleClass("toggled");
$scope.emails=452;

$scope.events = [
{title:'Some Event', date:'6/18/2015', time: '12:30', text:'blaaah', img:'./index.svg', orgin:'iCal',url:'http://www.google.ca'}, 
{title:'event 2', date:'7/14/2015', time: '16:33', text:'bloooooh', img:'./index.svg', orgin:'iCal',url:'http://www.bing.com'}
]


    $scope.toggleMenu = function() {
       $("#wrapper").toggleClass("toggled");
    };
    
}]);