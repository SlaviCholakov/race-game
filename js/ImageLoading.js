let carPic = document.createElement("img");
let roadPic = document.createElement("img");
let wallPic = document.createElement("img");
let goalPic = document.createElement("img");
let treePic = document.createElement("img");
let flagPic = document.createElement("img");

let picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgLet, fileName) {
	imgLet.onload = countLoadedImagesAndLaunchIfReady;
	imgLet.src = "images/"+fileName;
}

function loadImages() {
	let imageList = [
		{letName: carPic, theFile: "player1car.png"},
		{letName: roadPic, theFile: "track_road.png"},
		{letName: wallPic, theFile: "track_wall.png"},
		{letName: goalPic, theFile: "track_goal.png"},
		{letName: treePic, theFile: "track_tree.png"},
		{letName: flagPic, theFile: "track_flag.png"}
		];

	picsToLoad = imageList.length;

	for(let i=0;i<imageList.length;i++) {
		beginLoadingImage(imageList[i].letName, imageList[i].theFile);
	}
}