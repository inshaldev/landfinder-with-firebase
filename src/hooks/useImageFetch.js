import { getDownloadURL, ref } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../firebase';

export const useImageFetch = ({ givenUrl }) => {
  const [sourceUrl, setSourceUrl] = useState('');

  useEffect(() => {
    const imgRef = ref(storage, `/ads_imgs/${givenUrl}`);
    getDownloadURL(imgRef).then((url) => console.log(url));
  }, [givenUrl]);
  return sourceUrl;
};
