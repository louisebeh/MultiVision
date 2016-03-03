angular.module('app').controller('mvMainCtrl', function($scope){
    $scope.courses = [
        {name: 'C# for Sociopaths', featured: true, published: new Date('1,1,2016')},
        {name: 'C# for Non-Sociopaths', featured: true, published: new Date('9,19,2016')},
        {name: 'Super Duper Expert C#', featured: true, published: new Date('3,3,2016')},
        {name: 'Pedantic C++', featured: true, published: new Date('2,2,2016')},
        {name: 'Maintainable Code for Cowards', featured: true, published: new Date('11,1,2016')},
        {name: 'A Survival Guide to Code Reviews', featured: true, published: new Date('11,19,2016')},
        {name: 'Death by Coding', featured: true, published: new Date('11,9,2016')},
        {name: 'Juggling Javascript', featured: true, published: new Date('1,9,2016')},
        {name: 'Visual Basic for Visual Basic Developers', featured: true, published: new Date('1,19,2016')},
        {name: 'Awesome Angular ', featured: true, published: new Date('10,4,2016')},
    ]
});