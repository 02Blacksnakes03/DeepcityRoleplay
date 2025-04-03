<IMPORTANT>
THIS IS VERSION 1.5.1
Discord Link  > https://discord.gg/N6DPegp66e

<INSTALLATION>
1. Drag it in your res
2. add this in your server.cfg
 start marlox_gangwar
3. insert the sql in your database If it doesn't happen automatically
4. For ESX 1.1 and 1.2 inserts this in <es_extended> > <server> > <functions.lua> under ESX.GetPlayers

```lua
function ESX.GetExtendedPlayers(key, val)
	local xPlayers = {}
	for k, v in pairs(ESX.Players) do
		if key then
			if (key == 'job' and v.job.name == val) or v[key] == val then
				xPlayers[#xPlayers + 1] = v
			end
		else
			xPlayers[#xPlayers + 1] = v
		end
	end
	return xPlayers
end
```

5.  For ESX 1.1  replace this in <es_extended> > <server> > <player.lua> on <self.setCoords>

```lua
	self.setCoords = function(coords)
		self.player.coords = {x = coords.x, y = coords.y, z = coords.z}
		self.triggerEvent('esx:teleport', coords)
	end
```

6. Jo in  <esx_ambulancejob> > <client> > <main.lua>

Put that at the bottom in  <esx_ambulancejob> > <client> > <main.lua>
```lua
RegisterNetEvent('esx_ambulancejob_Revive_gangwar')
AddEventHandler('esx_ambulancejob_Revive_gangwar', function(x,y,z)
        local playerPed = PlayerPedId();
        TriggerServerEvent('esx_ambulancejob:setDeathStatus', false)
        TriggerServerEvent("esx_ambulancejob:setstabile",false)
        local formattedCoordss = {x = x, y = y, z = z }
        RespawnPed(playerPed, formattedCoordss, 120.0)
        StopScreenEffect('DeathFailOut')
        Wait(3000)
end)
```
<Support>
Discord Link  > https://discord.gg/N6DPegp66e


```lua
	----------------------------------------------
    exports.marlox_gangwar:isInGangwarZone()
    if exports.marlox_gangwar:isInGangwarZone() then
	    print("Du bist im Gangwar drinne")
	else
	    print("Du bist nicht im Gangwar drinne")
	end
	----------------------------------------------
    exports.marlox_gangwar:HowmanyGangwarPoints()
	local Money = exports.marlox_gangwar:HowmanyGangwarPoints()
	print("You have "..Money.." Gangwarmoney")
	----------------------------------------------
    exports.marlox_gangwar:whatzone()
	local Zone = exports.marlox_gangwar:whatzone()
    if Zone ~= false then
	    print("Du bist im Gangwar Gebiet"..Zone)
	else
	    print("Kein Gangwar")
	end
	----------------------------------------------
	Server functoin 
	Notifytojob(xPlayer.getJob().name, "text", false[[false = Notify, true = Announce]] )
    TriggerClientEvent("GANGWAR_ADD_COINS", 5)  
	----------------------------------------------
  
```

If not CREATE TABLET then isert this in DB

```SQL
        CREATE TABLE IF NOT EXISTS `gangwar` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `name` varchar(40) NOT NULL,
            `owner` varchar(40) NOT NULL DEFAULT 'none',
            PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;   
``` 
