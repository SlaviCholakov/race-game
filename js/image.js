let carPic = document.createElement("img");
let roadPic = document.createElement("img");
let wallPic = document.createElement("img");

let picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imglet, fileName) {
	imglet.onload = countLoadedImagesAndLaunchIfReady;
	imglet.src = fileName;
}

function loadImages() {
	// next line is just an example, not using, will remove later
	let dataSet = {letName: carPic, theFile: "player1car.png"};

	let imageList = [
		{letName: carPic, theFile: "image/player1car.png"},
		{letName: roadPic, theFile: "image/road.png"},
		{letName: wallPic, theFile: "image/wall.png"}
		];

	picsToLoad = imageList.length;

	for(let i=0;i<imageList.length;i++) {
		beginLoadingImage(imageList[i].letName, imageList[i].theFile);
	}
}