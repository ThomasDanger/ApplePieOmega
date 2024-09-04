import { useState, useEffect } from 'react';

const useScrollBackground = () => {
  // Set your desired default color here in RGB format
  const [bgColor, setBgColor] = useState<string>('rgb(215, 192, 208)'); // #D7C0D0 as default
  const [textColor, setTextColor] = useState<string>('rgb(0, 0, 0)'); // Default text color

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScroll;

      const red = Math.min(255, Math.floor(255 * (1 - scrollFraction)));
      const blue = Math.min(255, Math.floor(255 * scrollFraction));
      const green = Math.min(255, Math.floor(255 * (1 - scrollFraction)));

      setBgColor(`rgb(${red}, ${green}, ${blue})`);
      setTextColor(`rgb(${255 - red}, ${255 - green}, ${255 - blue})`); // Example text color change
    };

    // Call handleScroll initially to set the colors based on the initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { bgColor, textColor };
};

export default useScrollBackground;
