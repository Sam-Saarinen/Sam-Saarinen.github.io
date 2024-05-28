---
layout: post
type: professional
title: "Organizational Code Management - Scaling Across Projects and Teams"
date: 2024-01-23
---

**tl;dr:** communication between people / contextual overhead rapidly bottlenecks scaling codebases; there's not a clear best solution, but there are some decent options.

Over the last 7 years, I've revisited this question quite a bit. How do I best organize people and code to create efficient processes for sharing work across project scopes? There are tradeoffs among the options used by some of the most prolific organizations out there, and it seems that refusing to have an opinion is worse than most of those options. But why is this a problem and how does it change as the organization grows?

Although I've posted this online for public benefit, this is really just a bikeshedding document so I don't keep spending time on this question.

## Introduction
When working as a solo developer on a single project, it takes a while before project scope requires being really disciplined about code organization. A lightweight folder system that taxonomizes source types (e.g. static assets vs. code) and groups functionally-related files (e.g. source files supporting the same feature or tool) goes a _really_ long way. With that said, even as a solo developer, there are times when project subcomponents are deployed to separate endpoints (e.g. frontend and backend, or scripting layer and low-level procedural layer). Redundancy is generally to be avoided (DRY - Don't Repeat Yourself) because instances that should be updated simultaneously often end up decoupled, leading to a proliferation of preventable bugs and delaying rollout of fixes. Redundancy also creates a small amount of overhead in the development process. Within the scope of a single project with a single deployment mechanism, source code can usually be refactored to avoid redundancy (usually worth the effort after you've manually solved the problem 3 times) and imported in multiple places. But when there are multiple build paths, it can become difficult to share and synchronize functionality or definitions between, for example, frontend and backend interfaces.

When there are multiple projects and/or multiple teams, these kinds of problems rapidly compound. Projects may benefit from shared code, but (especially when different clients or codebase owners are involved), shared code needs to be scoped separately from their containing projects. When multiple teams are involved (especially cross-functionally), there's also a problem of code discoverability. How can each team know whether the thing they need already exists (even approximately) across the organization's owned codebases?

This is the problem of organizational code management. Some common solutions are outlined in each of the following sections.

## Option 0: Each Team for Itself
This is the de facto strategy for most small-to-mid-size organizations, and it works reasonably well when organizations have less than 100 people. Generally, people know the roles of everyone else in the organization (or can find out quickly), and they can figure out who would own certain functionality if it existed. Group communication tools like Slack also make it possible for parallel roles (e.g. developers on different sub-teams) to communicate efficiently. As organizations scale, tools like StackOverflow help to propagate standard answers to common problems, and good ideas tend to survive and be imitated. This requires relatively little direct management (culture around documentation and question-answering requires a small amount of reinforcement), and it works well when individual teams can bear final responsibility for software functionality (e.g. there's not a lot of company-wide liability for feature-specific bugs).

This is also the de facto organization for most of the open source community. Although large projects are sometimes moderated and have coordinated sub-teams, they are often organized around a single delivery mechanism and benevolent dictators can prioritize project maintainability over speed of delivery (since there's rarely a revenue incentive for open-source projects). Across the myriad projects of the non-organized public, everyone makes their own decision and successful projects survive (evolutionarily) to inspire imitation.

## Option 1: Complete Encapsulation - Microservices
Amazon famously has small teams that build its web services as self-contained functionality that's accessed via an API (even internally, or so we're told). This works very well when services can be decoupled effectively, and it makes it easy to track within-organization usage and impact. Downsides are that it's hard to encourage or enforce best practices across teams, so rotating new personnel onto teams introduces more onboarding overhead. It's also easy to end up with non-obvious redundancy when functionality that's too small or abstract to be easily marketed across teams ends up being recreated. Finally, there's a non-negligible (latency and provisioning) overhead to requiring all services to be invoked via web APIs (rather than direct code import).

## Option 2: Shared Functionality - Package Management
npm, pip / conda, and many other language-specific package managers exist specifically to enable packaging of source code that can be easily shared across projects and imported into new source. Many of these package managers also support private packages. This is a great solution when all of the code is written in one language and when code ownership is a strong organizational principle. Downsides are that this makes it hard to reuse or adapt code that does _almost_ the right thing (compared to having access to the source code), and it generally requires strong documentation practices and within-organization discoverability.

## Option 3: Shared Code - Git Submodules
Git Submodules allow distributed teams to propagate changes back to source modules with easy testing in-context. This is a big advantage when the same people or teams are working on multiple projects or packages, or when some of the packages are communal or experimental. It's also much easier for submodule consumers to debug with complete access to the source. In most other ways, this is less convenient than package management as it induces additional workflow steps to keep submodules updated.

## Option 4: Complete Integration - Monorepo (monolithic repositories)
Several large organizations (reportedly, Google) use essentially a single repository. This has enormous benefits from a dev ops point of view when it comes to enforcing organization-wide code quality and style, managing codebase security, and streamlining deployment pipelines. Major drawbacks include the logistical overhead of dealing with unwieldy large codebases and the overhead of engineering QA on prototyping processes. When the whole code base is available, however, searchability slightly improves cross-organization discoverability.

## Option 5: Strategic Hybrids
In practice, I think most CTO's / Dev Ops VP's / managers agree that the optimal option is probably context-specific. Trying too many strategies at once can lead to organizational confusion and can quickly devolve into high-overhead chaos. But there's probably a sensible project lifecycle that involves moving projects between code management strategies as the project maturity and personnel structure change. Feasibility prototypes and viability experiments can afford to be scrappy and undisciplined because the bottleneck is not maintenance cost but speed of experimentation. Long-term projects with rotating personnel should be explicitly managed with a strategy that makes sense for the level of encapsulability of the project and its components.

For my team (still small), we're experimenting with Git Submodules as a way of sharing type defintitions and utility code across projects and deployment end points (that the same people are working on). As we mature as an organization, we'll likely create more packages (and open-source many of them, to encourage interoperable community-driven development). I'm skeptical of the value of monorepos in multifaceted organizations with active experimentation. Education is also a relatively low-risk deployment domain. I expect that semantic search tools will continue to improve and will ameliorate many of the discoverability issues that affect all of these models.

{% include signoff.md %}
