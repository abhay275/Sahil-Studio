import React, { createContext, useContext, useState } from 'react';

const InquiryContext = createContext();

export function useInquiry() {
  return useContext(InquiryContext);
}

export function InquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openInquiry = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeInquiry = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <InquiryContext.Provider value={{ isOpen, openInquiry, closeInquiry }}>
      {children}
    </InquiryContext.Provider>
  );
}
