---
title: "Building a Personal Finance Application with Flutter and FastAPI"
excerpt: "How Penny is put together: a Flutter client, a FastAPI backend and a server that only stores encrypted records."
category: "Project Development"
date: "2026-11-09"
# cover: "/images/blog/penny-cover.png"
---

## Why I built it

I used to run my budget in Excel. When I moved to mobile budgeting apps, I kept running into the same wall: the detailed features I was used to from a spreadsheet sat behind a paywall. I wanted an app that fit the way I actually budget, so I started building one.

It began as a passion project. My partner was the one who got me to try mobile budgeting apps in the first place, so the first people to use Penny were the two of us. It has since grown into an app I am preparing for a public release.

## The shape of the system

- A Flutter client for iOS and Android, with Riverpod for state
- A FastAPI backend on PostgreSQL
- Every record encrypted on the phone before it is uploaded

The goal from the start was to make it safe and secure. Nobody wants their financial data sitting in a stranger's hands, so I decided the server should store only ciphertext.

## What end-to-end encryption changed

Encryption is not a feature you add at the end. It decides where every calculation is allowed to run. If the server cannot read the data, it cannot compute anything from it, so balances, budget windows, daily interest, reports and payoff plans all had to move onto the phone.

The hardest part of the project was deciding where each piece of logic should live, on the front end or the back end. I moved the finance maths into a single ledger module on the device. To make sure the move could not quietly change anyone's balances, I wrote tests that compare its results to figures computed by the original server code.

## What I would do differently

I would start by mapping out the whole logic flow in detail before writing any code. Deciding what is calculated on the device and what is handled by the server is the central design question in this app, and it is much cheaper to answer on paper first than to answer by moving code later.
