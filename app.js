angular.module('RadioBrowserApp', ["ui.router", "ui.bootstrap"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('info', {
                url: "/",
                templateUrl: "partials/info.html"
            })
            .state('faq', {
                url: "/faq",
                templateUrl: "partials/faq.html"
            })
            .state('users', {
                url: "/users",
                templateUrl: "partials/users.html"
            })
            .state('owners', {
                url: "/owners",
                templateUrl: "partials/owners.html"
            })
            .state('api', {
                url: "/api",
                templateUrl: "partials/api.html"
            })
            .state('add', {
                url: "/add",
                templateUrl: "partials/edit.html",
                controller: "EditController as edit"
            })
            .state('edit', {
                url: "/edit/:id",
                templateUrl: "partials/edit.html",
                controller: "EditController as edit"
            })
            .state('history', {
                url: "/history/:id",
                templateUrl: "partials/history.html",
                controller: "HistoryController as ctrl"
            })

            // display categories
            .state('countries', {
                url: "/countries",
                templateUrl: "partials/countries.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/countries"
                        };
                    }
                },
                controller: "CategoryController as category"
            })
            .state('languages', {
                url: "/languages",
                templateUrl: "partials/languages.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/languages"
                        };
                    }
                },
                controller: "CategoryController as category"
            })
            .state('tags', {
                url: "/tags",
                templateUrl: "partials/tags.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/tags"
                        };
                    }
                },
                controller: "TagController as tags"
            })
            .state('codecs', {
                url: "/codecs",
                templateUrl: "partials/codecs.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/codecs"
                        };
                    }
                },
                controller: "CategoryController as category"
            })

            // display stations by category
            .state('byname', {
                url: "/byname/:name",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: ""
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('bylanguage', {
                url: "/bylanguage/:language",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: ""
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('bycountry', {
                url: "/bycountry/:country",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: ""
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('bytag', {
                url: "/bytag/:tag",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: ""
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('bycodec', {
                url: "/bycodec/:codec",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: ""
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('bystate', {
                url: "/bystate/:state",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: ""
                        };
                    }
                },
                controller: "ListController as list"
            })

            // display specialized lists of stations
            .state('topclick', {
                url: "/topclick",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/topclick/100"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('topvote', {
                url: "/topvote",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/topvote/100"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('broken', {
                url: "/broken",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/broken/100"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('deleted', {
                url: "/deleted",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/deleted"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('improve', {
                url: "/improve",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/improvable/10"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('lastchange', {
                url: "/lastchange",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/lastchange/100"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('lastclick', {
                url: "/lastclick",
                templateUrl: "partials/list.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/lastclick/100"
                        };
                    }
                },
                controller: "ListController as list"
            })
            .state('search', {
                url: "/search",
                templateUrl: "partials/search.html",
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/search"
                        };
                    }
                },
                controller: "SearchController as search"
            })
            .state('searchresult', {
                url: "/searchresult",
                templateUrl: "partials/list.html",
                params: {'complex': '', 'name': '', 'state': '', 'country': '', 'tag': ''},
                resolve: {
                    relLink: function () {
                        return {
                            value: "/json/stations/search"
                        };
                    }
                },
                controller: "ListController as list"
            });
    })
    .directive('ngEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    });
