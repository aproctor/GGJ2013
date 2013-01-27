#pragma strict

var gameDude : GameDude;
var hpBarFg : GameDudeHealthBar;
var initialScaleX : float; 

function Start () {
	hpBarFg = gameObject.GetComponentInChildren(GameDudeHealthBar);
	initialScaleX = hpBarFg.transform.localScale.x;
}

function Update () {
	//update health rendering
	if(gameDude) {
		hpBarFg.UpdateHpBar(gameDude.curHealth * 1.0f / gameDude.maxHealth);
	}
}

function SetGameDude(dude : GameDude) {
	gameDude = dude;
	
	//Change Sprite image to primaryType
	for(var spr : UISprite in gameObject.GetComponentsInChildren(UISprite)) {		
		if(spr.gameObject.name == "CharType") {
			spr.spriteName = dude.primaryType;
			break;
		}
	}
	
	//Change Label Text to dude's name
	for(var label : UILabel in gameObject.GetComponentsInChildren(UILabel)) {
		if(label.gameObject.name == "Label") {
			label.text = dude.nameStr;
		}
	}
	
	//gameObject.GetComponentInChildren(UILabel);
}

function OnClick() {
	Debug.Log("CLICKCKLC");
}