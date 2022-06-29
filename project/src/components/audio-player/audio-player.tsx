import { useEffect, useRef, useState } from 'react';

type AudioPlayerPropps = {
  autoPlay: boolean;
  src: string;
}

function AudioPlayer({autoPlay, src}:AudioPlayerPropps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if(audioRef.current !==null ) {
      audioRef.current.onloadeddata = () => setIsLoading(false);
    }

    return () => {
      if(audioRef.current !== null) {
        audioRef.current.onloadeddata = null;
        audioRef.current = null;
      }
    };
  }, [src]);

  useEffect(() => {
    if(audioRef.current === null) {
      return;
    }

    if(isPlaying) {
      audioRef.current.play();
      return;
    }

    audioRef.current.pause();
  }, [isPlaying]);

  return(
    <>
      <button className={`track__button track__button--${isPlaying ? 'pause' : 'play'}`}
        type="button"
        disabled={isLoading}
        onClick = {() => setIsPlaying(!isPlaying)}
      />
      <div className="track__status">
        <audio src={src} ref={audioRef} />
      </div>
    </>
  );
}

export default AudioPlayer;
