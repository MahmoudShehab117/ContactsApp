angular.module('myApp', []).controller('userCtrl', function($scope) {
$scope.fName = '';
$scope.lName = '';
$scope.email = '';
$scope.phone = '';
$scope.Contacts = [
{id:1, fName:'Mahmoud', lName:"Shehab" , email:"q@hotmail.com" , phone:"01000" },
{id:2, fName:'Ahmed',  lName:"Saleh" , email:"u@hotmail.com" , phone:"01001"},
{id:3, fName:'Alaa',  lName:"hamdy" , email:"t@hotmail.com" , phone:"010022"},
{id:4, fName:'Osama', lName:"Asem" , email:"g@hotmail.com" , phone:"010202"},
{id:5, fName:'Mohamed', lName:"ahmed" , email:"k@hotmail.com" , phone:"011220"},
{id:6, fName:'Marko',lName:"Nazmy" , email:"s@hotmail.com" , phone:"015230"}
];

$scope.edit = true;
$scope.ShowList = true;
$scope.error = false;
$scope.incomplete = false; 
$scope.hideform = true; 

$scope.showLists =function(){
$scope.ShowList = true;
$scope.hideform	= true;
}
$scope.editContact = function(id) {
  $scope.hideform = false;
  $scope.ShowList = false;
  if (id == 'new') {
    $scope.edit = true;
    $scope.incomplete = true;
    $scope.fName = '';
    $scope.lName = '';
	$scope.email = '';
	$scope.phone = '';
    } else {
    $scope.edit = false;
    $scope.fName = $scope.Contacts[id-1].fName;
    $scope.lName = $scope.Contacts[id-1].lName; 
	$scope.email = $scope.Contacts[id-1].email;
    $scope.phone = $scope.Contacts[id-1].phone;
  }
};

$scope.deleteUser = function(id) {
$scope.Contacts.splice(id-1, 1);
}
$scope.SaveNewContact = function(id){

	$scope.max = Math.max.apply(Math,$scope.Contacts.map(function(Contacts){return Contacts.id;}));
	$scope.Contacts.push({"id":$scope.max+1, "fName": $scope.fName ,"lName": $scope.lName ,"email": $scope.email ,"phone": $scope.phone});

}
$scope.$watch('fName', function() {$scope.test();});
$scope.$watch('lName', function() {$scope.test();});

$scope.test = function() {
  $scope.incomplete = false;
  if ($scope.edit && (!$scope.fName.length ||
  !$scope.lName.length ||
  !$scope.passw1.length || !$scope.passw2.length || !$scope.fName.length )) {
     $scope.incomplete = true;
  }
};

});