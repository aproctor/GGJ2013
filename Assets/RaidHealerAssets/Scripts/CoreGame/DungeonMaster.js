#pragma strict

/**
 * Dungeon Master
 * _ controls the fight, spawns friendly and enemy units
 * - roll a skill check to see if this code comes out clean, 1d20
 */
 
var adventurers;


function Start () {
	adventurers = [];
}

function Awake () {
	var spawnPoints = GameObject.FindGameObjectsWithTag("adv_spawn");
	
	for(var spawnPoint : GameObject in spawnPoints) {
		Debug.Log(spawnPoint);
	}
}

function Update () {

}


function InitializeEncounter() {
	
}