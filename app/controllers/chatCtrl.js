/**
 * Created by Eric Barb on 9/27/2015.
 */

(function () {
    angular
        .module('app')
        .controller('chatCtrl', function (Data, $scope, PubNub) {

            console.log("Hello from the chatCtrl");

            PubNub.init({
                publish_key:'pub-c-ba8ae471-63e1-4f6c-8bd2-08079831291b',
                subscribe_key:'sub-c-dc1c5bb6-653a-11e5-bad4-02ee2ddab7fe',
                secret_key:'sec-c-ODQ4OTNhMGQtNzkwMy00YjdlLTk4Y2EtOTg2ZTBlNWEzYzQ1'
            });

            if (PubNub.initialized()) {
                console.log("PubNub Initialized");
            }


            $scope.postMessage = function(message) {
                console.log("Message posted");
                PubNub.ngPublish({
                    //channel: message.selectedChannel,
                    channel: "EB",
                    message: {
                        uuid: '12345',
                        message: message.message
                    }
                });
                $scope.message.message = "";
            };

            $scope.subscribe = function(subscribe) {
                //console.log("Test Room: ", subscribe.room);
                PubNub.ngSubscribe({
                    channel: subscribe.room,
                    message: function(m){console.log(m)},
                    callback: function() { console.log(arguments)},
                    error: function (error) {
                        // Handle error here
                        console.log(JSON.stringify(error));
                    }
                });
                console.log("Subscribed");
                $scope.subscribe.room = "";
                console.log("Channels: ", $scope.channels);
            };

            $scope.createChannel = function(channel) {
                PubNub.ngGrant({
                    channel: channel.name,
                    read: true,
                    write: true,
                    callback: function() {
                        return console.log("" + channel.name + " all set", arguments);
                    }
                });

            };


            $scope.channels = PubNub.ngListChannels()
            console.log("Channels: ", $scope.channels);

            //$scope.messages = m;
        })
})();
