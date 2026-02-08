import { useEffect, useState } from 'react';
import { loadImage } from '../utils/valentine.js';

export default function useLocalImage(id) {
  const [image, setImage] = useState('');

  useEffect(() => {
    if (!id) {
      setImage('');
      return;
    }
    setImage(loadImage(id));
  }, [id]);

  return image;
}
