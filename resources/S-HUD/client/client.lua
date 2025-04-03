local text =
    [[
        
     _____            _    _   _    _   _____  
    / ____|          | |  | | | |  | | |  __ \ 
   | (___    ______  | |__| | | |  | | | |  | |
    \___ \  |______| |  __  | | |  | | | |  | |
    ____) |          | |  | | | |__| | | |__| |
   |_____/           |_|  |_|  \____/  |_____/ 
                                                                    
           
                    VERSION: 1.0.2
                 Powered by S-Service 
]]
print(text)

ESX = exports["es_extended"]:getSharedObject()

local incarout = false
local isOpen = false
-- Default
local HUDDesign = Config.Default.AnnounceDesigns
local HelpTextDefault = Config.Default.Helptext
local DefaultTextDesign = Config.Default.TextDesign
local DefaultSpeedo = Config.Default.SpeedoDesign
local DefaultWeaponDesign = Config.Default.DefaultWeaponDesign
local DefaultMoneyDesign = Config.Default.MoneyDesign
local DefaultVoiceDesign = Config.Default.VoiceDesign
local DefaultAdminNotifyDesign = Config.Default.DefaultAdminNotify
local DefaultInfoNotifyDesign = Config.Default.Defaultnotifydesign

local DefaultPlayerCountDesign = Config.Default.DefaultPlayerCountDesign
local DefaultJobDesign = Config.Default.DefaultJobDesign
local DefaultFoodDesign = Config.Default.DefaultFoodDesign
local DefaultProgressbar = Config.Default.DefaultProgressbarDesign
local notifysdesign = 1
local hunger, thirst, stress
-- HUD functions
function startsWithPlus(word)
    return string.sub(word, 1, 1) == "+"
end
function startsWithMinus(word)
    return string.sub(word, 1, 1) == "-"
end
function startsWithtx(word)
    return string.sub(word, 1, 1) == "txadmin"
end
function startsWithunterstrich(word)
    return string.sub(word, 1, 1) == "_"
end

function isCommandBlackListed(command)
    for _, blacklistedCommandStart in pairs(Config.BlackListetSuggestionsComanndStart) do
        if string.sub(command, 1, string.len(blacklistedCommandStart)) == blacklistedCommandStart then
            return true
        end
    end
    return false
end

local servercommands
local firsttime = false
local hudloaded = false
local gotvoide = false
function StartHUD()
    if not hudloaded then
        hudloaded = true

        ESX.TriggerServerCallback(
            "SService:Server:getData",
            function(money, black, bank, onlineplayer, maxclients, source, job, jobdetailrank)
                SendNUIMessage(
                    {
                        type = "OpenHUD",
                        designbank = DefaultMoneyDesign,
                        money = money,
                        black = black,
                        allowedblackomey = Config.Information.blackmoney,
                        bank = bank,
                        id = GetPlayerServerId(PlayerId()),
                        servername = Config.Information.ServerName,
                        detailtext = Config.Information.DetailText,
                        job = job,
                        jobdetailrank = jobdetailrank,
                        designjob = DefaultJobDesign,
                        gruenteile = Config.Voice.voicemodus,
                        moneysymbol = Config.Information.moneysymbol,
                        mode = Config.Voice.defaultvoiceindexsalty,
                        design = DefaultVoiceDesign
                    }
                )
                SendNUIMessage(
                    {
                        type = "UpdatePlayerCount",
                        onlineplayer = onlineplayer,
                        maxclients = maxclients,
                        design = DefaultPlayerCountDesign
                    }
                )
            end
        )
        ESX.TriggerServerCallback(
            "SService:Server:getDataDesign",
            function(data)
                HUDDesign = data[1].textdesign
                HelpTextDefault = data[1].interaction
                DefaultTextDesign = data[1].hud
                DefaultSpeedo = data[1].speedometer
                DefaultWeaponDesign = data[1].weaponinfo
                DefaultMoneyDesign = data[1].bankinfo
                DefaultVoiceDesign = data[1].voicedesign
                DefaultAdminNotifyDesign = data[1].notifys
                DefaultInfoNotifyDesign = data[1].notifys
                DefaultPlayerCountDesign = data[1].iddesign
                DefaultJobDesign = data[1].iddesign
                DefaultFoodDesign = data[1].eatdrink
                DefaultProgressbar = data[1].progressbar
                SendNUIMessage(
                    {
                        type = "UpdatePlayerCounter",
                        value = DefaultJobDesign
                    }
                )
                if IsPedInAnyVehicle(GetPlayerPed(-1), false) then
                    SendNUIMessage(
                        {
                            type = "OpenVehicleHUD",
                            speedodesgin = DefaultSpeedo
                        }
                    )
                    SendNUIMessage(
                        {
                            type = "UpdateVehicleHUD",
                            value = DefaultSpeedo
                        }
                    )
                end
                SendNUIMessage(
                    {
                        type = "tickvalues",
                        thirst = thirst,
                        fooddesign = DefaultFoodDesign,
                        hunger = hunger
                    }
                )
                SendNUIMessage(
                    {
                        type = "UpdateVoiceInfo",
                        value = DefaultVoiceDesign
                    }
                )
                SendNUIMessage(
                    {
                        type = "UpdateTopRightHUD",
                        value = DefaultTextDesign
                    }
                )
                SendNUIMessage(
                    {
                        type = "Updatecoords",
                        hud2coords = data[1].hud2coords,
                        hudcoords = data[1].hudcoords,
                        notifyscoords = data[1].notifyscoords,
                        speedometercoords = data[1].speedometercoords,
                        eatdrinkcoords = data[1].eatdrinkcoords,
                        weaponinfocoords = data[1].weaponinfocoords,
                        bankinfocoords = data[1].bankinfocoords,
                        interactioncoords = data[1].interactioncoords,
                        voicedesigncoords = data[1].voicedesigncoords,
                        textdesigncoords = data[1].textdesigncoords,
                        adminotifycoords = data[1].adminotifycoords,
                        iddesigncoords = data[1].iddesigncoords,
                        progressbarcoords = data[1].progressbarcoords,
                        chatcoords = data[1].chatcoords,
                        jobcoords = data[1].jobcoords,
                        thirdplayerinfo = data[1].textdesigncoords
                    }
                )
                ESX.TriggerServerCallback(
                    "SService:Server:getData",
                    function(money, black, bank)
                        SendNUIMessage(
                            {
                                type = "UpdateMoney2",
                                money = money,
                                allowedblackomey = Config.Information.blackmoney,
                                black = black,
                                bank = bank,
                                design = DefaultMoneyDesign,
                                moneysymbol = Config.Information.moneysymbol
                            }
                        )
                    end
                )
                Citizen.Wait(100)
                SendNUIMessage(
                    {
                        type = "UpdateBankInfo",
                        value = DefaultMoneyDesign
                    }
                )
                notifysdesign = data[1].notifysleftright
                PosHandler("iddesignleftright", data[1].iddesignleftright)
                PosHandler("bankinfoleftright", data[1].bankinfoleftright)
                PosHandler("voicedesignleftright", data[1].voicedesignleftright)
                PosHandler("weaponinfoleftright", data[1].weaponinfoleftright)
                PosHandler("hudleftright", data[1].hudleftright)
                PosHandler("notifysleftright", data[1].notifysleftright)
                Citizen.Wait(1000)
                GetVoiceSystem()
                firsttime = true
            end
        )
    end
end

local possbileclientcommands = {}
RegisterNetEvent("SService:Client:GetServerComamnds")
AddEventHandler(
    "SService:Client:GetServerComamnds",
    function(commands)
        servercommands = nil
        servercommands = commands
        local allCommandsclient = GetRegisteredCommands()
        possbileclientcommands = {}
        for _, command in ipairs(allCommandsclient) do
            if command.name ~= nil then
                if IsAceAllowed(("command.%s"):format(command.name)) then
                    if
                        not startsWithPlus(command.name) and not startsWithMinus(command.name) and
                            not startsWithtx(command.name) and
                            not startsWithunterstrich(command.name) and
                            not isCommandBlackListed(command.name)
                     then
                        table.insert(possbileclientcommands, command)
                    end
                end
            end
        end
    end
)

RegisterNetEvent(
    "esx:setJob",
    function(job, lastJob)
        ESX.TriggerServerCallback(
            "SService:Server:GetJob",
            function(job, jobname)
                SendNUIMessage(
                    {
                        type = "UpdateJob",
                        job = job,
                        designjob = DefaultJobDesign,
                        jobdetailrank = jobname
                    }
                )
            end
        )
    end
)

local loaded = false
if Config.Information.hidehudcomponnents then
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(2)
                if loaded then
                    HideHudComponentThisFrame(6)
                    HideHudComponentThisFrame(7)
                    HideHudComponentThisFrame(8)
                    HideHudComponentThisFrame(9)
                end
            end
        end
    )
end

local playerloaded = false

AddEventHandler(
    "onResourceStart",
    function(resource)
        if resource ~= GetCurrentResourceName() then
            return
        end

        while not ESX.IsPlayerLoaded() do
            Citizen.Wait(200)
        end
        while ESX.GetPlayerData().job == nil do
            Citizen.Wait(10)
        end

        Citizen.Wait(Config.Information.WaitBevoreLoad)
        loaded = true
        SetTextChatEnabled(false)
        TriggerServerEvent("SService:Server:GetCommands")
        StartHUD()
        TriggerServerEvent("SService:Server:UpdatePlayerCount")
    end
)

