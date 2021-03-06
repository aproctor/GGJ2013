var initialScale : Vector3; 

function Start () {
	initialScale = gameObject.transform.localScale;
}

function UpdateHpBar (healthPct : float) {	
	//update width based on health rendering
	gameObject.transform.localScale = new Vector3(healthPct * initialScale.x, initialScale.y, initialScale.z);
}
