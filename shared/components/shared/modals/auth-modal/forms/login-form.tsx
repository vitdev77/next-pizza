import * as React from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onClose?: VoidFunction;
}

export const LoginForm: React.FC = () => {
  const form = useForm({
    defaultValues: {
      pemail: '',
      password: '',
    },
  });

  return <div></div>;
};
