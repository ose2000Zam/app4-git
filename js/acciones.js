// JavaScript Document

$(document).ready(function (e){
	document.addEventListener("deviceready",function(){
		$('#disp table td').eq(3).text(device.model);
		$('#disp table td').eq(5).text(device.cordova);
		$('#disp table td').eq(7).text(device.platform);
		$('#disp table td').eq(9).text(device.vesion);
		$('#disp table td').eq(11).text(device.uuid);
	document.addEventListener("pause",function(){
		escribehistoria ('la app se pauso');
	},false);//pause
	document.addEventListener("resume",function(){
		escribehistoria ('la app se reinicio');
	},false);//resume
	document.addEventListener("online",function(){
		escribehistoria ('la app se pauso');
	},false);//se conecto
	document.addEventListener("online",function(){
		escribehistoria ('la app se pauso');
	},false);//se desconecto
	
	},false);//ready device
	
});//document

function escribehistoria(accion){
	$('#eHistoria').append('<li>'+accion+'</li>');
}


	
	
	
	