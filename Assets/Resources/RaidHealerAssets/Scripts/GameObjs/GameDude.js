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
var tickRate : float = 1.0f;
var lastMove : float = 0.0f;

var characterFrameUI : GameDudeCharFrame;



function Start () {
	
}

function Update () {
	//curHealth = Random.Range(100, maxHealth);
	if(Time.time - lastMove > tickRate) {
		PickTarget();
		CastSpell();
		
		lastMove = Time.time;
	}
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
		curHealth = 6000;
		maxHealth = 6000;
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
	var targetHp = curHealth + delta;
	
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
	characterFrameUI.Kill();
	GameObject.Find("DungeonMaster").GetComponent(DungeonMaster).DudeKilled(this);
}

function Revive() {
	curHealth = maxHealth;
	ChangeState("Aggro");
	characterFrameUI.Revive();
}



/**
 *
 */
function PickTarget() {
	if(targetDude && targetDude.state != "Dead") {
		//Do nothing for now	
	} else {
		//Find a new target
		var dm : DungeonMaster = GameObject.Find("DungeonMaster").GetComponent(DungeonMaster);
		if(team == 0) {
			//Boss will stupidly pick the first adventurer
			var maxHpFound = 0;
			for(var adv : GameDude in dm.adventurers) {
				
				if(adv.curHealth > 0) {
					targetDude = adv;
					break;
				}
			}
		} else {
			//Players will just target the boss
			targetDude = dm.boss;
		}
	}	
}

function CastSpell() {
	//verify the target is indeed a live, and not just left over
	if(targetDude && targetDude.state != "Dead") {
		//TODO: Choose Ability, for now hard coded values
		var dmgValue = -100;
		
		
		
		targetDude.UpdateHealth(dmgValue);
	}
}