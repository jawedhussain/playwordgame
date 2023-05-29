let images=document.querySelectorAll('.single__image')
let imagesArray=Array.from(images)
let mainWord=document.getElementById('mainWord')
let shower=document.getElementById('shower')
let testImage=document.getElementById('testImage')
let imagesId=document.getElementById('imagesId')
let rightScoreValue=document.getElementById('rightScoreValue')
let wrongScoreValue=document.getElementById('wrongScoreValue')
let wordNumber=document.getElementById('wordNumber')
let btn=document.getElementById('btn')
let myAudio=document.getElementById('myAudio')
let body=document.getElementById('body')

let gifSource='./rightanswer.gif'
let gifContainer=document.createElement('div')
gifContainer.setAttribute('id','fireWork')


let Whisper="./whisper.jpg"
let Mumble="./Whisper.jpg"
let Annoy='./annoy.jpg'
let Yawn='./yawn.jpg'
let Consent='./consent.png'
let Approval='./consent.png'
let Accord='./consent.png'
let Plead='./plead.webp'
let Apologize='./plead.webp'
let Provide='./provide.jpg'
let Abstain='./abstain.jpg'
let Vain='./vain.webp'
let Storm='./storm.jpg'
let Gale='./storm.jpg'
let Tempest='./storm.jpg'
let Compulsion='./compulsion.webp'
let Neglect='./neglect.jpg'
let Resolve='./resolve.jpg'
let Lick='./lick.webp'
let Courage='./courage.jpg'
let Inevitable='./inevitable.jpg'
let Sneeze='./sneeze.jpg'
let Begger='./begger.jpg'
let Disaster ='./disaster.jpg'
let Distraught='./distraught.jpg'
let Economical='./economical.webp'
let Emphasize='./emphasize.webp'
let Extravagant='./extravagant.jpg'
let Fire='./fire.jpg'
let Gigantic='./gigantic.jpg'
let Impatience='./impatience.jpg'
let Lack='./lack.jpg'
let Scarcity='./lack.jpg'
let Deficiency='./lack.jpg'

let Loot='./loot.jpg'
let Miser='./miser.webp'
let Stingy='./miser.webp'
let Persuade='./persuade.webp'
let Reduce='./reduce.png'
let Sacrifice='./sacrifice.jpg'
let Seek='./seek.jpg'
let Strength='./strength.jpg'
let Suffer='./suffer.jpg' 
let Summon='./summon.webp'
let Unpleasant='./unpleasant.jpg'
let Blunder='./blunder.jpg'
let Patience='./patience.png'
let Deaf='./deaf.jpg'
let Condemn='./condemn.jpg'
let Criticize='./condemn.jpg'
let Blame='./condemn.jpg'

let Greedy='./greedy.jpg'
let Fortunate='./fortunate.jpg'
let Vanity='./vanity.jpg'
let Abundant='./abundant.jpg'
let Abandon='./abandon.jpg'
let Secure='./secure.jpg'
let Deteriorate='./deteriorate.webp'
let Privacy='./privacy.png'
let Wonder='./wonder.jpg'

let Reward='./reward.png'

let Feeble='./feeble.jpg'

let Ritual='./ritual.JPG'

let Weary='./weary.jpg'
let Interguing='./interguing.jpg'

let Overcome='./overcome.webp'
let Sympathy='./sympathy.jpg'

let Tolerance='./tolerate.jpeg'

let Crave='./crave.jpg'

let Insist='./insist.jpg'

let Gratify='./gratify.webp'
let Pleased='./gratify.webp'

let Seldom='./seldom.jpg'

let Rare='./rare.jpg'


let Trap='./trap.jpg'

let Inspire='./inspire.webp'

let Glad='./glad.jpg'

let Peep='./peep.jpg'

let Rope='./rope.jpg'


let Various='./various.jpg'
let Unity='./unity.jpg'

let Diversity='./diversity.jpg'

let Resemble='./resemble.jpg'

let Chew='./chew.gif'

let Empty='./empty.jpg'
let Vacant='./vacant.jpg'

let Disguise='./disguise.webp'
let Shelter='./shelter.jpg'

let Admire='./admire.webp'

let Praise='./praise.webp'
let Glorify='./praise.webp'

let Appreciate='./praise.webp'





let Scold='./chastise.jpg'
let Rebuke='./chastise.jpg'
let Reprimand='./chastise.jpg'
let Chastise='./chastise.jpg'

let Yell='./yell.jpg'

let Shout='./yell.jpg'

let Terrified='./terrified.jpg'

let Horrified='./terrified.jpg'

let Scared='./terrified.jpg'

let Cheer='./cheer.jpg'
let Chanting='./chanting.jpg'

let Wet='./wet.jpg'
let Blind='./blind.jpg'
let Drag='./drag.jpg'

