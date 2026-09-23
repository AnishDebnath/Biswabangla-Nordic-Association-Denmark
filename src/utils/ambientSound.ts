import backgroundMusic from '../assets/background-music.mp3';

/**
 * Background festive music player
 * Plays looping mp3 with soft fade in/out
 */
class FestiveAudioController {
  private audio: HTMLAudioElement | null = null;
  private isPlaying = false;
  private fadeTimer: number | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  private initAudio() {
    if (!this.audio) {
      this.audio = new Audio(backgroundMusic);
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0;
      this.audio.addEventListener('ended', () => {
        if (this.isPlaying) {
          this.isPlaying = false;
          this.notify();
        }
      });
    }
  }

  private notify() {
    this.listeners.forEach((cb) => {
      try {
        cb(this.isPlaying);
      } catch (e) {
        console.error('Audio listener error:', e);
      }
    });
  }

  public subscribe(cb: (playing: boolean) => void): () => void {
    this.listeners.push(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners = this.listeners.filter((fn) => fn !== cb);
    };
  }

  private fadeTo(target: number, durationMs: number) {
    if (!this.audio) return;
    if (this.fadeTimer) {
      clearInterval(this.fadeTimer);
      this.fadeTimer = null;
    }
    const audio = this.audio;
    const start = audio.volume;
    const steps = Math.max(1, Math.floor(durationMs / 50));
    let step = 0;
    this.fadeTimer = window.setInterval(() => {
      step += 1;
      const t = step / steps;
      audio.volume = Math.min(1, Math.max(0, start + (target - start) * t));
      if (step >= steps) {
        audio.volume = target;
        if (this.fadeTimer) {
          clearInterval(this.fadeTimer);
          this.fadeTimer = null;
        }
      }
    }, 50);
  }

  public play() {
    try {
      this.initAudio();
      if (!this.audio || this.isPlaying) return;

      const attempt = () => {
        if (!this.audio) return;
        this.audio.play()
          .then(() => {
            this.isPlaying = true;
            this.fadeTo(0.55, 2500);
            this.notify();
          })
          .catch((e) => {
            console.warn('Audio play restricted or unavailable:', e);
          });
      };

      if (this.audio.paused) {
        attempt();
      } else {
        this.isPlaying = true;
        this.fadeTo(0.55, 1500);
        this.notify();
      }
    } catch (e) {
      console.warn('Audio play restricted or unavailable:', e);
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    try {
      this.fadeTo(0, 800);
      const audio = this.audio;
      window.setTimeout(() => {
        if (audio && !this.isPlaying) {
          audio.pause();
          audio.currentTime = 0;
        }
      }, 850);
    } catch {
      // Ignored
    }
    this.notify();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const festiveAudio = new FestiveAudioController();
