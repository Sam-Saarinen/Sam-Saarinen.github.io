---
layout: post
type: professional
title: "[Field Notes] Working with (S)am: A Survival Guide"
date: 2025-04-04
---

## TL;DR

(Too Long; Didn’t Read)

I have a lot of opinions on work and impact; if you want to change the world with me, let’s find the most valuable use of our time.

## Social Media Summary

I’m going to be heading up a new R&D team at (what I think is) one of the coolest organizations on the planet. My first act of leadership? Writing up a six-page user’s guide for working with me.

Here’re the highlights:

- If you want me to do something, convince me it’s good for the world.
- Assigning blame is a zero-sum game. Problem solving is positive-sum.
- Technology Research teams should optimize for velocity of insight, with a leading indicator being frequency of surprise, which is constrained by experiment throughput (total cycle length to ideate, design, implement, execute, and analyze an experiment).
- Teams are more than the sum of their parts when clarity around the goal, facts, and team operations create “distributed consensus”, enabling high team-member autonomy and responsive decision-making.
- Iterating on mock-up communication materials (abstract, slides) before running experiments helps clarify what we are trying to learn and how we will interpret results.
- In education technology research, there’s a fundamental synergy between product design (increasing the user base, which increases statistical power of experiments) and rapid experimentation (creating generalizable insights that steer not just the engineering direction, but the approach to every aspect of the educational solution).

## Full Post

Hi. I’m your friend/colleague/boss. You can call me (S)am (”Sam” or “Sam-I-Am” are fine). Most people don’t come with a manual, but I’m a high quality product / need to limit liability in case I don’t behave as expected, so here we go:

### What matters to (S)am:

Probably the first thing to know about me is that the thing I care most about is doing good in the world (or at least, that’s what I want to care most about). If you want me to do something, the fastest way is probably to convince me that it’s the right thing to do. Not just in a “this is what would be fair to me” sense, but in a “this will be a net positive impact on the world, including for the people who are presently suffering the most” sense.

In a very real sense, I’m building my career around scaling great education because that’s what I think will maximize the good that I personally can do in the world. Technology (ML, AI, crowdsourcing, pedagogy, institutional design) can be a powerful lever for education, but I also think a lot about development economics, labor markets, interpersonal incentives, and social decision-making.

### (S)am’s approach to people:

When we play zero-sum games (winners necessitate losers), in a sense, nobody wins. We waste more and more resources competing just to stay in the same place as a whole. So I’m always looking for win-win solutions. Modern capitalism works (to the extent that it does work) because when people specialize and trade, everyone ends up better off.

Some examples:

- Micro-management tends to lead to perverse incentives for employees. Non-compliance ends up penalized more than the perceived benefits to taking risks, so innovation ends up bottlenecked by the manager. In a pre-automation factory setting, innovation may not be the production bottleneck, but in creative work, it quite often is.
    - In contrast, coaching is a mutually-agreed upon process where the learner (who may be me) invites the teacher to model and then provide feedback on specific skills with the goal of the learner becoming autonomously competent in that new skill.
- Assigning blame is usually a zero-sum game. Problem-solving is usually a positive-sum game.
- If people are afraid for their livelihood, social standing, or self-perception, they will focus on protecting their own wellbeing over the good of the group. When people feel safe, they are more willing to endure hardship, indignity, or shame. Safe teams are stable teams. Stable teams have the chance to become strong teams.

### (S)am’s approach to work:

I’ve been told I read a lot, although I don’t read nearly as much as I would like to. It’s what you don’t know you don’t know that gets you.

With that said, my philosophy around work is heavily influenced by *The Goal* by Eliyahu M. Goldratt, *The Lean Startup* by Eric Ries, *The Five Dysfunctions of a Team* by Patrick Lencioni, and *Getting Things Done* by David Allen. For all of them, the books themselves were much better that the secondhand explanations I received beforehand. I’ll iterate on that suboptimality in an effort to encourage you to read the books:

- Work begins with defining a goal. If there’s no goal, then it’s play, not work.
- Efforts that don’t bring you closer to the goal are wasted.
- Any production system will have couplings such that failure or constraints in one part affect all the others. (E.g. it doesn’t matter how many bottles Coca-Cola can make if there’s not enough freshwater for their beverages.)
- The current bottlenecks on any interconnected system are likely to stem from a small number of (or even one) components.
- (The longer we live inside a constraint, the harder it becomes to perceive.)
- Improving the throughput of the bottleneck often produces orders-of-magnitude more progress towards the goal than equivalent efforts directed at the wrong part of the system.
    - Speed comes from focus.