let Pull='./drag.jpg'

let Reconcile ='./reconcile.webp'

let Bend='./bend.jpg'

let Deform='./deform.jpg'

let Tolerate='./tolerate.jpeg'
let Bear='./tolerate.jpeg'
let Endure='./tolerate.jpeg'

let Resist='./resist.jpg'

let Convenient='./convenient.jpg'

let Extensive='./extensive.webp'

let Vessel='./vessel.webp'

let Utensil='./vessel.webp'

let Accumulate='./economical.webp'

let Consequences='./consequences.webp'

let Avoid='./avoid.jpg'

let Negligible='./negligible.jpg'

let Trivial='./trivial.jpg'

let Insuficient='./insuficient.jpg'
let Enormous='./enormous.jpg'

let Adopt='./adopt.jpg'

let Anticipate='./anticipate.jpg'

let Argue='./argue.webp'

let Assume='./assume.jpg'

let Borrow='./borrow.png'

let Hesitate='./hesitate.jpg'

let Irritate='./annoy.jpg'

let Exasperate='./annoy.jpg'

let Eager='./eager.webp'

let Curious='./curious.jpg'


let Keen='./eager.webp'

let Concern='./concern.jpg'

let Anxiety='./anxiety.jpg'

let Describe ='./describe.webp'

let Elaborate='./elaborate.webp'

let Drown='./drown.jpg'

let Choose='./choose.jpg'

let Enhance='./enhance.jpg'

let Fall='./fall.jpg'

let Fly='./fly.jpg'

let Follow='./follow.jpg'
let Forbid='./forbid.webp'

let Forget='./forget.jpg'

let Forgive='./forgive.jpg'

let Explore='./explore.jpg'

let Gather='./gather.jpg'

let Grow='./grow.gif'

let Grasp='./grasp.jpg'
let Hold='./grasp.jpg'

let Glance='./glance.gif'
let Glimpse='./glance.gif'

let Guide='./guide.gif'

let Mentor='./mentor.jpg'

let Give_Up='./give_up.jpg'

let Guess='./guess.jpg'

let Hang='./hang.jpg'

let Hug='./hug.gif'

let Hurry='./hurry.gif'

let Ignore='./ignore.webp'

let Justify='./justify.jpg'



let Keep='./keep.gif'
let Lay='./keep.gif'

let Lead='./guide.gif'

let Lean='./lean.webp'


let Leave='./leave.webp'
let Observe='./curious.jpg'
let Obtain='./obtain.jpg'
let Get='./obtain.jpg'

let Recall='./recall.gif'
let Remember='./recall.gif'

let Refuse='./refuse.jpg'


let Regret='./regret.webp'


let Require='./require.png'

let Satisfy='./gratify.webp'

let Serve='./serve.gif'

let Survive='./survive.webp'

let Squeeze='./squeeze.jpg'

let Swell='./swell.jpg'

let Swallow='./swallow.jpg'
let Culprit='./guilty.webp'

let Pair='./pair.jpg'

let Quit='./give_up.jpg'

let Vanish='./vanish.gif'

let Wear='./wear.gif'

let Impair='./impair.webp'

let Beverage='./beverage.jpg'



let Guilty='./guilty.webp'
let Faith='./faith.jpg'

let Jelous='./jelous.jpg'

let Religion='./diversity.jpg'



let Trust='./trust.jpg'

let Quarrel='./argue.webp'

let Dispute='./argue.webp'


let Roof='./roof.jpg'

let Stretch='./stretch.gif'

let Clap='./clap.gif'

let Wander='./wander.gif'

let Pardon='./forgive.jpg'
let Swear='./swear.webp'

let Prison='./prison.jpg'

let Futile='./futile.webp'

let Excruciating='./suffer.jpg'

let Capture='./capture.gif'

let Expel='./expel.webp'

// words after 200 




let intialRightScore
let intialWrongScore


// for right score
if(sessionStorage.getItem('rightScore')==0){
    intialRightScore=0
    rightScoreValue.textContent=intialRightScore
}
else(
    intialRightScore=sessionStorage.getItem('rightScore')
)

// for worng score

if(sessionStorage.getItem('wrongScore')==0){
    intialWrongScore=0
    wrongScoreValue.textContent=intialWrongScore
}
else(
    intialWrongScore=sessionStorage.getItem('wrongScore')
)

rightScoreValue.textContent=0
wrongScoreValue.textContent=0

let retrievedRightScore=sessionStorage.getItem('rightScore')
let retrievedWrongScore=sessionStorage.getItem('wrongScore')
// adding rightScore to the session storage
if(retrievedRightScore===null){
    var scoreValueRight=0
    sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
}
else{
    scoreValueRight=JSON.parse(retrievedRightScore)
    rightScoreValue.textContent=scoreValueRight
}

// adding wrongScore to the session storage

