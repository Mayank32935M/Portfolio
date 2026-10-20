import React, { useState, useEffect, useCallback } from 'react';
import type { ModalKey } from '../types';
import { KEYBOARD_KEYS } from '../data/portfolioData';
import { CornerDownLeft, Volume2, VolumeX } from 'lucide-react';
import './KeyboardPortfolio.css';

interface KeyboardProps {
  activeModal: ModalKey | null;
  onOpenModal: (key: ModalKey) => void;
  focusedKey: ModalKey;
  setFocusedKey: (key: ModalKey) => void;
}

export const KeyboardPortfolio: React.FC<KeyboardProps> = ({
  activeModal,
  onOpenModal,
  focusedKey,
  setFocusedKey
}) => {
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [pressedKeyId, setPressedKeyId] = useState<string | null>(null);

  // Subtle mechanical typewriter click using Web Audio API
  const playKeyClick = useCallback(() => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(70, audioCtx.currentTime + 0.04);
      
      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
      
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      
      osc.start();
      osc.stop(audioCtx.currentTime + 0.045);
    } catch {
      // AudioContext unavailable or restricted
    }
  }, [soundEnabled]);

  const handleKeyClick = (keyId: ModalKey) => {
    playKeyClick();
    setPressedKeyId(keyId);
    setFocusedKey(keyId);
    setTimeout(() => {
      setPressedKeyId(null);
      onOpenModal(keyId);
    }, 120);
  };

  const handleEnterClick = () => {
    playKeyClick();
    setPressedKeyId('ENTER');
    setTimeout(() => {
      setPressedKeyId(null);
      onOpenModal(focusedKey || 'P');
    }, 120);
  };

  // Physical keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (activeModal !== null) return; // Modal manages its own keys (like ESC)

      const key = e.key.toUpperCase();

      if (key === 'ENTER') {
        e.preventDefault();
        handleEnterClick();
        return;
      }

      if (key === 'P') {
        handleKeyClick('P');
      } else if (key === 'O') {
        // Cycle through O1 (Overview), O2 (Open Source), O3 (Ongoing)
        if (focusedKey === 'O1') handleKeyClick('O2');
        else if (focusedKey === 'O2') handleKeyClick('O3');
        else handleKeyClick('O1');
      } else if (key === 'R') {
        handleKeyClick('R');
      } else if (key === 'T') {
        handleKeyClick('T');
      } else if (key === 'F') {
        handleKeyClick('F');
      } else if (key === 'L') {
        handleKeyClick('L');
      } else if (key === 'I') {
        handleKeyClick('I');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModal, focusedKey, soundEnabled]);

  const row1Keys = KEYBOARD_KEYS.filter((k) => k.row === 1);
  const row2Keys = KEYBOARD_KEYS.filter((k) => k.row === 2);

  const getFocusedLabel = () => {
    const item = KEYBOARD_KEYS.find((k) => k.id === focusedKey);
    return item ? `${item.letter} — ${item.label}` : 'P — Projects';
  };

  return (
    <section id="keyboard-console" className="keyboard-section" aria-label="Interactive PORT/FOLIO Navigation Console">
      <div className="keyboard-chassis">
        {/* Chassis Top Plate Bar */}
        <div className="chassis-header">
          <div className="chassis-indicator">
            <span className="chassis-led active" />
            <span className="chassis-model font-mono">PORT / FOLIO — MODEL 001 // MK-DABAS</span>
          </div>

          <div className="chassis-controls">
            <button
              type="button"
              className={`sound-toggle-btn ${soundEnabled ? 'active' : ''}`}
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? 'Disable mechanical key sound' : 'Enable tactile mechanical key sound'}
              aria-label="Toggle mechanical key audio"
            >
              {soundEnabled ? <Volume2 size={13} /> : <VolumeX size={13} />}
              <span className="font-mono">{soundEnabled ? 'AUDIO ON' : 'AUDIO OFF'}</span>
            </button>
            <div className="chassis-screws">
              <span className="chassis-screw" />
              <span className="chassis-screw" />
            </div>
          </div>
        </div>

        {/* Keybed Container */}
        <div className="keyboard-keybed">
          {/* Row 1: P - O - R - T */}
          <div className="key-row row-1" role="row">
            {row1Keys.map((k) => {
              const isSelected = focusedKey === k.id;
              const isPressed = pressedKeyId === k.id;
              return (
                <button
                  key={k.id}
                  id={`keycap-${k.id}`}
                  type="button"
                  className={`keycap keycap-${k.colorType} ${isSelected ? 'is-focused' : ''} ${
                    isPressed ? 'is-pressed' : ''
                  }`}
                  onClick={() => handleKeyClick(k.id)}
                  onMouseEnter={() => setFocusedKey(k.id)}
                  aria-haspopup="dialog"
                  aria-label={`Key ${k.letter}: ${k.label}`}
                >
                  <div className="keycap-top">
                    <span className="key-letter">{k.letter}</span>
                    <span className="key-sublabel font-mono">{k.label}</span>
                  </div>
                  <div className="keycap-edge" />
                </button>
              );
            })}
          </div>

          {/* Row 2: F - O - L - I - O + ENTER */}
          <div className="key-row row-2" role="row">
            {row2Keys.map((k) => {
              const isSelected = focusedKey === k.id;
              const isPressed = pressedKeyId === k.id;
              return (
                <button
                  key={k.id}
                  id={`keycap-${k.id}`}
                  type="button"
                  className={`keycap keycap-${k.colorType} ${isSelected ? 'is-focused' : ''} ${
                    isPressed ? 'is-pressed' : ''
                  }`}
                  onClick={() => handleKeyClick(k.id)}
                  onMouseEnter={() => setFocusedKey(k.id)}
                  aria-haspopup="dialog"
                  aria-label={`Key ${k.letter}: ${k.label}`}
                >
                  <div className="keycap-top">
                    <span className="key-letter">{k.letter}</span>
                    <span className="key-sublabel font-mono">
                      {k.id === 'O2' ? 'OpenSrc' : k.id === 'O3' ? 'Ongoing' : k.label}
                    </span>
                  </div>
                  <div className="keycap-edge" />
                </button>
              );
            })}

            {/* Enter Key */}
            <button
              id="keycap-enter"
              type="button"
              className={`keycap keycap-enter ${pressedKeyId === 'ENTER' ? 'is-pressed' : ''}`}
              onClick={handleEnterClick}
              aria-label={`Execute Enter: Open ${getFocusedLabel()}`}
              title={`Press Enter to open: ${getFocusedLabel()}`}
            >
              <div className="keycap-top enter-top">
                <div className="enter-symbol-row">
                  <span className="key-letter font-mono">RET</span>
                  <CornerDownLeft size={16} className="enter-icon" />
                </div>
                <span className="enter-sublabel font-mono">ENTER ↵</span>
              </div>
              <div className="keycap-edge enter-edge" />
            </button>
          </div>
        </div>

        {/* Chassis Status Footer Bar */}
        <div className="chassis-footer font-mono">
          <div className="chassis-target">
            <span className="target-label">ACTIVE DESTINATION:</span>
            <span className="target-value">[{getFocusedLabel()}]</span>
          </div>
          <div className="chassis-instructions">
            <span>PRESS KEY OR HIT <kbd className="hint-kbd">ENTER ↵</kbd></span>
          </div>
        </div>
      </div>
    </section>
  );
};
