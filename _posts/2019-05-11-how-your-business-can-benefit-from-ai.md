---
layout: post
type: professional
title: "How Your Business can Benefit from AI"
date: 2019-01-12
---

![Picture: Doctor at a Computer](/assets/chang-duong-1170439-unsplash.jpg)
*What can AI do for your business?*

Artificial Intelligence (AI) has captured the public imagination, and it seems that every week there's a new stance on issues ranging from the regulation of autonomous vehicles to the privacy of users in an era of big data. But nearly all of these discussions are focused on the implications of new technologies and the consequences for big businesses. Almost no one is talking about the practical implications, here and now, for everyday companies and businesses and for their customers. That's what this article is for. By the end, you will understand the cost associated with using AI technologies (it's cheap), you will see three opportunities for innovation in your own business, and you'll be able to form realistic predictions of what specific AI techniques might do for your business.

To start things off, let's make it clear what we mean when we say "AI".

## What is AI?
When AI was first conceived, it was in response to the question "Can Machines Think?" AI was purposefully anthropomorphized in order to consider how we might answer that question. When researchers of the nascent Computer Science convened in 1956 at Dartmouth, their clear ambition was to create Artificial Intelligence that worked creatively, generalized, and was able to use natural language (human language, in contrast to machine/programming languages). They failed miserably.

In fact, despite misplaced hype around chatbots, [Sophia the Robot](https://en.wikipedia.org/wiki/Sophia_(robot)#Controversy_over_hype_in_the_scientific_community), and text-synthesis tools, a deep understanding of what makes us uniquely human remains as elusive as ever. This "Strong AI" or "Artificial General Intelligence" is too far away to be anything more than a fantasy for most businesses.

In place of the robot geniuses that were sought, researchers (including myself) have mostly innovated in statistical analysis (loosely, "machine learning"). Most of the impressive accomplishments of AI ("weak/real AI") in the past decade, including speech-to-text translation, boardgame-playing, and image classification (e.g. written character recognition, face recognition) have been built on these statistical techniques that were refined over the course of decades. These statistical techniques are the kind of AI this article will talk about.

Recent progress in these techniques has largely been driven by increasingly sophisticated mathematics, larger (and more) computers, and an all-time high of public and private funding for AI research. Fortunately, you won't need any of these things to use implementations of recent AI techniques for your own business.

## What can AI be used for?
The main uses of AI for businesses are in **SUMMARIZING**, **PREDICTING**, and **ACTING ON** data. Producing value for your business is as simple as choosing what data to apply these techniques to, and integrating the results into your business process. There are many creative ways to leverage these techniques to derive value, but let's talk about some obvious ones first. 

All companies have customers/users/clients, and understanding those clients is critical to producing value. AI techniques from a subfield called *Unsupervised Learning* can allow you to summarize the data you have about your customers. Are they mostly the same age, or do they represent different age groups? What geographic areas are they from? Do they purchase your products for the same reasons? While you could apply traditional statistics to any one aspect of your customer data (plotting a distribution/histogram of ages, for example), AI can help you uncover the relationships between different dimensions. This can lead to new marketing strategies, horizontal expansion of services, or adaptive customer interactions.

Predictions (or inferences) can be generated using *Supervised Learning* techniques, and can be used to streamline triaging and response processes. For example, customer emails could easily be categorized into "general inquiries", "scheduling questions", "support questions", or "sales inquiries", and then forwarded to the appropriate person. (Without diving into the details, it should be apparent this can be cast as a straightforward statistical problem based on keywords like "question", "appointment", or "price".) One of my first consulting jobs was to create such an email auto-classifier.

Predicting the future (forecasting) is also critical to business decision making, and one of the most helpful things to predict is whether a customer is likely to buy a particular service, and when. This allows you to adapt - promoting the service or product that a customer is most likely interested in. If you don't know for certain what a customer might be interested in, AI can also be used to efficiently collect more data by learning from the responses to its previous recommendations. These kinds of problems can be solved efficiently using *Reinforcement Learning* techniques.

Let's look at how we might apply one of these approaches to a specific business.

## An Example
Suppose you run a small medical office - a private practice with more than 100 patients (enough clients that using statistics is a good idea). You can use AI to understand your patients and to discover ways to expand your business. First, use a clustering algorithm (unsupervised learning) to summarize your patient data by creating a short list of groups of similar patients. Second, examine each group's properties to see what problems most of your clientele are faced with. The code to do this is quite simple:

```python
# Suppose 'data' has been loaded in previously
from sklearn.mixture import GaussianMixture
model = GaussianMixture(n_components=n_clusters)
model.fit(data)
print(model.means_)
```

Finally, you can take business actions (advertising, expanding services) to increase the reach of your business. For example, suppose that you find that most of your clients are young children or their parents coming in for a regular checkup, but there's another group consisting mostly of teenagers with minor sports injuries. You might choose to advertise your health checkups with other local services catering to children (e.g. at children's movies, local children's clubs, or with the local library), and to offer sports injury first aid training around the time each sports' season starts. Knowing who your customers are and where they come from is critical to acquiring new business.

## How to Evaluate AI

This section is about comparing the value produced by AI to the immediate cost. Let's start with understanding the value produced by AI.

Value produced by AI generally falls into one of two categories: new value created by novel insights or possibilities; or value from automating or improving on existing value-producing processes. The medical office example above benefitted from the first kind of value. AI was able to produce unique insight into a large pool of customers and thus inform refined advertising opportunities. This value can be estimated only loosely, and is derived from new business. An email auto-classifier produces value of the second type. This type of value can be easily estimated on the basis of changed revenues or expenses.

Now what determines the cost of using AI? If you have a dedicated developer, they can easily learn about existing AI techniques from an [online tutorial](https://www.packtpub.com/big-data-and-business-intelligence/hands-artificial-intelligence-small-businesses-video). The cost of this training (and a raise for the developer) is pretty much always worth it, and will allow you to capture some of the low-hanging opportunities afforded by AI. However, your circumstances might require additional expertise, in which case you might contract with a consultant or hire someone with a graduate degree specializing in a technology you're interested in. There are a few reasons you might do this:
1. The innovation should be applied at a very large scale, or in a high-risk setting.
1. You want the benefit of additional experience when identifying business opportunities that AI could create.
1. Your task requires novel techniques or above-average performance.  

In any of these settings, it may be worth hiring an expert. But how much should you pay them? Experts typically have high hourly rates, due to their advanced training, specialized experience, and relative scarcity. However, many experts are willing to contract for a nominal flat rate, plus a fraction of the value they produce (akin to royalties). Regardless of the option you choose, your estimate of created value should determine what level of expertise you are willing to pay for. For a mid-to-large company with a substantial online retail market, even a 1% increase in sales is likely well-worth the cost of an AI expert.

AI produces the most value in situations where there is a lot of data available. That said, most of that value is untapped unless paired with human creativity and concern for clients. AI produces the most value when diligent businesses use AI as a tool to better serve and relate to their customers.

![Picture: Doctor and Patient](/assets/arvin-chingcuangco-1337417-unsplash.jpg)
*AI produces value by improving your ability to relate to and serve your clients.*

If you're interested in learning more about AI and how it can be used to benefit your business, check out my video course ["Hands-On Artificial Intelligence for Small Businesses"](https://www.packtpub.com/big-data-and-business-intelligence/hands-artificial-intelligence-small-businesses-video), because in less than a weekend, you can develop the skills to use AI libraries (in Python) and apply them to data from your own business.