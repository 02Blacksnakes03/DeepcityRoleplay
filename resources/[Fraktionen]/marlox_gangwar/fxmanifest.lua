fx_version 'adamant'
game 'gta5'
lua54 'yes'
description 'Marlox_GANGWAR'
version '1.5.0'
shared_script '@es_extended/imports.lua'
server_scripts {
  '@es_extended/locale.lua',
	'@async/async.lua',
	'@mysql-async/lib/MySQL.lua',
  'server/main.lua',
  'server/suser.lua',
  'locales/*.lua',
  'config.lua'
}

client_scripts {
  '@es_extended/locale.lua',
  'client/main.lua',
  'locales/*.lua',
  'client/user.lua',
  'config.lua'
}

ui_page 'html/index.html'
files {
  'html/index.html',
  'html/*.js',
  'html/syle.css',
  'html/*.png',
  'config.json'
}

exports {
  'isInGangwarZone',
  'whatzone'
}


escrow_ignore {
  "config.lua",
  "client/user.lua",
  'locales/*.lua',
  "server/suser.lua"
}
dependency '/assetpacks'