if(retrievedWrongScore===null){
    var scoreValueWrong=0
    sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
}
else{
    scoreValueWrong=JSON.parse(retrievedWrongScore)
    wrongScoreValue.textContent=scoreValueWrong
}
// vocabulary array
let vocabArray=["Whisper","Annoy","Yawn","Consent","Plead","Provide","Abstain","Vain","Storm",
    "Compulsion","Neglect","Resolve","Lick","Courage","Inevitable",'Sneeze','Begger','Disaster',
    'Distraught',"Economical", "Emphasize",'Endure',"Extravagant","Fire",'Gigantic','Impatience',
    'Lack','Loot','Miser','Persuade','Reduce','Sacrifice','Seek','Strength',"Suffer","Summon",
    "Unpleasant","Blunder",'Patience','Deaf', "Condemn", "Fortunate",'Vanity','Abundant','Abandon',
    'Secure','Deteriorate','Privacy','Wonder','Reprimand','Reward', 'Feeble','Ritual','Weary',
    'Interguing','Sympathy','Tolerance','Crave','Insist','Gratify','Seldom','Trap','Inspire','Glad',
    'Peep','Rope', 'Various','Unity','Diversity','Resemble','Chew','Empty','Shelter','Admire','Scold',
    'Yell','Terrified','Cheer','Chanting','Wet','Blind','Drag','Reconcile','Bend','Deform','Tolerate',
    'Resist','Convenient','Extensive','Vessel', 'Accumulate','Consequences','Avoid', 'Negligible', 
    'Adopt','Anticipate','Argue','Assume','Borrow','Hesitate','Irritate','Approval','Exasperate',
    'Mumble','Gale','Horrified' ,'Scared', 'Rare' ,'Praise', 'Glorify','Pull','Insuficient', 'Trivial',
    'Eager','Curious','Keen','Appreciate','Vacant','Disguise','Rebuke','Chastise','Bear','Criticize',
    'Blame','Describe', 'Elaborate','Pleased','Stingy','Greedy','Drown','Choose','Enhance','Fall','Fly',
    'Follow','Forbid','Forget','Forgive','Explore',  'Gather','Grow',
    'Grasp','Hold','Glance','Glimpse','Guide','Mentor','Give_Up','Guess','Hang'
    ,'Hug','Hurry','Ignore','Justify','Keep','Lay','Lead','Leave',
    'Observe','Obtain','Get','Recall','Remember','Refuse','Regret','Require','Satisfy','Serve',
    'Survive','Squeeze','Swell','Swallow','Culprit',
    'Pair','Quit','Vanish','Wear','Impair','Beverage','Accord','Scarcity','Deficiency',"Guilty",
    "Faith","Jelous","Religion","Trust","Quarrel","Dispute","Roof","Stretch","Clap",
    "Wander","Pardon","Swear","Prison","Futile","Excruciating","Capture","Expel"

]

let ArrayOfImages=[Whisper,Annoy,Yawn,Consent,Plead,Provide,Abstain,Vain,Storm,
    Compulsion,Neglect,Resolve,Lick,Courage,Inevitable,Sneeze,Begger,Disaster,Distraught,Economical,Emphasize,Endure,Extravagant,
    Fire,Gigantic,Impatience,Lack,Loot,Miser,Persuade,Reduce,Sacrifice,Seek,Strength,Suffer,Summon,Unpleasant,Blunder,Patience,Deaf,
    Condemn, Fortunate,Vanity,Abundant,Abandon,Secure,Deteriorate,Privacy,Wonder,Reprimand,Reward,Feeble,
   Ritual,Weary,Interguing,Sympathy,Tolerance,Crave,Insist,Gratify,Seldom,Trap,Inspire,Glad,Peep,Rope,Various,Unity,
    Diversity,Resemble,Chew,Empty,Shelter,Admire,Scold,Yell,Terrified,Cheer,Chanting,Wet,Blind,Drag,
    Reconcile,Bend,Deform,Tolerate,Resist,Convenient,Extensive,Vessel,Accumulate,Consequences,Avoid,Negligible,
    Adopt,Anticipate,Argue,Assume,Borrow,Hesitate,Irritate,Approval,Exasperate,Mumble,Gale,Horrified,Scared, Rare ,Praise,
    Glorify,Pull,Insuficient, Trivial,Eager,Curious,Keen,Appreciate,Vacant,Disguise,Rebuke,Chastise,Bear,Criticize,Blame,Describe,
    Elaborate,Pleased,Stingy,Greedy,Drown,Choose,Enhance,Fall,Fly,Follow,Forbid,Forget,Forgive,Explore,Gather,Grow,
    Grasp,Hold,Glance,Glimpse,Guide,Mentor,Give_Up,Guess,Hang,Hug,Hurry,Ignore,Justify,Keep,Lay,Lead,Leave,
    Observe,Obtain,Get,Recall,Remember,Refuse,Regret,Require,Satisfy,Serve,Survive,Squeeze,Swell,Swallow,Culprit,
    Pair,Quit,Vanish,Wear,Impair,Beverage,Accord,Scarcity,Deficiency,Guilty,Faith,Jelous,Religion,Trust,
    Quarrel,Dispute,Roof,Stretch,Clap,Wander,Pardon,Swear,Prison,Futile,Excruciating,Capture,Expel
]



