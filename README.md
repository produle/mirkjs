# MirkJS #

Application architechture for rivets.js

### What is it? ###

* MirkJS lets you create fully managed controller for rivets.js which automatically load/cache/flush rivets templates
* Lets you create events
* Provides structure to your app which is scaleable

### Quick Guide ###

* Create controller

```js
var myController = mirk.create(
{
	// Variables
	viewPath : "/templates/messages.htm"
},
{
	//Constructor
	construct: function()
	{
		// init
	},
	destruct: function()
	{
		// destroy the controller
		mirk.destroy(this);
	},
	events:
	{
		// your event handlers
		onSubmit: function(element, event, models)
		{
			//
		}
	}
	
});
```