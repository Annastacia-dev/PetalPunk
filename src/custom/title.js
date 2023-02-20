import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const usePageTitle = (defaultTitle="Waridi") => {
    const router = useRouter();

    const websiteName = "Waridi"
  
    useEffect(() => {
        let pageTitle = defaultTitle;

        if (router.asPath.includes('#')) {
        const hash = router.asPath.split('#')[1].trim();
        pageTitle = hash ? hash : defaultTitle;
        } else {
        pageTitle = decodeURIComponent(router.asPath.split('/').pop().trim());
        }

      const formattedTitle = pageTitle
      .toLocaleLowerCase()
      .replace(/(^|\s)\S/g, (match) => match.toUpperCase());

    if (formattedTitle) {
      document.title = `${formattedTitle} - ${websiteName}`;
    } else {
      document.title = defaultTitle;
    }


  
      
    }, [router.asPath, defaultTitle, websiteName]);
  };


