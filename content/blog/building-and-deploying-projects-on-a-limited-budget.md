---
title: "Building and Deploying Projects on a Limited Budget"
excerpt: "Free and low-cost hosting, databases and tooling that are good enough for real projects."
category: "Lessons Learned"
date: "2026-11-07"
---

My projects are personal projects, so I keep costs close to zero while I build. I have used Render, Neon, Supabase, Fly.io, Brevo, Vercel and UptimeRobot along the way, and I try to get the most out of each free tier by combining them inventively. CXC Platform (compile/) uses Neon and Render, and Penny uses Fly.io, Neon, Supabase and Brevo. This portfolio site is hosted on Vercel. This post sums up what each service gives you for free and where the limits sit. The figures come from each provider's own documentation (see "Last checked" at the end). Free tiers change often, so check the linked pages before you rely on a number.

## Start with what is free

- **Render** ([free tier](https://render.com/docs/free)): free web services with 750 instance hours per month. There is also one free Postgres database per workspace, at 1 GB.
- **Neon** ([plans](https://neon.com/docs/introduction/plans)): a free Postgres plan with 100 projects, 1 GB of storage per project and 100 compute-hours per project per month.
- **Supabase** ([pricing](https://supabase.com/pricing)): a free plan with a 500 MB database, 1 GB of file storage, 50,000 monthly active users and 2 active projects.
- **Fly.io** ([pricing](https://docs.fly.io/about/pricing)): no free tier for new accounts. You get a $1 trial credit that lasts 7 days, and a monthly bill under $5 is waived.
- **Brevo** ([free plan](https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan)): 300 email sends per day, up to 100,000 stored contacts and one user.
- **Vercel** ([Hobby plan](https://vercel.com/docs/plans/hobby)): a free plan with 100 GB of fast data transfer, 1,000,000 function invocations and 100 deployments per day.
- **UptimeRobot** ([pricing](https://uptimerobot.com/pricing/)): a free plan with 50 monitors checked every 5 minutes, one status page and 5 integrations.

## Where free tiers bite

Each limit below is documented by the provider.

- **Cold starts.** A free Render web service spins down after 15 minutes without traffic, and starting it again takes about a minute. Neon's free compute suspends after 5 minutes of inactivity, and you cannot turn that off.
- **Things that disappear.** A free Render Postgres database expires 30 days after creation, with a 14-day grace period before the data is deleted. Free Render services also lose local files on every redeploy, restart or spin-down.
- **Backups.** Render's free database has no backups. Supabase's free plan has no automatic backups. Neon's free plan keeps only 6 hours of change history.
- **Pausing and caps.** Supabase pauses free projects after a week of inactivity. When Render's monthly instance hours run out, free web services are suspended until the next month.
- **Commercial use.** Vercel's Hobby plan is restricted to non-commercial, personal use. If a project starts earning money, it has to move to a paid plan. If you are exceeding a Hobby limit, you wait 30 days before you can use that feature again.
- **Email.** Render blocks outbound traffic on ports 25, 465 and 587 from free services, so sending mail over SMTP from there will not work. Brevo's 300 emails per day is plenty for a contact form and too little for a real mailing.

## What is worth paying for first

The first thing I would pay for is a server. It removes the cold starts and the spin-down limits that make a project feel unfinished to the people using it. The second is a domain, because a project at your own address looks and feels like a real product.

My rule of thumb is simple: move off the free tier as soon as a project is released for public use. Free tiers suit building and testing. Once real people depend on the app, a cold start, a paused project or a missing backup stops being a nuisance and becomes a problem for them.

## Last checked

I checked every limit in this post against the providers' own documentation on 9 November 2026. Free tiers change, and Fly.io has already dropped its free allowance for new accounts, so confirm the numbers on the linked pages before you plan around them.
