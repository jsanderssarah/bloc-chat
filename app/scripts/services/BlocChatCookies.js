(function() {
2	    function BlocChatCookies($cookies, $uibModal) {
3	        var currentUser = $cookies.get('blocChatCurrentUser');
4	        if (!currentUser || currentUser === '') {
5	            $uibModal.open({
6	                templateUrl: '/templates/login.html',
7	                size: 'sm',
8	                controller: 'ModalCtrl as modal',
9	                keyboard: false,
10	                backdrop: 'static'
11	            });
12	        }
13	    }
14	    
15	    angular
16	        .module('blocChat')
17	        .run(['$cookies', '$uibModal', BlocChatCookies]);
18	})();