RegisterNetEvent("esx:playerLoaded")
AddEventHandler(
    "esx:playerLoaded",
    function(xPlayer, isNew, skin)
        while not ESX.IsPlayerLoaded() do
            Citizen.Wait(200)
        end
        while ESX.GetPlayerData().job == nil do
            Citizen.Wait(10)
        end

        Citizen.Wait(Config.Information.WaitBevoreLoad)
        Citizen.Wait(1000)
        loaded = true
        SetTextChatEnabled(false)
        TriggerServerEvent("SService:Server:GetCommands")
        StartHUD()
        TriggerServerEvent("SService:Server:UpdatePlayerCount")
    end
)
if Config.Information.enableesxstatus then
    RegisterNetEvent(
        "esx_status:onTick",
        function(data)
            for i = 1, #data do
                if data[i].name == "thirst" then
                    thirst = math.floor(data[i].percent)
                end
                if data[i].name == "hunger" then
                    hunger = math.floor(data[i].percent)
                end
            end
            SendNUIMessage(
                {
                    type = "tickvalues",
                    thirst = thirst,
                    fooddesign = DefaultFoodDesign,
                    hunger = hunger
                }
            )
        end
    )
end

if Config.Information.hexfood then
    if GetResourceState("hex_food") == "started" then
        RegisterNetEvent(
            "hex_food:onTick",
            function(food, thirst)
                SendNUIMessage(
                    {
                        type = "tickvalues",
                        thirst = thirst,
                        fooddesign = DefaultFoodDesign,
                        hunger = food
                    }
                )
            end
        )
    end
end

function MakeAnnounce(string, category, name, length)
    TriggerEvent("SService:Client:MakeAnnounce2", string, category, name, length)
end

-- Huge Notify
RegisterNetEvent("SService:Client:MakeAnnounce2")
AddEventHandler(
    "SService:Client:MakeAnnounce2",
    function(resultString, category, name, reallength)
        if category == "server" then
            category = 1
        elseif category == "event" then
            category = 2
        elseif category == "police" then
            category = 3
        elseif category == "medic" then
            category = 4
        elseif category == "faction" then
            category = 5
        end

        local length = reallength
        if reallength == nil then
            if category == 1 then
                length = Config.AnnounceNotifys.ServerAnnounce.lentghtime -- Default
            elseif category == 2 then
                length = Config.AnnounceNotifys.Eventannounce.lentghtime -- Default
            elseif category == 3 then
                length = Config.AnnounceNotifys.Policeannounce.lentghtime -- Default
            elseif category == 4 then
                length = Config.AnnounceNotifys.Medicannounce.lentghtime -- Default
            elseif category == 5 then
                length = Config.AnnounceNotifys.FactionAnnounce.lentghtime -- Default
            end
        end
        if length >= 500 then
            length = length / 1000
        end
        SendNUIMessage(
            {
                type = "OpenAnnounce",
                HUDDesign = HUDDesign,
                resultString = resultString,
                category = category,
                length = length,
                name = name
            }
        )
    end
)

-- KeyBindsMenu

RegisterNUICallback(
    "OpenKeybindsMenu",
    function()
        ActivateFrontendMenu(GetHashKey("FE_MENU_VERSION_LANDING_KEYMAPPING_MENU"), true, -1)

        Wait(500)
        SetNuiFocus(false, false)
        if IsFrontendReadyForControl() then
        end
    end
)

RegisterCommand(
    "Hudsettings",
    function()
        if not IsEntityDead(GetPlayerPed(-1)) and not IsEntityInAir(GetPlayerPed(-1)) and not IsPauseMenuActive() then
            SetNuiFocus(true, true)
            ESX.TriggerServerCallback(
                "SService:Server:GetDataForSettings",
                function(data)
                    SendNUIMessage(
                        {
                            type = "OpenSettingsMenu",
                            list = listselectable,
                            result = data
                        }
                    )
                end
            )
        end
    end,
    false
)

RegisterKeyMapping(
    "Hudsettings",
    Languages[Config.Information.language]["KeyBoard"]["opensettings"],
    "keyboard",
    Config.DefaultKeyMappings.HudSettings
)

RegisterNUICallback(
    "RemoveUtils",
    function()
        SetNuiFocus(false, false)
    end
)
-- Speedo
local maxRpm = 1.0
if Config.Information.oldesxversion then
    local timehud = 100
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(timehud)
                if loaded then
                    local player = PlayerPedId()
                    if DefaultSpeedo == 1 then
                        timehud = 100
                        if IsPedInAnyVehicle(player) then
                            vehicle = GetVehiclePedIsIn(player, false)
                            if DoesEntityExist(vehicle) then
                                incarout = true
                                GetOns()
                                local speed = GetEntitySpeed(vehicle)
                                local curspeed = math.floor(speed * 3.6)

                                local currentRpm = GetVehicleCurrentRpm(vehicle)
                                local widthPercent
                                timehud = Config.Ms.Speedodesign1
                                if IsPedInAnyHeli(player) then
                                    widthPercent = curspeed / 2
                                    SendNUIMessage(
                                        {
                                            type = "OpenVehicleHUDHeli",
                                            speedodesgin = DefaultSpeedo,
                                            curspeed = curspeed,
                                            gear = "1",
                                            widthPercent = widthPercent
                                        }
                                    )
                                else
                                    widthPercent = (currentRpm / maxRpm) * 100
                                    local gear = GetVehicleCurrentGear(vehicle)
                                    SendNUIMessage(
                                        {
                                            type = "OpenVehicleHUD",
                                            speedodesgin = DefaultSpeedo,
                                            curspeed = curspeed,
                                            gear = gear,
                                            widthPercent = widthPercent
                                        }
                                    )
                                end
                            end
                        else
                            timehud = 100
                            incarout = false
                            if not IsPedInAnyVehicle(player) then
                                SendNUIMessage(
                                    {
                                        type = "RemoveVehicleHUD"
                                    }
                                )
                                Citizen.Wait(5000)
                            end
                        end
                    else
                        timehud = 1000
                        Citizen.Wait(4000)
                    end
                end
            end
        end
    )
end

Citizen.CreateThread(
    function()
        while true do
            local sleeper = 700
            if loaded then
                local player = GetPlayerPed(-1)
                local weapon = GetSelectedPedWeapon(player)
                if weapon ~= GetHashKey("weapon_unarmed") and weapon ~= 966099553 then
                    sleeper = 200
                    local resolu, ammoinclip = GetAmmoInClip(player, weapon)
                    local ammotital = GetAmmoInPedWeapon(player, weapon)
                    local name = ESX.GetWeaponFromHash(weapon).name

                    if ammoinclip ~= 0 then
                        SendNUIMessage(
                            {
                                type = "UpdateWeapon",
                                design = DefaultWeaponDesign,
                                ammoInClip = ammoinclip,
                                ammoInWeapon = ammotital - ammoinclip,
                                name = name
                            }
                        )
                    end
                else
                    SendNUIMessage(
                        {
                            type = "RemoveWeapon"
                        }
                    )
                end

                if IsPedInAnyVehicle(player) then
                    vehicle = GetVehiclePedIsIn(player, false)
                end
            end
            Citizen.Wait(sleeper)
        end
    end
)

Citizen.CreateThread(
    function()
        while true do
            if loaded then
                local player = GetPlayerPed(-1)
                SendNUIMessage(
                    {
                        type = "UpdateStreet",
                        street = GetStreetNameFromHashKey(GetStreetNameAtCoord(table.unpack(GetEntityCoords(player)))),
                        zonename = GetLabelText(GetNameOfZone(GetEntityCoords(player)))
                    }
                )
            end
            Citizen.Wait(7000)
        end
    end
)

Citizen.CreateThread(
    function()
        while true do
            Citizen.Wait(1000)
            if loaded then
                if GetIsVehicleEngineRunning(vehicle) then
                    SendNUIMessage(
                        {
                            type = "UpdateMotor",
                            value = true
                        }
                    )
                else
                    SendNUIMessage(
                        {
                            type = "UpdateMotor",
                            value = false
                        }
                    )
                end

                if GetVehicleDoorLockStatus(vehicle) == 2 then
                    SendNUIMessage(
                        {
                            type = "Updatelkock",
                            value = true
                        }
                    )
                else
                    SendNUIMessage(
                        {
                            type = "Updatelkock",
                            value = false
                        }
                    )
                end
                local _, light, highbeams = GetVehicleLightsState(vehicle)

                if highbeams == 1 then
                    SendNUIMessage(
                        {
                            type = "Updatelight",
                            value = 2
                        }
                    )
                end

                if light == 1 and highbeams == 0 then
                    SendNUIMessage(
                        {
                            type = "Updatelight",
                            value = 3
                        }
                    )
                end
                if light == 0 and highbeams == 0 then
                    SendNUIMessage(
                        {
                            type = "Updatelight",
                            value = 1
                        }
                    )
                end

                if Config.Voice.pmavoice then
                    if NetworkIsPlayerTalking(PlayerId()) then
                        SendNUIMessage(
                            {
                                type = "UpdateTalking",
                                value = true
                            }
                        )
                    else
                        SendNUIMessage(
                            {
                                type = "UpdateTalking",
                                value = false
                            }
                        )
                    end
                end
            end
        end
    end
)
if Config.Information.oldesxversion then
    local timer = 100
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(timer)
                if loaded then
                    if DefaultSpeedo == 3 or DefaultSpeedo == 2 then
                        local player = GetPlayerPed(-1)
                        if IsPedInAnyVehicle(player, false) then
                            if DoesEntityExist(vehicle) then
                                incarout = true
                                GetOns()
                                local speed = GetEntitySpeed(vehicle)
                                local curspeed = math.floor(speed * 3.6)
                                local max_speed = GetVehicleEstimatedMaxSpeed(vehicle) * 3.6 + 30
                                local speed_percent = (curspeed / max_speed * 100)
                                timer = Config.Ms.Speedodesign2und3
                                if IsPedInAnyHeli(player) then
                                    SendNUIMessage(
                                        {
                                            type = "OpenVehicleHUDHeli",
                                            speedodesgin = DefaultSpeedo,
                                            curspeed = curspeed,
                                            widthPercent = speed_percent
                                        }
                                    )
                                else
                                    local gear = GetVehicleCurrentGear(vehicle)
                                    SendNUIMessage(
                                        {
                                            type = "OpenVehicleHUD",
                                            speedodesgin = DefaultSpeedo,
                                            curspeed = curspeed,
                                            gear = gear,
                                            widthPercent = speed_percent
                                        }
                                    )
                                end
                            end
                        else
                            timer = 100
                            incarout = false
                            if not IsPedInAnyVehicle(player) then
                                SendNUIMessage(
                                    {
                                        type = "RemoveVehicleHUD"
                                    }
                                )
                                Citizen.Wait(3000)
                            end
                        end
                    else
                        Citizen.Wait(3000)
                    end
                end
            end
        end
    )
