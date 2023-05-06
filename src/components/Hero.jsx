import React, { useEffect, useState } from 'react';
import ColosseumCanvas from './ColosseumCanvas';
import ClipLoader from "react-spinners/ClipLoader";

import * as api from "../api";


const Contact = ({ isMobile }) => {
  const contacts = ["Contact", "Connect", "Know"];
  const [index, setIndex] = useState(0);
  let lengthOfContacts = contacts.length;

  const [message, setMessage] = useState({
    name: "",
    comment: ""
  });
  const [loader, setLoader] = useState(false);
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    let changer = setInterval(() => {
      if (index === lengthOfContacts - 1) {
        setIndex(0);
      }
      else {
        setIndex(index + 1);
      }
    }, 3000);

    return () => clearInterval(changer);
  }, [index, lengthOfContacts]);

  const handleSubmit = async (message) => {
    setLoader(true);
    
    api.sendMessage(message);

    setIsSend(true);
    setLoader(false);
  }
  return (
    <div className={`${isMobile ? "row-span-3" : "col-span-6"} grid grid-rows-4 text-black`}>
      <div className='row-span-1 text-center flex justify-center items-center'><p className='titleContact titleTiltAnim'>{contacts[index]} Us</p></div>
      <div className='row-span-3 flex flex-col justify-end items-center'>
        <input className='w-11/12 px-5 py-2 rounded-lg mb-3 text-xs sm:text-md' type="text" placeholder='Full Name' value={message.name} onChange={e => {
          setMessage({...message, name: e.target.value});
          setIsSend(false);
        }} />
        <textarea className='w-11/12 px-5 py-2 rounded-lg mb-3 resize-none text-xs sm:text-md' placeholder='Your Message Here...' cols="30" rows={isMobile ? "5" : "10"} value={message.comment} onChange={e => {
          setMessage({...message, comment: e.target.value});
          setIsSend(false);
        }}></textarea>
        <button onClick={() => !isSend && !loader ? handleSubmit(message) : null} className={`font-extrabold italic text-[16px] text-white w-11/12 rounded-lg py-1 sm:py-3 ${isSend ? "bg-[#51d920]" : "bg-[#9320D9]"} mb-3 tex-sm sm:text-md`}>
          {
            isSend ? "Message Sended" : loader ? (<ClipLoader color={`#ffffff`} loading={loader} size={10} aria-label="Loading Spinner" data-testid="loader" />) : "Send Message"
          }
        </button>
      </div>
    </div>
  )
}



const MainHero = ({ isMobile }) => {
  const description = ["Hologrart Fashion Collection! 💓", "Brand New Genesis Collection"];
  let lengthOfDescs = description.length;
  const [index, setIndex] = useState(0);

  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [isSend, setIsSend] = useState(false);
  
  useEffect(() => {
    
    let slider = setInterval(() => {
      if (index === lengthOfDescs - 1) {
        setIndex(0);
      }
      else {
        setIndex(index + 1);
      }
    }, 15000);
    
    return () => clearInterval(slider);
  }, [index, lengthOfDescs]);

  const submit = async (email) => {
    setLoader(true);
    
    api.sendEmail(email);

    setIsSend(true);
    setLoader(false);
    setEmail("");

    setTimeout(() => {
      setIsSend(false);
    }, 2000);
  }

  return (
    <div className={`${isMobile ? "row-span-3" : "col-span-6"} grid grid-rows-10`}>
      <div className='row-span-5 text-center flex justify-center items-center'><p className='title titleTiltAnim'>Hologrart Metaverse</p></div>
      
      <div className='row-span-3 flex justify-center items-center'>
        {
          description.map((item, i) => {
            let desc = "opacity-100 transition-all duration-100 ease-in";
            if (index === i) {
              desc = "opacity-100 transition-all duration-100 ease-in";
            }
            else {
              desc = "opacity-0 transition-all duration-100 easa-out";
            }

            return (
              <p className={`desc ${desc}`}>{item}</p>
            )
          })
        }
        <p className='desc'>{description[index]}</p>
      </div>

      <div className='row-span-2 flex justify-between items-center px-5'>
        <input type="text" className='text-black p-2 rounded-lg w-full sm:text-md text-sm' placeholder='Insert your email address for playing demo...' value={email} onChange={e => {
          setEmail(e.target.value);
          setIsSend(false);
        }} />
        <button onClick={() => !isSend && !loader ? submit(email) : null} className={`font-extrabold sm:text-md text-sm italic px-0 sm:px-4 py-2 rounded-lg ml-2 min-w-[150px] shadow-md ${isSend ? "bg-[#51d920] shadow-green-500" : "bg-[#9320D9] shadow-purple-500"}`}>
          {
            isSend ? "Done!" : loader ? (<ClipLoader color={`#ffffff`} loading={loader} size={10} aria-label="Loading Spinner" data-testid="loader" />) : "Join Waitlist"
          }  
          
        </button>
      </div>
    </div>
  )
}



const Hero = ({ isContact }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    if (height > width) {
      setIsMobile(true);
    }
  }, [])
  return (
    <div className={`text-white grid ${isMobile ? "grid-rows-5" : "grid-cols-11"} h-full`}>
      {
        !isContact ? (<MainHero isMobile={isMobile} />) : (<Contact isMobile={isMobile} />)
      }
      <div className={`${isMobile ? "row-span-2" : "col-span-5"} flex justify-center items-center`}>
        <ColosseumCanvas isMobile={isMobile} />
      </div>
    </div>
  )
}

export default Hero