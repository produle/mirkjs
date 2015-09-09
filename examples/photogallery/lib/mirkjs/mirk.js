/*
 * MicroFramework AKA mirk.js
 * Version - 0.1b
 * _________________________________________________
 * Create reusable UI components at blink
 * _________________________________________________
 * Dependencies
 *  - Rivets
 *  - Jquery
 */

var mirk = (function()
{
	var templates = {};
	var initRivets = function()
	{
	     rivets.configure(
	     {
			  prefix: 'rv',
			  preloadData: true,
			  rootInterface: '.',
			  templateDelimiters: ['{', '}'],

			  handler: function(target, event, binding) 
			  {
				  if(this && typeof(this) === "function")
				  {
					  this.call(binding.view.models.control, target, event, binding.view.models);
				  }
		      }
		});

	    rivets.binders['data-*'] = function(el, val)
		{
			if(typeof(va) !=="object")
			{
				$(el).attr("data-" + this.args[0], val);
				return;
			}
			$(el).data(this.args[0], val);
		};

		rivets.binders['oncreate'] = {
		    "function": true,
		    priority: 2000,
		    routine: function(el, value) 
		    {
		    	if(value && typeof(value) === "function")
		    	{
		    		value.call(this.view.models.control, el, null, this.view.models);
		    	}
		    }
  		};
  		
	};

	initRivets();

	var _copyObject = function(srcObj, deep)
	{
		deep = deep  | false;
		return $.extend(deep, {}, srcObj);
	};
	return(
	{
		create : function(_static, _proto)
		{
			
			var lnControl = function(elem, options)
			{
				var thisCache = this;
				this.element = $(elem);

				this.element.data("controls", this);
				this.element.attr("mr-control", true);

				this.vars = {};
				this.vars = _copyObject(_static, false);

				if(options && options != null)
				{
					Object.keys(options).forEach( function(item) 
					{
						thisCache.vars[item] = options[item];
					});
				}
				
				if(this.construct)
				{
					this.construct();
				}
			};

			lnControl.prototype = _proto;
			lnControl.prototype.views = {};

			lnControl.prototype.getView = function(elem)
			{

			}

			return lnControl;
		},
		bind : function(control, elem, models)
		{
			var view = null;
			if(models !== null)
			{
				
				models.events = control.events;
				models.control = control;
			}
			else
			{
				models = {
					control : control,
					events : control.events
				};
			}
			view = rivets.bind(elem, models);
			control.views[elem.selector] = view;

			// returns the rivets view
			return view;
		},
		view : function(control, elem, templatepath, models)
		{
			var template = "",
				key = btoa(templatepath),
				thisCache = this,
				thisView = "";
			if(template = templates[key])
			{
				$(elem).html(template);
				thisView = this.bind(control, elem, models);
			}
			else
			{
				$.get(templatepath, function(data) 
				{
					template = data;
					$(elem).html(template);
				    thisView = thisCache.bind(control, elem, models);
				    templates[key] = template;
				});
				
			}

			// returns the rivets view
			return thisView;
		},
		destroy : function(control)
		{
			control.element.data("controls", null);
			if(control.views)
			{
				Object.keys(control.views).forEach( function(item) 
				{
					control.views[item].unbind();
				});
			}

			if(control.vars)
			{
				Object.keys(control.vars).forEach( function(item) 
				{
					control.vars[item] = null;
				});
			}

			control.element.empty();
			control = null;
		},
		
		//Return the controller from DOM element
		getControl : function(elem)
		{
			return ($(elem).data("controls"));
		},
		
		// clear template cache
		flushTemplaes : function()
		{
			// TODO: flush the template cache
		},

		Util:
		{
		 // TODO : Utility
		}
	});
})();