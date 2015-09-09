var PhotoGrid = mirk.create(
{
	viewPath : "photogrid/templates/photogrid.htm"
},
{
	construct: function()
	{
		var imgJson = null;
		var thisClass = this;
		//Load the json file containg images path
		$.get(this.vars.jsonUrl, function(data) 
		{
			imgJson = data;
			mirk.view(thisClass, thisClass.element, thisClass.vars.viewPath,
			{
				photos : imgJson
			});
		});
		
	},
	
	destruct: function()
	{
		mirk.destroy(this);
	},

	events:
	{
		"onThumbnailClick" : function(el, ev, models)
		 {
		 	if(this.onPhotoSelect)
		 	{
		 		this.onPhotoSelect(models.photo);
		 	}
		 }
	}
});