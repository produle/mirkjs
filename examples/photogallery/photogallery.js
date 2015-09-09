(function()
 {
 	var photoJsonUrl = "./photos.json";

 	var photoGrid = new PhotoGrid("#grid", 
 	{
 		jsonUrl: photoJsonUrl
 	});

 	photoGrid.onPhotoSelect = function(photo)
 	{
 		var photoViewer = new PhotoViewer("#viewer", 
 		{
 			photo : photo
 		});
 		photoViewer.onClose = function()
 		{
 			photoViewer.destruct();
 		};
 	};
 	
 })();