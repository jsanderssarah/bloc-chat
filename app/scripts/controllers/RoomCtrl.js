(function() {
    function RoomCtrl(Room) {
    
        var room = this;
        room.rooms = Room.all;
        
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl])
})();