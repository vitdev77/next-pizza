import * as React from 'react';

interface Props {
  className?: string;
}

export const Stories: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};
