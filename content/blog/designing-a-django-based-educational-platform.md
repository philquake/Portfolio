---
title: "Designing a Django-Based Educational Platform"
excerpt: "Structuring lessons, quizzes and progress tracking as Django apps for an exam-prep site."
category: "Python and Backend Development"
date: "2026-11-08"
---

## The problem

CXC Platform (branded compile/) is a free exam-prep site for students taking CSEC Information Technology and CAPE Computer Science. Students preparing for these exams often study on their own, with little practice material that explains why an answer is right or adapts to what they keep getting wrong.

I built it as a learning tool, combining my background in education with my love of creating things. I built it for my students.

I have been working on it since early September 2026, and the repository has around 200 commits so far.

## Splitting the project into apps

I organised the project as small Django apps, each with one job: accounts, core, lessons, progress, questions, quizzes and subjects. I drew the boundaries through careful planning up front: I mapped how each table would connect to the others, based on what the platform would need to do. Production runs on PostgreSQL, and the test suite uses in-memory SQLite. The pages are server-rendered templates with plain CSS and JavaScript, so there is no build step.

## Modelling progress

Progress touches almost every model, which is why the data model needed designing before the screens. The main pieces are:

- **Missed questions become flashcards.** They are scheduled with SM-2 spaced repetition. SM-2 is a long-established, simple algorithm: after each review the student rates how well they remembered the card, and the next review is scheduled further out for cards they know and sooner for cards they struggle with.
- **Quiz pathways.** Each student is moved between guided, personalised and exam-practice pathways per topic, based on recent results. I chose per-topic pathways because people change and understand things differently. Some topics connect easily, while others are harder to grasp, and switching pathways allows a more flexible approach to learning.
- **Mock exams.** They are timed and weighted by topic, and the timer survives a page reload.
- **Motivation.** XP, levels, daily streaks, leaderboards and study plans built from an exam date.

## Lessons from the admin side

Content authoring and marking are part of the product too. Lessons are written in the Django admin with a rich-text editor and Cloudinary image uploads. I teach these subjects, and I write and update all of the specialty subject content myself. Worded exam answers cannot be marked automatically, so they go to a marking queue, and the student sees the mark and written feedback once it is reviewed. The question bank has CSV import and export, a quiz generator and the marking queue.

My plan is to reach out to other specialists in their own subject areas, so the platform can grow beyond what I teach.

## Where it stands and what I would change

CXC Platform is still in development. My students are its only users at the moment, while I keep building features and content.

If I did more, I would gamify it further, to make the tool more interactive and more entertaining for students.
