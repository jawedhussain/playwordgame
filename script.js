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


let Whisper="./images/whisper.jpg"
let Mumble="./images/Whisper.jpg"
let Annoy='./images/annoy.jpg'
let Yawn='./images/yawn.jpg'
let Consent='./images/consent.png'
let Approval='./images/consent.png'
let Accord='./images/consent.png'
let Plead='./images/plead.webp'
let Apologize='./images/plead.webp'
let Provide='./images/provide.jpg'
let Abstain='./images/abstain.jpg'
let Vain='./images/vain.webp'
let Storm='./images/storm.jpg'
let Gale='./images/storm.jpg'
let Tempest='./images/storm.jpg'
let Compulsion='./images/compulsion.webp'
let Neglect='./images/neglect.jpg'
let Resolve='./images/resolve.jpg'
let Lick='./images/lick.webp'
let Courage='./images/courage.jpg'
let Inevitable='./images/inevitable.jpg'
let Sneeze='./images/sneeze.jpg'
let Begger='./images/begger.jpg'
let Disaster ='./images/disaster.jpg'
let Distraught='./images/distraught.jpg'
let Economical='./images/economical.webp'
let Emphasize='./images/emphasize.webp'
let Extravagant='./images/extravagant.jpg'
let Fire='./images/fire.jpg'
let Gigantic='./images/gigantic.jpg'
let Impatience='./images/impatience.jpg'
let Lack='./images/lack.jpg'
let Scarcity='./images/lack.jpg'
let Deficiency='./images/lack.jpg'

let Loot='./images/loot.jpg'
let Miser='./images/miser.webp'
let Stingy='./images/miser.webp'
let Persuade='./images/persuade.webp'
let Reduce='./images/reduce.png'
let Sacrifice='./images/sacrifice.jpg'
let Seek='./images/seek.jpg'
let Strength='./images/strength.jpg'
let Suffer='./images/suffer.jpg' 
let Summon='./images/summon.webp'
let Unpleasant='./images/unpleasant.jpg'
let Blunder='./images/blunder.jpg'
let Patience='./images/patience.png'
let Deaf='./images/deaf.jpg'
let Condemn='./images/condemn.jpg'
let Criticize='./images/condemn.jpg'
let Blame='./images/condemn.jpg'

let Greedy='./images/greedy.jpg'
let Fortunate='./images/fortunate.jpg'
let Vanity='./images/vanity.jpg'
let Abundant='./images/abundant.jpg'
let Abandon='./images/abandon.jpg'
let Secure='./images/secure.jpg'
let Deteriorate='./images/deteriorate.webp'
let Privacy='./images/privacy.png'
let Wonder='./images/wonder.jpg'

let Reward='./images/reward.png'

let Feeble='./images/feeble.jpg'

let Ritual='./images/ritual.JPG'

let Weary='./images/weary.jpg'
let Interguing='./images/interguing.jpg'

let Overcome='./images/overcome.webp'
let Sympathy='./images/sympathy.jpg'

let Tolerance='./images/tolerate.jpeg'

let Crave='./images/crave.jpg'

let Insist='./images/insist.jpg'

let Gratify='./images/gratify.webp'
let Pleased='./images/gratify.webp'

let Seldom='./images/seldom.jpg'

let Rare='./images/rare.jpg'


let Trap='./images/trap.jpg'

let Inspire='./images/inspire.webp'

let Glad='./images/glad.jpg'

let Peep='./images/peep.jpg'

let Rope='./images/rope.jpg'


let Various='./images/various.jpg'
let Unity='./images/unity.jpg'

let Diversity='./images/diversity.jpg'

let Resemble='./images/resemble.jpg'

let Chew='./images/chew.gif'

let Empty='./images/empty.jpg'
let Vacant='./images/vacant.jpg'

let Disguise='./images/disguise.webp'
let Shelter='./images/shelter.jpg'

let Admire='./images/admire.webp'

let Praise='./images/praise.webp'
let Glorify='./images/praise.webp'

let Appreciate='./images/praise.webp'





let Scold='./images/chastise.jpg'
let Rebuke='./images/chastise.jpg'
let Reprimand='./images/chastise.jpg'
let Chastise='./images/chastise.jpg'

let Yell='./images/yell.jpg'

let Shout='./images/yell.jpg'

let Terrified='./images/terrified.jpg'

let Horrified='./images/terrified.jpg'

let Scared='./images/terrified.jpg'

let Cheer='./images/cheer.jpg'
let Chanting='./images/chanting.jpg'

let Wet='./images/wet.jpg'
let Blind='./images/blind.jpg'
let Drag='./images/drag.jpg'

let Pull='./images/drag.jpg'

let Reconcile ='./images/reconcile.webp'

let Bend='./images/bend.jpg'

let Deform='./images/deform.jpg'

let Tolerate='./images/tolerate.jpeg'
let Bear='./images/tolerate.jpeg'
let Endure='./images/tolerate.jpeg'

let Resist='./images/resist.jpg'

let Convenient='./images/convenient.jpg'

let Extensive='./images/extensive.webp'

let Vessel='./images/vessel.webp'

let Utensil='./images/vessel.webp'

let Accumulate='./images/economical.webp'

let Consequences='./images/consequences.webp'

let Avoid='./images/avoid.jpg'

let Negligible='./images/negligible.jpg'

