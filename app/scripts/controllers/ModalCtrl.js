(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        var modal = this;
        modal.close = function () {
            $uibModalInstance.dismiss();
        };
        
       
        modal.createRoom = function () {
            var roomName = document.getElementById('roomName').value;
            Room.add(roomName);
            $uibModalInstance.close();
        };
        
        modal.createUsername = function () {
            var Username = document.getElementById('username').value;
            $cookies.put('blocChatCurrentUser', Username);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();        