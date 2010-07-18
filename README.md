$count
========
A generic method to check the length of any type of variable. It will return a numeric representation of any JS type.


How to use
----------
The function wll return a length for any variable that has a distinguishable length (Array,Object,String,Number). 
It will also return a length for these types:

 * Window, Document, Element: will return the number of child elements.
 * Function : Will return 0 for empty functions, 1 for others.
 * 'Falsy' variables (null,NaN,undefined) : Will return 0. 
 * For all others, the function will first check for a length property. If it can't, it will try to enumarate the value. If successfull will return the number. For all else will return 1.
 
This reasoning behind this is to allow the method to distinguish between empty and non-empty variables. 

	#JS
	$count('abc'); //3
	$count({'a':'b','c':'d'}); //2
	$count([1,2,3]); //3
	$count(2); //2
	$count(function(){}); //0
	$count(function(){return 'a';});//1
	
A more useful (though very generic) use-case:

	#JS
	if ($count(obs)){
		//use the variable
	}else{
		return;
	}
