//#pragma strict
var hit:RaycastHit;
var ray = Camera.main.ScreenPointToRay(Input.GetTouch(0).position);
function Start () {
   // var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
   
    //set a varicable to store whether you touch the object,ray = true or false
    
}

function Update() {
    if (Physics.Raycast(ray, hit)) {
        if (hit.collider.tag == "Button") {
            if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began) {
               
                    Application.LoadLevel("Second");

            }
        }
    }
}