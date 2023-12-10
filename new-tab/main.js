import { DragController } from "./drag-controller.js";
import { FullscreenController } from "./fullscreen-controller.js";
import { BatteryDisplay } from "./battery-display.js";
import { DateDisplay } from "./date-display.js";
import { TimeDisplay } from "./time-display.js";
import { BackgroundController } from "./background-controller.js";

const WIFI_URL = "chrome://os-settings/networks?type=WiFi";
const BLUETOOTH_URL = "chrome://os-settings/bluetoothDevices";
const SETTINGS_URL = "chrome://os-settings/";
const NEW_TAB_URL = "chrome://new-tab-page";
const FILES_URL = "chrome://file-manager";
const HELP_URL = "https://github.com/epicminer256/skiovox-helper";
const WEBSTORE_URL = "https://chromewebstore.google.com";
const ADDSESSION_URL = "https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession";

let help = document.querySelector("#help-btn")
let webStore = document.querySelector("#ext-btn")
let addAccount = document.querySelector("#account-btn")
let move = document.querySelector("#drag-btn")
let fullscreen = document.querySelector("#fullscreen-btn")
let reset = document.querySelector("#reset-btn")
let theme = document.querySelector("#chrome-theme-btn")
let colorChange = document.querySelector("#color-btn")
let backgroundChange = document.querySelector("#background-btn")
let wifi = document.querySelector("#wifi-btn")
let bluetooth = document.querySelector("#bluetooth-btn")
let files = document.querySelector("#files-btn")
let settings = document.querySelector("#settings-btn")
let audio = document.querySelector("#audio-btn")

let date = document.querySelector('.date')
let time = document.querySelector('.time')
let batteryPercent = document.querySelector('.batteryPercent')
let batterySlider = document.querySelector('.batterySlider')
let batteryTime = document.querySelector('.batteryTime')


wifi.addEventListener('click', () => {
    chrome.tabs.create({ url: WIFI_URL })
})

bluetooth.addEventListener('click', () => {
    chrome.tabs.create({ url: BLUETOOTH_URL })
})

settings.addEventListener('click', () => {
    chrome.tabs.create({ url: SETTINGS_URL })
})

theme.addEventListener('click', () => {
    alert("The original New Tab page will now open. On that page, click the edit icon in the bottom right corner to edit your browser theme.")
    chrome.tabs.create({ url: NEW_TAB_URL })
})

files.addEventListener('click', () => {
    chrome.tabs.create({}, (tab) => {
        chrome.tabs.update(tab.id, { url: FILES_URL })
    })
})

help.addEventListener('click', () => {
    chrome.tabs.create({ url: HELP_URL })
})

webStore.addEventListener('click', () => {
    let version = Number(navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)/)[2]);
    if (version < 113) { // not sure if this is actually the version
        alert("This web store may not supported by your version");
    }

    chrome.tabs.create({ url: WEBSTORE_URL })
})

addAccount.addEventListener('click', () => {
    chrome.tabs.create({ url: ADDSESSION_URL })
})

reset.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset Skiovox helper settings?")) {
        localStorage.clear()
        chrome.runtime.reload()
    }
})

audio.addEventListener('click', () => {
    chrome.tabs.create({ url: "chrome://os-settings/audio" })
})
new DragController(move);
new FullscreenController(fullscreen);
new BatteryDisplay(batteryPercent, batterySlider, batteryTime);
new DateDisplay(date);
new TimeDisplay(time);
new BackgroundController(colorChange, backgroundChange);
