
var take=angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

take.controller("selfiectrl", function($scope, $cordovaCamera ,  $cordovaSocialSharing){

$scope.takePicture = function() {
        var options = { 
            quality : 75, 
            destinationType : Camera.DestinationType.DATA_URL, 
            sourceType : Camera.PictureSourceType.CAMERA, 
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 400,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
      $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
            // An error occured. Show a message to the user
        });
    }

    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share(null, null, "www/img/ionic.png", "https://github.com/ionicSV");


    }
 $scope.shareViaTwitter = function() {
        $cordovaSocialSharing.shareViaTwitter("Taller desarollo de apps hibridas con Ionic por Ionic Sv en el Flisol2015 en hecho en " + device.platform,"descarga el codigo fuente en","https://github.com/ionicSV");
}
})


 
 
