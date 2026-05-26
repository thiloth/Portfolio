import { useEffect, useState } from 'react';

export default function Typing({ words = [], speed = 70, pause = 1400, className = '' }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === '') {
      setDel(false);
      setI((v) => v + 1);
      return;
    }
    const t = setTimeout(
      () => {
        setText((cur) =>
          del ? cur.slice(0, -1) : word.slice(0, cur.length + 1)
        );
      },
      del ? speed / 1.6 : speed
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);

  return (
    <span className={className}>
      <span>{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] -mb-1 bg-current animate-blink align-middle" />
    </span>
  );
}