end

RegisterNetEvent("SService:Client:TeamNotify")
AddEventHandler(
    "SService:Client:TeamNotify",
    function(name, message, length)
        local length = length
        if length == nil then
            length = Config.Timestamp.InfoNotifys
        end
        if length >= 500 then
            length = length / 1000
        end
        SendNUIMessage(
            {
                type = "OpenTeamNotify",
                name = name,
                message = message,
                notifydesgin = notifysdesign,
                Design = DefaultAdminNotifyDesign,
                time = length
            }
        )
    end
)

RegisterNetEvent("SService:Client:MakeInfoNotify")
AddEventHandler(
    "SService:Client:MakeInfoNotify",
    function(category, titel, message, length, name)
        if category == "info" then
            category = 1
        elseif category == "success" then
            category = 2
        elseif category == "error" then
            category = 3
        elseif category == "ooc" then
            category = 4
        end
        local length = length
        if length == nil then
            length = Config.Timestamp.InfoNotifys
        end
        if length >= 500 then
            length = length / 1000
        end
        SendNUIMessage(
            {
                type = "OpenInfoNotify",
                category = category,
                Design = DefaultInfoNotifyDesign,
                message = message,
                titel = titel,
                time = length,
                name = name,
                notifydesgin = notifysdesign
            }
        )
    end
)

RegisterNetEvent("SService:Client:TriggerHelpNotify")
AddEventHandler(
    "SService:Client:TriggerHelpNotify",
    function(Key, text)
        if text == nil then
            print("^1NO MSG GIVEN")
            return
        end
        SendNUIMessage(
            {
                type = "UpdateText",
                Key = Key,
                design = HelpTextDefault,
                text = text
            }
        )
        timer = GetGameTimer()
        if not isOpen then
            isOpen = true
            SendNUIMessage(
                {
                    type = "OpenKey",
                    Key = Key,
                    design = HelpTextDefault,
                    text = text
                }
            )

            Citizen.CreateThread(
                function()
                    while timer + 100 >= GetGameTimer() do
                        Wait(1500)
                    end

                    isOpen = false
                    Wait(200)

                    if not isOpen then
                        SendNUIMessage(
                            {
                                type = "hidenotify",
                                design = HelpTextDefault
                            }
                        )
                    end
                end
            )
        end
    end
)

RegisterNetEvent(
    "esx:setAccountMoney",
    function(account)
        if account.name == "money" then
            SendNUIMessage(
                {
                    type = "UpdateMoney",
                    typeofmoney = account.name,
                    value = account.money,
                    allowedblackomey = Config.Information.blackmoney,
                    design = DefaultMoneyDesign,
                    moneysymbol = Config.Information.moneysymbol
                }
            )
        end
        if account.name == "black_money" then
            SendNUIMessage(
                {
                    type = "UpdateMoney",
                    typeofmoney = account.name,
                    value = account.money,
                    allowedblackomey = Config.Information.blackmoney,
                    design = DefaultMoneyDesign,
                    moneysymbol = Config.Information.moneysymbol
                }
            )
        end
        if account.name == "bank" then
            SendNUIMessage(
                {
                    type = "UpdateMoney",
                    typeofmoney = account.name,
                    value = account.money,
                    allowedblackomey = Config.Information.blackmoney,
                    design = DefaultMoneyDesign,
                    moneysymbol = Config.Information.moneysymbol
                }
            )
        end
    end
)

local CurrentDistance = 0
local showTime = 0
function GetVoiceSystem()
    if not gotvoide then
        gotvoide = true
        if Config.Voice.pmavoice then
            AddEventHandler(
                "pma-voice:setTalkingMode",
                function(mode)
                    SendNUIMessage(
                        {
                            type = "UpdateRange",
                            mode = mode,
                            maxdesign = Config.Voice.voicemodus,
                            design = DefaultVoiceDesign
                        }
                    )
                    CurrentDistance = Config.Voice.voicerangemters[mode].meters
                    if Config.Voice.shownotifys then
                        MakeNotifyInfo(
                            1,
                            "INFORMATION",
                            Languages[Config.Information.language]["Notifys"]["speaker"] ..
                                CurrentDistance .. Languages[Config.Information.language]["Notifys"]["speaker2"]
                        )
                    end
                    showTime = 0
                end
            )
            RegisterNetEvent("pma-voice:syncRadioData")
            AddEventHandler(
                "pma-voice:syncRadioData",
                function()
                    SendNUIMessage(
                        {
                            type = "OpenRadio",
                            design = DefaultVoiceDesign
                        }
                    )
                end
            )
            RegisterNetEvent("pma-voice:removePlayerFromRadio")
            AddEventHandler(
                "pma-voice:removePlayerFromRadio",
                function()
                    SendNUIMessage(
                        {
                            type = "RemoveRadio",
                            design = DefaultVoiceDesign
                        }
                    )
                end
            )

            Citizen.Wait(500)
        end

        if Config.Voice.saltychat then
            AddEventHandler(
                "SaltyChat_TalkStateChanged",
                function(bool)
                    if bool then
                        SendNUIMessage(
                            {
                                type = "UpdateTalking",
                                value = true
                            }
                        )
                    else
                        SendNUIMessage(
                            {
                                type = "UpdateTalking",
                                value = false
                            }
                        )
                    end
                end
            )

            AddEventHandler(
                "SaltyChat_MicStateChanged",
                function(bool)
                    if bool then
                        SendNUIMessage(
                            {
                                type = "OnMute",
                                value = true
                            }
                        )
                    else
                        SendNUIMessage(
                            {
                                type = "OnMute",
                                value = false
                            }
                        )
                    end
                end
            )
            AddEventHandler(
                "SaltyChat_MicEnabledChanged",
                function(bool)
                    if bool then
                        SendNUIMessage(
                            {
                                type = "OnMute",
                                value = true
                            }
                        )
                    else
                        SendNUIMessage(
                            {
                                type = "OnMute",
                                value = false
                            }
                        )
                    end
                end
            )

            AddEventHandler(
                "SaltyChat_VoiceRangeChanged",
                function(voiceRange, index, availableVoiceRanges)
                    index = index + 1
                    CurrentDistance = Config.Voice.voicerangemters[index].meters
                    if Config.Voice.shownotifys then
                        MakeNotifyInfo(
                            1,
                            "INFORMATION",
                            Languages[Config.Information.language]["Notifys"]["speaker"] ..
                                CurrentDistance .. Languages[Config.Information.language]["Notifys"]["speaker2"]
                        )
                    end
                    SendNUIMessage(
                        {
                            type = "UpdateRange",
                            mode = index,
                            maxdesign = Config.Voice.voicemodus,
                            design = DefaultVoiceDesign
                        }
                    )
                    showTime = 0
                end
            )

            AddEventHandler(
                "SaltyChat_RadioTrafficStateChanged",
                function(primaryReceive, primaryTransmit, secondaryReceive, secondaryTransmit)
                    bool = primaryTransmit or secondaryTransmit
                    if bool then
                        SendNUIMessage(
                            {
                                type = "OpenRadio",
                                design = DefaultVoiceDesign
                            }
                        )
                    else
                        SendNUIMessage(
                            {
                                type = "RemoveRadio",
                                design = DefaultVoiceDesign
                            }
                        )
                    end
                end
            )
        end

        if Config.Voice.MumbelVoice then
            RegisterNetEvent("mumble:SetVoiceData")
            AddEventHandler(
                "mumble:SetVoiceData",
                function(player, key, value)
                    if GetPlayerServerId(NetworkGetEntityOwner(GetPlayerPed(-1))) == player and key == "mode" then
                        CurrentDistance = Config.Voice.voicerangemters[value].meters
                        if Config.Voice.shownotifys then
                            MakeNotifyInfo(
                                1,
                                "INFORMATION",
                                Languages[Config.Information.language]["Notifys"]["speaker"] ..
                                    CurrentDistance .. Languages[Config.Information.language]["Notifys"]["speaker2"]
                            )
                        end
                        SendNUIMessage(
                            {
                                type = "UpdateRange",
                                mode = value,
                                maxdesign = Config.Voice.voicemodus,
                                design = DefaultVoiceDesign
                            }
                        )
                        showTime = 0
                    end
                end
            )
        end
    end
