# TmControl
Trackmania dedicated server plugin written in ManiaScript

## Installation
1. Download .zip extract directly to dedicated server directory
2. Edit `Media/TmControl/config.json` to setup admins
3. To start the server plugin, add `/serverplugin=TmControl/TmControl.Script.txt` to your dedicated server command

## Usage
When you have admins a row icons will appear above the chrono timer at bottom center.


## For Developers
> tip1: If you wish to develop using maniascript vscode + manialsp, have a copy manialsp.exe this repo root.


> tip2: use symlinks to dedicated

1. Clone this git repo outside of the dedicated server.
2. You wish to link TmControl directories at `Media` and `Scripts`
3. To do symlinks for the directories:
   1. At Windows 10: `mklink /D Link OriginalDirectory` 
   2. At Linux: `ln -s /path/to/file /path/to/symlink`

