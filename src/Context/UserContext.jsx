import React, { useRef, useState, createContext, useEffect } from 'react';
import station from '../Station';

export const datacontext = createContext();

function UserContext({ children }) {
  const audioRef = useRef(new Audio());
  const [Index, setIndex] = useState(0);
  const [PlayingFm, setPlayingFm] = useState(false);

 
  useEffect(() => {
    if (!station[Index]?.URL) return;

   
    if (audioRef.current.src !== station[Index].URL) {
      audioRef.current.src = station[Index].URL;
      audioRef.current.load();
    }

    if (PlayingFm) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log("Audio load ho raha hai ya CORS block hai:", err);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [Index, PlayingFm]);

  function Playfm() {
    setPlayingFm(true);
  }

  function pausefm() {
    setPlayingFm(false);
  }

  function nextfm() {
    setIndex((prev) => (prev + 1) % station.length);
  }

  function prevfm() {
    setIndex((prev) => (prev === 0 ? station.length - 1 : prev - 1));
  }

  const value = {
    audioRef, Playfm, pausefm, PlayingFm, setPlayingFm, nextfm, Index, setIndex, prevfm
  };

  return (
    <datacontext.Provider value={value}>
      {children}
    </datacontext.Provider>
  );
}

export default UserContext;