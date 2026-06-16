import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PrincipleContent from "./PrincipleContent";

interface PrincipleData {
  title: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  heroDescription: string;
  sections: {
    heading: string;
    content: string;
  }[];
  tips: string[];
}

const principlesData: Record<string, PrincipleData> = {
  "law-of-attraction": {
    title: "Law of Attraction",
    subtitle: "Think It. Believe It. Receive It.",
    quote:
      "Whatever the mind can conceive and believe, it can achieve.",
    quoteAuthor: "Napoleon Hill",
    heroDescription:
      "The Law of Attraction is the belief that positive or negative thoughts bring positive or negative experiences into a person's life. It's not magic — it's the alignment of your conscious and subconscious mind toward your goals.",
    sections: [
      {
        heading: "The Science Behind It",
        content:
          "Neuroscience has shown that our brains have a Reticular Activating System (RAS) — a network of neurons that filters information. When you focus intensely on a goal, your RAS begins highlighting opportunities and resources related to that goal that you would have otherwise ignored. This is why when you decide to buy a red car, you suddenly see red cars everywhere. The Law of Attraction works similarly: by focusing your thoughts on success and abundance, you train your brain to recognize and seize opportunities.",
      },
      {
        heading: "How the Elite Use It",
        content:
          "Oprah Winfrey credits visualization and positive thinking for her billion-dollar empire. Jim Carrey famously wrote himself a check for $10 million for 'acting services rendered' and carried it in his wallet — years before he earned exactly that amount for Dumb & Dumber. Arnold Schwarzenegger visualized his body before he sculpted it. These aren't coincidences. They're proof that directed thought precedes directed action.",
      },
      {
        heading: "The Compound Connection",
        content:
          "The Law of Attraction compounds just like money. One positive thought leads to a positive emotion, which leads to a positive action, which leads to a positive result, which reinforces the positive thought. This creates an upward spiral of success. Conversely, negative thinking creates a downward spiral. Your daily mental diet compounds over months and years into the reality you live in.",
      },
    ],
    tips: [
      "Start each morning with 5 minutes of visualization — see yourself living your ideal life in vivid detail",
      "Write down 3 things you're grateful for every night before bed",
      "Create a vision board with images representing your goals and review it daily",
      "Replace every negative thought with its positive opposite — 'I can't' becomes 'I'm learning how to'",
      "Surround yourself with people who embody the success you want to attract",
    ],
  },
  "compound-effect": {
    title: "The Compound Effect",
    subtitle: "Small Steps. Massive Results.",
    quote: "Success is a few simple disciplines, practiced every day.",
    quoteAuthor: "Jim Rohn",
    heroDescription:
      "The Compound Effect is the principle of reaping huge rewards from a series of small, smart choices. Getting 1% better every day means you'll be 37 times better in one year. This isn't theory — it's mathematics.",
    sections: [
      {
        heading: "The Math of 1%",
        content:
          "If you improve by just 1% each day for a year, you won't be 365% better — you'll be 3,778% better (1.01^365 = 37.78). That's the magic of exponential growth. Meanwhile, if you decline by 1% each day, you'll shrink to almost nothing (0.99^365 = 0.03). The gap between these two paths is astronomical, yet the daily difference is nearly invisible. This is why most people miss the power of compounding — the changes are too small to notice day-to-day.",
      },
      {
        heading: "Real-World Compounding",
        content:
          "Warren Buffett earned 99% of his $100+ billion net worth after his 50th birthday. Not because he suddenly got better at investing, but because his wealth had decades to compound. If you invest $500/month starting at age 25 with an 8% return, you'll have $1.7 million by 65. Start at 35, and you'll only have $745,000 — less than half, despite only missing 10 years. Time is the most powerful force in compounding.",
      },
      {
        heading: "Beyond Money",
        content:
          "Compounding applies to every area of life. Read 20 pages a day and you'll finish 30 books a year — that's 300 books in a decade, more than most people read in a lifetime. Exercise 30 minutes daily and within 6 months your body will be unrecognizable. Write 500 words a day and you'll have a novel in 6 months. The compound effect doesn't discriminate — it amplifies whatever you consistently do.",
      },
    ],
    tips: [
      "Track one key habit daily — what gets measured gets improved",
      "Never break the chain: aim for consistency over intensity",
      "Start absurdly small (1 push-up, 1 page, 1 minute of meditation) and build up",
      "Review your progress monthly to see the compound curve forming",
      "Eliminate one bad habit — compounding works in reverse too",
    ],
  },
  "delayed-gratification": {
    title: "Delayed Gratification",
    subtitle: "Patience Is Profit.",
    quote:
      "The ability to discipline yourself to delay gratification in the short term in order to enjoy greater rewards in the long term is the indispensable prerequisite for success.",
    quoteAuthor: "Brian Tracy",
    heroDescription:
      "The Stanford marshmallow experiment proved it: children who could wait for a second marshmallow went on to have higher SAT scores, better health, and greater career success. The ability to delay gratification is the single best predictor of success in life.",
    sections: [
      {
        heading: "The Marshmallow Test for Adults",
        content:
          "Every day, adults face their own marshmallow tests: the impulse purchase vs. investing, Netflix vs. building a side business, the snooze button vs. the morning workout. Each of these micro-decisions compounds. The person who consistently chooses the harder path — the path of delayed reward — builds an insurmountable advantage over time. This isn't about suffering or deprivation. It's about understanding that short-term pain leads to long-term gain.",
      },
      {
        heading: "Why Most People Fail",
        content:
          "Our brains are wired for instant gratification. The limbic system, our emotional brain, wants rewards NOW. The prefrontal cortex, our rational brain, knows better but is easily overridden by emotion. Social media, fast food, and easy credit are all designed to exploit this wiring. The 1% who succeed learn to strengthen their prefrontal cortex through practice — meditation, planning, and creating systems that make the right choice the easy choice.",
      },
      {
        heading: "Building the Muscle",
        content:
          "Delayed gratification is like a muscle — it can be trained. Start small: wait 10 minutes before snacking, save one paycheck before buying something you want, finish your work before checking social media. Each time you successfully delay, you strengthen the neural pathways that make future delay easier. Over time, patience becomes your default mode, and the rewards become exponentially larger.",
      },
    ],
    tips: [
      "Use the 24-hour rule: wait a full day before any non-essential purchase over $50",
      "Set up automatic savings — remove the decision from the equation",
      "Practice the 'future self' technique: visualize the person you're becoming",
      "Create a reward system: earn treats by hitting milestones, not by impulse",
      "Remove temptations from your environment — willpower is finite, design is forever",
    ],
  },
  "abundance-mindset": {
    title: "Abundance Mindset",
    subtitle: "There Is Enough for Everyone.",
    quote:
      "When you are grateful, fear disappears and abundance appears.",
    quoteAuthor: "Tony Robbins",
    heroDescription:
      "An abundance mindset is the belief that there are enough resources, opportunities, and success to share. It's the opposite of scarcity thinking, which leads to fear, competition, and stagnation.",
    sections: [
      {
        heading: "Scarcity vs. Abundance",
        content:
          "People with a scarcity mindset believe the pie is fixed — if someone else gets a bigger slice, theirs shrinks. They hoard information, avoid helping others, and see every transaction as win-lose. People with an abundance mindset believe the pie can grow. They share freely, collaborate openly, and understand that helping others succeed creates more opportunities for everyone. In the modern economy, abundance thinkers win because innovation and network effects reward collaboration.",
      },
      {
        heading: "The Gratitude Connection",
        content:
          "Gratitude is the gateway to abundance. When you appreciate what you have, your brain shifts from 'not enough' to 'more than enough.' Research shows that practicing gratitude increases dopamine and serotonin — the same neurotransmitters targeted by antidepressants. Grateful people are more productive, more creative, more resilient, and ironically, more likely to attract even more success. Gratitude doesn't just make you feel rich — it makes you act in ways that make you rich.",
      },
      {
        heading: "Practical Abundance",
        content:
          "Abundance isn't naive optimism — it's strategic thinking. Give value before asking for it. Share your knowledge freely (it comes back multiplied). Invest in relationships without expecting immediate returns. Celebrate others' wins genuinely. These behaviors build trust, attract opportunities, and create compound returns that scarcity thinkers can never access because they're too busy protecting what they have to grow something bigger.",
      },
    ],
    tips: [
      "Start a daily gratitude journal — list 5 specific things you're grateful for",
      "Celebrate one other person's success each day as if it were your own",
      "Give away 10% of your best ideas freely and watch what comes back",
      "Replace 'I can't afford it' with 'How can I afford it?'",
      "Mentor someone — teaching abundance creates abundance",
    ],
  },
  "pareto-principle": {
    title: "The 80/20 Rule",
    subtitle: "Focus on What Matters.",
    quote:
      "The things which are most important must never be at the mercy of the things which are least important.",
    quoteAuthor: "Johann Wolfgang von Goethe",
    heroDescription:
      "The Pareto Principle states that roughly 80% of results come from 20% of efforts. Identify and focus on the vital few, and you'll accomplish more by doing less.",
    sections: [
      {
        heading: "Origins and Proof",
        content:
          "Italian economist Vilfredo Pareto noticed in 1896 that 80% of Italy's land was owned by 20% of the population. This ratio appears everywhere: 80% of sales come from 20% of customers, 80% of bugs come from 20% of code, 80% of your happiness comes from 20% of your activities. In business, this principle is invaluable — it means you can double your results not by working twice as hard, but by identifying and doubling down on the 20% that matters.",
      },
      {
        heading: "Applying 80/20 to Your Life",
        content:
          "Audit your activities: which 20% of your work produces 80% of your income? Which 20% of your clients cause 80% of your headaches? Which 20% of your habits contribute to 80% of your wellbeing? Once you identify these leverage points, ruthlessly eliminate or delegate the bottom 80% and pour your energy into the top 20%. This isn't about working less — it's about directing your finite energy where it creates the most impact.",
      },
      {
        heading: "The 80/20 of 80/20",
        content:
          "Here's where it gets powerful: you can apply 80/20 recursively. The top 20% of the top 20% (just 4% of your efforts) produces 64% of your results. This is the 'vital few of the vital few' — the handful of actions, relationships, and habits that disproportionately determine your life's trajectory. Find your 4% and protect it with everything you have. Build your schedule, environment, and systems around amplifying these critical few activities.",
      },
    ],
    tips: [
      "List all your activities and income sources — circle the top 20%",
      "Schedule your highest-leverage work during your peak energy hours",
      "Learn to say 'no' to the 80% — every yes to something unimportant is a no to something that matters",
      "Review and prune your commitments quarterly",
      "Automate or delegate tasks that don't fall in your 20%",
    ],
  },
  visualization: {
    title: "Power of Visualization",
    subtitle: "See It Before You Achieve It.",
    quote:
      "Imagination is everything. It is the preview of life's coming attractions.",
    quoteAuthor: "Albert Einstein",
    heroDescription:
      "Visualization is the practice of creating vivid mental images of your desired outcomes. Olympic athletes, CEOs, and peak performers use it because it works — your brain literally cannot distinguish between a vividly imagined experience and a real one.",
    sections: [
      {
        heading: "The Neuroscience",
        content:
          "When you visualize an action, your brain fires the same neural pathways as when you actually perform it. Brain scans show that mental rehearsal activates the same motor cortex regions as physical practice. A study at the Cleveland Clinic found that people who merely visualized doing bicep curls increased their strength by 13.5%, compared to 30% for those who physically trained. Your brain is a simulation engine — visualization is programming it for the outcome you want.",
      },
      {
        heading: "Beyond Daydreaming",
        content:
          "Effective visualization isn't passive daydreaming. It requires engaging all five senses: see the details, hear the sounds, feel the textures, smell the environment, taste the victory. It also requires emotional engagement — you must feel the confidence, joy, and gratitude as if the goal is already achieved. And crucially, visualization must be paired with action. It primes your mind for success, but your hands must do the work.",
      },
      {
        heading: "The Process",
        content:
          "Elite performers don't just visualize the outcome — they visualize the process. They mentally rehearse the challenges, the setbacks, the discipline required, and their responses to obstacles. This 'mental contrasting' (envisioning success while anticipating challenges) has been shown to be more effective than pure positive visualization. It prepares both your conscious and subconscious mind for the full journey, not just the destination.",
      },
    ],
    tips: [
      "Dedicate 10 minutes each morning to vivid visualization of your goals",
      "Engage all five senses — make the mental image as real as possible",
      "Visualize both the outcome AND the daily process required to get there",
      "Create a vision board and place it where you'll see it first thing each morning",
      "Before any important event (meeting, pitch, workout), mentally rehearse it going perfectly",
    ],
  },
  "growth-mindset": {
    title: "Growth Mindset",
    subtitle: "Talent Is Just the Starting Line.",
    quote:
      "Becoming is better than being.",
    quoteAuthor: "Carol Dweck",
    heroDescription:
      "Stanford psychologist Carol Dweck's research revealed the most important discovery in modern psychology: people who believe abilities can be developed (growth mindset) outperform those who believe abilities are fixed (fixed mindset) in every measurable domain.",
    sections: [
      {
        heading: "Fixed vs. Growth",
        content:
          "People with a fixed mindset believe intelligence and talent are innate gifts — you either have them or you don't. They avoid challenges (might look dumb), give up easily (what's the point?), and feel threatened by others' success. People with a growth mindset believe abilities develop through dedication and hard work. They embrace challenges, persist through setbacks, and find inspiration in others' success. Same situations, radically different outcomes — all because of a belief about the nature of ability.",
      },
      {
        heading: "The Power of 'Yet'",
        content:
          "One of Dweck's most powerful findings: adding the word 'yet' to any negative self-assessment transforms it. 'I can't do this' becomes 'I can't do this yet.' 'I don't understand' becomes 'I don't understand yet.' This tiny linguistic shift moves your brain from judgment mode to growth mode. It acknowledges the current gap while affirming the possibility of closing it. In classrooms where teachers adopted 'yet' language, student performance increased measurably within one semester.",
      },
      {
        heading: "Effort as the Path",
        content:
          "In a growth mindset, effort isn't a sign of weakness — it's the path to mastery. Michael Jordan was cut from his high school basketball team. J.K. Rowling was rejected by 12 publishers. Thomas Edison failed 10,000 times before creating the light bulb. None of these people had a fixed belief about their abilities. They saw effort, failure, and persistence as the ingredients of greatness. The research is clear: praising effort over talent produces people who take on harder challenges and ultimately achieve more.",
      },
    ],
    tips: [
      "Replace 'I'm not good at this' with 'I'm not good at this yet'",
      "Seek out challenges that stretch you beyond your comfort zone",
      "When you fail, ask 'What did I learn?' instead of 'Why me?'",
      "Praise your own effort and strategy, not innate talent",
      "Study people who mastered skills you want — focus on their journey, not just their results",
    ],
  },
  "deep-work": {
    title: "Deep Work",
    subtitle: "Distraction Is the Enemy of Wealth.",
    quote:
      "A deep life is a good life.",
    quoteAuthor: "Cal Newport",
    heroDescription:
      "Cal Newport defines deep work as 'professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.' In an age of infinite distraction, the ability to focus deeply is becoming the most valuable skill in the economy.",
    sections: [
      {
        heading: "The Attention Economy",
        content:
          "The average person checks their phone 150+ times a day. Every notification, every app switch, every quick email check costs you 23 minutes of refocusing time (UC Irvine research). In an 8-hour workday with even 10 interruptions, you lose nearly 4 hours to context-switching. Meanwhile, the people creating the most value — programmers writing breakthrough code, writers producing bestsellers, entrepreneurs building companies — all share one trait: the ability to concentrate without distraction for extended periods.",
      },
      {
        heading: "The Deep Work Formula",
        content:
          "High-Quality Work Produced = (Time Spent) x (Intensity of Focus). This formula means that 4 hours of deep, undistracted work produces more than 12 hours of shallow, interrupted work. This is why some people seem to accomplish in a week what others take months to do. It's not that they work more hours — they work deeper hours. Bill Gates' famous 'Think Weeks' (isolated reading and reflection) produced some of Microsoft's biggest strategic shifts.",
      },
      {
        heading: "Building a Deep Work Practice",
        content:
          "Deep work is a skill that must be trained like a muscle. Start with 25-minute Pomodoro sessions and build to 90-minute deep work blocks. Create rituals: same time, same place, same starting routine. Eliminate temptation: put your phone in another room, use website blockers, close email. Schedule shallow work (meetings, emails, admin) into specific windows rather than letting it bleed throughout the day. Protect your deep work hours like a surgeon protects surgery time — nothing interrupts.",
      },
    ],
    tips: [
      "Block 2-4 hours each morning for deep work — no meetings, no email, no phone",
      "Use a 'shutdown ritual' at the end of each workday to fully disconnect",
      "Batch shallow work (email, messages, admin) into 2-3 specific windows per day",
      "Practice being bored — resist reaching for your phone in every idle moment",
      "Track your deep work hours weekly — aim to increase by 10% each month",
    ],
  },
  "stoic-resilience": {
    title: "Stoic Resilience",
    subtitle: "Control What You Can. Release the Rest.",
    quote:
      "The impediment to action advances action. What stands in the way becomes the way.",
    quoteAuthor: "Marcus Aurelius",
    heroDescription:
      "Stoicism, practiced by Marcus Aurelius, Seneca, and Epictetus, teaches that we cannot control external events — only our response to them. This 2,000-year-old philosophy is the operating system behind many of the world's most successful leaders, athletes, and entrepreneurs.",
    sections: [
      {
        heading: "The Dichotomy of Control",
        content:
          "The core Stoic principle: divide everything into what you can control and what you cannot. You cannot control the economy, other people's opinions, traffic, or the weather. You CAN control your effort, your attitude, your preparation, and your response. Most suffering comes from trying to control the uncontrollable. When you release that grip and pour all your energy into what you actually influence, anxiety drops and effectiveness skyrockets. This isn't passive acceptance — it's strategic focus.",
      },
      {
        heading: "Amor Fati — Love Your Fate",
        content:
          "The Stoics practiced 'amor fati' — not just accepting what happens, but loving it. Lost your job? It's an opportunity to find something better. Failed at a business? You gained irreplaceable experience. Got rejected? The universe redirected you. This isn't toxic positivity — it's the recognition that every setback contains the seed of an equal or greater advantage, but only if you look for it. Edison didn't just accept his factory burning down — he called his family to watch the fire, saying they'd never see something like it again. He rebuilt and earned more within three years.",
      },
      {
        heading: "Premeditatio Malorum",
        content:
          "The Stoics practiced 'premeditatio malorum' — the premeditation of evils. They would regularly visualize worst-case scenarios: losing their wealth, their health, their loved ones. Far from being pessimistic, this practice served two purposes: it built gratitude for what they currently had, and it prepared them emotionally for adversity. When the worst-case scenario is already processed mentally, the real event loses its power to derail you. This is why Navy SEALs, surgeons, and elite athletes all use mental rehearsal of failure as preparation for success.",
      },
    ],
    tips: [
      "Each morning, identify what's in your control today and what isn't — focus only on the former",
      "When something goes wrong, immediately ask: 'What opportunity does this create?'",
      "Practice voluntary discomfort weekly — cold showers, fasting, sleeping on the floor",
      "Journal nightly: write down what disturbed your peace and whether it was within your control",
      "Read one passage from Marcus Aurelius' Meditations or Seneca's Letters each morning",
    ],
  },
};

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(principlesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = principlesData[params.slug];
  if (!data) return { title: "Principle Not Found" };

  return {
    title: `${data.title} — 1% Blueprint`,
    description: data.heroDescription,
    alternates: { canonical: `/principles/${params.slug}` },
    openGraph: {
      title: `${data.title} — 1% Blueprint`,
      description: data.heroDescription,
      type: "article",
    },
  };
}

export default function PrinciplePage({ params }: PageProps) {
  const data = principlesData[params.slug];
  if (!data) notFound();

  return <PrincipleContent data={data} />;
}
