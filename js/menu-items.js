

$(function(){
	
	var idx;
	var pizza;
	var template = $('.template');
	var clonedTemplate;
	var container = $('.pizza');

    for (idx = 0; idx < com.dawgpizza.menu.pizzas.length; ++idx) {
        pizza = com.dawgpizza.menu.pizzas[idx];
        
        clonedTemplate = template.clone();
        clonedTemplate.find('.name').html(pizza.name);
        if (pizza.vegetarian) {
        	clonedTemplate.find('.pic').attr({
	            src: "img/carrot.png", 
	            alt: 'vegetarian icon'
	        });	
        }
        clonedTemplate.find('.description').html(pizza.description);
        clonedTemplate.find('.sm').html(pizza.prices[0]); 
        clonedTemplate.find('.md').html(pizza.prices[1]);
        clonedTemplate.find('.lg').html(pizza.prices[2]); 
        clonedTemplate.removeClass('template');
        container.append(clonedTemplate);
    } //for each pizza
	
	/*var drink;
	var container = $('.menu drink');
	for (idx = 0; idx < com.dawgpizza.menu.drinks.length; ++idx) {
	    drink = com.dawgpizza.menu.drinks[idx];

	    clonedTemplate = template.clone();
        clonedTemplate.find('.name').html(pizza.name);
        clonedTemplate.find('.price').html(pizza.price);
        
        clonedTemplate.removeClass('template');
        container.append(clonedTemplate);

	} //for each drink

	var dessert;
	for (idx = 0; idx < com.dawgpizza.menu.desserts.length; ++idx) {
	    drink = com.dawgpizza.menu.desserts[idx];

	    //drink.name = name of drink
	    //drink.price = price of drink

	} //for each drink*/
});