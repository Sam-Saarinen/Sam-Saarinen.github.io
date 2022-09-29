---
layout: post
type: professional
title: "Restoring a Workstation"
date: 2022-09-28
---

## Backstory
I have a nice computer. Like __nice__. Because I do a lot of machine learning for my work, I'm able to work more efficiently (and earn more) by taking advantage of a mid-tier GPU. 
Unfortunately, my workstation crashed unexpectedly just as I was wrapping up two major projects and just before I temporarily relocated to Alabama for a Techstars accelerator program. It turns out the culprit was a failed boot sector on the primary hard drive (still not sure why it failed --- maybe I just got unlucky). Anyway, I scrambled to get back to a working desktop environment as quickly as possible. Here are the steps I took.

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

{% include signoff.md %}
