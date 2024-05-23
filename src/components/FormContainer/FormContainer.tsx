'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

type FormContainerProps = {
  children?: React.ReactNode;
};

const FormContainer: FC<FormContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/..">
        <ArrowLeft />
      </Link>
      {children}
    </div>
  );
};

export { FormContainer };
