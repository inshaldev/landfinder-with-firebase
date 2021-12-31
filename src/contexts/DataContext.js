import { onAuthStateChanged } from 'firebase/auth';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth, db } from '../firebase';

const Context = createContext();

export const useData = () => {
  return useContext(Context);
};

export const DataContext = ({ children }) => {
  // Fetching Ads & data
  const [ads, setAds] = useState(null);

  useEffect(() => {
    const fetchAds = async () => {
      const adsData = [];
      const ref = collection(db, 'ads');
      const snapshot = await getDocs(ref);

      snapshot.forEach((doc) => {
        adsData.push({ id: doc.id, ...doc.data() });
      });

      setAds(adsData);
    };
    return fetchAds();
  }, []);

  // User functions & data
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsub;
  }, []);

  // Fetch user data
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const ref = doc(db, 'users', user.uid);
        const snapshot = await getDoc(ref);

        setUserData(snapshot.data());
      }
    };
    return fetchUserData();
  }, [user]);

  const value = { ads, user, userData };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
