Config = {}

Config.Start = {
    esxevent = "es_extended", -- Works by default with all esx versions! Only change if you have renamed it!
    Languages = "de", -- Select language
    Notifys = "sservice",
    hexnotify = false,
    oxinventory = false,
    Invite = {
        blacklistetjobs = {},
        InviteNearestPlayer = true, -- If set to false then the player must enter an ID and can then invite them!
        defaultjobgrade = 12 -- Jobgrade which the player receives after the invite
    },
    Plate = {
        PlateLetters = 4, -- Count of Letter on the Plate
        PlateNumbers = 4 -- Count of Numbers on the Plate
    },
    frakannounce = {
        blacklistetjobs = {},
        active = true, -- Enable or disable (true, false)
        displaytime = 10, -- in sec
        grades = {
            [1] = true,
            [2] = true,
            [3] = true,
            [4] = true,
            [5] = true,
            [6] = true,
            [7] = true,
            [8] = true,
            [9] = true,
            [10] = true,
            [11] = true,
            [12] = false
        } -- What grades can use the /frakannounce command
    },
    joblock = false, -- If activated the player can't get into another factions after leaving the old one for a specific time
    joblocktim = 1, -- In 10 Minutes. Means 6 = 60min, 144 = 1 Day, 288 = 2 Days
    smallannounce = {
        displaytime = 4 -- in sec
    },
    gehalttimestamp = 15, -- Interval (in min) in which the player in a faction receives salary from the factionkonto
    timebetweenstatssave = 10, -- -- Interval (in seconds) at which the values of all players in the factions are saved
    Commands = {
        AddSperrzone = "Sperrzone",
        RemoveSperrzone = "RemoveSperrzone",
        FrakInvite = "frakinvite",
        FrakAnnounce = "frakannounce"
    }
}

