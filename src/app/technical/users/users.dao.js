(function() {
  'use strict';

  angular
    .module('technical.users')
    .factory('usersDao',usersDao);

    /* @ngInject */
    function usersDao(dataAccess,$q,$log){
    	var service = {
            getUser : getUser
    	}

    	return service;

        function getUser(){
            var deferred = $q.defer();
            dataAccess.getUser().then(function(response){
                deferred.resolve(response.data.users);
            }).catch(function(err){
                $log.error(err);
            })
            return deferred.promise;
        }
    }

})();
