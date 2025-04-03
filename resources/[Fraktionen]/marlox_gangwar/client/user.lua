
RegisterNetEvent('Gangwar-notify')
AddEventHandler('Gangwar-notify', function(color,text1,text2)
    ESX.ShowNotification(text1.." "..text2)
    if Config.debug then print(text1,text2) end
end)
RegisterNetEvent('Gangwar-announce')
AddEventHandler('Gangwar-announce', function(text)
    ESX.ShowNotification(text)
    if Config.debug then print(text) end
end)
