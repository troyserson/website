import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    // redirect to the home page
    router.push('/');
  }, []);
  // useEffect(() => {
  //   router.push('/')
  // });

  return null; // return null to prevent rendering
}