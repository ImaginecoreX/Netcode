'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Netcode from '@/public/netcode.svg';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Api';
import ServiceIcon from '@mui/icons-material/Token';
import PortfolioIcon from '@mui/icons-material/Collections';
import TeamIcon from '@mui/icons-material/Groups';
import ContactIcon from '@mui/icons-material/PermContactCalendar';
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'top' ;

interface NavbarProps{
  currentSection: string;
}

const Navbar = ({currentSection}:NavbarProps) => {

  const [position, setPosition] = useState('');
  useEffect(()=>{
    setPosition(currentSection);
  },[currentSection])

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'About', 'Services', 'Portfolio', 'Team','Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 ? <HomeIcon/> :index === 1? <AboutIcon/> : index === 2 ? <ServiceIcon/> :index === 3 ? <PortfolioIcon/> : index === 4 ? <TeamIcon/> : <ContactIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  const [emojiAnime, setEmojiAnime] = useState('🙂');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{

    const handleEmojiChange = void setInterval(()=>{
     
      setCurrentIndex((prev)=> prev + 1);

      if(emojiAnime === '🙂'){
        setEmojiAnime('😁');
      }else if(emojiAnime === '😁'){
          setEmojiAnime('😆');
      }else if(emojiAnime === '😆'){
        setEmojiAnime('🤩');
      }else if(emojiAnime === '🤩'){
        setEmojiAnime('🥳');
      }else if(emojiAnime === '🥳'){
        setEmojiAnime('😉');
      }else if(emojiAnime === '😉'){
        setEmojiAnime('😎');
      }else if(emojiAnime === '😎'){
        setEmojiAnime('🙂');
      }


    }, 2000);

    return clearInterval(handleEmojiChange);
  },[currentIndex]);

  // text-[#005DA7]


  const scrollToSection = (sectionId: string)=>{
    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({
        behavior:"smooth",
        block: 'start',
      });
    }
  }

  return (
    <div className='w-full flex flex-col items-center py-[28px] fixed top-0 backdrop-blur-lg z-50 bg-[#FFFFFF99]'>
      <div className='flex frame-container w-full justify-between items-center'>
        {/* column 1 */}
        <div className='flex items-center gap-[12px]'>
          <div><Image src={Netcode} alt='Netcode' className='' /></div>
          <div className='text-[20px] font-medium text-black text-center'>Netcode</div>
        </div>

        {/* small screen */}
        <div className='mdup:hidden lg:hidden xl:hidden 2xl:hidden'>
          {(['top'] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <div onClick={toggleDrawer(anchor, true)} className='cursor-pointer flex items-center gap-[20px]'> <div className=''><div className='text-[24px]'>{emojiAnime}</div></div><MenuIcon/></div>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>

        {/* column 2 */}
        <div className='flex items-center gap-[30px] nsTsm:hidden'>

          <div className='flex items-center gap-[22px]'>
            <div className={position==='home'?"pb-[5px] border-b-[3px] border-[#0085FF] font-medium":""}><div className='text-[18px] '><a href="#home" onClick={()=>scrollToSection('home')}>Home</a></div></div>
            <div className={position === 'about' ?"pb-[5px] border-b-[3px] border-[#0085FF] font-medium":""} ><div className='text-[18px]'><a href="#about" onClick={()=>scrollToSection('about')}>About</a></div></div>
            <div className={position === 'services' ?"pb-[5px] border-b-[3px] border-[#0085FF] font-medium":""}><div className='text-[18px]'><a href="#services" onClick={()=>scrollToSection('services')}>Services</a></div></div>
            <div className={position === 'portfolio' ?"pb-[5px] border-b-[3px] border-[#0085FF] font-medium":""}><div className='text-[18px]'><a href="#portfolio" onClick={()=>scrollToSection('portfolio')}>Portfolio</a></div></div>
            <div className={position === 'team' ?"pb-[5px] border-b-[3px] border-[#0085FF] font-medium":""}><div className='text-[18px]'><a href="#team" onClick={()=>scrollToSection('team')}>Team</a></div></div>
            <div className={position === 'contact' ?"pb-[5px] border-b-[3px] border-[#0085FF] font-medium":""}><div className='text-[18px]'><a href="#contact" onClick={()=>scrollToSection('contact')}>Contact</a></div></div>
            <div className=''><div className='text-[24px]'>{emojiAnime}</div></div>
          </div>
          {/* <div className='bg-black w-[55px] h-[32px] rounded-full flex items-center box-border px-[8px]' ><Image src={lightMode} alt='Theme' className='w-[18px] h-[18px]' /></div> */}

        </div>
      </div>
    </div>
  )
}

export default Navbar