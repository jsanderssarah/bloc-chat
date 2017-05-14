(function() {
	function Message($firebaseArray, $cookies) {
		var Message = { };
		
		var ref = firebase.database().ref().child("Messages");
		Message.messages = $firebaseArray(ref);
		
        //filter messages by roomId
		Message.getByRoomId = function(roomId) {
			return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
		};
		
        Message.send = function(newMessage, roomID) {
				Message = {
					username: $cookies.get('blocChatCurrentUser'),
					content: newMessage,
					sentAt: getTime(),
					roomID: roomID
				}
				ref.$add(Message);
			}
		};
		
        return Message;
		
	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', '$cookies', Message]);
})();