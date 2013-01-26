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
//maybe later if state machine sticky var dead = false;



function Start () {

}

function Update () {

}

function LateUpdate() {

}

function InitByType(classType : String) {
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
	}
	
	
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

