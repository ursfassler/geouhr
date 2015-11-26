GeoUhr
======

Showing the age of the earth in seconds as circles and number


Raspberry Pi 2
--------------

Base is raspbian Jessie 2015-11-21: https://www.raspberrypi.org/downloads/raspbian/.
Download it and write the image on a SD card.

Boot the Raspberry Pi.

Configure Raspberry PI with

    sudo raspi-config

- Update the Raspi config tool (Advanced Options)
- Enable SSH (Advanced Options)
- Disable overscan (Advanced Options)
- Ensure that boot to desktop with auto login is enabled

Update packages:

    sudo apt-get update
    sudo apt-get upgrade

Install chromium, fontmanager and tools:

    sudo apt-get install fontmanager chromium x11-xserver-utils unclutter

Fonts
- copy fonts to raspberry pi
- install fonts with fontmanager

Checkout the geouhr repository with branch raspi:

    git clone //github.com/ursfassler/geouhr.git -b raspi

To set up autostart of geouhr/chromium, replace the content of `~/.config/lxsession/LXDE/autostart` with:

    @lxpanel --profile LXDE
    @pcmanfm --desktop --profile LXDE
    @xset s off
    @xset -dpms
    @xset s noblank
    @sed -i 's/"exited_cleanly": false/"exited_cleanly": true/' ~/.config/chromium/Default/Preferences
    @chromium --noerrdialogs --kiosk file:///home/pi/geouhr/src/geouhr.svg --incognito

For display rotation, the following line to the file `config.txt` on the SD card boot pratition:

    display_rotate=3

