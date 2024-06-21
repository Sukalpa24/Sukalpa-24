import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import '../index.css';
import clash from '../assets/Events/bg-coding.gif';
import eye from '../assets/Events/bg-eye.gif';
import hack from '../assets/Events/bg-hackthon.gif';
import colab from '../assets/Events/bg-colab.gif';
import game from '../assets/Events/bg-gaming.gif';
import idea from '../assets/Events/bg-idea.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';
import Eventpage from './Eventpage'

const data = [
  { 
      id: 1,
      title: "CODE CLASH",
      price: "100",
      img: clash,
      description: "Code Beyond Limits: Innovate, Create, Elevate, Emphasize innovation in coding.",
      Rules : [
        "Each team consists of maximum two members.",
        "Systems will be Provided.",
        "Participation certificates will be provided.",
        "Fair play is mandatory.",
        "The event consists of four rounds with eliminations after each round.",
        "Event Co-ordinatiors decision is final.",
        "Round One: Quiz-bit ->  Related to Programming",
        "Round Two: Reverse Coding -> You will be given the output and a suitable input without any description. You need to deduce the logic and code it(only C language is Allowed).",
        "Round Three: Fix-It Frenzy -> You will be given a some codes with bugs to debug (No language Constraints)",
        "Round Four: DSA Duel -> No language Constraints, Platform: HackerRank (Please create an account on HackerRank)."
      ],
      Coordinator1: "PRAJWAL KR",
      Coordinator1_ph : "+91-7899274216",
      Coordinator2: "JEEVAN M",
      Coordinator2_ph : "+91-9019096501",
      form : "https://forms.gle/kdJaKnXpN66VHjLP7",
     },
      {
         id: 2,
         title: "HACKATHON",
         price: "200",
         img: idea,
         description: "Hack the Future: Collaborate, Create, Conquer , Creativity to shape the future.",
         Rules : [
          "Each team consists of two members.",
          "Duration of hackthon : 24 hours.",
          "Type: Online.",
          "Participation certificates will be provided.",
          "10 problem statement will be provided." ,
          "Each team should select one question of their own choice.",
          "Each team will be assigned one mentor. ",
          "For regular intervals of time mentors will be monitoring the status of team.",
          "Final result will be the combined with desired output and mentors analysis.",
       ],
        Coordinator1: "SHREYANK JAWAI",
        Coordinator1_ph : "+91-9886705345",
        Coordinator2: "SKANDA A",
        Coordinator2_ph : "+91-7019886566",
        form : "https://forms.gle/Fp5Bu7gUFkf99ZnSA",
         },
          { id: 3,
           title: "IDEATHON",
           price: "150",
           img: hack,
           description: "Ideas to Impact: Ignite, Innovate, Inspire , Journey from ideas to solutions." ,
           Rules : [
              "Each team consists of two members.",
              "Event consists of 2 rounds.",
              "ROUND 1- INSIGHT AND PITCH",
              "--> On spot problem statement distribution [based on domains selected during registration]." ,
              "--> Brainstorming session – 30 mins.",
              "--> Pitch presentation – 3 mins per team.",
              "ROUND 2 – BLUEPRINTING",
              "--> Selected teams should develop and design prototype according to their pitch",
              "--> Prototype design – 60 mins",
              "-->Prototype presentation – 5+2 mins per team",
              "Students from any year are eligible to participate.",
              "Participation certificates will be provided.",
              "The judges decision will be final."],
          Coordinator1: "CHINMAIE",
          Coordinator1_ph : "+91-8747810019",
          Coordinator2: "SHRAVANA GS",
          Coordinator2_ph : "+91-8762291068",
          form : "https://forms.gle/iFL3JJxNFhYpsQ8D8",
         },
          {
           id: 4,
           title: "CODE COLLAB",
           price: "100",
           img: colab,
           description: "Emphasizes collaboration and elevating the coding experience through teamwork.",
           Rules : [ 
            "Each team consists of two members.",
            "No internet access.",
            "Participation certificates will be provided.",
            "The event consists of four rounds with elimination in first 2 rounds." ,
            "Event Co-ordinatiors decision is final.",
            "Round One: What’s this..? -> Capability of analysing code.",
            "Round Two: Dark logic ->  Hide and seek with code (Only C language is allowed).",
            "Round Three: Unify -> Any preferable language.",
            "Round Four: TechTrophy -> Platform: HackerRank (Please create an account on HackerRank).",
            ],
          Coordinator1: "POORVI VH",
          Coordinator1_ph : "+91-7975106351",
          Coordinator2: "SUHAIL KHAN",
          Coordinator2_ph : "+91-9986736612",
          form : "https://forms.gle/psYXAXjiwAaXVTsk6",
          },
          { 
          id: 5,
           title: "ENGINEERS EYE",
            price: "100",
            img: eye,
            description: "Engineering Excellence: Vision, Precision, Innovative spirit of engineering.",
            Rules : [
                "Each team consists of two members.",
                "Mobiles and Electronic gadgets are not allowed.",
                "Participation certificates will be provided.",
                "The event consists of four rounds with eliminations after each round.",
                "Level-1: Logo lookup.",
                "Level-2: Tricky Trivia -> Identify the technology, personality, Name by tagline.",
                "Level-3: EYE SPY.",
                "Level-4: Treasure Trek."
              ],
            Coordinator1: "SAHANA M",
            Coordinator1_ph : "+91-9481720838",
            Coordinator2: "POOJA P",
            Coordinator2_ph : "+91-6366470763",
            form : "https://forms.gle/kxRxiEm5MLsTZh2N6",
           },
             {
               id: 6,
               title: "E-SPORTS",
               price: "200",
               img: game,
               description: "Play to Win: Unleash Your Inner Champion , competitive spirit and excellence in gaming.",
               Rules : [
                "Each team consists of two members.",
                "New Id's are not allowed",
                "We will not be provided Internet connection from our side",
                "All map should be downloaded before entering the room.",
                "Hack and any types of malpractice are strictly prohibited and lead to ban the entire team from the tournament.",
                "Team must be ready when called for match.",
                "The team that quit during the match are also not eligible to claim the money back.",
                "The player who has been disqualified for cheating and hacking purpose will be banned from the tournament ",
               ],
              Coordinator1: "DEEPAK B",
              Coordinator1_ph : "+91-7204662895",
              Coordinator2: "SRUJAN KS",
              Coordinator2_ph : "+91-7483183720",
              form : "https://forms.gle/s5u4Aj8HoVY66Gtr9",
             },
          ];

