import * as React from 'react';

interface Props {
  className?: string;
}

export const RegisterForm: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-center bg-yellow-100 p-4 rounded-md">
        Register Form here...
      </p>
    </div>
  );
};
