---
title: "Designing a Django-Based Educational Platform"
excerpt: "Structuring lessons, quizzes and progress tracking as Django apps for an exam-prep site."
category: "Python and Backend Development"
date: "2026-11-08"
draft: true
---

<!-- EDIT ME. Everything below comes from the CXC Platform case study. Comments like this one are invisible on the site; answer them in your own words, then delete them. Remove `draft: true` when you approve. -->

## The problem

CXC Platform (branded compile/) is a free exam-prep site for students taking CSEC Information Technology and CAPE Computer Science. Students preparing for these exams often study on their own, with little practice material that explains why an answer is right or adapts to what they keep getting wrong.

<!-- YOUR INPUT: why did you build it, and what is your connection to these students? Your resume says you teach CSEC and CAPE. Say whether you want that in the post. -->

## Splitting the project into apps

I organised the project as small Django apps, each with one job: accounts, core, lessons, progress, questions, quizzes and subjects. Production runs on PostgreSQL, and the test suite uses in-memory SQLite. The pages are server-rendered templates with plain CSS and JavaScript, so there is no build step.

<!-- YOUR INPUT: where were the boundaries hard to draw? Which app did you move code between, and why? -->

## Modelling progress

Progress touches almost every model, which is why the data model needed designing before the screens. The main pieces are:

- **Missed questions become flashcards.** They are scheduled with SM-2 spaced repetition.
- **Quiz pathways.** Each student is moved between guided, personalised and exam-practice pathways per topic, based on recent results.
- **Mock exams.** They are timed and weighted by topic, and the timer survives a page reload.
- **Motivation.** XP, levels, daily streaks, leaderboards and study plans built from an exam date.

<!-- YOUR INPUT: why these choices (SM-2, per-topic pathways)? What did you try first that did not work? -->

## Lessons from the admin side

Content authoring and marking are part of the product too. Lessons are written in the Django admin with a rich-text editor and Cloudinary image uploads. Worded exam answers cannot be marked automatically, so they go to a marking queue, and the student sees the mark and written feedback once it is reviewed. The question bank has CSV import and export, a quiz generator and the marking queue.

<!-- YOUR INPUT: who writes the content and does the marking today? What would you change about the admin tooling? -->
