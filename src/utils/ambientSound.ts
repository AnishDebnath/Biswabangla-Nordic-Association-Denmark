/**
 * Web Audio API based ambient festive sound generator
 * Creates a soothing meditative Indian drone / gentle festive bell harmonics
 */
class FestiveAudioController {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private intervalId: number | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
  }

  private listeners: ((playing: boolean) => void)[] = [];

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

  public play() {
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      if (this.isPlaying) return;

      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.12, this.ctx.currentTime + 3);
      this.gainNode.connect(this.ctx.destination);

      // Harmonious Tanpura / Meditative D & A drone frequencies (D3, A3, D4)
      const baseFreqs = [146.83, 220.0, 293.66, 440.0];
      this.oscillators = [];

      baseFreqs.forEach((freq, idx) => {
        if (!this.ctx || !this.gainNode) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        
        // Use soft sine and warm triangle waveforms
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Gentle subtle detune for authentic shimmer
        osc.detune.setValueAtTime((idx - 1.5) * 3, this.ctx.currentTime);

        oscGain.gain.setValueAtTime(idx === 0 ? 0.35 : 0.2, this.ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.gainNode);
        osc.start();
        this.oscillators.push(osc);
      });

      // Periodic subtle auspicious chime (conch / bell resonance)
      this.intervalId = window.setInterval(() => {
        if (!this.ctx || !this.gainNode || !this.isPlaying) return;
        this.triggerGentleChime();
      }, 7000);

      this.isPlaying = true;
      this.notify();
    } catch (e) {
      console.warn('Audio play restricted or unavailable:', e);
    }
  }

  private triggerGentleChime() {
    if (!this.ctx) return;
    try {
      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      
      chimeOsc.type = 'sine';
      chimeOsc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      chimeOsc.frequency.exponentialRampToValueAtTime(587.33, this.ctx.currentTime + 1.8); // D5

      chimeGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      chimeGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 2.5);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);
      chimeOsc.start();
      chimeOsc.stop(this.ctx.currentTime + 2.6);
    } catch {
      // Ignored
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    try {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      if (this.gainNode && this.ctx) {
        this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
        this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
        setTimeout(() => {
          this.oscillators.forEach(osc => {
            try { osc.stop(); osc.disconnect(); } catch {}
          });
          this.oscillators = [];
        }, 1300);
      }
    } catch {
      // Ignored
    }
    this.isPlaying = false;
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
