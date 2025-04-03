fx_version "cerulean"
game "gta5"

author "Chrisi"
description "S-HUD"
resource_manifest_version "44febabe-d386-4d18-afbe-5e627f4af937"
version " 1.0.3"

client_scripts {
    "config.lua",
    "language/language.lua",
    "client/client.lua",
    "client/selectable.lua",
    "client/openfunctions.lua"
}
server_scripts {
    "@async/async.lua",
    "@mysql-async/lib/MySQL.lua",
    "language/language.lua",
    "config.lua",
    "config_server.lua",
    "server/server.lua",
    "server/weebhook.lua"
}

ui_page "html/index.html"

files {
    "html/index.html",
    "html/*.css",
    "html/*.js",
    "html/img/*.mp3",
    "html/img/icons/*.png",
    "html/img/icons/*.svg",
    "html/img/*.png",
    "html/img/weapons/*.png",
    "html/img/*.svg",
    "html/fonts/gilroy-font/*.ttf",
    "html/fonts/*.ttf",
    "html/fonts/gilroy-font/*.woff"
}

lua54 "yes"

exports {
    "MakeHelpNotify",
    "MakeTeamNotify",
    "MakeNotifyInfo",
    "MakeProgressbar",
    "MakeAnnounce",
    "OpenHUD",
    "CloseHUD",
    "ResetDatabaseValues",
    "SaveValues",
    "ControlCinemaMode",
    "DisplayEverything",
    "MakeFoodAndThirs",
    "PosHandler",
    "SetRange",
    "DestroyProgressBar"
}

escrow_ignore {
    "config.lua",
    "client/client.lua",
    "client/selectable.lua",
    "client/openfunctions.lua",
    "language/language.lua",
    "config_server.lua",
    "server/weebhook.lua",
    "server/server.lua"
}

dependency '/assetpacks'