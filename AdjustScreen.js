#pragma strict
var cam:Camera;
function Start () {
 	var z = cam.transform.position.z;
 	var x = cam.pixelWidth;
 	var y = cam.pixelHeight;
//	var rawPosition:Vector3 = cam.ScreenToWorldPoint(0,0,0);
	cam = Camera.main;
}

function Update () {

	
}


/*
#pragma strict
// Draw a yellow sphere in the scene view at the position
// on the near plane of the selected camera that is
// 100 pixels from lower-left.
function OnDrawGizmosSelected() {
	var camera: Camera = GetComponent.<Camera>();
	var p: Vector3 = camera.ScreenToWorldPoint(new Vector3(100, 100, camera.nearClipPlane));
	Gizmos.color = Color.yellow;
	Gizmos.DrawSphere(p, 0.1F);
	

}
*/