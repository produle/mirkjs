var PhotoViewer = mirk.create(
{
	viewPath : "photoviewer/templates/photoviewer.htm"
},
{
	construct: function()
	{

		var thisClass = this;

		thisClass.element.addClass("show");

		mirk.view(thisClass, thisClass.element, thisClass.vars.viewPath,
		{
			photo : thisClass.vars.photo
		});

	},
	
	destruct: function()
	{
		this.element.removeClass("show");
		mirk.destroy(this);
	},

	events:
	{
		"onCloseClick" : function(el, ev, models)
		 {
		 	if(this.onClose)
		 	{
		 		this.onClose(el, ev);
		 	}
		 },

		 "onImageLoad" : function(el, ev, models)
		 {
		 	$(".photoviewer").removeClass("loading");
		 }
	}
});