end

function SetRange(value)
    SendNUIMessage(
        {
            type = "UpdateRange",
            mode = value,
            maxdesign = Config.Voice.voicemodus,
            design = DefaultVoiceDesign
        }
    )
end

if Config.Voice.enablevoicrange then
    local times = 5
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(times)
                if loaded then
                    if showTime < 1000 then
                        times = 5
                        local pedCoords = GetEntityCoords(PlayerPedId())

                        DrawMarker(
                            Config.Voice.Marker.markertype,
                            pedCoords.x,
                            pedCoords.y,
                            pedCoords.z - 1,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                            0.0,
                            CurrentDistance * 2.0,
                            CurrentDistance * 2.0,
                            1.0,
                            Config.Voice.Marker.markercolor.r,
                            Config.Voice.Marker.markercolor.g,
                            Config.Voice.Marker.markercolor.b,
                            0.8,
                            false,
                            false,
                            2,
                            false,
                            nil,
                            nil,
                            false
                        )
                        showTime = showTime + 5
                    else
                        times = 100
                    end
                end
            end
        end
    )
end

RegisterNetEvent("SService:Client:MakeProgressbar")
AddEventHandler(
    "SService:Client:MakeProgressbar",
    function(helptext, length)
        if length <= 500 then
            length = length * 1000
        end
        SendNUIMessage(
            {
                type = "OpenLoadingBar",
                helptext = helptext,
                time = length,
                design = DefaultProgressbar
            }
        )
    end
)

RegisterNetEvent("SServic:Client:UpdatePlayerCount")
AddEventHandler(
    "SServic:Client:UpdatePlayerCount",
    function(onlineplayer, maxclients)
        SendNUIMessage(
            {
                type = "UpdatePlayerCount",
                onlineplayer = onlineplayer,
                maxclients = maxclients,
                design = DefaultPlayerCountDesign
            }
        )
    end
)

local getcurrentposition = 0
local commandindex = 0

local list = {}

RegisterNUICallback(
    "RemoveChat",
    function()
        commandindex = getcurrentposition
        SetNuiFocus(false, false)
        inchatmenu = false
    end
)

local tempomat = false
if Config.Information.enablecruisecontrol then
    RegisterKeyMapping(
        "tempomat",
        Languages[Config.Information.language]["KeyBoard"]["tempomat"],
        "keyboard",
        Config.DefaultKeyMappings.CruiseControl
    )
    RegisterCommand(
        "tempomat",
        function()
            local ped = PlayerPedId()
            local vehicle = GetVehiclePedIsIn(ped, true)
            local seat = GetPedInVehicleSeat(vehicle, -1)
            if seat == ped then
                local currentlySpeed = GetEntitySpeed(vehicle)
                local rpm = GetVehicleCurrentRpm(vehicle)
                tempomat = not tempomat
                if tempomat and IsVehicleOnAllWheels(vehicle) then
                    MakeNotifyInfo(
                        1,
                        "INFORMATION",
                        Languages[Config.Information.language]["Information"]["tempomaton"]
                    )
                    setTempomat(currentlySpeed, vehicle, rpm)
                end
            end
        end,
        false
    )
end
if Config.Information.enableengine then
    local engine = false
    RegisterKeyMapping(
        "motor",
        Languages[Config.Information.language]["KeyBoard"]["motor"],
        "keyboard",
        Config.DefaultKeyMappings.EnableMotor
    )
    RegisterCommand(
        "motor",
        function()
            local ped = PlayerPedId()
            local vehicle = GetVehiclePedIsIn(ped, true)
            local seat = GetPedInVehicleSeat(vehicle, -1)
            local isin = IsPedInAnyVehicle(ped, true)
            if seat == ped then
                engine = not GetIsVehicleEngineRunning(vehicle)
                Citizen.CreateThread(
                    function()
                        while not engine do
                            Wait(1)
                            if isin then
                                SetVehicleEngineOn(vehicle, false, false, false)
                                SetVehicleJetEngineOn(vehicle, false)
                            end
                            if IsControlJustPressed(0, 32) then
                                engine = true
                            end
                        end
                    end
                )
                if engine and isin then
                    SetVehicleEngineOn(vehicle, true, false, false)
                end
            end
        end,
        false
    )
end

function setTempomat(currentlySpeed, vehicle, rpm)
    time = 0
    if DoesEntityExist(vehicle) then
        Citizen.CreateThread(
            function()
                while tempomat do
                    Wait(1)
                    if not IsVehicleOnAllWheels(vehicle) then
                        time = time + 1
                        if time > 50 then
                            tempomat = false
                        end
                    end
                    if
                        IsControlJustPressed(0, 32) or IsControlJustPressed(0, 22) or IsControlJustPressed(0, 33) or
                            GetVehicleFuelLevel(vehicle) < 5.0 or
                            HasEntityCollidedWithAnything(vehicle)
                     then
                        tempomat = false
                        MakeNotifyInfo(
                            1,
                            "INFORMATION",
                            Languages[Config.Information.language]["Information"]["tempomatoff"]
                        )
                    end
                    SetVehicleForwardSpeed(vehicle, currentlySpeed)
                    SetVehicleCurrentRpm(vehicle, rpm)
                end
            end
        )
    end
end

RegisterNUICallback(
    "SendCommandToCLient",
    function(data)
        SetNuiFocus(false, false)

        list[getcurrentposition] = {}
        list[getcurrentposition].value = data.input

        getcurrentposition = #list + 1
        commandindex = commandindex + 1
        ExecuteCommand(data.input)
    end
)

RegisterNUICallback(
    "Fehler",
    function(data)
        MakeNotifyInfo(3, "ERROR", data.value)
    end
)

RegisterNUICallback(
    "GetLast",
    function(data)
        if commandindex > 0 then
            commandindex = commandindex - 1

            SendNUIMessage(
                {
                    type = "Inserttext",
                    value = list[commandindex].value
                }
            )
        end
    end
)

RegisterNUICallback(
    "GetNew",
    function(data)
        if commandindex < getcurrentposition then
            commandindex = commandindex + 1

            if commandindex == getcurrentposition then
                SendNUIMessage(
                    {
                        type = "Inserttext",
                        value = ""
                    }
                )
            else
                SendNUIMessage(
                    {
                        type = "Inserttext",
                        value = list[commandindex].value
                    }
                )
            end
        end
    end
)
RegisterNetEvent("SService:Client:MakeOOCnachricht")
AddEventHandler(
    "SService:Client:MakeOOCnachricht",
    function(string, name)
        local playerped = GetPlayerPed(-1)
        local players = ESX.Game.GetPlayersInArea(GetEntityCoords(playerped), 10.0)
        for k, v in pairs(players) do
            TriggerServerEvent("SService:Server:DisPlayNachricht", GetPlayerServerId(v), string, name)
        end
        TriggerServerEvent("SService:Server:DisPlayNachricht", GetPlayerServerId(PlayerId()), string, name)
    end
)

RegisterNetEvent("SService:Client:MakeTeamNachricht")
AddEventHandler(
    "SService:Client:MakeTeamNachricht",
    function(string, name)
        MakeTeamNotify(name, string)
    end
)

RegisterNetEvent("SService:Client:ShowID")
AddEventHandler(
    "SService:Client:ShowID",
    function(id)
        MakeNotifyInfo(1, "INFORMATION", Languages[Config.Information.language]["Information"]["idcommand"] .. id)
    end
)
RegisterNetEvent("SService:Client:ShowIDPlayer")
AddEventHandler(
    "SService:Client:ShowIDPlayer",
    function(id)
        local closestPlayer, closestPlayerDistance = ESX.Game.GetClosestPlayer(GetEntityCoords(GetPlayerPed(-1)))
        if closestPlayer == -1 or closestPlayerDistance > 3.0 then
            MakeNotifyInfo(3, "ERROR", Languages[Config.Information.language]["Information"]["noplayernearby"])
        else
            MakeNotifyInfo(
                1,
                "INFORMATION",
                Languages[Config.Information.language]["Information"]["idopesite"] .. GetPlayerServerId(closestPlayer)
            )
        end
    end
)

local function combineTables(t1, t2)
    local combinedTable = {}

    -- Erstes Table in das kombinierte Table einfügen
    for _, entry in ipairs(t1) do
        table.insert(combinedTable, entry)
    end

    -- Zweites Table in das kombinierte Table einfügen
    for _, entry in ipairs(t2) do
        table.insert(combinedTable, entry)
    end

    return combinedTable
end

function GetSuggestions(inputCommand)
    local allCommands = combineTables(servercommands, possbileclientcommands)
    local similarities = {}
    for k, command in pairs(allCommands) do
        local similarity = string.match(command.name, inputCommand)
        if similarity ~= nil then
            table.insert(similarities, {command = command.name, similarity = similarity})
        end
    end

    -- Sortieren der Befehle nach Ähnlichkeit
    table.sort(
        similarities,
        function(a, b)
            return a.similarity > b.similarity
        end
    )

    -- Auswahl der maximal 4 ähnlichsten Befehle
    local similarCommands = {}
    for i, data in ipairs(similarities) do
        if i <= 4 then
            similarCommands[i] = {}

            similarCommands[i].name = data.command
        else
            break
        end
    end

    return similarCommands
