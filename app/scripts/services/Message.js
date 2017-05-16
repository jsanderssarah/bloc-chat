(function() {
	function Message($firebaseArray, $cookies) {
		var Message = { };
		
		var ref = firebase.database().ref().child("messages");
		var messages = $firebaseArray(ref);
		
        Message.all = messages;
        
        //filter messages by roomId
		Message.getByRoomId = function(roomId) {
			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
		};
		
        //Message.send = function (newMessage) {
            //messages.$add(newMessage);
            //newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
        //}
    
        Message.send = function(newMessage, roomId) {
            var xtime = function getTime() {
                var date = new Date();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                var dayNight = "AM";
                if (h > 12) {
                    h -= 12;
                    dayNight = "PM";
                }
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                return h + ":" + m + " " + dayNight;
            };
            var xuser = $cookies.get('blocChatCurrentUser');
            var messageObj = {
					username: xuser,
					content: newMessage,
					sentAt: xtime,
					roomID: roomID
            };
            messages.$add(messageObj);
		};
    
        return Message;
    }


	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();