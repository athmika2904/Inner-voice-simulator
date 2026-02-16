const responses={
    funny:[
        "Relax, even disasters need rehearsal time.","This will be funny later… please let it be later.","Chaos is just life doing improv.","I call this character development with sound effects.","Everything's fine — the panic is decorative.",
"Future me is gonna roast present me for this.","Breathe… we've survived worse and dumber.","This is growth, but make it awkward.","I'm not lost, I'm exploring bad decisions.","Plot twist: I survive and need a snack.","This feels illegal but technically it's learning.",
"I trust the process, I just don't like it.","Today's mess is tomorrow's comedy special.","We ride at dawn… after a nap.","If nothing else, this builds personality."
    ],
    motivational:[
        "Keep going, your future self is already bragging about you.","You're closer than you think — don't quit mid-miracle.","Progress is progress, even when it's ugly.","Show up messy, show up scared, just show up.","Small wins still count — stack enough and you win big.","You didn't come this far to only come this far.","Rest if you must, but don't unpack and live there.","You're under construction, not behind schedule.","Every expert once googled the basics too.","Hard days are proof you're playing the game.","Confidence grows when you do things anyway.",
"Your pace is valid — forward is forward.","One stubborn step beats a thousand excuses.","You're allowed to grow slowly and still be proud.","The comeback is always stronger than the setback."
    ],
    sarcastic:[
        "Chase your dreams — worst case, you get cardio.","Keep going, quitting would ruin all this dramatic buildup.","You're doing amazing… statistically speaking.","Failure builds character, and wow, you're getting rich in it.","Believe in yourself — someone has to.","Work hard now so future you can complain comfortably.","You're unstoppable, mostly because you forgot how to stop.",
"Growth is painful, but so is staying the same — pick your drama.","Keep pushing, the breakdown is part of the breakthrough aesthetic.","You didn't survive this much just to be mediocre on purpose.","Try again — stubbornness is a valid strategy.","You're thriving… in a chaotic, experimental way.","Success is just failure that refused to leave.","Do it scared — confidence is usually faking it anyway.","Shine bright, if only to confuse your doubters."
    ]
}
export function generateResponse(type){
    const exp=responses[type];
    const index=Math.floor(Math.random()*exp.length);
    return exp[index];
}