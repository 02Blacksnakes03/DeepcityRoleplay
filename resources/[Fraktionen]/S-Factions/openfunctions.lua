function HelpNotify(key, message)
    if Config.Start.Notifys == "sservice" then
        exports["S-HUD"]:MakeHelpNotify(key, message)
    else
        ESX.ShowHelpNotification(message)
    end
end

function MakeNotify(message, titel, type)
    if Config.Start.Notifys == "sservice" then
        exports["S-HUD"]:MakeNotifyInfo(type, titel, message)
    else
        ESX.ShowNotification(message, type, 3000)
    end
end
