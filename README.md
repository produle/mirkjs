# MirkJS #

### What is it? ###

* MirkJS lets you create reusable UI component in less time
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
