---
layout: post
type: professional
title: "[List] Tools I Use"
date: 2019-01-12
---

**Updated 2021-10-05**

In the course of my work, I find myself often testing, adopting, and switching tools for tasks I do frequently. Although one can search for opinions about the best tool for a given task, sometimes it's not even clear what those task divisions should be. For my own organization (and hopefully the benefit of readers with similar problems), I've accumulated the tools that I use in my own workflow below. I expect to change create follow-up posts as new tools come along, as my needs change, or as I have time to add more notes (especially about documentation and/or books).

## Cloud Storage
For backing up data, synchronizing across devices, and sharing with others/collaborating.

### Options I've tried
- Google Drive
- Dropbox
- One Drive (Microsoft)

Of these, I like Google Drive the best, mostly because of its integration with Gmail, Google Docs/Spreadsheets/Presentations/Forms, and for its transparent permissions management.

### Unorthodox Options
- GitHub

## Email
Email is a vital for communication in today's technology infrastructure. I use Gmail, largely because of the institutional licenses at my graduate and undergraduate universities.

## Office Software
Here, I define office software as document editing, spreadsheet managment, and slideshow editing. I use the Google suite, primarily because of its collaboration features, extensibility, and ubiquity. Google Forms is a nice bonus.

## General-Purpose Programming Language(s)
Although I've become more of a polyglot with more education (yet also found more ways to use new paradigms in old languages), it's convenient to have a small set of languages that cover a large swath of use cases.

For most purposes (especially computational experiments) I use Python 3 in the Jupyter Notebook environment (packaged with Anaconda). (In actuality, I typically use Google colab notebooks, but running on a local kernel. I like the convenience of versioning and sharing through Google Drive, and the possibility of running in the cloud when necessary.) With Numpy, Matplotlib, and SciPy, I am able to quickly write experiments that also run sufficiently quickly. At other times in my life, my primary language has been Java, C++, or Mathematica. I have a soft spot for the richness of the debugging experience in Java using Eclipse, but I find my Python to be slightly less verbose, and a large number of open-source libraries are now built on the Python stack.

For web app development, I use Typescript with React (library/framework) and Ionic (UI Library). I deploy to Google Firebase or GitHub Pages, depending on the backend requirements of the app. I've also tried Angular (also Typescript), Rails (Ruby), and Django (Python), and I personally prefer the functional style and clean organization of React.

## Deep Learning Library
I considered TensorFlow and PyTorch and chose to use PyTorch due to my perception that it was more succinct for the tasks I cared about, and for its more flexible introspection capabilities.

## ToDo management and project planning
I've seen a few services that do this; I used Asana off and on for about two years. The key features for me are the ability to create nested lists (this is easy in Asana up to about 3 levels of depth, after which it becomes a pain), the ability to use comments to create "quest journal" updates, and the ability to organize tasks visually on boards. I recently discovered [Notion](https://notion.so), which has slightly nicer nesting and organizational capabilities. Notion also makes it easy to integrate group notes, documents, and data into your team workflow.
I thought I would use the scheduling and reminder capabilities more, but I find it's more robust to just do that through my calendar.

## Note-Taking
I started using [Roam](roamresearch.com), which is nice because of its cross-linking, daily notes, and fast searching. I'm not sold on its use for general productivity managements (such as task management), but it's a great tool for writing and organizing thoughts. It also supports a wide variety of media types.

## Repository Management
I've used GitHub and GitLab. I tend to lean toward GitHub, just because all of the scientific repositories I care about seem to be hosted there.

## Chrome Extensions
I use Brave (built on Chromium), and have found a number of tools that make web use better. One is called Tabbie, which allows you to save and reload collections of chrome tabs for later. This has reduced (although not eliminated) my tendancy to leave windows open with dozens of tabs for reference for each project. For one-time tabs you want to queue up, I've also found OneTab (great for groups of tabs) and Reading List (great for one-off articles) to be helpful. Another tool that I've found suprisingly useful is simply called "Video Speed Controller", which allows playback of any html5 videos (YouTube, Netflix, and almost everything else, at the moment) at arbitrary speed.  It also has keyboard shortcuts for speeding up and slowing down the video, which make it easier to scan to the most important parts in e.g. a lecture or research talk. Finally, I broke down and installed Grammarly because it catches a broader variety of grammatical errors than the browser's built-in spellcheck.

## Paper/Citation Management
I've used Zotero and Mendeley, and have a slight preference for Mendeley due to its group/shared folders and note-taking ability. Either tool is far better for me than using a physical filing system.

## Feed Management
For the time being, I'm using Feedly to track RSS/Atom feeds. There may be better aggregation/digest tools, but I haven't spent a lot of time looking.

## Presentation Recording
I recently learned that Microsoft PowerPoint allows you to record narration/timings and that you can save/export as an MP4 video. Although for general video processing needs I like Premiere (Adobe Creative Cloud) or OpenShot (a pretty good open source alternative), there is really no comparison when it comes to recording presentations - PowerPoint has easy-to-use graphics and animation capabilities and individual slides can be re-recorded without interrupting the total presentation. I plan to use this for all of my informational videos from now on that don't rely heavily on external footage. (If anyone is looking for a more general screencasting software package, OBS Studio has a free download that works quite well.)

I hope this was helpful!


{% include signoff.md %}
