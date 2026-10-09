// Web Audio API ambient historical soundscape
class HistoricalSoundscape {
  private ctx: AudioContext | null = null;
  private isRunning: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];

  public isPlaying(): boolean {
    return this.isRunning;
  }

  public toggle(): boolean {
    if (this.isRunning) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start(): void {
    if (this.isRunning) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // Ethereal Tar/Mugham Root frequencies (Re / D: 146.83 Hz, A: 220 Hz, D: 293.66 Hz, F#: 369.99 Hz)
      const droneFreqs = [146.83, 220.00, 293.66, 440.00];

      this.oscillators = [];

      droneFreqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;

        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
        const gain = this.ctx.createGain();

        // Warm harmonic wave
        osc.type = idx === 0 ? 'sine' : idx === 1 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        // Low-pass filter for warm ancient resonance
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.3 / (idx + 1), this.ctx.currentTime);

        if (panner) {
          panner.pan.setValueAtTime((idx % 2 === 0 ? -0.3 : 0.3), this.ctx.currentTime);
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(panner);
          panner.connect(this.masterGain);
        } else {
          osc.connect(filter);
          filter.connect(gain);
          gain.connect(this.masterGain);
        }

        osc.start();
        this.oscillators.push(osc);
      });

      this.isRunning = true;
    } catch (e) {
      console.warn('AudioContext not allowed or not supported:', e);
    }
  }

  public stop(): void {
    if (!this.isRunning || !this.ctx || !this.masterGain) return;

    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);

      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // Ignore if already disconnected
          }
        });
        this.oscillators = [];
        if (this.ctx && this.ctx.state !== 'closed') {
          this.ctx.close();
        }
        this.ctx = null;
        this.masterGain = null;
        this.isRunning = false;
      }, 1500);
    } catch {
      this.isRunning = false;
    }
  }
}

export const soundscape = new HistoricalSoundscape();