end

RegisterNUICallback(
    "GetSuggestions",
    function(data)
        if data.inputs ~= nil then
            local suggestions = GetSuggestions(data.inputs)
            SendNUIMessage(
                {
                    type = "InsertSuggestions",
                    suggestions = suggestions
                }
            )
        end
    end
)

local activespeerzone = false
local breaking = false
RegisterNetEvent("SService:Client:MakeSpeerzoneHUD")
AddEventHandler(
    "SService:Client:MakeSpeerzoneHUD",
    function(radius)
        if not activespeerzone then
            local radius = tonumber(radius) or 100
            local x, y, z = table.unpack(GetEntityCoords(GetPlayerPed(-1)))

            TriggerServerEvent("SService:Server:SyncSpeerzone", x, y, z, radius)
        else
            MakeNotifyInfo(3, "ERROR", Languages[Config.Information.language]["Information"]["nospeerzonen"])
        end
    end
)

local activespeerzonemd = false
local breakingmd = false
RegisterNetEvent("SService:Client:MakeSpeerzoneHUDmd")
AddEventHandler(
    "SService:Client:MakeSpeerzoneHUDmd",
    function(radius)
        if not activespeerzonemd then
            local radius = tonumber(radius) or 100
            local x, y, z = table.unpack(GetEntityCoords(GetPlayerPed(-1)))

            TriggerServerEvent("SService:Server:SyncSpeerzonemd", x, y, z, radius)
        else
            MakeNotifyInfo(3, "ERROR", Languages[Config.Information.language]["Information"]["nospeerzonen"])
        end
    end
)

RegisterNetEvent("SService:Client:SyncSpeerzone")
AddEventHandler(
    "SService:Client:SyncSpeerzone",
    function(x, y, z, radius)
        local blip
        local isBlue = true
        breaking = false
        Citizen.CreateThread(
            function()
                activespeerzone = true
                blip = AddBlipForRadius(x, y, z, numberToFloat(radius)) -- Koordinaten einfügen
                local pdblip = AddBlipForCoord(x, y, z)
                SetBlipSprite(blip, Config.Blips.PDBlip.blipspriteradius)
                -- Blip-Sprite festlegen (1 steht für einen normalen Punkt auf der Karte)
                SetBlipSprite(pdblip, Config.Blips.PDBlip.middleblipsprite)
                SetBlipDisplay(pdblip, Config.Blips.PDBlip.display) -- Blip-Anzeigeoptionen festlegen (4 steht für Anzeige auf Minimap und Weltkarte)
                SetBlipScale(pdblip, Config.Blips.PDBlip.scale) -- Blip-Größe festlegen
                SetBlipColour(pdblip, Config.Blips.PDBlip.colour) -- Anfangsfarbe des Blips (3 steht für Blau)
                BeginTextCommandSetBlipName("STRING")
                AddTextComponentString(Languages[Config.Information.language]["Blip"]["policearea"])
                EndTextCommandSetBlipName(pdblip)
                SetBlipAsShortRange(pdblip, true)
                SetBlipAlpha(blip, 80)
                while not breaking do
                    -- Wartezeit in Millisekunden (hier 5000 Millisekunden = 5 Sekunden)

                    if isBlue then
                        SetBlipColour(blip, 1) -- Wenn der Blip blau ist, ändere ihn auf rot (1)
                    else
                        SetBlipColour(blip, 3) -- Wenn der Blip rot ist, ändere ihn auf blau (3)
                    end

                    isBlue = not isBlue -- Ändere den Status für die nächste Iteration
                    Wait(500)
                end
                activespeerzone = false
                RemoveBlip(pdblip)
                RemoveBlip(blip)
            end
        )
    end
)

RegisterNetEvent("SService:Client:SyncSpeerzonemd")
AddEventHandler(
    "SService:Client:SyncSpeerzonemd",
    function(x, y, z, radius)
        local blip2
        local isBlue = true
        breakingmd = false
        Citizen.CreateThread(
            function()
                activespeerzonemd = true
                blip2 = AddBlipForRadius(x, y, z, numberToFloat(radius)) -- Koordinaten einfügen
                local mdblip = AddBlipForCoord(x, y, z)
                SetBlipSprite(blip2, Config.Blips.MDBlip.blipspriteradius)
                -- Blip-Sprite festlegen (1 steht für einen normalen Punkt auf der Karte)
                SetBlipSprite(mdblip, Config.Blips.MDBlip.middleblipsprite)
                SetBlipDisplay(mdblip, Config.Blips.MDBlip.display) -- Blip-Anzeigeoptionen festlegen (4 steht für Anzeige auf Minimap und Weltkarte)
                SetBlipScale(mdblip, Config.Blips.MDBlip.scale) -- Blip-Größe festlegen
                SetBlipColour(mdblip, Config.Blips.MDBlip.colour) -- Anfangsfarbe des Blips (3 steht für Blau)
                BeginTextCommandSetBlipName("STRING")
                AddTextComponentString(Languages[Config.Information.language]["Blip"]["mdarea"])
                EndTextCommandSetBlipName(mdblip)
                SetBlipAsShortRange(mdblip, true)
                SetBlipAlpha(blip2, 80)
                while not breakingmd do
                    -- Wartezeit in Millisekunden (hier 5000 Millisekunden = 5 Sekunden)

                    if isBlue then
                        SetBlipColour(blip2, 1) -- Wenn der Blip blau ist, ändere ihn auf rot (1)
                    else
                        SetBlipColour(blip2, 3) -- Wenn der Blip rot ist, ändere ihn auf blau (3)
                    end

                    isBlue = not isBlue -- Ändere den Status für die nächste Iteration
                    Wait(500)
                end
                activespeerzonemd = false
                RemoveBlip(mdblip)
                RemoveBlip(blip2)
            end
        )
    end
)

local street
RegisterNetEvent("SService:Client:MakeNotifyBig")
AddEventHandler(
    "SService:Client:MakeNotifyBig",
    function(x, y, z, radius, name)
        street = GetStreetNameFromHashKey(GetStreetNameAtCoord(x, y, z))
        local string =
            Languages[Config.Information.language]["Notifys"]["policeannounce1"] ..
            street .. Languages[Config.Information.language]["Notifys"]["policeannounce2"] .. radius .. "m"
        TriggerEvent("SService:Client:MakeAnnounce2", string, 3, name)
    end
)
local street2
RegisterNetEvent("SService:Client:MakeNotifyBigmd")
AddEventHandler(
    "SService:Client:MakeNotifyBigmd",
    function(x, y, z, radius, name)
        street2 = GetStreetNameFromHashKey(GetStreetNameAtCoord(x, y, z))
        local string =
            Languages[Config.Information.language]["Notifys"]["mdannounce1"] ..
            street2 .. Languages[Config.Information.language]["Notifys"]["mdannounce2"] .. radius .. "m"
        TriggerEvent("SService:Client:MakeAnnounce2", string, 4, name)
    end
)

RegisterNetEvent("SService:Client:MakeNotifyBig2")
AddEventHandler(
    "SService:Client:MakeNotifyBig2",
    function(name)
        local string =
            Languages[Config.Information.language]["Notifys"]["policeannounceremove1"] ..
            street .. Languages[Config.Information.language]["Notifys"]["policeannounceremove2"]
        TriggerEvent("SService:Client:MakeAnnounce2", string, 3, name)
    end
)
RegisterNetEvent("SService:Client:MakeNotifyBig2md")
AddEventHandler(
    "SService:Client:MakeNotifyBig2md",
    function(name)
        local string =
            Languages[Config.Information.language]["Notifys"]["ambulanceannounceremov1"] ..
            street2 .. Languages[Config.Information.language]["Notifys"]["ambulanceannounceremov2"]
        TriggerEvent("SService:Client:MakeAnnounce2", string, 4, name)
    end
)

RegisterNetEvent("SService:Client:RemoveSpeerzoneHUD")
AddEventHandler(
    "SService:Client:RemoveSpeerzoneHUD",
    function(source)
        if activespeerzone then
            breaking = true
            TriggerServerEvent("SService:Server:MakeNotifybig2", source)
        end
    end
)
RegisterNetEvent("SService:Client:RemoveSpeerzoneHUDmd")
AddEventHandler(
    "SService:Client:RemoveSpeerzoneHUDmd",
    function(source)
        if activespeerzonemd then
            breakingmd = true

            TriggerServerEvent("SService:Server:MakeNotifybig2md", source)
        end
    end
)

function numberToFloat(number)
    return tonumber(number) / 1.0
end

RegisterNetEvent("SService:Client:DisplayNachricht")
AddEventHandler(
    "SService:Client:DisplayNachricht",
    function(string, name)
        MakeNotifyInfo(4, "OOC", string, 5000, name)
    end
)

AddEventHandler(
    "onClientResourceStart",
    function(resourceName)
        if (GetCurrentResourceName() ~= resourceName) then
            return
        end
        TriggerServerEvent("SService:Server:GetCommands")
    end
)

local activeleft = false
local activeright = false

local activeall = false

