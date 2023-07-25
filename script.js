let songs=[
	{songName:"Vibe",filePath:"songs/1.mp3",coverPath:"images/d1.jpeg",time:"2.35"},
	{songName:"Cali",filePath:"songs/2.mp3",coverPath:"images/d2.jpeg",time:"2.38"},
	{songName:"Luna",filePath:"songs/3.mp3",coverPath:"images/d3.jpeg",time:"3.06"},
	{songName:"Da Crew",filePath:"songs/4.mp3",coverPath:"images/d4.jpeg",time:"3.01"},
	{songName:"Void",filePath:"songs/5.mp3",coverPath:"images/d5.jpeg",time:"3.32"},
	{songName:"Black & White",filePath:"songs/6.mp3",coverPath:"images/d6.jpeg",time:"2.46"},
	{songName:"Hoops",filePath:"songs/7.mp3",coverPath:"images/d7.jpeg",time:"3.10"},
	{songName:"Champagne",filePath:"songs/8.mp3",coverPath:"images/d8.jpeg",time:"3.02"}
];

//initialize the variables;
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.querySelector('.line');
let masterSongName=document.getElementById('masterSongName');
let timeStamp1=document.getElementById('timeStamp1');
let timeStamp2=document.getElementById('timeStamp2');
let btn=document.querySelector('.button');


btn.addEventListener('click',handlePlay);
function handleBar(){
	let progress=parseInt((audioElement.currentTime)/(audioElement.duration)*100);
	console.log(progress);
	myProgressBar.value=progress;
}
audioElement.addEventListener('timeUpdate',handleBar);

myProgressBar.addEventListener('change',()=>{
	audioElement.currentTime=(myProgressBar.value)*(audioElement.duration)/100;
});

const makeAllPlays=()=>{
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
		element.classList.remove('fa-pause');
		element.classList.add('fa-play');
	});
}

let arr=document.getElementsByClassName('songItemPlay');
function handlePlay(){
	for(let i=0;i<arr.length;i++){
		if(arr[i].id==songIndex){
		 ans=arr[i];
	  	}
	}
	// myProgressBar.value=(audioElement.currentTime/audioElement.duration)*100;
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		
		masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');
		//console.log(ans.classList);
		makeAllPlays();
		ans.classList.remove('fa-play');
		ans.classList.add('fa-pause');	
	}
	else{
		audioElement.pause();
		masterPlay.classList.remove('fa-circle-pause');
		masterPlay.classList.add('fa-circle-play');
		ans.classList.remove('fa-pause');
		ans.classList.add('fa-play');
	}
	// while(audioElement.currentTime!=audioElement.duration){
	// 		myProgressBar.value=(audioElement.currentTime/audioElement.duration)*100;
	// 	}
}
masterPlay.addEventListener('click',handlePlay);


Array.from(document.getElementsByClassName('songItemPlay')).forEach((e)=>{
	e.addEventListener('click',(element)=>{
		console.log(element.target);
		songIndex=parseInt(element.target.id);
		makeAllPlays();
		masterSongName.innerHTML=songs[songIndex].songName;
		timestamp2.innerHTML=songs[songIndex].time;
		if(audioElement.played){
			element.target.classList.remove('fa-play');
			element.target.classList.add('fa-pause');
			audioElement.src=`songs/${songIndex+1}.mp3`;
			audioElement.currentTime=0;
			myProgressBar.value=0;
			audioElement.play();
			masterPlay.classList.remove('fa-circle-play');
			masterPlay.classList.add('fa-circle-pause');
		}
		else if(audioElement.paused){
			element.target.classList.remove('fa-pause');
			element.target.classList.add('fa-play');
			audioElement.pause();
			masterPlay.classList.remove('fa-circle-pause');
			masterPlay.classList.add('fa-circle-play');
		}
		
	});

});

document.getElementById('next').addEventListener('click',()=>{
	if(songIndex>=7){
		songIndex=0;
	}
	else{
		songIndex+=1;
	}

	for(let i=0;i<arr.length;i++){
		if(arr[i].id==songIndex){
		 ans=arr[i];
	  	}
	}

	audioElement.src=`songs/${songIndex+1}.mp3`;
	audioElement.currentTime=0;
	myProgressBar.value=0;
	audioElement.play();
	masterSongName.innerHTML=songs[songIndex].songName;
	masterPlay.classList.remove('fa-circle-play');
	masterPlay.classList.add('fa-circle-pause');
	makeAllPlays();
		ans.classList.remove('fa-play');
		ans.classList.add('fa-pause');
});


document.getElementById('previous').addEventListener('click',()=>{
	if(songIndex<=0){
		songIndex=0;
	}
	else{
		songIndex-=1;
	}

	for(let i=0;i<arr.length;i++){
		if(arr[i].id==songIndex){
		 ans=arr[i];
	  	}
	}

	audioElement.src=`songs/${songIndex+1}.mp3`;
	audioElement.currentTime=0;
	myProgressBar.value=0;
	masterSongName.innerHTML=songs[songIndex+1].songName;
	audioElement.play();
	masterPlay.classList.remove('fa-circle-play');
	masterPlay.classList.add( 'fa-circle-pause');
	makeAllPlays();
		ans.classList.remove('fa-play');
		ans.classList.add('fa-pause');
});

let heartFlag=false;
Array.from(document.getElementsByClassName('fa-heart')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		if(heartFlag==false){
			e.target.classList.remove('fa-regular');
			e.target.classList.add('fa-solid');
			heartFlag=true;
		}
		else{
			e.target.classList.remove('fa-solid');
			e.target.classList.add('fa-regular');
			heartFlag=false;
		}
	});
});