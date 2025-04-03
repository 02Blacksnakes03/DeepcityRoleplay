Config = {}

Config.Information = {
    language = "de",
    ServerName = "S-SERVICE",
    oldesxversion = true, -- If esx version under 1.9.1
    WaitBevoreLoad = 0, -- Used for Servers that have Problem to load the HUD
    DetailText = "ROLEPLAY",
    moneysymbol = "€",
    blackmoney = true, -- Enable/Disable blackmoney
    Cinemamodus = {
        -- Cinema modus
        active = true, -- Enable or Disable the Command
        key = true,
        -- Should there be a Key? (Can be selected by the Player)
        animation = false,
        barheight = 0.3 -- Only usable when animation
    },
    policejob = "police",
    medicjob = "medic",
    enableooccommand = true, -- Enable OOC Command
    enableidcommand = true, -- Enable ID Command
    enablecruisecontrol = true, -- Enable Cruise Control
    enableidscommand = true, -- Enable IDs command (Get the ID of the nearest player)
    hidehudcomponnents = false, -- Hide default HUD components
    enableengine = true, -- Disable/Enable Engine
    hexfood = false,
    hideammodefault = false,
    disablechat = false,
    enableesxstatus = true -- Disable or Enable esxstatus ticks
}

Config.AnnounceNotifys = {
    ServerAnnounce = {
        command = "serverannounce", -- Command name
        lentghtime = 10,
        -- In Seconds
        Ace = {
            {
                name = "projektleitung" -- Ace Perm / Or Group
            },
            {
                name = "admin" -- Ace Perm / Or Group
            }
        }
    },
    AdminChat = {
        command = "tc",
        -- Command name
        Ace = {
            {
                name = "admin" -- Ace Perm / Or Group
            }
        }
    },
    Eventannounce = {
        command = "eventannounce",
        -- Command name
        lentghtime = 10,
        -- In Seconds
        Ace = {
            {
                name = "admin"
                -- Ace Perm / Or Group
            }
        }
    },
    Policeannounce = {
        command = "policeannounce",
        -- Command name
        lentghtime = 10,
        -- In Seconds
        jobs = {
            {
                name = "police"
                -- Job name
            }
        }
    },
    Medicannounce = {
        command = "medicannounce",
        -- Command name
        lentghtime = 10,
        -- In Seconds
        jobs = {
            {
                name = ""
                -- Job name
            }
        }
    },
    PdZone = {
        enable = true,
        command = "pd",
        -- Command name
        removecommand = "pdrm",
        -- Command name
        -- In Seconds
        jobs = {
            {
                name = "police"
                -- Job name
            }
        }
    },
    MdZone = {
        enable = true,
        command = "md",
        -- Command name
        removecommand = "mdrm",
        -- Command name
        -- In Seconds
        jobs = {
            {
                name = "ambulance"
                -- Job name
            }
        }
    },
    FactionAnnounce = {
        enable = true,
        command = "factionannounce",
        factionsannouncegrades = {
            1,
            2,
            3,
            4,
            12
        },
        jobs = {
            {
                name = "police"
                -- Job name
            }
        },
        lentghtime = 10
    },
    Commands = {
        -- Making other commands that are not listed above, you can list as many as you want!
        {
            name = "fibannounce2",
            Factions = "FIB",
            Color = "#FF0000",
            Source = -1,
            Event = "SService:Client:MakeCustomCommandHUD",
            design = 1,
            iconurl = "img/icons/AnnounceNotify1.png",
            length = 10,
            jobs = {
                {
                    name = "police"
                    -- Job name
                },
                {
                    name = "lcn"
                    -- Job name
                }
            }
        },
        {
            name = "armyannounce2",
            Factions = "ARMY",
            Color = "#0000ff",
            Source = -1,
            Event = "SService:Client:MakeCustomCommandHUD",
            design = 2,
            iconurl = "img/icons/AnnounceNotify1.png",
            length = 10,
            jobs = {
                {
                    name = "police"
                    -- Job name
                }
            }
        }
    }
}

Config.Timestamp = {
    TeamNotify = 10, -- Time in sec for Team Notify
    InfoNotifys = 10 -- TIme in sec for Info Notify
}

Config.Blips = {
    PDBlip = {
        blipspriteradius = 161, -- Sprite of radius
        middleblipsprite = 137, -- Sprite of Blip
        display = 6, -- Display
        scale = 1.0, -- Scale = Float
        colour = 3
        -- Color
    },
    MDBlip = {
        blipspriteradius = 161,
        -- Sprite of radius
        middleblipsprite = 137,
        -- Sprite of Blip
        display = 6, -- Display
        scale = 1.0,
        -- Scale = Float
        colour = 3 -- Color
    }
}

Config.Default = {
    AnnounceDesigns = 1,
    -- 0 Disable , -- 1 Modern, 2 -- Round. 3 -- Classin
    SpeedoDesign = 1,
    Helptext = 1,
    DefaultWeaponDesign = 1,
    MoneyDesign = 1,
    VoiceDesign = 1,
    Defaultnotifydesign = 1,
    DefaultAdminNotify = 1,
    DefaultIDDesign = 1,
    TextDesign = 1,
    DefaultPlayerCountDesign = 1,
    DefaultJobDesign = 1,
    DefaultProgressbarDesign = 1,
    DefaultFoodDesign = 1
}

Config.Voice = {
    pmavoice = true,
    saltychat = false,
    MumbelVoice = false,
    enablevoicrange = true, -- Enable or Disable the Voice Range Markers
    defaultvoiceindexsalty = 2, --Also used for pma etc
    voicerangemters = {
        {
            meters = 2
        },
        {
            meters = 10
        },
        {
            meters = 20
        },
        {
            meters = 30
        },
        {
            meters = 50
        }
    },
    shownotifys = true, -- Enable notifications when changing the voice meters
    voicemodus = 5, -- amount of Voice Mods for example pma = 3, max 6
    Marker = {
        markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
        markercolor = {r = 255, g = 1, b = 1}
    }
}

Config.BlackListetSuggestionsComanndStart = {
    "sv",
    "cl",
    "adhesive",
    "steam",
    "txa",
    "web",
    "txAdmin",
    "ratelimiter",
    "rateLimiter",
    "citizen",
    "onesync",
    "endpoint",
    "rcon",
    "resources",
    "esx",
    "fileserver"
}

Config.Ms = {
    Speedodesign2und3 = 100,
    Speedodesign1 = 100
}

Config.DefaultKeyMappings = {
    OpenChat = "t",
    CinemaModus = "u",
    WarnSignal = "UP",
    RechterBlinker = "RIGHT",
    LinkerBlinker = "LEFT",
    EnableMotor = "z",
    CruiseControl = "g",
    HudSettings = "o"
}
