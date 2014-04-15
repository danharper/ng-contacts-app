angular.module('cmp.topNav', [])

.controller('TopNavController', require('./top-nav-controller.js'))

.directive('topNav', require('./top-nav-directive.js'))