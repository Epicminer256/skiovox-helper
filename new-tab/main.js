import { BatteryDisplay } from "./battery-display.js";
import { DateDisplay, TimeDisplay } from "./date-time-display.js";
import { ThemeBar } from "./theme-bar.js";
import { ExtrasBar } from "./extras-bar.js";
import { SettingsBar } from "./settings-bar.js";

new BatteryDisplay(document.querySelector('.batteryPercent'), document.querySelector('.batterySlider'), document.querySelector('.batteryTime'));
new DateDisplay(document.querySelector('.date'));
new TimeDisplay(document.querySelector('.time'));
new SettingsBar();
new ThemeBar();
new ExtrasBar();