---
title: "AngelShot"
date: 2024-04-08
summary: "Making sketchy situations & quick escapes more safe with realistic AI phone calls. Grand Prize - Third Place winner at WildHacks 2024."
tags: [react, openai, aws, typescript, projects, hackathon, featured]
draft: false
cover:
    src: ./banner.png
    alt: AngelShot cover image
    relative: false
    hidden: false
---

{{< rawhtml >}}<iframe src="https://player.vimeo.com/video/931798114?h=f78ae666e9" width="640" height="360the quick brown fox jumped over the lazy  dog and trhen" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>{{< /rawhtml >}}

## Uncomfortable situations are all too common

It could be that you're walking alone in the dark, someone won't leave you alone, or maybe your Uber/cab driver is taking an unfamiliar route. In many of these situations, some people like to be on a phone call with another person. But it's not always possible to get on the line with a real person -- sometimes it takes a while to pick up, and if it's late at night they could even be sleeping. With the recent proliferation of conversational AI chatbots and lifelike text-to-speech systems, we have everything we need to have an on-demand caller to give you an easy out in any situation.

AngelShot is named after the code word that bar patrons can use to discretely communicate a need for help if they feel unsafe.

## Why is being on a call more safe?

- It implies that someone knows your location and where you are going
- It gives you an excuse to leave a situation to handle something (like an emergency)
- You don't have to engage with other people
- It alerts others to your presence

## How does it work?

Visit the website and select (or write!) your situation, who you want to "talk" to, and the tone of their voice (masculine/feminine). Then start talking like you're on the phone! The chatbot is conditioned to keep the conversation going, so you just need to focus on responding to it.

The frontend is built with React, TypeScript and Vite. This is my first React webapp, and my team helped a lot with getting me to understand how the project should be structured.

The site will stream your voice data to AWS Transcribe, which gives us back a real-time transcription of your speech. The transcription then is sent to an OpenAI chat model which is initially prompted with the context of your situation. The model's output is sent through an OpenAI text-to-speech (TTS) system to play through your phone as if someone is responding.

You can view the project code on [GitHub](https://github.com/jackburkhardt/call-me-safety). We have successfully deployed the website, however it has been taken down due to the cost of AWS and OpenAI API access.

## Challenges we faced

One of the biggest issues we faced was trying to figure out when the user was done talking as opposed to just pausing. Once the user goes silent, we track the amount of "silent time" since their last word. But if our waiting time is too long, then we are making the entire system slower to respond. But if it waits for too little time then it could think the user is done talking when they really just paused for a moment. Due to a time shortage, we ended up settling on a silent duration that works "good enough" based on our own testing. This does mean that users should generally talk with as minimal pauses as possible to avoid confusing the system.

The other major hurdle was figuring out how to reduce response times wherever possible. It's pretty unnatural to say something and have the other person wait 10 seconds to respond each time. Each process in our system (the transcriber, chatbot, and text-to-speech) required the previous process to finish first. In other words, we can't have a chatbot respond to only part of a sentence. The solution here was to stream as much data directly to and from the client as possible. So as you speak, that audio is being sent over to amazon and the transcription returned. Then the text-to-speech system is sending its audio back to the client so that it can be played immediately. We've gotten it down to a few seconds on average from the end of the user's speech to the start of the system response.

