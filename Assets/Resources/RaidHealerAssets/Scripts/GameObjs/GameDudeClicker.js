#pragma strict

function Start () {

}

function Update () {

}

function OnClick() {
	var charFrame : GameDudeCharFrame = transform.parent.gameObject.GetComponent(GameDudeCharFrame);
	var player = GameObject.Find("Player").GetComponent(GamePlayer);
	player.CastOnTarget(charFrame.gameDude);
}