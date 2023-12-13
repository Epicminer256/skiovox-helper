import { DragController } from "./extra-components/drag-controller.js";
import { FullscreenController } from "./extra-components/fullscreen-controller.js";
class ExtrasBar{
    constructor(){
        this.WEBSTORE_URL = "https://chromewebstore.google.com";
        this.ADDSESSION_URL = "https://accounts.google.com/signin/v2/identifier?hl=en&continue=https%3A%2F%2Fwww.google.com%2F&ec=GAlAmgQ&flowName=GlifWebSignIn&flowEntry=AddSession";    
        this.HELP_URL = "https://github.com/epicminer256/skiovox-helper";
        this.help = document.querySelector("#help-btn")
        this.webStore = document.querySelector("#ext-btn")
        this.addAccount = document.querySelector("#account-btn")
        this.help.addEventListener('click', () => {
            chrome.tabs.create({ url: this.HELP_URL })
        })
        
        this.webStore.addEventListener('click', () => {
            let version = Number(navigator.appVersion.match(/Chrom(e|ium)\/([0-9]+)/)[2]);
            if (version < 113) { // not sure if this is actually the version
                alert("This web store may not supported by your version");
            }
        
            chrome.tabs.create({ url: this.WEBSTORE_URL })
        })
        
        this.addAccount.addEventListener('click', () => {
            chrome.tabs.create({ url: this.ADDSESSION_URL })
        })

        let move = document.querySelector("#drag-btn")
        let fullscreen = document.querySelector("#fullscreen-btn")
        new DragController(move);
        new FullscreenController(fullscreen);
    }
}
export { ExtrasBar }