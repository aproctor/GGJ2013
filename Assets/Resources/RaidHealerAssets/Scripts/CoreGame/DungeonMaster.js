#pragma strict

/**
 * Dungeon Master
 * _ controls the fight, spawns friendly and enemy units
 * - roll a skill check to see if this code comes out clean, 1d20
 */
 
var adventurers : Array;
var boss : GameDude;


function Start () {
	adventurers = [];
	
	/*
	 * Initialize the boss
	 */
	boss = new GameObject("Boss").AddComponent(GameDude);
	var bossHp = GameObject.Find("Boss");
	boss.InitByType("boss", bossHp, "Gorgathalion");
	
	var names = ["Aggrocrag", "Maximumus", "Deeps", "Mangnus", "Infernus", "Stident","Boneclaws", "Furion", "Bmedl","Botinu","Dical","Grur","Hahor","Iave","Ldinr","Lohid","Nihdu","Rifi"];
	
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