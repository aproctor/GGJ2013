#pragma strict

/* GameDude - the core game entity for living dudes in the game
 *
 * are you a bad enough dude?
 */

var curHealth : int = 1000;
var maxHealth : int = 1000;
var team : int = 0;
var primaryType : String; //(eg: Healer, Dps, Tank, Boss)
var secondaryType : String; //(eg: Main Tank, Off Tank, Dragon)
var state : String; // Idle, Dead, Aggro
var nameStr : String;
var targetDude : GameDude;
//maybe later if state machine sticky var dead = false;

var characterFrameUI : GameDudeCharFrame;



function Start () {

}

function Update () {
	//curHealth = Random.Range(100, maxHealth);
}

function LateUpdate() {

}

function InitByType(classType : String, hpBar : GameObject, advName : String) {
	primaryType = classType;
	if(classType == "tank") {
		curHealth = 4000;
		maxHealth = 4000;
	} else if(classType == "dps") {
		curHealth = 1000;
		maxHealth = 1000;
	} else if(classType == "healer") {
		curHealth = 500;
		maxHealth = 500;
	} else if(classType == "boss") {
		curHealth = 100000;
		maxHealth = 100000;
		team = 1;
	}
	
	nameStr = advName;
	
	characterFrameUI = hpBar.GetComponentInChildren(GameDudeCharFrame);
	characterFrameUI.SetGameDude(this);
}

/**
 *
 */
function ChangeState(targetState) {
	//validation of transition can go here
	
	//post functions as well	
	if(targetState == "Dead") {
		//TODO swap display icon to dead icon
	} else {
		//TODO set display icon back to primary type
	}
	
	state = targetState;
}

/**
 * Subtract health from the GameDude
 */
function UpdateHealth(delta : int) {

	//TODO: later expand this to check specific ranged triggers rather than just 0
	var targetHp = curHealth - delta;
	
	if(targetHp > maxHealth) {
		//Overheal
		curHealth = maxHealth;
	} else if(targetHp < 0) {
		Kill();
	} else {
		curHealth = targetHp;
	}
}

/**
 * Time to die
 */
function Kill() {
	curHealth = 0;
	state = "Dead";
}

function Revive() {
	curHealth = maxHealth;
	ChangeState("Aggro");
}



/**
 *
 */
function PickMove() {
	if(targetDude && targetDude.state != "Dead") {
		//Do nothing for now	
	} else {
		//Find a new target
		var dm : DungeonMaster = gameObject.GetComponent(DungeonMaster);
		if(team == 0) {
			for(var adv : GameDude in dm.adventurers) {
				
				if(adv.curHealth > 0) {
					targetDude = adv;
					break;
				}
			}
		} else {
			
		}
	}
	
	
	
}