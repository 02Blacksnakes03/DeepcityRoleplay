GANGWAR = {
    blacklistjob = {"unemployed", "police"},
    RANG = 0,--From this rank you can start a gangwar
    Flaggenpunkte = 3,--You get the points after x minutes
    Flaggenzeit = 30, --This is the seconds time to take 60 = 1 minute
    FlaggenpunkteZEIT = 1, --This means that the flag awards flag points every 3 minutes
    Killpunkte = 3, --This means that you get 3 points for every kill
    Gleichstandplus = 5, --This means that if there is a tie, there will be 5 more minutes
    VEST = {--VEST = false = Vest off
        Time = 0, --[[ 120 seconds cooldown Used for vest ]]
        Defaultkey = ".",
        STANDART = 5,-- Spawn with 5 West
        Cancelkey = 23,--23 = G https://docs.fivem.net/docs/game-references/controls/
    },
}
GANGWAR.MONEY = {
    StartingMoney = 500, --StartingMoney
    Givegwmoneyperkill = 5, --How much gangwar money should there be per kill?
    GiveMoneyfortakenflag = 5, --How much gangwar money should there be taken a flags
}
Config = {
    Locale = 'de', 
    debug = true,
    esxgetSharedObjectevent = 'esx:getSharedObject',
    esxprefix2 = "esx:",
    deleteweaponsfromloadouit = true,--Only Remove from Loadout not from xplayer
    ESX19 = false,
}
Style = {
    MarkerRGB = {r = 0, g = 138, b = 218, size = 1.5},
}
Discord = {--in suser.lua
    Discordon= true,
    title = "Gangwar - NEWS",
    url = "http://.de/",
    color = 9758486,
    text = "Gangwar",
    avatar_url = "https://cdn.discordapp.com/attachments/960742819033657344/961321859264155690/fsdff.png",
    username = "Gangwar - NEWS",
    icon_url = "https://cdn.discordapp.com/attachments/960742819033657344/961321859264155690/fsdff.png",
    thumbnailurl = "https://cdn.discordapp.com/attachments/960742819033657344/961321859264155690/fsdff.png",
    webhook = "https://discord.com/api/webhooks/1357064274756894901/KArjoabNjZ0PVVoQkbjMhnj-IfRjR6fwTF8-gm1hYUJuRRsefUT555gLXvXQH3gHlMVo",
}
GANGWAR.zones = {
    ["Mirror"] = {
        location = vector3(813.0961, -280.8333, 66.4624),--Zones midpoint
        zonescale = 140.0,--zone size
        Gangwargoin = {x = 817.5035, y = -277.9959, z = 66.4623, heading = 100.0},-- Gangwar backup go in for attacker
        spawnaftergw = {x = 298.3, y = -572.3, z = 43.3, heading = 100.0},-- Gangwar backup  for spawn after Gangwar
        spawnd = {x = 600.3, y =  89.8, z = 92.8, heading = 100.0},--Attackers spawn
        spawna = {x = 1248.6, y =  -347.7, z = 69.1, heading =9.8869},--defender spawn
        howmanydef = 0,
        howmanyatak = 0,
        Zeit = 3,--minutes
        bucket = 231,--Dimension
        car = false,-- Car despawns when driving in a circle
        ausparker = {
            {
                automenu = vector3(1239.8, -338.9, 68.7),--Parking spaces can be used by both
                heading = 79.7314,
        
            },
            {
                automenu = vector3(610, 87.2, 92.2),--Parking spaces can be used by both
                heading = 162.0426,
        
            },
        },
        Waffenvonstaat = true,
        Infinity = true,-- infinity ammo?
        Weapons = {
            {label = 'HEAVYRIFLE | Price 15', action = 'WEAPON_HEAVYRIFLE', components = GetHashKey('component_at_pi_supp_02'), price = 15, giveonstart = false},
            {label = 'ADVANCEDRIFLE | Price 25', action = 'WEAPON_ADVANCEDRIFLE', components = GetHashKey('component_at_pi_supp_02'), price = 25, giveonstart = true},
            {label = 'GUSENBERG | Price 5', action = 'WEAPON_GUSENBERG', price = 5, giveonstart = false},
            {label = 'PISTOL | Price 50', action = 'WEAPON_PISTOL', components = GetHashKey('component_at_pi_supp_02'), price = 50, giveonstart = true},
            {label = 'WESTE | Price 4', action = 'weste', price = 4},
            {label = 'Verbandskasten | Price 4', action = 'medikit', price = 4},
        },
        Weaponshop = {
            vector3(1243.6169, -347.0633, 69.0821),
            vector3(598.58, 87.37, 92.76),
        },
        --Weaponshop = false, -- If you not will the Weaponstore
        Autos = {
            {label = "Schafter", action = 'schafterg'},
            {label = "Drafter", action = 'drafter'},
        },
        flaggen = {
            ["Fußballfeld"] = {
                Flagge = vector3(771.9, -235.1, 65.1),
                nix = false,--NOT TOUCH THIS
                farbe = 40,
                Flaggename = "Gangwar Flagge"
            },
        }

    },
}

GANGWAR.FRAKTIONEN = {
    ["mg13"] = {
        label = "mg13",
        color1 = 64,--https://wiki.gtanet.work/index.php?title=Vehicle_Colors
        color2 = 64,--https://wiki.gtanet.work/index.php?title=Vehicle_Colors
        blipfarbe = 12,--https://docs.fivem.net/docs/game-references/blips/
        spawnaftergangwar = {x = 812.6911, y =  -285.6532, z = 66.4616, heading = 106.8438},-- Gangwar Ende Spawn
        gangwarin = vector3(1286.3289794922, -1603.5640869141, 54.824951171875),-- go in gangwar  
        gangwarstartertp = {x = 1286.3289794922, y =  -1603.5640869141, z = 54.824951171875, heading = 106.8438},-- Gangwar Spawn after starting (only for the starter)
    },
    ["lcn"] = {
        label = "lcn",
        color1 = 62,--https://wiki.gtanet.work/index.php?title=Vehicle_Colors
        color2 = 62,
        blipfarbe = 40,--https://docs.fivem.net/docs/game-references/blips/
        spawnaftergangwar = {x = 812.6911, y =  -285.6532, z = 66.4616, heading = 106.8438},-- Gangwar End Spawn
        gangwarin = vector3(1407.1417, 1139.6167, 114.4436),-- go in gangwar 
        gangwarstartertp = {x = 1407.1417, y =  1139.6167, z = 114.4436, heading = 106.8438},-- Gangwar Spawn after starting (only for the starter)
    }
}