Config.Fraks = {
    ["lcn"] = {
        speerzoneallowed = true, -- Enable or disable for this faction (true, false)
        Garage = {
            pedormarker = true, -- false = marker. true = ped
            Blip = {
                -- Blips are only visible to members of the faction
                active = false, -- Enable or disable (true, false)
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - Garage"
            },
            ped = GetHashKey("s_m_m_fiboffice_02"), -- https://docs.fivem.net/docs/game-references/ped-models/
            parkinarea = 10.0, -- Area where players can park their cars in the garage
            location = vector4(-1532.1820068359, 79.807144165039, 56.761165618896, 358.63241577148),
            SpawnParkOutLocations = {
                ["car"] = vector4(-1520.98, 84.05, 56.45, 10.0),
                ["heli"] = vector4(-1527.1212158203, 76.269844055176, 61.314159393311, 251.93887329102)
            },
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            shopcars = {
                -- Be careful with garage upgrades! If 3 cars are available by default, the first three are copied from the config. If 2 new cars are added at upgrade level 1, the next 2 cars are taken from config
                {
                    name = "zentorno", -- Vehicle name
                    price = "1000", -- price for this vehicle
                    type = "car",
                    -- New image must be the same size as the example from S-Service
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    } -- Colors that are on the car immediately after purchase (can be changed by the tuner)
                },
                {
                    name = "drafter",
                    price = "1500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "jugular",
                    price = "2000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "schafter6",
                    price = "2500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "adder",
                    price = "3000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "gburrito2",
                    price = "5500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "bolide",
                    price = "6000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "buffalo",
                    price = "6500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "gb200",
                    price = "1000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                }
            }
        },
        Shop = {
            pedormarker = true, -- false = marker. true = ped
            Blip = {
                active = false, -- Enable or disable (true, false)
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - Shop"
            },
            ped = GetHashKey("mp_m_securoguard_01"), -- https://docs.fivem.net/docs/game-references/ped-models/
            location = vector4(-1536.1273193359, 108.34683227539, 56.779781341553, 140.66358947754),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            payment = "green", -- "green" or "black" money
            sellingitems = {
                {
                    name = "packaged_plank", -- Item or weapon name
                    label = "Packaged wood", -- Item or weapon label
                    price = "100", -- price for this item or weapon
                    type = "Item" -- Item or weapon ?
                },
                {
                    name = "bread",
                    label = "Bread",
                    price = "100",
                    type = "Item"
                },
                {
                    name = "WEAPON_ASSAULTRIFLE",
                    label = "Assault Rifle",
                    price = "100",
                    type = "Weapon"
                }
            }
        },
        Bossmenu = {
            pedormarker = true, -- false = marker. true = ped
            ped = GetHashKey("s_m_y_armymech_01"), -- https://docs.fivem.net/docs/game-references/ped-models/
            Blip = {
                active = false,
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - BossMenu"
            },
            location = vector4(-1537.173584, 130.338456, 57.368530, 141.732284),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            Permission = {
                [3] = {
                    allpermissions = false,
                    canmanagespeerzone = false,
                    uebersichtpermission = true,
                    bankpermission = true,
                    reangepermission = true,
                    upgradepermission = true
                },
                [11] = {
                    allpermissions = true,
                    canmanagespeerzone = true,
                    uebersichtpermission = true,
                    bankpermission = false,
                    reangepermission = true,
                    upgradepermission = true
                }, -- Select which jobgrades have which permissions in the Chef menu
                [12] = {
                    allpermissions = true,
                    canmanagespeerzone = true,
                    uebersichtpermission = true,
                    bankpermission = false,
                    reangepermission = true,
                    upgradepermission = true
                }
            }
        },
        Lager = {
            pedormarker = true, -- false = marker. true = ped
            ped = GetHashKey("s_m_y_armymech_01"), -- https://docs.fivem.net/docs/game-references/ped-models/
            location = vector4(-1570.786866, 127.265930, 58.312134, 144.566926),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            Permissions = {
                -- All grades with Permissions. By default false
                {grade = 3, permission = false},
                {grade = 12, permission = true}
            }
        },
        InDuty = {
            indutysystem = false, -- Enable or disable (true, false)
            PaycheckWhenInduty = false,
            Blip = {
                active = false, -- Enable or disable (true, false)
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - Induty"
            },
            location = vector4(-1537.252686, 119.393410, 56.778808, 243.77952),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            }
        },
        Upgrades = {
            Storage = {
                {
                    level = 0, -- dont change
                    storage = 50, -- Default storage space
                    price = 1 -- dont change
                },
                {
                    level = 1, -- dont change
                    storage = 100, -- First Upgrade for new storage space
                    price = 1 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    storage = 150, -- Second Upgrade for new storage space
                    price = 1 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    storage = 200, -- Third Upgrade for new storage space
                    price = 1 -- Select price for this upgrade
                }
            },
            Cars = {
                {
                    level = 0, -- dont change
                    cars = 1, -- Default cars players can buy in the garage
                    price = 0 -- Select price for this upgrade
                },
                {
                    level = 1, -- dont change
                    cars = 2, -- First Upgrade for new vehicles
                    price = 5000 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    cars = 4, -- Second Upgrade for new vehicles
                    price = 10000 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    cars = 6, -- Third Upgrade for new vehicles
                    price = 15000 -- Select price for this upgrade
                }
            },
            Wallet = {
                {
                    level = 0, -- dont change
                    walletmax = 100000, -- Default wallet limit
                    price = 0 -- Select price for this upgrade
                },
                {
                    level = 1, -- dont change
                    walletmax = 100000, -- First Upgrade for new Wallet limit
                    price = 5000 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    walletmax = 1000000, -- Second Upgrade for new Wallet limit
                    price = 10000 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    walletmax = 10000000, -- Third Upgrade for new Wallet limit (Select a very high number to make it infinite)
                    price = 15000 -- Select price for this upgrade
                }
            },
            Shop = {
                {
                    level = 0, -- dont change
                    discount = 0, -- Default shop discount
                    price = 0 -- Select price for this upgrade
                },
                {
                    level = 1, -- dont change
                    discount = 5, -- First Upgrade for new Shop discount
                    price = 5000 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    discount = 10, -- Second Upgrade for new Shop discount
                    price = 10000 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    discount = 15, -- Third Upgrade for new Shop discount
                    price = 15000 -- Select price for this upgrade
                }
            }
        }
    },
    ["grove"] = {
        speerzoneallowed = true, -- Enable or disable for this faction (true, false)
        Garage = {
            pedormarker = false, -- false = marker. true = ped
            Blip = {
                -- Blips are only visible to members of the faction
                active = false, -- Enable or disable (true, false)
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - Garage"
            },
            ped = GetHashKey("s_m_m_fiboffice_02"), -- https://docs.fivem.net/docs/game-references/ped-models/
            parkinarea = 10.0, -- Area where players can park their cars in the garage
            location = vector3(96.43579864502, -1944.2381591797, 20.743688583374),
            SpawnParkOutLocations = {
                ["car"] = vector4(88.040603637695, -1929.0931396484, 20.757026672363, 41.068389892578)
            },
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            shopcars = {
                -- Be careful with garage upgrades! If 3 cars are available by default, the first three are copied from the config. If 2 new cars are added at upgrade level 1, the next 2 cars are taken from config
                {
                    name = "zentorno", -- Vehicle name
                    price = "1000", -- price for this vehicle
                    type = "car",
                    -- New image must be the same size as the example from S-Service
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    } -- Colors that are on the car immediately after purchase (can be changed by the tuner)
                },
                {
                    name = "drafter",
                    price = "1500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "jugular",
                    price = "2000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "schafter6",
                    price = "2500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "adder",
                    price = "3000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "gburrito2",
                    price = "5500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "bolide",
                    price = "6000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "buffalo",
                    price = "6500",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                },
                {
                    name = "gb200",
                    price = "1000",
                    type = "car",
                    defaultcolor = {
                        typecolor = 0,
                        typecolor2 = 0,
                        rgbprimary = {
                            r = 255,
                            g = 255,
                            b = 255
                        },
                        rgbsecondary = {
                            r = 255,
                            g = 255,
                            b = 255
                        }
                    }
                }
            }
        },
        Shop = {
            pedormarker = false, -- false = marker. true = ped
            Blip = {
                active = false, -- Enable or disable (true, false)
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - Shop"
            },
            ped = GetHashKey("mp_m_securoguard_01"), -- https://docs.fivem.net/docs/game-references/ped-models/
            location = vector4(95.31706237793, -1916.7916259766, 20.735069274902, 321.88534545898),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            payment = "green", -- "green" or "black" money
            sellingitems = {
                {
                    name = "packaged_plank", -- Item or weapon name
                    label = "Packaged wood", -- Item or weapon label
                    price = "100", -- price for this item or weapon
                    type = "Item" -- Item or weapon ?
                },
                {
                    name = "bread",
                    label = "Bread",
                    price = "100",
                    type = "Item"
                },
                {
                    name = "WEAPON_ASSAULTRIFLE",
                    label = "Assault Rifle",
                    price = "100",
                    type = "Weapon"
                }
            }
        },
        Bossmenu = {
            pedormarker = false, -- false = marker. true = ped
            ped = GetHashKey("s_m_y_armymech_01"), -- https://docs.fivem.net/docs/game-references/ped-models/
            Blip = {
                active = false,
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - BossMenu"
            },
            location = vector4(119.71199035645, -1929.0109863281, 20.738809585571, 249.34069824219),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            Permission = {
                [3] = {
                    allpermissions = false,
                    canmanagespeerzone = false,
                    uebersichtpermission = true,
                    bankpermission = true,
                    reangepermission = true,
                    upgradepermission = true
                },
                [11] = {
                    allpermissions = false,
                    canmanagespeerzone = true,
                    uebersichtpermission = true,
                    bankpermission = false,
                    reangepermission = true,
                    upgradepermission = true
                }, -- Select which jobgrades have which permissions in the Chef menu
                [12] = {
                    allpermissions = true,
                    canmanagespeerzone = true,
                    uebersichtpermission = true,
                    bankpermission = false,
                    reangepermission = true,
                    upgradepermission = true
                }
            }
        },
        Lager = {
            pedormarker = false, -- false = marker. true = ped
            ped = GetHashKey("s_m_y_armymech_01"), -- https://docs.fivem.net/docs/game-references/ped-models/
            location = vector4(122.6407699585, -1938.3330078125, 20.751237869263, 206.57479858398),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            },
            Permissions = {
                -- All grades with Permissions. By default false
                {grade = 3, permission = false},
                {grade = 12, permission = true}
            }
        },
        InDuty = {
            indutysystem = true, -- Enable or disable (true, false)
            PaycheckWhenInduty = false,
            Blip = {
                active = true, -- Enable or disable (true, false)
                Blipsprite = 119, -- https://docs.fivem.net/docs/game-references/blips/
                BlipColor = 37,
                BlipScale = 1.0,
                BlipName = "LCN - Induty"
            },
            location = vector4(116.90393066406, -1941.5122070312, 20.596998214722, 116.71366882324),
            Marker = {
                markertype = 1, -- https://docs.fivem.net/docs/game-references/markers/
                markersize = vector3(1, 1, 1),
                markercolor = {r = 1, g = 1, b = 1}
            }
        },
        Upgrades = {
            Storage = {
                {
                    level = 0, -- dont change
                    storage = 50, -- Default storage space
                    price = 1 -- dont change
                },
                {
                    level = 1, -- dont change
                    storage = 100, -- First Upgrade for new storage space
                    price = 1 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    storage = 150, -- Second Upgrade for new storage space
                    price = 1 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    storage = 200, -- Third Upgrade for new storage space
                    price = 1 -- Select price for this upgrade
                }
            },
            Cars = {
                {
                    level = 0, -- dont change
                    cars = 1, -- Default cars players can buy in the garage
                    price = 0 -- Select price for this upgrade
                },
                {
                    level = 1, -- dont change
                    cars = 2, -- First Upgrade for new vehicles
                    price = 5000 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    cars = 4, -- Second Upgrade for new vehicles
                    price = 10000 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    cars = 6, -- Third Upgrade for new vehicles
                    price = 15000 -- Select price for this upgrade
                }
            },
            Wallet = {
                {
                    level = 0, -- dont change
                    walletmax = 100000, -- Default wallet limit
                    price = 0 -- Select price for this upgrade
                },
                {
                    level = 1, -- dont change
                    walletmax = 100000, -- First Upgrade for new Wallet limit
                    price = 5000 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    walletmax = 1000000, -- Second Upgrade for new Wallet limit
                    price = 10000 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    walletmax = 10000000, -- Third Upgrade for new Wallet limit (Select a very high number to make it infinite)
                    price = 15000 -- Select price for this upgrade
                }
            },
            Shop = {
                {
                    level = 0, -- dont change
                    discount = 0, -- Default shop discount
                    price = 0 -- Select price for this upgrade
                },
                {
                    level = 1, -- dont change
                    discount = 5, -- First Upgrade for new Shop discount
                    price = 5000 -- Select price for this upgrade
                },
                {
                    level = 2, -- dont change
                    discount = 10, -- Second Upgrade for new Shop discount
                    price = 10000 -- Select price for this upgrade
                },
                {
                    level = 3, -- dont change
                    discount = 15, -- Third Upgrade for new Shop discount
                    price = 15000 -- Select price for this upgrade
                }
            }
        }
    }
}