- A technical organization’s goal isn’t to produce software, but to solve a real-world problem (which typically also entails being remunerated to sustain the effort).
    - Building features that don’t solve the bottleneck problem is waste.
    - Maintaining features that don’t solve the bottleneck problem is waste.
    - Writing documentation for features that shouldn’t be built is waste.
    - Improving code quality for features that shouldn’t have been built is waste.
        - (Important caveat: sometimes the organizational bottleneck is an operational one due to codebase complexity and poor encapsulation/abstraction. In that case, improving operational throughput - in order to decouple from unneeded features - might be important.)
- Whenever technical organizations do something new, most of their feature ideas do not end up moving things closer to the goal (there are things you don’t know that you don’t know and you’re blind to most constraints). Implementing those features would be an enormous waste.
- The highest productivity activity for most innovative organizations is not building, but figuring out what to build. That is usually the bottleneck on the organization achieving its goals.
- Thus, most technical organizations would benefit from tracking and shortening the total time, effort, and cost required to:
    - have an idea
    - develop a way to falsify (test) the idea
    - collect data based on the experiment
    - draw conclusions and learn from the results.
- At a structural level, most teams’ efficacy is limited because they optimize for individual efficiencies (”How much did I accomplish this week?”) instead of for team efficiencies (”How much progress did the team make toward the goal?”)
    - Sometimes sitting idle is better than creating more work for the person bottlenecking the team.
    - Sometimes long meetings cut into personal productivity, but reduce team waste from working on the wrong thing.
    - A dropped ball is a problem for the whole team, and sometimes the whole team dropped the ball. Even if it wasn’t anyone’s responsibility before, team progress toward the goal is the only thing that matters. If the dropped ball doesn’t affect the whole team, it shouldn’t have been held in the first place.
- The biggest bottleneck in optimizing for team efficiencies is usually communication. (Bonus book: *Team of Teams* by General Stanley McChrystal)
    - Clarity around the goal matters.
    - Clarity around the facts matters.
        - Availability and discoverability of information at the time and place when it is needed to make decisions matters.
    - Clarity around the resources, structure, and process of the team matters.
        - Team alignment matters. (Discussion to the point of consensus, or at least acquiescence, may be necessary.)
    - Empowering individuals with the information, team-level understanding, and authority to make decisions unbottlenecks managers and leaders.
- Individuals can be bottlenecked by lots of things, but generally work best when they have the clarity, competence, and confidence to work on the single most important thing they can do at that moment.

### (S)am’s current assumptions about learning:

- Learning is a natural function of being a human. It happens all the time, often unintentionally, and the vast majority of it happens outside a classroom (by virtue of spending the vast majority of living hours outside a classroom).
- While most real-life learning is of a mundane situational-information-acquiring nature (e.g. “There’s a sale at the supermarket today.” or “I should be more carful the next time I cross this street.”), humans naturally seek out (somewhat) new experiences and attempt to generalize and synthesize their experiences. People change how they think in profound ways as they gain new experiences.
- Some of the ~~best~~ most effective learning experiences are hidden outside the classroom, where different incentives and form-factor enable very different approaches to educational infrastructure. Examples: athletic training, learning a musical instrument, playing video games (both onboarding and becoming excellent), “brainteaser” puzzles, interactive museums, and social skills development. Each of these are different, but a few common threads:
    - Learners can easily envision what success looks like and see for themselves how far they have to go.
    - All of these experiences permit play and experimentation on the part of the learner.
    - There’s often a combination of external and internal rewards for progress.
    - Not every student pursues or benefits from every opportunity.
- Effective learning experiences are highly contextual. Implicitly, we build systems that treat the Zone of Proximal Development like a commonsense notion — you can’t learn something you already know, and you can’t learn something you’re not ready to know. The scaffolding to approach new concepts or interpret new experiences also varies widely based on the background and values of the student. (E.g. an urbanite will likely neither care nor benefit from an analogy to farming. At least not without a different compelling reason — like the enthusiasm of a likable teacher — to become interested, and the creation of shared context that makes the analogy illuminating.)
- Relatedly, the best pedagogy is often content-specific. (The message should determine the medium.)
    - However, there’s also substantial benefit to routines and ontologies that enable primary focus on the thing that is new.