let a2=0
let b2=ArrayOfImages.length-1


let random2=Math.round(a2+(b2-a2)*Math.random())

let random3=Math.round(a2+(b2-a2)*Math.random())

let random4=Math.round(a2+(b2-a2)*Math.random())

let random5=Math.round(a2+(b2-a2)*Math.random())




let mainInterval= setInterval(() => {
    if(ArrayOfImages[random2]!=ArrayOfImages[random3] && ArrayOfImages[random2]!=ArrayOfImages[random4] && ArrayOfImages[random2]!=ArrayOfImages[random5] && ArrayOfImages[random3]!=ArrayOfImages[random4] && ArrayOfImages[random3]!=ArrayOfImages[random5] && ArrayOfImages[random4]!=ArrayOfImages[random5]){
        clearInterval(mainInterval)
    }


    else{
        random2=Math.round(a2+(b2-a2)*Math.random())
        random3=Math.round(a2+(b2-a2)*Math.random())
        random4=Math.round(a2+(b2-a2)*Math.random())
        random5=Math.round(a2+(b2-a2)*Math.random())
    }

    
    
}, 10);



setTimeout(() => {
    let randomArray=[random2,random3,random4,random5]
    let a6=0
    let b6=3
   let random6=Math.round(a6+(b6-a6)*Math.random())
       mainWord.textContent=vocabArray[randomArray[random6]]   
       wordNumber.textContent=randomArray[random6]+1
    let Image1=document.createElement('img')
    Image1.setAttribute('src',ArrayOfImages[random2])
    Image1.setAttribute('id',vocabArray[random2])
    imagesId.appendChild(Image1)
    
    let Image2=document.createElement('img')
    
    Image2.setAttribute('src',ArrayOfImages[random3])
    Image2.setAttribute('id',vocabArray[random3])
    imagesId.appendChild(Image2)
    
    let Image3=document.createElement('img')
    
    Image3.setAttribute('src',ArrayOfImages[random4])
    Image3.setAttribute('id',vocabArray[random4])
    imagesId.appendChild(Image3)
    
    let Image4=document.createElement('img')
    Image4.setAttribute('src',ArrayOfImages[random5])
    Image4.setAttribute('id',vocabArray[random5])
    imagesId.appendChild(Image4)

  
    console.log(random2)
    console.log(random3)
    console.log(random4)
    console.log(random5)
    console.log(ArrayOfImages[99])
    let err=document.createElement('p')

    Image1.addEventListener('click',()=>{
        if(Image1.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight

           setTimeout(() => {
            window.location.reload()
           }, 2000);
        }
    
        else if(Image1.id!=mainWord.textContent){
            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })

    
   

    Image2.addEventListener('click',()=>{
        if(Image2.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight
            setTimeout(() => {
                window.location.reload()
               }, 2000);
        }
    
        else if(Image2.id!=mainWord.textContent){

            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })


    Image3.addEventListener('click',()=>{
        if(Image3.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight
            setTimeout(() => {
                window.location.reload()
               },2000);
        }
    
        else if(Image3.id!=mainWord.textContent){

            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })

    Image4.addEventListener('click',()=>{
        if(Image4.id==mainWord.textContent){
            let gifElement=document.createElement('img')
            gifElement.setAttribute('src',gifSource)
            gifContainer.appendChild(gifElement)
            body.appendChild(gifContainer)
            err.textContent="right answer"
            myAudio.play()
            err.classList.add('rightAnswer')
            shower.appendChild(err)
            intialRightScore++
            scoreValueRight=intialRightScore
            sessionStorage.setItem('rightScore',JSON.stringify(scoreValueRight))
            rightScoreValue.textContent=scoreValueRight
            setTimeout(() => {
                window.location.reload()
               }, 2000);
        }
    
        else if(Image4.id!=mainWord.textContent){
            err.textContent="wrong answer"
            err.classList.add('worngAnswer')
            shower.appendChild(err)
            intialWrongScore++
            scoreValueWrong=intialWrongScore
            sessionStorage.setItem('wrongScore',JSON.stringify(scoreValueWrong))
            wrongScoreValue.textContent=scoreValueWrong
            setTimeout(() => {
                window.location.reload()
               }, 1000);
        }
    })

 
    
   }, 500);


  


   let mainContainer=document.getElementById('mainContainer')

