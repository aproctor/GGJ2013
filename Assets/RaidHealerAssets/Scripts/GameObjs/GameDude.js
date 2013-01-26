#pragma strict

/* GameDude - the core game entity for living dudes in the game
 *
 * are you a bad enough dude?
 */

var curHealth : int;
var maxHealth : int;
var team : int;
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

/**
 *
 */
function ChangeState(targetState) {
	//validation of transition can go here
	//post functions as well
	
	state = targetState
}

/**
 * Subtract health from the GameDude
 */
function UpdateHealth(delta : int) {

}

/**
 * Time to die
 */
function Kill() {
	
}