RegisterKeyMapping(
    "Activeleft",
    Languages[Config.Information.language]["KeyBoard"]["leftindicator"],
    "keyboard",
    Config.DefaultKeyMappings.LinkerBlinker
)
RegisterKeyMapping(
    "activeright",
    Languages[Config.Information.language]["KeyBoard"]["rightindicator"],
    "keyboard",
    Config.DefaultKeyMappings.RechterBlinker
)
RegisterKeyMapping(
    "ActiveWarn",
    Languages[Config.Information.language]["KeyBoard"]["warnsignal"],
    "keyboard",
    Config.DefaultKeyMappings.WarnSignal
)

RegisterCommand(
    "Activeleft",
    function()
        local ped = GetPlayerPed(-1)

        if IsPedInAnyVehicle(ped, false) then
            local peds = GetVehiclePedIsIn(ped, false)
            if not activeleft then
                SetVehicleIndicatorLights(peds, 0, false)
                SetVehicleIndicatorLights(peds, 1, true)
                activeleft = true
            else
                if activeleft then
                    SetVehicleIndicatorLights(peds, 0, false)
                    SetVehicleIndicatorLights(peds, 1, false)
                    activeleft = false
                end
            end
        end
    end,
    false
)
RegisterCommand(
    "activeright",
    function()
        local ped = GetPlayerPed(-1)

        if IsPedInAnyVehicle(ped, false) then
            local peds = GetVehiclePedIsIn(ped, false)
            if not activeright then
                activeright = true
                SetVehicleIndicatorLights(peds, 0, true)
                SetVehicleIndicatorLights(peds, 1, false)
            else
                if activeright then
                    activeright = false
                    SetVehicleIndicatorLights(peds, 0, false)
                    SetVehicleIndicatorLights(peds, 1, false)
                end
            end
        end
    end,
    false
)

RegisterCommand(
    "ActiveWarn",
    function()
        local ped = GetPlayerPed(-1)

        if IsPedInAnyVehicle(ped, false) then
            local peds = GetVehiclePedIsIn(ped, false)
            if not activeall then
                activeall = true
                SetVehicleIndicatorLights(peds, 0, true)
                SetVehicleIndicatorLights(peds, 1, true)
            else
                if activeall then
                    activeall = false
                    SetVehicleIndicatorLights(peds, 0, false)
                    SetVehicleIndicatorLights(peds, 1, false)
                end
            end
        end
    end,
    false
)

RegisterNUICallback(
    "UpdateValue",
    function(data)
        UpdateHUD(data.selectedname, tonumber(data.value))
    end
)

