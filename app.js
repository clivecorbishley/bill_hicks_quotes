document.addEventListener('DOMContentLoaded', function() {
  var quotes = [
    "Today, a young man on acid realized that all matter is merely energy condensed to a slow vibration – that we are all one consciousness experiencing itself subjectively. There is no such thing as death, life is only a dream, and we are the imagination of ourselves. Here's Tom with the weather.",
    "See, I'm glad mushrooms are against the law, 'cause I took 'em one time, and you know what happened to me? I laid in a field of green grass for four hours going, \"My God! I love everything.\" Yeah, now if that isn't a hazard to our country... how are we gonna justify arms dealing if we know we're all one?!",
    "Watching television is like taking black spray paint to your third eye.",
    "I loved when Bush came out and said, \"We are losing the war against drugs.\" You know what that implies? There's a war being fought, and the people on drugs are winning it.",
    "All governments are lying cocksuckers.",
    "And in the beginning there was the word, Freebird. And Freebird would be yelled throughout the centuries. Freebird, the mantra of the moron.",
    "It's all about money, not freedom, y'all, okay? Nothing to do with fuckin' freedom. If you think you're free, try going somewhere without fucking money, okay?",
    "We live in a world where John Lennon was murdered, yet Barry Manilow continues to put out fucking albums. Goddammit! If you're gonna kill somebody, have some fucking taste. I'll drive you to Kenny Rogers' house.",
    "I had never been asked that. Not \"What am I reading?\", but \"What am I reading for?\" Goddammit, you stumped me. Hmm, why do I read? I suppose I read for a lot of reasons, one of the main ones being so I don't end up being a fucking waffle waitress.",
    "Good evening, my name is Bill Hicks. I've been on the road now doing comedy 12 years, so, uh, bear with me while I plaster on a fake smile and plow through this shit one more time.",
    "They proved that if you quit smoking, it will prolong your life. What they haven't proved is that a prolonged life is a good thing. I haven't seen the stats on that yet.",
    "People pay lip service to saving the planet, but they don't – they fail to make the big leap that if you want to save the planet, kill your fucking self. The planet will be saved without you. And what a delightful place it'll be. Welcome. It's a new thing I'm working on, called \"The Comedy of Hate\". Join in.",
    "I just have one of those faces. People come up to me and say, \"What's wrong?\" Nothing. \"Well, it takes more energy to frown than it does to smile.\" Yeah, you know it takes more energy to point that out than it does to leave me alone?",
    "I guess what surprised me the most was the discrepancy in casualties: Iraq, one hundred fifty thousand casualties, USA... seventy-nine! Let's go over those numbers again, they're a little baffling at first. Iraq 150,000, USA 79. Does that mean we could have won with only 80 guys there? Just one guy in a ticker-tape parade, \"I did it! Hey!\"",
    "See, I know you entertain some kind of eternal life fantasy because you've chosen not to smoke; let me be the first to pop that fucking bubble and send you hurtling back to reality – because you're dead too. And you know what doctors say: \"Shit, if only you'd smoked, we'd have the technology to help you. It's you people dying from nothing who are screwed.\" I got lots of stuff waiting for me: oxygen tent, iron lung, electronic voice box; it's like going to Sharper Image when I die.",
    "You see, I think drugs have done some good things for us. I really do. And if you don't believe drugs have done good things for us, do me a favor. Go home tonight. Take all your albums, all your tapes and all your CDs and burn them. 'Cause you know what, the musicians that made all that great music that's enhanced your lives throughout the years were rrreal fucking high on drugs. The Beatles were so fucking high they let Ringo sing a few tunes.",
    "They're putting the cart before the horse on this pornography issue. Playboy doesn't cause sexual thoughts. There are sexual thoughts, and, therefore, there is Playboy. Don't you see? I know these sound like deep philosophical questions, \"What came first, the hard-on or the Madonna video?\" and \"If a hard-on falls in the forest, do you go blind?\" and \"What does an atheist scream when they come?\"",
    "You know what causes sexual thoughts? I'm gonna clear the air for you tonight. I'm gonna end this debate, hopefully once and for all while on this planet, 'cause outer space awaits our presence, we are better and more unique creatures than this and all eternity is our playground, so let me go ahead and clear this one issue up once and for all and let's move on to real issues. Can we? Great. Here's what causes sexual thoughts. Ready, drumroll: having a dick.",
    "Lots of Christians wear crosses around their necks... you really think when Jesus comes back, he ever wants to see a fucking cross?",
    "People often ask me where I stand politically. It's not that I disagree with Bush's economic policy or his foreign policy, it's that I believe he was a child of Satan sent here to destroy the planet Earth. Little to the left.",
    "How many people disapprove of the job the Conservatives are doing? Seventy percent. Of those same people, how many will vote for them again? ...Seventy percent. What the fuck? Where did they take this poll, at an S&M parlor?",
    "You know we armed Iraq. I wondered about that too, you know. During the Persian Gulf war, those intelligence reports would come out: \"Iraq: incredible weapons – incredible weapons.\" \"How do you know that?\" \"Uh, well... we looked at the receipts.\"",
    "\"God put [dinosaur fossils] here to test our faith!\"... I think God put you here to test my faith, dude.",
    "They lie about marijuana. Tell you pot smoking makes you unmotivated. Lie! When you're high, you can do everything you normally do just as well – you just realize that it's not worth the fucking effort. There is a difference.",
    "Go back to bed, America. Your government has figured out how it all transpired. Go back to bed, America. Your government is in control again. Here. Here's American Gladiators. Watch this, shut up. Go back to bed, America.",
    "Go back to bed, America. Here is American Gladiators. Here is 56 channels of it! Watch these pituitary retards bang their fucking skulls together and congratulate you on living in the land of freedom. Here you go, America! You are free to do as we tell you! You are free to do what we tell you!",
    "The world is like a ride in an amusement park, and when you choose to go on it you think it's real because that's how powerful our minds are. The ride goes up and down, around and around, it has thrills and chills, and it's very brightly colored, and it's very loud, and it's fun for a while. Many people have been on the ride a long time, and they begin to wonder, \"Hey, is this real, or is this just a ride?\" And other people have remembered, and they come back to us and say, \"Hey, don't worry; don't be afraid, ever, because this is just a ride.\" And we... kill those people.",
    "\"Shut him up! I've got a lot invested in this ride, shut him up! Look at my furrows of worry, look at my big bank account, and my family. This has to be real.\" It's just a ride.",
    "It's only a choice. No effort, no work, no job, no savings of money. Just a simple choice, right now, between fear and love. The eyes of fear want you to put bigger locks on your doors, buy guns, close yourself off. The eyes of love instead see all of us as one.",
    "Here's what we can do to change the world, right now, to a better ride. Take all that money we spend on weapons and defenses each year and instead spend it feeding and clothing and educating the poor of the world, which it would pay for many times over, not one human being excluded, and we could explore space, together, both inner and outer, forever, in peace.",
    "\"I believe that the Bible is the literal word of God.\" And I say no, it's not, Dad. \"Well, I believe that it is.\" Well, you know, some people believe they're Napoleon. That's fine. Beliefs are neat. Cherish them, but don't share them like they're the truth.",
    "Speaking of Satan, I was watching Rush Limbaugh the other day. Doesn't Rush Limbaugh remind you of one of those gay guys that like to lie in a tub while other guys pee on him?",
    "Folks, it's time to evolve. That's why we're troubled. You know why our institutions are failing us, the church, the state, everything's failing? It's because, um – they're no longer relevant. We're supposed to keep evolving. Evolution did not end with us growing opposable thumbs. You do know that, right? There's another 90 percent of our brains that we have to illuminate.",
    "You ever notice that people who believe in creationism look really unevolved? Eyes real close together, big furry hands and feet. \"I believe God created me in one day.\" Yeah, looks like he rushed it.",
    "We have women priests now. What do y'all think of that, women priests? I think that's fine. So what? Now we've got priests of both sexes that I don't listen to.",
    "People say to me, \"Bill, quit bringing up Kennedy, man. Let it go. It was a long time ago. Just forget about it.\" All right, then don't bring up Jesus to me. I mean, as long as we're talking shelf life here.",
    "I do have a healthy skepticism, I think we all should. But I think if you listen closely enough, you’ll find that my message, if I as a joke-blower could be pompous enough to have one, is that we’re all alright and it’s gonna work out. I don’t find that cynical at all.",
    "I didn’t go up and say the Pope’s a faggot! ...Which is what he is, but I didn’t say that!",
    "Here's how I feel about gays in the military: Anyone dumb enough to want to be in the military should be allowed in. End of fucking story. That should be the only requirement.",
    "I'm tired of this back-slapping \"Aren't humanity neat?\" bullshit. We're a virus with shoes, okay? That's all we are.",
    "I'll show you politics in America. Here it is, right here. \"I think the puppet on the right shares my beliefs.\" \"I think the puppet on the left is more to my liking.\" \"Hey, wait a minute, there's one guy holding out both puppets!\"",
    "I hate patriotism. I can’t stand it, man — makes me fuckin’ sick. It’s a round world last time I checked.",
    "The whole image is that eternal suffering awaits anyone who questions God's infinite love. That's the message we're brought up with, isn't it? Believe or die! Thank you, forgiving Lord, for all those options.",
    "Why do we put people who are on drugs in jail? They're sick, they're not criminals. Sick people don't get healed in prison. You see? It makes no sense.",
    "I've been on what I call my UFO Tour, which means, like UFOs, I too have been appearing in small southern towns in front of a handful of hillbillies lately. I've been doubting my own existence.",
    "I know this is not a very popular idea. You don't hear it too often any more … but it's the truth. I have taken drugs before and … I had a real good time. Sorry. Didn't murder anybody, didn't rape anybody, didn't rob anybody, didn't beat anybody, didn't lose – hmm – one fucking job, laughed my ass off, and went about my day. Sorry. Now, where's my commercial?",
    "That's what I hate about the war on drugs. All day long we see those commercials: \"Here's your brain, here's your brain on drugs\", \"Just Say No\", \"Why do you think they call it dope?\" ... And then the next commercial is \"This Bud's for yooouuuu.\" C'mon, everybody, let's be hypocritical bastards. It's okay to drink your drug. We meant those other drugs. Those untaxed drugs. Those are the ones that are bad for you.",
    " The war against drugs, which actually is a war against civil rights, don't ever be fooled again. If they cared about us they'd get rid of the number one drug which is cigarettes; kills more people than crack, coke, and heroin combined, times 100.",
    "I left in love, in laughter, and in truth and wherever truth, love and laughter abide, I am there in spirit.",
    "I don't mean to sound bitter, cold, or cruel, but I am, so that's how it comes out.",
    "We all pay for life with death, so everything in between should be free.",
    "Children are smarter than any of us. Know how I know that? I don't know one child with a full time job and children.",
    "I can speak for every guy in this room here tonight. Guys, if you could blow yourselves, ladies, you'd be in this room alone right now. Watching an empty stage.",
    "I believe that there is an equality to all humanity: We all suck.",
    "By the way if anyone here is in advertising or marketing... kill yourself. It’s just a little thought. I’m just trying to plant seeds.",
    "Quit putting a goddamn dollar sign on every fucking thing on this planet!",
    "You watch the news these days? It's unbelievable. You think you just walk out your door, you're immediately gonna be raped by some crack-addicted, AIDS-infected pitbull.",
    "I get a kick out of being an outsider constantly. It allows me to be creative. I don't like anything in the mainstream and they don't like me."
  ];
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
});
