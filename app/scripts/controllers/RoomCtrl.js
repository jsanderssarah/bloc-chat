(function() {
    function RoomCtrl(Room, $uibModal, $cookies) {
        var room = this;
        room.rooms = Room.all;
        room.currentUser = $cookies.get('blocChatCurrentUser');
        
        room.newRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', '$cookies', RoomCtrl]);
})();