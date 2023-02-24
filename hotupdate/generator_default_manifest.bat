@echo "start to generator default mainifest"

node default_version_generator.js -v 1.0.0 -u http://192.168.1.250/vitetname/subgame-remote-assets/ -t ../vietnam/assets/Core/version/ -d ./default_bundle_manifest/ -b SlotIce

pause
