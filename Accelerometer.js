#pragma strict
//Move obj using accelerometer
var speed:float;
function Start () {
	speed = 10.0;
}

function Update () {
//device.xy = unity.xz
	var dir:Vector3 = Vector3.zero;
	dir.x = -Input.acceleration.y;
	dir.z = Input.acceleration.x;
//restrict Vector >0
	if(dir.sqrMagnitude>1){
	//obj move reletively
	dir.Normalize();	
	}
	transform.Translate(dir*speed*Time.deltaTime);
}