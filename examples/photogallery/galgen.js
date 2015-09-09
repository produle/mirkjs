var photo = function(name, path)
{
   this.title="photo " + name;
   this.desc = "this is " + this.title;
   this.imgUrl = path + "/images/" +name + ".jpg";
   this.thumbUrl = path + "/thumbnails/" +name + ".jpg";
};

var images = [];

for(var i=0; i<15; i++)
{
  var pho = new photo(i+1, "./photos");
  images.push(pho);
}

console.log(JSON.stringify(images));