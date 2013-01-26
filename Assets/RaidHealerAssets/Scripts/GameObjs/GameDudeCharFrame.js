#pragma strict

var hpBarFg : GameDudeHealthBar;
var initialScaleX : float; 

function Start () {
	hpBarFg = gameObject.GetComponentInChildren(GameDudeHealthBar);
	initialScaleX = hpBarFg.transform.localScale.x;
}

function Update () {
	//update health rendering
	hpBarFg.UpdateHpBar(0.9);
}