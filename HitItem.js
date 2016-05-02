#pragma strict
var gui:GUITexture;
var obj:GameObject;
function Start () {
	//assign GuiTexture to var gui
	gui = GetComponent(GUITexture);
}

function Update () {
	//greater than 0
	if (Input.touchCount>0 && Input.GetTouch(0).phase == TouchPhase.Began){
		//if chosen the sculp of GUITexture
		if(gui.HitTest(Input.GetTouch(0).position)){
		//if chosen
		obj = GetComponent.<GameObject>();
	//	var render:Renderer = GetComponent.<Renderer>();
		obj.GetComponent.<Renderer>().material.color = Color.red;
		}
		
		//end touch
	if (Input.touchCount>0 && Input.GetTouch(0).phase == TouchPhase.Ended){
		obj.GetComponent.<Renderer>().material.color = Color.blue;
	
	}
	
	}
}