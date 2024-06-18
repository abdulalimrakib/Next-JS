import { Metadata } from 'next';
import React from 'react';

type Props = {
  params: { listId: string };
  title?: string;
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.listId}`,
  };
};

const Page = ({ params }: Props) => {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <h1>Product Id: {params.listId}</h1>
    </main>
  );
};

export default Page;