- The biggest barrier to learning is cognitive load.
    - The biggest cause of cognitive load in most classrooms is divided attention. This can cause a vicious cycle when students don’t feel socially, emotionally, or intellectually safe. Students need the freedom to fail safely in order to fully engage with the thing itself, rather than the context of the thing.
    - The second biggest cause of cognitive load is a lack of fluency with abstractions used and assumed by the instructor. This problem is particularly acute in mathematics and reading where the immediate availability of implicit information is prerequisite to deeper discovery.
- Human memory is not optimized for the artificial. Students forget things all the time. For learning to stick, it must be:
    - Intelligible
    - Emotionally-Salient
    - Contextually-Retrievable
    - Used
- Pedagogy isn’t just what a teacher presents to a student. It’s the entire experience and context of learning.
- Most pedagogy neglects at least one of the following: Patterns, Techniques, and Values. In other words, how does the student perceive a situation, what *can* they do with it, and what *should* they be trying to do with it?
- Incentives matter, for both educators and students. Most student incentives do not originate from school (social desires, managing relationships at home, self-image, physical needs, curiosity).
- Most education research is, unfortunately, limited by what can easily be controlled at a scale large enough to get statistically-significant samples. This tends to be things like policy decisions, whole-curriculum choices, and wholesale technology adoption. But the most fruitful interventions are likely to be higher precision, due to the contextual and multifaceted nature of learning. Thus, we need better research infrastructure for testing targeted pedagogical and environmental interventions - sampling outcomes from the right students, at the right time, on the right material.

### (S)am’s approach to research:

How do we measure productivity in research? Ultimately, I want to have an impact in the world (so it’s technically all applied research, even if we’re doing abstract machine learning theory), but anticipating which lines of research will lead to “breakthroughs”, never mind their ultimate impact, can be quite difficult. So here’s what I think:

- Insight (the goal of research) is the distillation of knowledge (data) into explanatory theory.
- Surprise (unexpected data) is a prerequisite of new insight.
    - Distillation is usually not the bottleneck, because thinking and computation are cheap, compared to the real-world costs of data collection. Distillation to insight is easy with the right data.
- Research productivity should be measured by frequency/velocity of surprise.
- Insight (new surprises) is often built cumulatively, so there’s a cycle of:
    - Express a concrete belief (ideally, elaborate plausible alternatives)
    - Identify quantifiable measurables that should result from an intervention/model/observation related to the concrete belief. (Predict causal effects.)
    - Create an experiment (identify anticipated effect sizes, required data collection to detect those effect sizes, and then implement the experiment - feature prototypes, new data collection, etc.)
    - Collect the data.
    - Analyze the data.
    - Draw conclusions.
    
    (I didn’t invent this; it’s basically the “scientific method”.)
    
- Infrastructure plays an enormous role in reducing the time, cost, and complexity of many of these steps.
- For most organizations, the main bottleneck is data collection.
    - One aspect of this is the volume of (in education) student data. New hypotheses often require collecting information not reflected in the historical data, or data conditioned on new interventions. So there’s a virtuous cycle between improving a platform, acquiring more users, and getting more data faster about how to improve the platform. (That assumes better platforms get more users, but I have a whole other soap box about market inefficiencies in education.)
    - Experimental infrastructure for running randomized controlled trials with users eliminates nearly all accessory costs and delays associated with data collection. (The bottleneck reduces to the real-world delays and costs associated with getting actual users through the experiment.)
- The next bottleneck is often Creating the Experiment, specifically the implementation step. This can also be somewhat accelerated through infrastructure design and practice-able skills:
    - On the infrastructure side, abstractions that support multiple hypotheses make an enormous difference. Use of the strategy pattern (passing functions/algorithmic-objects as parameters), polymorphism (e.g. both of these rendered components work within the data- and user- -flow of the interface), and non-technical design tools (e.g. instantiation from a configuration file or a combination of media resources) greatly reduce the development effort required to implement experiments in the same family (e.g. with the same outcomes measurements).
    - Rapid Prototyping is a practice-able skill that can dramatically reduce the scope of implementation required for a test (or that can spread the cost of implementation over a stage-gate set of more cheaply-run experiments, compartmentalizing wasted-effort risk). It isn’t a magic bullet (sometimes you just have to “build the thing”), but effective prototyping techniques greatly enhance the clarity of what is being tested at any given time.

