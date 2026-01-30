import { useEffect, useState } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
}

export function TextScramble({ text, className = '', speed = 30 }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iteration += 0.5;

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isHovering, text, speed]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
}
