/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

var app =
    angular.module('WebApp', ['ngRoute', 'ngAnimate'])

    // Configure the Routes
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        // Pages
        .when("/", {
        title : 'Transaction, Business and Investment Legal Counseling Advice',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl : 'partials/home.html',
        controller  : 'profileInfoCtrl'
        })
        .when("/the_firm", {
        title : 'Our Firm Values: Quality, Teamwork, Confidentiality, Strong Relationships',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/the_firm.html",
        controller: "profileInfoCtrl"
        })
        .when("/practice_areas", {
        title : 'Our Practice Areas, International Transaction, Business and Investment',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/practice_areas.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team", {
        title : 'Our Team. Teamwork and Highly Qualified Professionals is Our Aproach',
		robots : 'follow,index',
		description : 'An international law firm, focused on the jurisdictions of Europe and the Americas. We provide legal planning, advisory, counseling, and support services to large or small enterprises, start-up businesses, investors, and entrepreneurs engaged in international transactions, business or investments world-wide.',
		keywords : 'international law firm, international transaction, international business, international investments',
		canonical : '',
        templateUrl: "partials/our_team.html",
        controller: "profileInfoCtrl"
        })
        .when("/our_team/:id", {
        title : 'Our Team',
        templateUrl: function(urlattr){
                return 'partials/our_team/' + urlattr.id + '.html';
            },
        controller: "profileInfoCtrl"
        })
        .when("/contact", {
        title : 'Contact Us',
        templateUrl: "partials/contact.html",
        controller: "contactCtrl"
        })
        .when("/links_events", {
        title : 'Links and Events',
        templateUrl: "partials/links_events.html",
        controller: "profileInfoCtrl",
        })
        .when("/not_found", {
        title : 'Request Not Found',
        templateUrl: "partials/not_found.html",
        controller: "profileInfoCtrl"
        })

        .otherwise("/not_found", {redirectTo: "partials/not_found.html", controller: "PageCtrl"});

        // $locationProvider.html5Mode(true);
    }])


	.run(['$rootScope', function ($rootScope) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.title = current.$$route.title;
			$rootScope.description = current.$$route.description;
			$rootScope.keywords = current.$$route.keywords;
			$rootScope.canonical = current.$$route.canonical;
			$rootScope.robots = current.$$route.robots;
			window.scrollTo(0, 0);
		});
	}])

//    .controller('MainController', function($scope, $route, $routeParams, $location, $anchorScroll) {
//         $scope.$route = $route;
//         $scope.$location = $location;
//         $scope.$routeParams = $routeParams;

// 	    $scope.modalShown = false;
//         $scope.toggleModal = function() {
//             $scope.modalShown = !$scope.modalShown;
//         };
//         $scope.scrollTo = function (scrollLocation) {
//             $location.hash(scrollLocation);
//             $anchorScroll.yOffset = 20;
//             $anchorScroll();
//         }

//    })

    .controller('contactCtrl', ['$scope', function($scope) {

    	$('#mapUS').css({'height' : '250px'});
    	$('#mapFR').css({'height' : '250px'});
      	var coordinatesUS = {lat: 25.772439, lng: -80.191349};
      	var coordinatesFR = {lat: 48.874967, lng: 2.320793};

    	mapUS = new google.maps.Map(document.getElementById('mapUS'), {
    	  zoom: 15,
    	  scrollwheel: false,
    	  center: coordinatesUS
    	});
    	var marker = new google.maps.Marker({
    	  position: coordinatesUS,
    	  map: mapUS
    	});

    	mapFR = new google.maps.Map(document.getElementById('mapFR'), {
    	  zoom: 13,
    	  scrollwheel: false,
    	  center: coordinatesFR
    	});
    	var markerfrance = new google.maps.Marker({
    	  position: coordinatesFR,
    	  map: mapFR
     	});
    }])

