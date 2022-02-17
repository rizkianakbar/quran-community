import * as React from 'react';

export const PageSection: React.FC = ({ children }) => {
  return <section className="flex flex-col flex-1 py-14">{children}</section>;
};
