Config = {}

Config.Locale = 'en'

Config.Price = 65 -- Verkaufspreis pro Packung

Config.Locations = {
	{ x = -2509.85, -3614.55, 13.72 } -- NPC
}

Config.CircleZones = {
	woodField = {coords = vector3(1957.53, 3511.65, 41.48), name = _U('shellfield'), color = 76, sprite = 515, radius = 1.0},
	woodCut = {coords = vector3(355.99, 2988.64, 40.58), name = _U('shellPack'), color = 76, sprite = 238, radius = 2.0},	
	woodSell = {coords = vector3(-2507.26, 3614.88, 13.82), name = _U('shellSell'), color = 76, sprite = 272, radius = 2.0},	
}
