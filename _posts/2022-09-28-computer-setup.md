---
layout: post
type: professional
title: "Restoring a Workstation"
date: 2022-09-28
---

## Backstory
I have a nice computer. Like __nice__. Because I do a lot of machine learning for my work, I'm able to work more efficiently (and earn more) by taking advantage of a mid-tier GPU. 
Unfortunately, my workstation crashed unexpectedly just as I was wrapping up two major projects and just before I temporarily relocated to Alabama for a Techstars accelerator program. It turns out the culprit was a failed boot sector on the primary hard drive (still not sure why it failed --- maybe I just got unlucky). Anyway, I scrambled to get back to a working desktop environment as quickly as possible. Here are the steps I took.

## Running on Ubuntu
1. Use a small flashdrive with an Ubuntu live disk written to it to install Ubuntu on a larger flash drive that will serve as the temporary OS drive.
1. Boot off of the large flash drive and complete hardware configuration (monitors, input devices)
1. Install Brave Browser, set up sync codes, log into Google accounts in the correct order (to preserve bookmark account association)
1. Install VS Code
1. Install VS Code Extensions:
	- Auto Rename Tag, ESLint, GitLens, Prettier, Visual Studio IntelliCode, HTML CSS Support
1. Install git and github cli, github login `gh auth login`
1. Install node `sudo apt install nodejs`, install npm if not installed, nvm optional
	- -> `npm install n -g`, `sudo n stable`
1. Install firebase, firebase login `sudo npm install -g firebase-tools`
1. Install Zoom
1. Install Piper for Mouse Settings
	- -> Use system settings dialog to remap keyboard shortcut for listing all applications (show the overview), because remapping the SUPER key doesn't seem to work.
1. Add Google Drive Accounts to Ubuntu Login
1. Log in to dropbox online

## Restoring Windows
After the Techstars program concluded \[this section is an edit to the original post\], I had the breathing room to replace the hard drive and try to get my Windows environment working again. Here's what I did:
1. Write Recovery Disk ISO to flash drive (in Ubuntu, can use "Disks" program)
	- Note: may require the OEM option, or something. Needs some hardware drivers pre-installed?
2. Install Windows on the new hard drive
3. Install Brave (Download using Edge)
4. Use NVIDIA GeForce Experience to install GPU Drivers
	- Install CUDA using the [NVIDIA Installer](https://developer.nvidia.com/cuda-toolkit)
	- Install CuDNN using the [NVIDA Local Install Link](https://developer.nvidia.com/cudnn) or (or Python library nvidia-cudnn ?)
5. Windows App Armoury Crate (automatically prompted) to control case lighting.
6. Download Mouse Software
	- Setup mouse profile (shortcuts for copy, paste, list active programs, backspace, enter)
7. Add Google Drive Sync
8. Add Dropbox Sync
9. Install Anaconda
	- Use `conda` to uninstall and reinstall pytorch (with CUDA support) if necessary.
10. Install VS Code
	- Set default tab spacing to 2 and line wrap to true.
	- VS Code Extensions: Auto Rename Tag, ESLint, GitLens, Prettier, Visual Studio IntelliCode, HTML CSS Support
11. Install git (https://git-scm.com/) and Github CLI
12. Install node (https://nodejs.org/en/download/), then Firebase and Ionic (`npm install -g @ionic/cli`, `npm install -g firebase-tools`).
13. Install Steam (and Epic Games, and EA Launcher)
14. Install John's Background Switcher
15. Install Zoom
16. Install Razer Kiyo Webcam Software (Razer Synapse)
17. Install Microsoft Teams
18. Install LibreOffice
17. Push these instruction updates to GitHub Pages

## Unnecessary Commentary
A lot of the work I do uses cloud software, and all of my essential files are backed up to the cloud (either via Google Drive, Dropbox, or GitHub), so most of what I have to install are OS- or hardware- -related software packages. Although I do occasionally play games on my desktop (game design is an academic hobby of mine), much of the gaming-related hardware and software I have fulfills business purposes. For example, the case has controllable RGB lighting, but I only got it because it provided the best options for ventilation and multiple fans. I also use the Logitech G600 mouse (originally intended for playing MMO's, I think) because it was the mouse I found with the most buttons available. By setting the buttons to perform operations useful to editing code (and more broadly, document and file manipulation), I'm able to do a larger fraction of my work without switching back and forth between the mouse and keyboard. I'm still on the lookout for more efficient input tools.

{% include signoff.md %}
