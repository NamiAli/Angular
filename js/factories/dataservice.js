(function(){


	angular
		.module('turtleFacts')
		.factory('DataService', DataFactory);

		function DataFactory(){

			var dataObj = {
				turtlesData: turtlesData,
				quizQuestions:quizQuestions,
				correctAnswers:correctAnswers
			};

			return dataObj;

        } 


    var correctAnswers = [2,0,0,3,1,2];

	var quizQuestions = [

	 {
	 	type:'text',
	 	text:"how much can a green wiegh?",
	 	possibilities: [
	 	{
	 		answer:'Up to 20kg'
	 	},
	 	{
	 		answer:'Up to 115kg'
	 	},
	 	{
	 		answer:'Up to 220kg'
	 	},
	 	{
	 		answer:'Up to 40kg'
	 	}

	 	],
	 	selected:null,
	 	correct:null
	 },
	 {
	 	type:'text',
	 	text:"what is typical lifespan of green turtle?",
	 	possibilities: [
	 	{
	 		answer:'80 years'
	 	},
	 	{
	 		answer:'50 years'
	 	},
	 	{
	 		answer:'40 years'
	 	},
	 	{
	 		answer:'70 years'
	 	}

	 	],
	 	selected:null,
	 	correct:null
	 },
	 {
	 	type:'image',
	 	text:"which of these is red turtle?",
	 	possibilities: [
	 	{
	 		answer:'img/1.jpg'
	 	},
	 	{
	 		answer:'img/2.jpg'
	 	},
	 	{
	 		answer:'img/3.jpg'
	 	},
	 	{
	 		answer:'img/4.jpg'
	 	}

	 	],
	 	selected:null,
	 	correct:null
	 },
	 {
	 	type:'image',
	 	text:"which of these is green turtle?",
	 	possibilities: [
	 	{
	 		answer:'img/1.jpg'
	 	},
	 	{
	 		answer:'img/2.jpg'
	 	},
	 	{
	 		answer:'img/3.jpg'
	 	},
	 	{
	 		answer:'img/4.jpg'
	 	}

	 	],
	 	selected:null,
	 	correct:null
	 },
	 {
	 	type:'text',
	 	text:"where the green turtle lives?",
	 	possibilities: [
	 	{
	 		answer:'river'
	 	},
	 	{
	 		answer:'sea'
	 	},
	 	{
	 		answer:'pond'
	 	},
	 	{
	 		answer:'pool'
	 	}

	 	],
	 	selected:null,
	 	correct:null
	 },
	 {
	 	type:'text',
	 	text:"what is the largest turtle on earth?",
	 	possibilities: [
	 	{
	 		answer:'green'
	 	},
	 	{
	 		answer:'red'
	 	},
	 	{
	 		answer:'orange'
	 	},
	 	{
	 		answer:'blue'
	 	}

	 	],
	 	selected:null,
	 	correct:null
	 }

	];
  
    var turtlesData = [

			{
				type:'Red Turtle',
				image_url: 'img/1.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The red turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Orange Turtle',
				image_url: 'img/2.jpg',
				location: 'rivers',
				weight: 'up to 200kg',
				lifespan: 'over 60 years',
				diet: 'fishes',
				desciption: "The orange turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Green Turtle',
				image_url: 'img/3.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The green turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Green Turtle',
				image_url: 'img/4.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The green turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Green Turtle',
				image_url: 'img/5.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The green turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Green Turtle',
				image_url: 'img/6.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The green turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Green Turtle',
				image_url: 'img/7.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The green turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			},
			{
				type:'Green Turtle',
				image_url: 'img/8.jpg',
				location: 'sea',
				weight: 'up to 300kg',
				lifespan: 'over 80 years',
				diet: 'fishes',
				desciption: "The green turtle is large, weighty, very ugly turtle, i hage turtle, not so common in africa and asia and so on i hate it i love it"
				            

			}
		];

		  
})();