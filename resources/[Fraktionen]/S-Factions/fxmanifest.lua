fx_version "cerulean"
game "gta5"

author "Chrisi"
description "Faction Script"
resource_manifest_version "44febabe-d386-4d18-afbe-5e627f4af937"
version "1.1.4"

client_scripts {
    "config/config.lua",
    "languages/languages.lua",
    "openfunctions.lua",
    "client/*.lua"
}
server_scripts {
    "@async/async.lua",
    "@mysql-async/lib/MySQL.lua",
    "config/config.lua",
    "config/config_server.lua",
    "languages/languages.lua",
    "server/*.lua"
}

ui_page "html/index.html"

files {
    "html/index.html",
    "html/index.js",
    "html/index.css",
    "html/src/*.png",
    "html/items/*.png",
    "html/carpictures/*.png",
    "html/src/*.gif",
    "html/carpictures/*.jpg",
    "html/src/*.jpg",
    "html/src/*.mp3",
    "html/fonts/*.ttf"
}

lua54 "yes"

escrow_ignore {
    "config/config.lua",
    "server/webhook.lua",
    "config/config_server.lua",
    "languages/languages.lua",
    "server/openfunctions.lua",
    "openfunctions.lua"
}

shared_script "@es_extended/imports.lua"

dependency '/assetpacks'