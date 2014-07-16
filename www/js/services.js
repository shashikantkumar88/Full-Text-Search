angular.module('starter.services', [])

        /**
         * A simple example service that returns some data.
         */
        .factory('EmployeeService', function($q) {
            var employees = [
                {"id": 1, "firstName": "James", "lastName": "King", "title": "President and CEO", "department": "Corporate", "cellPhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg"},
                {"id": 2, "firstName": "Julie", "lastName": "Taylor", "title": "VP of Marketing", "department": "Marketing", "cellPhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Pune, MA", "pic": "Julie_Taylor.jpg"},
                {"id": 3, "firstName": "Eugene", "lastName": "Lee", "title": "CFO", "department": "Accounting", "cellPhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Mumbai, MA", "pic": "Eugene_Lee.jpg"},
                {"id": 4, "firstName": "John", "lastName": "Williams", "title": "VP of Engineering", "department": "Engineering", "cellPhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Pune, MA", "pic": "John_Williams.jpg"},
                {"id": 5, "firstName": "Pure", "lastName": "Moore", "title": "VP of Sales", "department": "Sales", "cellPhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Nagpur, MA", "pic": "Ray_Moore.jpg"},
                {"id": 6, "firstName": "Paul", "lastName": "Jones", "title": "QA Manager", "department": "Engineering", "cellPhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Nagar, MA", "pic": "Paul_Jones.jpg"},
                {"id": 7, "firstName": "Paula", "lastName": "Gates", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Nashik, MA", "pic": "Paula_Gates.jpg"},
                {"id": 8, "firstName": "Lisa", "lastName": "Wong", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Bhiwandi, MA", "pic": "Lisa_Wong.jpg"},
                {"id": 9, "firstName": "Gary", "lastName": "Donovan", "title": "Marketing Manager", "department": "Marketing", "cellPhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Paule, MA", "pic": "Gary_Donovan.jpg"},
                {"id": 10, "firstName": "Kathleen", "lastName": "Byrne", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg"},
                {"id": 11, "firstName": "Amy", "lastName": "Jones", "title": "Sales Representative", "department": "Sales", "cellPhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Amravati, MA", "pic": "Amy_Jones.jpg"},
                {"id": 12, "firstName": "Steven", "lastName": "Wells", "title": "Software Architect", "department": "Engineering", "cellPhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Bhiwandi, MA", "pic": "Steven_Wells.jpg"}
            ];

            // We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
            // but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
            // service with a JSON service that gets its data from a remote server without having to changes anything
            // in the modules invoking the data service since the api is already async.

            return {
                findAll: function() {
                    var deferred = $q.defer();
                    deferred.resolve(employees);
                    return deferred.promise;
                },
                findByAllText: function(searchKey) {
                    var deferred = $q.defer();
                    var results = employees.filter(function(element) {
                        var fullName = element.firstName + element.city;
                        return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
                    });
                    deferred.resolve(results);
                    return deferred.promise;
                }

            };
        });
