#pragma strict
//assign effect to object
var partical:GameObject;

function Start () {
	
}

function Update () {
	//copy effect if Input.touchCount>0
	if (Input.touchCount>0 &&Input.GetTouch(0).phase == TouchPhase.Began ){
		//set a varicable to store whether you touch the object,ray = true or false
		var ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
		//judge whether the ray line penetrate the obj, if true ,represent choose it.
		if (Physics.Raycast(ray)){
			//create effect
			Instantiate(partical,transform.position,transform.rotation);
		}
	}
}