A big part of research is also communicating with others. Externally, this moves the global community forward and increases the credibility of the research team. Internally, research communication helps align team-members, drive insight-generating dialogue, and catalyze the insight-distillation and experimental design process. Scientific communication has its own bottlenecks. Here are some things I’ve found:

- Draft an abstract before beginning a major project (even for work you don’t plan to publish). This forces you to clarify the measured outcomes and what you’re actually testing. I like [this outline](https://h2r.cs.brown.edu/writing-a-technical-paper/) loosely based on the [Heilmeier Catechism](https://www.darpa.mil/about/heilmeier-catechism).
- If the work could be potentially published, draft a short list of potential publication venues. This list will help direct the literature review and guide keyword discovery.
- Create a running draft slide deck as if you were going to present the work. Use this slide deck at the beginning of every meeting (briefly) to give team members context again for what you’re measuring, what you’re expecting, and why.
    - The process of communicating using slides, rather than a written draft, favors brevity, encourages diagrams (which encourage structured thinking), and helps quickly identify what the most unusual parts of the work are versus what context can generally be assumed (it’s most important to explicit communicate the things that go against people’s intuition, and then to communicate the non-obvious implications of their intuition. Only after that should you bother stating what is obvious to both audience and presenter.)
- Plots and diagrams take lots of iteration. Sketch the *kind* of chart your are expecting before actually collecting the data and running the analysis. This will help identify fundamental flaws in the experimental design *before* spending a lot of time and resources on the actual experiment.
    - Pick baselines / baserates to compare against. What is something that will “*obviously”* be worse (because it is naive) or *obviously* be better (because it is cheating) that can bound the reasonable space of outcomes? NOTE: sometimes we learn the most when we are surprised to discover our outcome measures outside the baselines we thought would bound it.
- Draft a literature review as if it were part of the introduction to your paper, even if you don’t plan on publishing. This will serve as a useful context document for any future work in the area.
    - Rather than writing this as an explicit document, I find per-paper annotations in a shared Mendeley folder to be very helpful. This lets you easily play with various groupings or taggings of the referenced works.
- Most projects involve multiple, complementary experiments. Try to identify a taxonomy or logical progression to them as you conduct the research.
- When the slides have been polished and iterated on, the paper will usually write itself.

### A starting roadmap:

1. Infrastructure:
    1. Run a single experiment end-to-end.
    2. Identify the time-consuming parts of running experiments.
    3. Iterate on the experiment-running pipeline until:
        1. New ideas can be tested in under a week.
        2. Related ideas can be tested in under a day. (NOTE: similar ideas tend to be easier to deploy experiments for, but tend to have smaller effect sizes, requiring more data.)
2. Grow the statistical power of experimentation by expanding the student user base.
NOTE: For all of these, increasing learning per unit of time goes a long way.
    1. Make the product appealing to students.
        1. Remove barriers to use (inaccessibility, technological bottlenecks, …)
        2. Reduce friction to use (confusion, tedium, delay, isolation, …)
        3. Increase enjoyment of use (responsiveness, clarity, delight, …)
        4. Increase impact of use (intentionality, relevance, efficacy, …)
    2. Make the product appealing to gatekeepers and facilitators (teachers, parents, CIO’s, etc.).
    3. Make the product appealing to administrators and purchasing decision-makers).
3. Run highly-granular pedagogical experiments at scale.
    1. Identify curricular bottlenecks.
    2. Inventory common struggles and misconceptions.
    3. Rapidly pilot diagnostic and responsive interventions.
    4. Invent better pedagogy:
        1. ways of thinking that subvert or prevent common issues.
        2. ways of practice that shorten and denoise feedback loops.
        3. ways of judging that help learners self-direct.
    5. Distill specific measurements into more general cognitive and pedagogical theory.

### Thoughts on voice:

Past evidence suggests there remain many things I don’t know that I don’t know.

I try very hard to listen to the answers to questions I ask.

Please help me to ask the right questions.

How can I help someone I don’t understand?

If you see what I don’t, 

I hope you’ll give me the opportunity to learn.

{% include signoff.md %}
