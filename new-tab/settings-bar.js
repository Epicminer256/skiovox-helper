class SettingsBar{
    constructor(){
        this.WIFI_URL = "chrome://os-settings/networks?type=WiFi";
        this.BLUETOOTH_URL = "chrome://os-settings/bluetoothDevices";
        this.SETTINGS_URL = "chrome://os-settings/";
        this.AUDIO_URL = "chrome://os-settings/audio"
        this.FILES_URL = "chrome://file-manager";
        this.HELP_URL = "https://github.com/epicminer256/skiovox-helper";

        this.wifi = document.querySelector("#wifi-btn")
        this.bluetooth = document.querySelector("#bluetooth-btn")
        this.files = document.querySelector("#files-btn")
        this.settings = document.querySelector("#settings-btn")
        this.audio = document.querySelector("#audio-btn")
        
        this.wifi.addEventListener('click', () => {
            chrome.tabs.create({ url: this.WIFI_URL })
        })
        this.bluetooth.addEventListener('click', () => {
            chrome.tabs.create({ url: this.BLUETOOTH_URL })
        })
        
        this.settings.addEventListener('click', () => {
            chrome.tabs.create({ url: this.SETTINGS_URL })
        })
        this.files.addEventListener('click', () => {
            chrome.tabs.create({}, (tab) => {
                chrome.tabs.update(tab.id, { url: this.FILES_URL })
            })
        })
        this.audio.addEventListener('click', () => {
            chrome.tabs.create({ url: this.AUDIO_URL })
        })
    }
}
export { SettingsBar }