function Events() {
  const [isOpen, setIsOpen] = useState(false);

  const [oid, setid] = useState(0);

  const navigate = useNavigate();

  const[isMobile,setisMobile] = useState(false);
  const[screensize,setscreensize] = useState(window.innerWidth)

  useEffect(() => {
    AOS.init({ duration: 1000 });
    checkmobile()
    setscreensize(window.innerWidth)
  });

const checkmobile =() =>{
  if(window.innerWidth <= 600){
    setisMobile(true)
    setscreensize(window.innerWidth)
  }
  else{
    setisMobile(false)
    setscreensize(window.innerWidth)
    }
}

window.addEventListener('resize',()=>{
  checkmobile()
  setscreensize(window.innerWidth)
})
  useEffect(()=>{
    AOS.init({duration:1000})
})

  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const handleLearnMore = () => {
    setIsOpen(true);
  };
  const Handlesubmit =async (id) => {
    setid(id);
    const clickdata = await data.find((item) => item.id === id)
    navigate(`/eventpage/${id}`, { state: { dataFetched: true, data:  clickdata} });
   };


  return (
    <div  className='p-10 flex flex-col justify-center items-center'>
      
      <h2 className='text-5xl font-thin text-[#49e244] events '>Events</h2>
      <div  className='grid  gap-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        {data.map((res) => (
          <div data-aos={`${isMobile?'fade-in':''}`}  className="cardContainer">
            <div   className="card w-[300px] h-[370px]">
              <p data-aos="fade-in" className="city">{res?.title ? res.title :'Event name'}</p>
              <p data-aos="fade-in" className="weather">Registration fee : &#x20B9;{res?.price ? res.price : '__'}</p>
              <img src={res?.img? res.img:'https://via.placeholder.com/150'} className={`temp w-4/12 ${res.id === 5 || res.id === 2 || res.id === 1 || res.id === 4 || res.id === 3 || res.id === 6 ? '' : 'invert'}`} />
              <p data-aos="fade-in" className='text-[#c5c5c5] p-3 text-center'>
                {res?.description?res.description:''}
              </p>

              <div className="minmaxContainer">
                <div className="min mx-auto *:">
                  <button id="Know-more" className="learn-more" onClick={handleLearnMore}>
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span data-aos="fade-in" className="button-text" onClick={()=>Handlesubmit(res.id)}>Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default Events;