// Video Template - Replace ReplitLoadingScene with your scenes

import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { VideoCanvas, type VideoAspectRatio, useVideoAudio, useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export const SCENE_DURATIONS = {
  open: 5000,
  toolkit: 6000,
  experience: 6000,
  projects: 7000,
  close: 6000,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '16:9';
const STARTS = [0, 5, 11, 17, 24];
const SCENES = [Scene1, Scene2, Scene3, Scene4, Scene5];
const KEYS = Object.keys(SCENE_DURATIONS);
type AudioElement = { volume: number; pause: () => void; currentTime: number; play: () => Promise<void> };

export default function VideoTemplate() {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations: SCENE_DURATIONS });
  const { muted, paused } = useVideoAudio();
  const audioRef = useRef<AudioElement | null>(null);
  const lastSceneRef = useRef<string | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.48;
    if (paused) {
      audio.pause();
      return;
    }
    if (lastSceneRef.current !== currentSceneKey) {
      lastSceneRef.current = currentSceneKey;
      const target = STARTS[currentScene] ?? 0;
      if (Math.abs(audio.currentTime - target) > 0.18) audio.currentTime = target;
    }
    audio.play().catch(() => {});
  }, [currentScene, currentSceneKey, muted, paused]);

  const ActiveScene = SCENES[currentScene];
  return (
    <VideoCanvas aspectRatio={VIDEO_ASPECT_RATIO} className="film" style={{ backgroundColor: '#0a0e1a' }}>
      <AnimatePresence mode="sync">
        <ActiveScene key={KEYS[currentScene]} />
      </AnimatePresence>
      <div className="noise" />
      <audio
        ref={(element) => { audioRef.current = element as unknown as AudioElement | null; }}
        src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
        preload="auto"
        autoPlay
        muted={muted}
      />
    </VideoCanvas>
  );
}
