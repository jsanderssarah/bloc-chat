(function() {
    function RoomCtrl(Room, Message, $uibModal, $cookies) {
        var room = this;
        room.currentRoom = null;
        room.rooms = Room.all;
        room.currentUser = $cookies.get('blocChatCurrentUser');
        
        room.newRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        room.showRoom = function(room) {
            room.currentRoom = room;
            room.messages = Message.getByRoomId(room.currentRoom.$id);
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', '$cookies', RoomCtrl]);
})();