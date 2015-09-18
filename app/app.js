(function () {
  angular
      .module('app', ['ui.router', 'firebase'])
      .constant("ref", new Firebase("https://emoney2.firebaseio.com"))

})();