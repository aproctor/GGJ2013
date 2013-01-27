#pragma strict

function Start () {

}

function Update () {

}


function CastOnTarget(targetDude : GameDude) {
	targetDude.UpdateHealth(-500);
}