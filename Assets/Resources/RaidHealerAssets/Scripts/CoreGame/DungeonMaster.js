#pragma strict

/**
 * Dungeon Master
 * _ controls the fight, spawns friendly and enemy units
 * - roll a skill check to see if this code comes out clean, 1d20
 */
 
var adventurers : Array;


function Start () {
	adventurers = [];
	
	var names = ["Aggrocrag", "Maximumus", "Deeps", "Mangnus"];
	
	var numAdventurers = names.Length;
	var spawnPoints = GameObject.FindGameObjectsWithTag("adv_spawn");
	
	
	if(numAdventurers > spawnPoints.Length) {
		numAdventurers = spawnPoints.Length;
	}
	
	var prefab = Resources.Load("RaidHealerAssets/Prefabs/GameDudeHealthBarUI");
	for(var i = 0; i < numAdventurers; i++) {
		var adventurer = new GameObject("Adventurer"+i);
		var advComp = adventurer.AddComponent(GameDude);

		adventurers.Push(advComp);
		
		var hpBar = NGUITools.AddChild(spawnPoints[i], prefab);
		
		if(i == 0) {
			advComp.InitByType("tank", hpBar, names[i]);
		} else {
			advComp.InitByType("dps", hpBar, names[i]);
		}
		
		
	}
	
	
}

function Update () {

}


function InitializeEncounter() {
	
}