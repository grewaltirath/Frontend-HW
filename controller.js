var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
  console.log("inside");
  $scope.disp=false;
  $scope.sear="";
  var check=$scope.sear;
  
  $scope.details=
  [
    {
      "_id": "5b43a964d4490316ee78cf82",
      "index": 0,
      "guid": "55cfe130-33f8-4bb5-ba1c-e1479bf15a19",
      "isActive": false,
      "balance": "$2,512.33",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": "Keller Olson",
      "gender": "male",
      "company": "EWAVES",
      "email": "kellerolson@ewaves.com",
      "phone": "+1 (849) 598-3607",
      "address": "274 Arkansas Drive, Sterling, Missouri, 4161",
      "about": "Ea dolore anim eiusmod culpa dolore laboris veniam labore labore aliqua laborum aliquip reprehenderit culpa. Laboris laboris ex dolore dolore enim pariatur enim et consequat qui eiusmod consequat esse. Ipsum Lorem esse ipsum non. Cillum veniam cupidatat nulla nostrud nisi. Deserunt aliquip exercitation voluptate laboris est exercitation enim do excepteur officia id nostrud nostrud. Mollit elit officia do ad pariatur. Sit est eu laborum mollit reprehenderit velit.\r\n",
      "registered": "2014-10-24T11:05:16 +07:00",
      "latitude": -3.216734,
      "longitude": 144.339255,
      "tags": [
        "non",
        "aute",
        "ea",
        "culpa",
        "est",
        "dolore",
        "mollit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Sharpe Merrill"
        },
        {
          "id": 1,
          "name": "Melva Finley"
        },
        {
          "id": 2,
          "name": "Odonnell Spencer"
        }
      ],
      "greeting": "Hello, Keller Olson! You have 7 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5b43a96431d7e39039838908",
      "index": 1,
      "guid": "bd492bd3-9281-4a86-8a3f-1323e71ae8ea",
      "isActive": true,
      "balance": "$3,325.39",
      "picture": "http://placehold.it/32x32",
      "age": 37,
      "eyeColor": "green",
      "name": "Benton Petersen",
      "gender": "male",
      "company": "LIMAGE",
      "email": "bentonpetersen@limage.com",
      "phone": "+1 (867) 570-3113",
      "address": "302 Stewart Street, Allentown, California, 9399",
      "about": "Amet anim est aute magna elit. Id eiusmod quis adipisicing aliqua reprehenderit culpa. Velit dolore labore cillum dolore eiusmod elit aliqua laborum incididunt Lorem. Labore amet enim do occaecat eiusmod officia tempor officia nulla velit ex. Enim voluptate excepteur qui pariatur. Ipsum nostrud ipsum sit cillum eiusmod anim dolor deserunt nisi ad irure laboris. Ea do mollit in nisi velit consectetur culpa velit labore labore velit.\r\n",
      "registered": "2017-05-04T11:22:20 +07:00",
      "latitude": -65.922525,
      "longitude": 173.140313,
      "tags": [
        "amet",
        "esse",
        "consectetur",
        "aute",
        "cillum",
        "eu",
        "pariatur"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Alisha Tyler"
        },
        {
          "id": 1,
          "name": "Barbra Ray"
        },
        {
          "id": 2,
          "name": "Mattie Parsons"
        }
      ],
      "greeting": "Hello, Benton Petersen! You have 1 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5b43a9643e40964db3468983",
      "index": 2,
      "guid": "30abda31-3e42-45f5-8d8f-ff402b9fde43",
      "isActive": true,
      "balance": "$2,321.61",
      "picture": "http://placehold.it/32x32",
      "age": 21,
      "eyeColor": "blue",
      "name": "Jefferson Doyle",
      "gender": "male",
      "company": "GENMY",
      "email": "jeffersondoyle@genmy.com",
      "phone": "+1 (864) 492-2728",
      "address": "528 Woodside Avenue, Collins, Palau, 1099",
      "about": "Est esse quis incididunt adipisicing. Eu dolore laboris sunt dolore. Enim excepteur eiusmod et officia ex voluptate proident deserunt proident excepteur occaecat. Officia ullamco eu amet veniam voluptate cillum id elit adipisicing ea.\r\n",
      "registered": "2017-01-28T09:42:41 +08:00",
      "latitude": -86.112223,
      "longitude": -136.887624,
      "tags": [
        "exercitation",
        "amet",
        "Lorem",
        "sint",
        "cillum",
        "laborum",
        "reprehenderit"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Lois Schultz"
        },
        {
          "id": 1,
          "name": "Parker Macdonald"
        },
        {
          "id": 2,
          "name": "Hernandez Wilkins"
        }
      ],
      "greeting": "Hello, Jefferson Doyle! You have 9 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5b43a9649910f8e14bdc894e",
      "index": 3,
      "guid": "7fc2a0d0-c02f-4e99-9c97-81ebbbc7f483",
      "isActive": false,
      "balance": "$3,498.74",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "green",
      "name": "Rita Small",
      "gender": "female",
      "company": "ESSENSIA",
      "email": "ritasmall@essensia.com",
      "phone": "+1 (829) 530-3084",
      "address": "275 Poplar Avenue, Tuskahoma, Nebraska, 9433",
      "about": "Ea fugiat duis aliqua in id dolore tempor. Ex non elit ad laboris duis nisi excepteur aliqua occaecat Lorem consequat occaecat id. Nostrud velit excepteur nulla voluptate anim nisi irure fugiat tempor veniam nostrud. Sunt irure mollit do excepteur. Excepteur nostrud excepteur est et sunt laborum nulla aliqua magna elit velit cillum labore. Laborum aliqua quis esse eu esse nulla qui veniam nisi culpa exercitation. Deserunt voluptate laborum laborum nulla consectetur.\r\n",
      "registered": "2017-12-05T05:00:59 +08:00",
      "latitude": 2.177029,
      "longitude": -153.989159,
      "tags": [
        "id",
        "incididunt",
        "id",
        "dolore",
        "qui",
        "ipsum",
        "est"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Martin Carpenter"
        },
        {
          "id": 1,
          "name": "Kent Callahan"
        },
        {
          "id": 2,
          "name": "Tasha Potter"
        }
      ],
      "greeting": "Hello, Rita Small! You have 4 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5b43a964ab238f09c9f95480",
      "index": 4,
      "guid": "27b7bb14-3892-4080-b712-8a8a38a43c89",
      "isActive": false,
      "balance": "$1,041.91",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "brown",
      "name": "Becker Blanchard",
      "gender": "male",
      "company": "SKYBOLD",
      "email": "beckerblanchard@skybold.com",
      "phone": "+1 (913) 412-3908",
      "address": "840 McKinley Avenue, Caln, Mississippi, 2803",
      "about": "Sunt ad magna dolor qui ad officia nulla reprehenderit ea occaecat proident occaecat consectetur. Laborum sunt cillum veniam Lorem veniam ipsum et culpa cupidatat irure ea ut id ullamco. Culpa aliqua in veniam ipsum aliqua reprehenderit. Nulla laboris eiusmod deserunt enim ad sunt irure cillum aliqua fugiat do in est deserunt.\r\n",
      "registered": "2018-06-04T06:17:14 +07:00",
      "latitude": -41.415015,
      "longitude": -121.867451,
      "tags": [
        "et",
        "esse",
        "fugiat",
        "in",
        "sit",
        "esse",
        "anim"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Karina Maxwell"
        },
        {
          "id": 1,
          "name": "Jenna Irwin"
        },
        {
          "id": 2,
          "name": "Rosalyn Rutledge"
        }
      ],
      "greeting": "Hello, Becker Blanchard! You have 5 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "5b43a96434fb81484bcc5434",
      "index": 5,
      "guid": "593736ba-d6ec-4dfd-a778-5c3d0922718a",
      "isActive": true,
      "balance": "$3,621.96",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "eyeColor": "green",
      "name": "Simon Mathis",
      "gender": "male",
      "company": "ZAYA",
      "email": "simonmathis@zaya.com",
      "phone": "+1 (926) 540-3853",
      "address": "180 Jefferson Street, Swartzville, Federated States Of Micronesia, 8359",
      "about": "Esse voluptate Lorem tempor laborum ad enim ea. Aliqua occaecat occaecat enim occaecat enim cupidatat eiusmod culpa minim aliqua laborum nulla ex. Nulla proident aliqua consectetur do eiusmod dolore consectetur cupidatat commodo cupidatat. Ad amet cupidatat cupidatat irure esse veniam aliquip exercitation ex pariatur. Proident anim eiusmod Lorem incididunt ullamco.\r\n",
      "registered": "2015-07-20T05:50:44 +07:00",
      "latitude": 35.291893,
      "longitude": 90.73699,
      "tags": [
        "cillum",
        "aute",
        "fugiat",
        "Lorem",
        "irure",
        "reprehenderit",
        "aliqua"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Farrell Chavez"
        },
        {
          "id": 1,
          "name": "Chandler Mcclure"
        },
        {
          "id": 2,
          "name": "Evangeline Delaney"
        }
      ],
      "greeting": "Hello, Simon Mathis! You have 9 unread messages.",
      "favoriteFruit": "apple"
    }
  ];

$scope.textChanged = function() {
  console.log('inside check');
        if ($scope.sear.length > 0){
          $scope.disp=true;
        }
        else{
          $scope.disp=false;
        }
    };



});
