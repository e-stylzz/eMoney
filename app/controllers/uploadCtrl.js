/**
 * Created by Eric Barb on 9/25/2015.
 */

(function () {
    angular
        .module('app')
        .controller('uploadCtrl', function (Data, $scope) {

            console.log("Hello from the uploadCtrl");
            //
            //var documents = Data.getArray(['documents']);
            //
            //$scope.addDocument = function (doc) {
            //    documents.$add(doc).then(function () {
            //        console.log("Document Added");
            //    })
            //};

            //var refImg = new Firebase("https://emoney2.firebaseio.com/docs");
            var ImgObj = Data.getObject('docs');


            $scope.addDocument = function (doc) {
                var filename = doc.target.files[0];
                var fr = new FileReader();
                fr.onload = function (res) {
                    $scope.image = res.target.result;
                    ImgObj.data = res.target.result;
                    ImgObj.$save().then(function (val) {
                    }, function (error) {
                        console.log("ERROR", error);
                    })
                };
                fr.readAsDataURL(filename);
            };

            document.getElementById("fileUpload").addEventListener('change', $scope.addDocument, false);

            //var loadimage = function () {
            //    ImgObj.$loaded().then(function (obj) {
            //        $scope.profileImage = obj.image;
            //        console.log("loaded", $scope.profileImage);
            //        document.getElementById("profileImage").src = obj.image;
            //    }, function (error) {
            //        console.log("ERROR", error);
            //    });
            //};
            //loadimage();
        })
})();