//     .directive('modalDialog', function() {
//       return {
//         restrict: 'E',
//         scope: {
//           show: '='
//         },
//         replace: true, // Replace with the template below
//         transclude: true, // we want to insert custom content inside the directive
//         link: function(scope, element, attrs) {
//           scope.dialogStyle = {};
//           if (attrs.width)
//             scope.dialogStyle.width = attrs.width;
//           if (attrs.height)
//             scope.dialogStyle.height = attrs.height;
//           scope.hideModal = function() {
//             scope.show = false;
//           };
//         },
//         template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
//       };
//     })
//
//     .controller('modal', ['$scope', function($scope) {
//       $scope.modalShown = false;
//       $scope.toggleModal = function() {
//         $scope.modalShown = !$scope.modalShown;
//       };
//     }])

    .controller('profileInfoCtrl', ['$scope', '$location', function($scope, $location) {
        // TEAM USA
        $scope.profile1 = {
            memberName: "Lucius Smejda",
	        memberTitle: "Principal",
	        memberLocation: "USA, Canada",
	        memberURL: "Lucius_Smejda",
	        imageURL: "Lucius_Smejda.jpg"
	        };
        $scope.profile2 = {
	        memberName: "Joseph B. McFarland",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA",
	        memberURL: "Joseph_McFarland",
	        imageURL: "Joseph_McFarland.jpg"
	        };
        $scope.profile3 = {
	        memberName: "Antonio R. Zamora",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA",
	        memberURL: "Antonio_Zamora",
	        imageURL: "Antonio_Zamora.jpg"
	        };
        $scope.profile4 = {
	        memberName: "Elke Rolff",
	        memberTitle: "Of Counsel",
	        memberLocation: "USA, Switzerland",
	        memberURL: "Elke_Rolff",
	        imageURL: "Elke_Rolff.jpg"
	        };
        $scope.profile5 = {
	        memberName: "Maxim Istomin",
	        memberTitle: "Of Counsel",
	        memberLocation: "Russia, USA",
	        memberURL: "Maxim_Istomin",
	        imageURL: "Maxim_Istomin.jpg"
	        };
        $scope.profile6 = {
	        memberName: "Susanne Leone",
	        memberTitle: "Jurist",
	        memberLocation: "Germany",
	        memberURL: "Susanne_Leone",
	        imageURL: "Susanne_Leone.jpg"
	        };
        $scope.profile7 = {
	        memberName: "Evgeny V. Golovanov",
	        memberTitle: "Jurist",
	        memberLocation: "Russia",
	        memberURL: "Evgeny_Golovanov",
	        imageURL: "Evgeny_Golovanov.jpg"
	        };
        $scope.profile8 = {
	        memberName: "Jasmin Welker",
	        memberTitle: "Jurist",
	        memberLocation: "Germany",
	        memberURL: "Jasmin_Welker",
	        imageURL: "Jasmin_Welker.png"
	        };
        // TEAM INTERNATIONAL
        $scope.profile9 = {
	        memberName: "Jacques Ethier",
	        memberTitle: "Canada",
	        memberLocation: "Canada",
	        memberURL: "Jacques_Ethier",
	        imageURL: "Jacques_Ethier.jpg"
	        };
        $scope.profile10 = {
	        memberName: "Eric J.P. Citrey",
	        memberTitle: "France",
	        memberLocation: "France",
	        memberURL: "Eric_Citrey",
	        imageURL: "Eric_Citrey.jpg"
	        };
        $scope.profile11 = {
	        memberName: "Oliver Hance",
	        memberTitle: "Belgium and Luxemburg",
	        memberLocation: "Belgium and Luxemburg",
	        memberURL: "Oliver_Hance",
	        imageURL: "Oliver_Hance.jpg"
	        };
        $scope.profile12 = {
	        memberName: "Aleksandr Smirnov",
	        memberTitle: "Russia",
	        memberLocation: "Russia",
	        memberURL: "Aleksandr_Smirnov",
	        imageURL: "Aleksandr_Smirnov.jpg"
	        };
        $scope.profile13 = {
	        memberName: "Vladimir A. Troitskiy",
	        memberTitle: "Russia",
	        memberLocation: "Russia",
	        memberURL: "Vladimir_Troitskiy",
	        imageURL: "Vladimir_Troitskiy.jpg"
	        };
        $scope.profile14 = {
	        memberName: "Carlos Aud Sobrinho",
	        memberTitle: "Brazil",
	        memberLocation: "Brazil",
	        memberURL: "Carlos_Aud_Sobrinho",
	        imageURL: "Carlos_Aud_Sobrinho.jpg"
	        };
        $scope.profile15 = {
	        memberName: "Eric Vigneron",
	        memberTitle: "Dominican Republic",
	        memberLocation: "Dominican Republic",
	        memberURL: "Eric_Vigneron",
	        imageURL: "Eric_Vigneron.png"
	    };
	    $scope.isActive = function (viewLocation) {
             var active = (viewLocation === $location.path());
             return active;
        };
    }])
    .directive('myCustomer', function() {
        return {
            restrict: 'E',
            scope: {
                test: '=info'
            },
            templateUrl: function(elem, attr) {
                return 'tokens/profile-' + attr.type + '.html';
            }
        };
    });



//   app.controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
//     $scope.number = 0;
//     $interval(function() {
//       $scope.number++;
//     }, 1000);
//
//     var colors = ['red','blue','green','yellow','orange'];
//     $scope.colorClass = function(number) {
//       return colors[number % colors.length];
//     };
//   }]);
//





  // JQuery code

$(window).on('scroll', function(){
    var slideHeight = ('50');
	if( $(window).scrollTop()>slideHeight){
		$('.navbar.noscrollActive').removeClass('noscroll');
	} else {
		$('.navbar.noscrollActive').addClass('noscroll');
	}
});

// $(window).load(function(){
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		if (localStorage.fontSizeSet) {
// 			document.body.classList.add('font-size-' + localStorage.fontSizeSet);
// 			document.getElementById('fontSizeSelector').value = localStorage.fontSizeSet;
// 		}
// 		else {
// 			document.body.classList.add('font-size-1');
// 			document.getElementById('fontSizeSelector').value = '1';
// 		}
// 	}
// });
//
// // font size tool local storage
// $('#fontSizeSelector').change(function(){
// 	if ('localStorage' in window && window['localStorage'] !== null) {
// 		try {
// 			var fontSize = document.getElementById('fontSizeSelector').value;
// 			// The setItem(‘key’,’value’) allows us to write the data into the local storage.
// 			localStorage.setItem('fontSizeSet', fontSize);
// 			document.body.classList.remove('font-size-1', 'font-size-2', 'font-size-3');
// 			document.body.classList.add('font-size-' + fontSize);
// 		}
// 		catch (e) {
// 			if (e == QUOTA_EXCEEDED_ERR) {
// 				alert('Quota exceeded!');
// 			}
// 		}
// 	} else {
// 		alert('Error: Cannot set font size as your browser do not support local storage');
// 	}
// });
// $('label.font-size .default').click(function() {
// 	$("#fontSizeSelector").val(1);
// 	$("#fontSizeSelector").trigger('change');
// });
// $('label.font-size .larger').click(function() {
// 	$("#fontSizeSelector").val(2);
// 	$("#fontSizeSelector").trigger('change');
// });
// $('label.font-size .largest').click(function() {
// 	$("#fontSizeSelector").val(3);
// 	$("#fontSizeSelector").trigger('change');
// });
//
//
// // non working
// $('.dropdown-toggle').click(function() {
//     alert ('hi');
//     var location = $(this).attr('href');
//     window.location.href = location;
//     return false;
// });
//

