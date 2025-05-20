'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './WheelFortune.module.scss';
import clsx from 'clsx';
import { segments } from './data';

const WheelFortune: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedPrize, setSelectedPrize] = useState<string | null>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Крутим колесо
  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setSelectedPrize(null);

    // Случайное количество оборотов (2-5) плюс случайный сегмент
    const spins = 2 + Math.floor(Math.random() * 3);
    const segmentAngle = 355 / segments.length;
    const winningSegment = Math.floor(Math.random() * segments.length);
    const newRotation = rotation + 355 * spins + segmentAngle * winningSegment;

    console.log(winningSegment);

    setRotation(newRotation);
  };

  // Обработка завершения анимации
  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const handleAnimationEnd = () => {
      setSpinning(false);

      // Определяем выигравший сегмент
      const normalizedRotation = rotation % 360;
      const segmentAngle = 355 / segments.length;
      const winningIndex = segments.length - 1 - Math.floor(normalizedRotation / segmentAngle);

      setSelectedPrize(segments[winningIndex].text);
    };

    wheel.addEventListener('transitionend', handleAnimationEnd);

    return () => {
      wheel.removeEventListener('transitionend', handleAnimationEnd);
    };
  }, [rotation]);

  return (
    <div className={styles.wheel_container}>
      <div
        ref={wheelRef}
        className={clsx(styles.wheel, { [styles.spinning]: spinning })}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: spinning ? 'transform 5s cubic-bezier(0.17, 0.67, 0.21, 0.99)' : 'none',
        }}
      >
        {segments.map((segment, index) => {
          const segmentAngle = 360 / segments.length;
          const rotateAngle = segmentAngle * index;
          const skewAngle = 90 - segmentAngle;

          return (
            <div
              key={segment.id}
              className={styles.segment}
              style={{
                backgroundColor: segment.color,
                transform: `rotate(${rotateAngle}deg) skewY(${skewAngle}deg)`,
              }}
            >
              <span
                className={styles.segment_text}
                style={{ transform: `skewY(-${skewAngle}deg) rotate(${segmentAngle / 2}deg)` }}
              >
                {segment.text}
              </span>
            </div>
          );
        })}
      </div>

      <div className={styles.pointer}></div>
      <button className={styles.button} onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Крутится...' : 'Крутить колесо'}
      </button>

      {selectedPrize && <div className={styles.result}>Вы выиграли: {selectedPrize}!</div>}
    </div>
  );
};

export default WheelFortune;