function UpdateHUD(name, value)
    local Ped = GetPlayerPed(-1)
    if name == "HUD" then -- tofd
        DefaultTextDesign = value
        SendNUIMessage(
            {
                type = "UpdateTopRightHUD",
                value = DefaultTextDesign
            }
        )
        if value == 0 then
            TriggerServerEvent("SService:Server:Save", "hudleftright", "0")
        else
            TriggerServerEvent("SService:Server:Save", "hudleftright", "2")
            PosHandler("hudleftright", "2")
        end
        TriggerServerEvent("SService:Server:Save", name, value)
        TriggerServerEvent("SService:Sever:ChangeToDefault", "hudleftright")
    elseif name == "NOTIFYS" then
        DefaultInfoNotifyDesign = value
        DefaultAdminNotifyDesign = value
        if value == 0 then
            TriggerServerEvent("SService:Server:Save", "notifysleftright", "0")
        else
            TriggerServerEvent("SService:Server:Save", "notifysleftright", "1")
            PosHandler("notifysleftright", "1")
        end
        TriggerServerEvent("SService:Server:Save", name, value)
        TriggerServerEvent("SService:Sever:ChangeToDefault", "notifysleftright")
    elseif name == "WEAPONINFO" then
        DefaultWeaponDesign = value
        if value == 0 then
            TriggerServerEvent("SService:Server:Save", "weaponinfoleftright", "0")
        else
            TriggerServerEvent("SService:Server:Save", "weaponinfoleftright", "2")
            PosHandler("weaponinfoleftright", "2")
        end
        TriggerServerEvent("SService:Server:Save", name, value)
        TriggerServerEvent("SService:Sever:ChangeToDefault", "weaponinfoleftright")
    elseif name == "BANKINFO" then
        DefaultMoneyDesign = value
        if value == 0 then
            TriggerServerEvent("SService:Server:Save", "bankinfoleftright", "0")
        else
            TriggerServerEvent("SService:Server:Save", "bankinfoleftright", "2")
            PosHandler("bankinfoleftright", "2")
        end

        SendNUIMessage(
            {
                type = "UpdateBankInfo",
                value = value
            }
        )
        Citizen.Wait(100)
        ESX.TriggerServerCallback(
            "SService:Server:getData",
            function(money, black, bank)
                SendNUIMessage(
                    {
                        type = "UpdateMoney2",
                        money = money,
                        allowedblackomey = Config.Information.blackmoney,
                        black = black,
                        bank = bank,
                        design = value,
                        moneysymbol = Config.Information.moneysymbol
                    }
                )
            end
        )
        TriggerServerEvent("SService:Server:Save", name, value)
        TriggerServerEvent("SService:Sever:ChangeToDefault", "weaponinfoleftright")
    elseif name == "INTERACTION" then
        HelpTextDefault = value
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "VOICEDESIGN" then
        DefaultVoiceDesign = value
        if value == 0 then
            TriggerServerEvent("SService:Server:Save", "voicedesignleftright", "0")
        else
            TriggerServerEvent("SService:Server:Save", "voicedesignleftright", "2")
            PosHandler("voicedesignleftright", "2")
        end
        SendNUIMessage(
            {
                type = "UpdateVoiceInfo",
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
        TriggerServerEvent("SService:Sever:ChangeToDefault", "voicedesignleftright")
    elseif name == "TEXTDESIGN" then
        HUDDesign = value
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "PROGRESSBAR" then
        DefaultProgressbar = value
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "EATDRINK" then
        DefaultFoodDesign = value
        SendNUIMessage(
            {
                type = "tickvalues",
                thirst = thirst,
                fooddesign = DefaultFoodDesign,
                hunger = hunger
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "SPEEDOMETER" then
        DefaultSpeedo = value

        if IsPedInAnyVehicle(Ped, false) then
            SendNUIMessage(
                {
                    type = "UpdateVehicleHUD",
                    value = value
                }
            )
        end
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "IDDESIGN" then
        DefaultPlayerCountDesign = value
        if value == 0 then
            TriggerServerEvent("SService:Server:Save", "iddesignleftright", "0")
        else
            TriggerServerEvent("SService:Server:Save", "iddesignleftright", "1")
            PosHandler("iddesignleftright", "1")
        end

        SendNUIMessage(
            {
                type = "UpdatePlayerCounter",
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
        TriggerServerEvent("SService:Sever:ChangeToDefault", "iddesignleftright")
    elseif name == "HUD2" then
        if value == 0 then
            for k, v in pairs(listleftright) do
                TriggerServerEvent("SService:Server:Save", v.name, value)
            end
        else
            TriggerServerEvent("SService:Server:ResetEverything")
            PosHandler("iddesignleftright", "1")
            PosHandler("bankinfoleftright", "2")
            PosHandler("voicedesignleftright", "2")
            PosHandler("weaponinfoleftright", "2")
            PosHandler("hudleftright", "2")
            PosHandler("notifysleftright", "1")
        end

        HUDDesign = value
        if Config.Default.Helptext ~= 0 then
            HelpTextDefault = value
        end
        if Config.Default.SpeedoDesign ~= 0 then
            DefaultSpeedo = value
        end
        if Config.Default.DefaultWeaponDesign ~= 0 then
            DefaultWeaponDesign = value
        end
        if Config.Default.MoneyDesign ~= 0 then
            DefaultMoneyDesign = value
        end
        if Config.Default.VoiceDesign ~= "0" then
            DefaultVoiceDesign = value
        end
        if Config.Default.Defaultnotifydesign ~= 0 then
            DefaultInfoNotifyDesign = value
        end
        if Config.Default.DefaultAdminNotify ~= 0 then
            DefaultAdminNotifyDesign = value
        end

        if Config.Default.TextDesign ~= 0 then
            DefaultTextDesign = value
        end
        if Config.Default.DefaultPlayerCountDesign ~= 0 then
            DefaultPlayerCountDesign = value
        end
        if Config.Default.DefaultJobDesign ~= 0 then
            DefaultJobDesign = value
        end
        if Config.Default.DefaultProgressbarDesign ~= 0 then
            DefaultProgressbar = value
        end
        if Config.Default.DefaultFoodDesign ~= 0 then
            DefaultFoodDesign = value
        end

        SendNUIMessage(
            {
                type = "UpdatePlayerCounter",
                value = DefaultJobDesign
            }
        )
        if IsPedInAnyVehicle(GetPlayerPed(-1), false) then
            SendNUIMessage(
                {
                    type = "UpdateVehicleHUD",
                    value = DefaultSpeedo
                }
            )
        end
        SendNUIMessage(
            {
                type = "tickvalues",
                thirst = thirst,
                fooddesign = DefaultFoodDesign,
                hunger = hunger
            }
        )
        SendNUIMessage(
            {
                type = "UpdateVoiceInfo",
                value = DefaultVoiceDesign
            }
        )
        SendNUIMessage(
            {
                type = "UpdateTopRightHUD",
                value = DefaultTextDesign
            }
        )

        SendNUIMessage(
            {
                type = "UpdateBankInfo",
                value = DefaultMoneyDesign
            }
        )
        Citizen.Wait(100)
        ESX.TriggerServerCallback(
            "SService:Server:getData",
            function(money, black, bank)
                SendNUIMessage(
                    {
                        type = "UpdateMoney2",
                        money = money,
                        black = black,
                        allowedblackomey = Config.Information.blackmoney,
                        bank = bank,
                        design = DefaultMoneyDesign,
                        moneysymbol = Config.Information.moneysymbol
                    }
                )
            end
        )
        for k, v in pairs(listselectable) do
            TriggerServerEvent("SService:Server:Save", v.name, value)
        end
    end
    MakeNotifyInfo(2, "SUCCESS", Languages[Config.Information.language]["Information"]["successchanged"])
end

RegisterNUICallback(
    "OpenLayoutMenu",
    function()
        ESX.TriggerServerCallback(
            "SService:Server:getDataDesign",
            function(data)
                SendNUIMessage(
                    {
                        type = "OpenLayout",
                        list = listleftright,
                        result = data
                    }
                )
            end
        )
    end
)

RegisterNUICallback(
    "UpdatePos",
    function(data)
        PosHandler(data.selectedname, data.value)
        Citizen.Wait(200)
        MakeNotifyInfo(2, "SUCCESS", Languages[Config.Information.language]["Information"]["successchanged"])
    end
)

function PosHandler(name, value)
    if name == "iddesignleftright" then
        SendNUIMessage(
            {
                type = "PosHandler",
                design = DefaultJobDesign,
                name = name,
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "bankinfoleftright" then
        SendNUIMessage(
            {
                type = "PosHandler",
                design = DefaultMoneyDesign,
                name = name,
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "voicedesignleftright" then
        SendNUIMessage(
            {
                type = "PosHandler",
                design = DefaultVoiceDesign,
                name = name,
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "weaponinfoleftright" then
        SendNUIMessage(
            {
                type = "PosHandler",
                design = DefaultWeaponDesign,
                name = name,
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "hudleftright" then
        SendNUIMessage(
            {
                type = "PosHandler",
                design = DefaultTextDesign,
                name = name,
                value = value
            }
        )
        TriggerServerEvent("SService:Server:Save", name, value)
    elseif name == "notifysleftright" then
        notifysdesign = value

        TriggerServerEvent("SService:Server:Save", name, value)
    end
end

RegisterNUICallback(
    "ResetLeftRightValues",
    function()
        PosHandler("iddesignleftright", "1")
        PosHandler("bankinfoleftright", "2")
        PosHandler("voicedesignleftright", "2")
        PosHandler("weaponinfoleftright", "2")
        PosHandler("hudleftright", "2")
        PosHandler("notifysleftright", "1")
        TriggerServerEvent("SService:Server:ResetEverything")
    end
)

RegisterNetEvent("SService:Client:ResetUpdate")
AddEventHandler(
    "SService:Client:ResetUpdate",
    function()
        ESX.TriggerServerCallback(
            "SService:Server:getDataDesign",
            function(data)
                SendNUIMessage(
                    {
                        type = "OpenLayout",
                        list = listleftright,
                        result = data
                    }
                )
            end
        )
    end
)

RegisterNUICallback(
    "PersonalFreely",
    function()
    end
)

RegisterNUICallback(
    "HandlerPosing",
    function()
        ESX.TriggerServerCallback(
            "SService:Server:getDataDesign",
            function(data)
                HUDDesign = data[1].textdesign
                HelpTextDefault = data[1].interaction
                DefaultTextDesign = data[1].hud
                DefaultSpeedo = data[1].speedometer
                DefaultWeaponDesign = data[1].weaponinfo
                DefaultMoneyDesign = data[1].bankinfo
                DefaultVoiceDesign = data[1].voicedesign
                DefaultAdminNotifyDesign = data[1].notifys
                DefaultInfoNotifyDesign = data[1].notifys
                DefaultPlayerCountDesign = data[1].iddesign
                DefaultJobDesign = data[1].iddesign
                DefaultFoodDesign = data[1].eatdrink
                DefaultProgressbar = data[1].progressbar
                SendNuiMessage(
                    json.encode(
                        {
                            type = "SaveHandler",
                            HUDDesign = HUDDesign,
                            HelpTextDefault = HelpTextDefault,
                            DefaultTextDesign = DefaultTextDesign,
                            DefaultSpeedo = DefaultSpeedo,
                            DefaultWeaponDesign = DefaultWeaponDesign,
                            DefaultMoneyDesign = DefaultMoneyDesign,
                            DefaultVoiceDesign = DefaultVoiceDesign,
                            DefaultAdminNotifyDesign = DefaultAdminNotifyDesign,
                            DefaultPlayerCountDesign = DefaultPlayerCountDesign,
                            DefaultJobDesign = DefaultJobDesign,
                            DefaultFoodDesign = DefaultFoodDesign,
                            DefaultProgressbar = DefaultProgressbar
                        }
                    )
                )
            end
        )
    end
)

RegisterNUICallback(
    "SaveCoords",
    function(data)
        TriggerServerEvent("SService:Server:Save2", data)
    end
)

RegisterNetEvent("SService:Client:MakeFrakAnnounce")
AddEventHandler(
    "SService:Client:MakeFrakAnnounce",
    function(string, name)
        MakeAnnounce(string, 5, name)
    end
)

RegisterNetEvent("SService:Client:MakeText")
AddEventHandler(
    "SService:Client:MakeText",
    function(text)
        MakeNotifyInfo(1, "Chrisi on top", "S-Service on top!", 5000, "Ingame Name")
        MakeNotifyInfo(2, "Chrisi on top", "S-Service on top!", 5000, "Ingame Name")
        MakeNotifyInfo(3, "Chrisi on top", "S-Service on top!", 5000, "Ingame Name")
        MakeNotifyInfo(4, "Chrisi on top", "S-Service on top!", 5000, "Ingame Name")
        MakeAnnounce(
            "Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!",
            1,
            "Ingame Name",
            5000
        )
        MakeAnnounce(
            "Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!",
            2,
            "Ingame Name",
            5000
        )
        MakeAnnounce(
            "Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!",
            3,
            "Ingame Name",
            5000
        )
        MakeAnnounce(
            "Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!",
            4,
            "Ingame Name",
            5000
        )
        MakeAnnounce(
            "Server Announce from S-Service on top! Discord.gg/s-service best scripts and cool designs!",
            5,
            "Ingame Name",
            5000
        )

        MakeProgressbar("USING MEDKIT", 10000)
        Citizen.Wait(3000)
        DestroyProgressBar()
        MakeTeamNotify("Ingame Name", "S-Service on top!")
        local timer = 1
        while true do
            if timer <= 500 then
                timer = timer + 1
                MakeHelpNotify("E", "Press E to open the Carshop")
            else
                break
            end
            Citizen.Wait(1)
        end
    end
)

RegisterNUICallback(
    "Displayeverything",
    function()
        SendNUIMessage(
            {
                type = "InsertEverything",
                HUDDesign = HUDDesign,
                HelpTextDefault = HelpTextDefault,
                DefaultTextDesign = DefaultTextDesign,
                DefaultSpeedo = DefaultSpeedo,
                DefaultWeaponDesign = DefaultWeaponDesign,
                DefaultMoneyDesign = DefaultMoneyDesign,
                DefaultVoiceDesign = DefaultVoiceDesign,
                DefaultAdminNotifyDesign = DefaultAdminNotifyDesign,
                DefaultPlayerCountDesign = DefaultPlayerCountDesign,
                DefaultJobDesign = DefaultJobDesign,
                DefaultFoodDesign = DefaultFoodDesign,
                DefaultProgressbar = DefaultProgressbar,
                DefaultInfoNotifyDesign = DefaultInfoNotifyDesign
            }
        )
    end
)
local UI = {
    x = 0.000,
    y = -0.001
}

local active = false
if Config.Information.Cinemamodus.active then
    local function setupHealthArmour(minimap, barType)
        BeginScaleformMovieMethod(minimap, "SETUP_HEALTH_ARMOUR")
        ScaleformMovieMethodAddParamInt(barType)
        EndScaleformMovieMethod()
    end

    local camHeight = 0.0
    local function handleCinmetaicAnim() -- [[Handles Displaying Radar, Body Armour and the rects themselves.]]
        setupHealthArmour(active and 3 or 0)

        if active then
            for i = 0, Config.Information.Cinemamodus.barheight, 0.01 do
                camHeight = i

                Wait(10)
            end
        else
            for i = Config.Information.Cinemamodus.barheight, 0, -0.01 do
                camHeight = i

                Wait(10)
            end
        end
    end

    if Config.Information.Cinemamodus.key then
        RegisterKeyMapping(
            "cinemamodus",
            Languages[Config.Information.language]["KeyBoard"]["cinemamodus"],
            "keyboard",
            Config.DefaultKeyMappings.CinemaModus
        )
    end

    RegisterCommand(
        "cinemamodus",
        function()
            if active then
                active = false
                hudloaded = false
                StartHUD()
            else
                active = true
                SendNUIMessage(
                    {
                        type = "CloseHUD",
                        leavechat = true
                    }
                )
            end
            if Config.Information.Cinemamodus.animation then
                CreateThread(handleCinmetaicAnim)
            end
            while active or camHeight > 0.1 do
                Citizen.Wait(1)
                if Config.Information.Cinemamodus.animation then
                    for i = 0, 1.0, 1.0 do
                        DrawRect(0.0, 0.0, 2.0, camHeight, 0, 0, 0, 255) -- Top Bar
                        DrawRect(0.0, i, 2.0, camHeight, 0, 0, 0, 255) -- Bottom Bar
                    end
                else
                    drawRct(UI.x + 0.0, UI.y + 0.0, 1.0, 0.15, 0, 0, 0, 255) -- Top Bar
                    drawRct(UI.x + 0.0, UI.y + 0.85, 1.0, 0.151, 0, 0, 0, 255) -- Bottom Bar
                end
                HideHUDThisFrame()
            end
        end,
        false
    )
end

if not Config.Information.oldesxversion then
    RegisterNetEvent(
        "esx:pauseMenuActive",
        function(state)
            if state then
                SendNUIMessage(
                    {
                        type = "CloseHUD"
                    }
                )
            else
                hudloaded = false
                StartHUD()
                active = false
            end
        end
    )
else
    local loadedhud = true
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(400)
                if IsPauseMenuActive() then
                    loadedhud = false
                    SendNUIMessage(
                        {
                            type = "CloseHUD"
                        }
                    )
                else
                    if not loadedhud then
                        loadedhud = true
                        hudloaded = false
                        StartHUD()
                        active = false
                    end
                end
            end
        end
    )
end

if not Config.Information.disablechat then
    local inchatmenu = false
    RegisterKeyMapping(
        "openchat",
        Languages[Config.Information.language]["KeyBoard"]["openchat"],
        "keyboard",
        Config.DefaultKeyMappings.OpenChat
    )

    RegisterCommand(
        "openchat",
        function()
            if not inchatmenu and not active then
                SetCursorLocation(0.1, 0.2)
                SetNuiFocus(true, true)
                SendNUIMessage(
                    {
                        type = "OpenChat"
                    }
                )
            end
        end,
        false
    )
end

function drawRct(x, y, width, height, r, g, b, a)
    DrawRect(x + width / 2, y + height / 2, width, height, r, g, b, a)
end

function HideHUDThisFrame()
    HideHelpTextThisFrame()
    HideHudAndRadarThisFrame()
    HideHudComponentThisFrame(1)
    HideHudComponentThisFrame(2)
    HideHudComponentThisFrame(3)
    HideHudComponentThisFrame(4)
    HideHudComponentThisFrame(6)
    HideHudComponentThisFrame(7)
    HideHudComponentThisFrame(8)
    HideHudComponentThisFrame(9)
    HideHudComponentThisFrame(13)
    HideHudComponentThisFrame(11)
    HideHudComponentThisFrame(12)
    HideHudComponentThisFrame(15)
    HideHudComponentThisFrame(18)
    HideHudComponentThisFrame(19)
end

if Config.Information.hideammodefault then
    Citizen.CreateThread(
        function()
            while true do
                Citizen.Wait(7)
                DisplayAmmoThisFrame(false)
            end
        end
    )
end

-- Exports
function MakeHelpNotify(Key, message)
    TriggerEvent("SService:Client:TriggerHelpNotify", Key, message)
end

function MakeTeamNotify(name, message, length)
    TriggerEvent("SService:Client:TeamNotify", name, message, length)
end

function MakeNotifyInfo(category, titel, message, length, name)
    TriggerEvent("SService:Client:MakeInfoNotify", category, titel, message, length, name)
end

function MakeProgressbar(helptext, length)
    TriggerEvent("SService:Client:MakeProgressbar", helptext, length)
end

function OpenHUD()
    hudloaded = false
    StartHUD()
end

function ControlCinemaMode()
    ExecuteCommand("cinemamodus")
end

function DisplayEverything()
    TriggerEvent("SService:Client:MakeText")
end

function MakeFoodAndThirst(thirst, hunger)
    SendNUIMessage(
        {
            type = "tickvalues",
            thirst = thirst,
            fooddesign = DefaultFoodDesign,
            hunger = hunger
        }
    )
end

function CloseHUD()
    SendNUIMessage(
        {
            type = "CloseHUD"
        }
    )
end

function SetCarlock(boolean)
    SendNUIMessage(
        {
            type = "Updatelkock",
            value = boolean
        }
    )
end

function SetRadio(boolean)
    if boolean then
        SendNUIMessage(
            {
                type = "OpenRadio",
                design = DefaultVoiceDesign
            }
        )
    else
        SendNUIMessage(
            {
                type = "RemoveRadio",
                design = DefaultVoiceDesign
            }
        )
    end
end

if not Config.Information.oldesxversion then
    local incar = false
    local threadms = 100

    AddEventHandler(
        "esx:enteredVehicle",
        function(vehicle, plate, seat, displayName, netId)
            incar = true
            incarout = true
            GetOns()
            print("loaded")
            Citizen.CreateThread(
                function()
                    while incar do
                        Citizen.Wait(threadms)
                        if loaded then
                            local player = GetPlayerPed(-1)

                            if DefaultSpeedo == 3 or DefaultSpeedo == 2 then
                                if DoesEntityExist(vehicle) then
                                    local speed = GetEntitySpeed(vehicle)
                                    local curspeed = math.floor(speed * 3.6)
                                    local max_speed = GetVehicleEstimatedMaxSpeed(vehicle) * 3.6 + 30
                                    local speed_percent = (curspeed / max_speed * 100)
                                    threadms = Config.Ms.Speedodesign2und3
                                    if IsPedInAnyHeli(player) then
                                        SendNUIMessage(
                                            {
                                                type = "OpenVehicleHUDHeli",
                                                speedodesgin = DefaultSpeedo,
                                                curspeed = curspeed,
                                                widthPercent = speed_percent
                                            }
                                        )
                                    else
                                        local gear = GetVehicleCurrentGear(vehicle)
                                        SendNUIMessage(
                                            {
                                                type = "OpenVehicleHUD",
                                                speedodesgin = DefaultSpeedo,
                                                curspeed = curspeed,
                                                gear = gear,
                                                widthPercent = speed_percent
                                            }
                                        )
                                    end
                                end
                            else
                                if DefaultSpeedo == 1 then
                                    if DoesEntityExist(vehicle) then
                                        local speed = GetEntitySpeed(vehicle)
                                        local curspeed = math.floor(speed * 3.6)

                                        local currentRpm = GetVehicleCurrentRpm(vehicle)
                                        local widthPercent
                                        threadms = Config.Ms.Speedodesign1
                                        if IsPedInAnyHeli(player) then
                                            widthPercent = curspeed / 2
                                            SendNUIMessage(
                                                {
                                                    type = "OpenVehicleHUDHeli",
                                                    speedodesgin = DefaultSpeedo,
                                                    curspeed = curspeed,
                                                    gear = "1",
                                                    widthPercent = widthPercent
                                                }
                                            )
                                        else
                                            widthPercent = (currentRpm / maxRpm) * 100
                                            local gear = GetVehicleCurrentGear(vehicle)
                                            SendNUIMessage(
                                                {
                                                    type = "OpenVehicleHUD",
                                                    speedodesgin = DefaultSpeedo,
                                                    curspeed = curspeed,
                                                    gear = gear,
                                                    widthPercent = widthPercent
                                                }
                                            )
                                        end
                                    end
                                end
                            end
                        end
                    end
                end
            )
        end
    )
    AddEventHandler(
        "esx:enteringVehicleAborted",
        function()
            incar = false
            threadms = 100
            incarout = false
            Citizen.Wait(300)
            SendNUIMessage(
                {
                    type = "RemoveVehicleHUD"
                }
            )
        end
    )
    AddEventHandler(
        "esx:exitedVehicle",
        function(vehicle, plate, seat, displayName, netId)
            incar = false
            threadms = 100
            incarout = false
            Citizen.Wait(300)
            SendNUIMessage(
                {
                    type = "RemoveVehicleHUD"
                }
            )
        end
    )
end
Citizen.CreateThread(
    function()
        while true do
            if incarout then
                Citizen.Wait(1000)
                local fuelLevel = GetFuel(vehicle)
                SendNUIMessage(
                    {
                        type = "UpdateFuel",
                        speedodesgin = DefaultSpeedo,
                        fuelLevel = fuelLevel
                    }
                )
            end
            Citizen.Wait(5000)
        end
    end
)

function GetOns()
    local fuelLevel = GetFuel(vehicle)
    SendNUIMessage(
        {
            type = "UpdateFuel",
            speedodesgin = DefaultSpeedo,
            fuelLevel = fuelLevel
        }
    )
end
RegisterNetEvent("SService:Client:MakeCustomCommandHUD")
AddEventHandler(
    "SService:Client:MakeCustomCommandHUD",
    function(faction, color, message, name, design, iconurl, length)
        SendNUIMessage(
            {
                type = "MakeCustomCommand",
                faction = faction,
                HUDDesign = design,
                color = color,
                resultString = message,
                name = name,
                iconurl = iconurl,
                length = length
            }
        )
    end
)
function DestroyProgressBar()
    TriggerEvent("SService:Client:DestroyProgressBar")
end
RegisterNetEvent("SService:Client:DestroyProgressBar")
AddEventHandler(
    "SService:Client:DestroyProgressBar",
    function()
        SendNUIMessage(
            {
                type = "DestroyProgressBar",
                design = DefaultProgressbar
            }
        )
    end
)
