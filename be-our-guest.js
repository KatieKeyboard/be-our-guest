const menu = {
	_courses: {
		// maps dishes available to each course
		appetizers: [],
		mains: [],
		desserts: [],
	},

	get courses() {
		return _courses;
	}, // returns respective course

	addDishToCourse(courseName, dishName, dishCalories) {
		const dish = {
			name: dishName,
			calories: dishCalories,
		};
		return this._courses[courseName].push(dish);
	}, // creates a dish with name and calories, pushes to appropriate course array

	getRandomDishFromCourse(courseName) {
		const dishes = this._courses[courseName];
		const randomized = Math.floor(Math.random() * dishes.length);
		return dishes[randomized];
	}, // generates a random dish from a course on the menu

	generateRandomMeal() {
		const appetizer = this.getRandomDishFromCourse('appetizers');
		const main = this.getRandomDishFromCourse('mains');
		const dessert = this.getRandomDishFromCourse('desserts');
		const totalCalories =
			appetizer.calories + main.calories + dessert.calories + 50;
		return `Mademoiselle où Monsieur, it is with deepest pride and greatest pleasure that the dining room proudly presents... Your dinner! 
		
Course by course, one by one, your meal includes: 
${appetizer.name}, followed by ${main.name}, and finishes off with ${dessert.name} and a cup of Piping Hot Tea served with One Lump or Two of Sugar... for a total of ${totalCalories} calories. 
		
Tie your freshly-pressed napkin 'round your neck!`;
	}, // generates a three-course meal with a tally of calories from all chosen courses, returns a string
};

// menu creation
menu.addDishToCourse(
	'appetizers',
	'a bowl of Soupe du Jour (Lobster Bisque)',
	400
);
menu.addDishToCourse('appetizers', `Hot Quiche Hors d'Oeuvre`, 600);
menu.addDishToCourse('appetizers', 'a glass of Rosé Wine (enchanted)', 200);

menu.addDishToCourse('mains', `The Gray Stuff (it's delicious)`, 600);
menu.addDishToCourse('mains', 'Beef Ragoût', 600);
menu.addDishToCourse('mains', 'Cheese Soufflé', 400);

menu.addDishToCourse('desserts', 'Berry Pie en Flambé', 600);
menu.addDishToCourse('desserts', 'Chocolate Pudding en Flambé', 400);
menu.addDishToCourse('desserts', 'an assortment of Macaroons', 600);

// dinner is served!
let meal = menu.generateRandomMeal();
console.log(meal);