let Trivial='./images/trivial.jpg'

let Insuficient='./images/insuficient.jpg'
let Enormous='./images/enormous.jpg'

let Adopt='./images/adopt.jpg'

let Anticipate='./images/anticipate.jpg'

let Argue='./images/argue.webp'

let Assume='./images/assume.jpg'

let Borrow='./images/borrow.png'

let Hesitate='./images/hesitate.jpg'

let Irritate='./images/annoy.jpg'

let Exasperate='./images/annoy.jpg'

let Eager='./images/eager.webp'

let Curious='./images/curious.jpg'


let Keen='./images/eager.webp'

let Concern='./images/concern.jpg'

let Anxiety='./images/anxiety.jpg'

let Describe ='./images/describe.webp'

let Elaborate='./images/elaborate.webp'

let Drown='./images/drown.jpg'

let Choose='./images/choose.jpg'

let Enhance='./images/enhance.jpg'

let Fall='./images/fall.jpg'

let Fly='./images/fly.jpg'

let Follow='./images/follow.jpg'
let Forbid='./images/forbid.webp'

let Forget='./images/forget.jpg'

let Forgive='./images/forgive.jpg'

let Explore='./images/explore.jpg'

let Gather='./images/gather.jpg'

let Grow='./images/grow.gif'

let Grasp='./images/grasp.jpg'
let Hold='./images/grasp.jpg'

let Glance='./images/glance.gif'
let Glimpse='./images/glance.gif'

let Guide='./images/guide.gif'

let Mentor='./images/mentor.jpg'

let Give_Up='./images/give_up.jpg'

let Guess='./images/guess.jpg'

let Hang='./images/hang.jpg'

let Hug='./images/hug.gif'

let Hurry='./images/hurry.gif'

let Ignore='./images/ignore.webp'

let Justify='./images/justify.jpg'



let Keep='./images/keep.gif'
let Lay='./images/keep.gif'

let Lead='./images/guide.gif'

let Lean='./images/lean.webp'


let Leave='./images/leave.webp'
let Observe='./images/curious.jpg'
let Obtain='./images/obtain.jpg'
let Get='./images/obtain.jpg'

let Recall='./images/recall.gif'
let Remember='./images/recall.gif'

let Refuse='./images/refuse.jpg'


let Regret='./images/regret.webp'


let Require='./images/require.png'

let Satisfy='./images/gratify.webp'

let Serve='./images/serve.gif'

let Survive='./images/survive.webp'

let Squeeze='./images/squeeze.jpg'

let Swell='./images/swell.jpg'

let Swallow='./images/swallow.jpg'
let Culprit='./images/guilty.webp'

let Pair='./images/pair.jpg'

let Quit='./images/give_up.jpg'

let Vanish='./images/vanish.gif'

let Wear='./images/wear.gif'

let Impair='./images/impair.webp'

let Beverage='./images/beverage.jpg'



let Guilty='./images/guilty.webp'
let Faith='./images/faith.jpg'

let Jelous='./images/jelous.jpg'

let Religion='./images/diversity.jpg'



let Trust='./images/trust.jpg'

let Quarrel='./images/argue.webp'

let Dispute='./images/argue.webp'


let Roof='./images/roof.jpg'

let Stretch='./images/stretch.gif'

let Clap='./images/clap.gif'

let Wander='./images/wander.gif'

let Pardon='./images/forgive.jpg'
let Swear='./images/swear.webp'

let Prison='./images/prison.jpg'

let Futile='./images/futile.webp'

let Excruciating='./images/suffer.jpg'

let Capture='./images/capture.gif'

let Expel='./images/expel.webp'

// words after 200 

let Spend='./images/spend.jpg'

let Climb='./images/climb.gif'

let Crowd='./images/gather.jpg'

let Exaggerate='./images/exaggerate.jpg'

let Deny='./images/forbid.webp'

let Plenty='./images/abundant.jpg'

let Ample='./images/abundant.jpg'

let Decline='./images/reduce.png'

let Earthquake='./images/earthquake.gif'

let Destroy='./images/destroy.gif'

let Demolish='./images/destroy.gif'

let lit='./images/lit.gif'

let Ruin='./images/destroy.gif'

let Conserve='./images/conserve.webp'

let Assosiate='./images/tolerate.jpeg'

let Virtue='./images/trust.jpg'

let Carry='./images/carry.jpg'

let Reckless='./images/reckless.jpg'

let Careless='./images/reckless.jpg'

let Conciet='./images/vanity.jpg'

let Proud='./images/vanity.jpg'

let Distribute='./images/provide.jpg'

let Share='./images/provide.jpg'

let Stare='./images/stare.jpg'

let Obsolete='./images/abandon.jpg'

let Breath='./images/breath.jpg'

let Steal='./images/loot.jpg'

let Curse='./images/curse.jpg'

let Put='./images/put.gif'

let Stir='./images/put.gif'

let Gain='./images/enhance.jpg'

let Shiver='./images/shiver.gif'




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

// for(let i=0;i<ArrayOfImages.length;i++){
//     let imageElement=document.createElement('img')
//     imageElement.setAttribute('src',ArrayOfImages[i])
//     imageElement.style.width='200px'
//     imageElement.style.display='block'
//     imageElement.style.border="1px solid red"
//     imageElement.style.margin='20px 0'
//     mainContainer.appendChild(imageElement)
// }

