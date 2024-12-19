import { useCallback } from 'react';

const useDownloadCV = (cvFileUrl, fileName = 'My_CV.pdf') => {
  const downloadCV = useCallback(() => {
    
    const link = document.createElement('a');
    
    link.href = cvFileUrl;
    
    link.download = fileName;
    
    document.body.appendChild(link);
 
    link.click();
  
    document.body.removeChild(link);
  }, [cvFileUrl, fileName]);

  return downloadCV;
};

export default useDownloadCV;
