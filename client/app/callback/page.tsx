'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token');
    if (token && refreshToken) {
      localStorage.setItem('access_token', token);
      localStorage.setItem('refresh_token', refreshToken);
      router.push('/top-tracks'); 
    }
    else {
      console.warn('No access token found in URL');
      
    }
  }, [router]);

  return <p>Logging in with Spotify...</p>;
}
