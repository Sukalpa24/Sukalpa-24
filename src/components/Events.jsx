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
      price: "99",
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
         price: "199",
         img: idea,
         description: "Hack the Future: Collaborate, Create, Conquer , Creativity to shape the future.",
         Rules : [
          "Each team consists of two members.",
          "Duration of hackthon : 24 hours.",
          "Type: Online.",
          "10 problem statement of different domains will be provided." ,
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
           title: "IDEA TANK",
           price: "149",
           img: hack,
           description: "Ideas to Impact: Ignite, Innovate, Inspire , Journey from ideas to solutions." ,
           Rules : [
            "Each team consists of two members.",
            "Event consists of 2 rounds.",
            "Round 1 -> Idea Presentation. ",
            "-->Present your own ideas related to a field of your interest.",
           "-->Time Duration: 6+2 mins.",
            "Teams which are qualified in round 1 will be permitted to round 2.",
            "Round 2 -> Pitch Pool.",
            "-->Selected teams will be given a on spot problem statement, participants should find solutions and present their ideas.",
           "Students from any year are eligible to participate.",
            "More detailed rules will be disclosed before the commencement of event.",
            "Judges decision will be final.",
          ],
          Coordinator1: "CHINMAIE",
          Coordinator1_ph : "+91-8747810019",
          Coordinator2: "SHRAVANA GS",
          Coordinator2_ph : "+91-8762291068",
          form : "https://forms.gle/iFL3JJxNFhYpsQ8D8",
         },
          {
           id: 4,
           title: "TECH MAZE",
           price: "99",
           img: colab,
           description: "Emphasizes collaboration and elevating the coding experience through teamwork.",
           Rules : [ 
              "Each team consists of two members.",
              "Systems will be provided.",
              "The event consists of three rounds with elimination after each round.",
              "Event Co-ordinatiors decision is final.",
              "Round One: Dark logic -> Hide and seek with code (Only C language is allowed).",
              "Round Two: Unify -> strength in team work (C language is allowed).",
              "Round Three: Code Hunt -> Decode the error field codes with pinch of code hunt.",
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
            price: "99",
            img: eye,
            description: "Engineering Excellence: Vision, Precision, Innovative spirit of engineering.",
            Rules : [
                "Each team consists of two members.",
                "Mobiles and Electronic gadgets are not allowed.",
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
               price: "199",
               img: game,
               description: "Play to Win: Unleash Your Inner Champion , competitive spirit and excellence in gaming.",
               Rules : [
" Team Type: Squad",
" Map: All maps should be downloaded.",
" Hacks and Cheats are Prohibited.",
" Player Eligibility: Player must have Minimum Level of 35",
" Disqualification: A player using hacks will lead to team disqualification.",
" No refunds will be provided for disqualified teams or teams that quit in the middle of a match.",
" Support: Network and other support are not provided by the host.",
" Team Leader: Must provide team details with names and IDs.",
" Team Changes: Changing team members must be informed to the host.",
" No team up between players is allowed.",
" Winner: Decided based on points.",
" Further Rules: Will be provided before the match.",
               ],
              Coordinator1: "DEEPAK B",
              Coordinator1_ph : "+91-7204662895",
              Coordinator2: "SRUJAN KS",
              Coordinator2_ph : "+91-7483183720",
              form : "https://forms.gle/35Qza6AMVpsnGU758",
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