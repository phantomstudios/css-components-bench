import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const SCTest = dynamic(() => import('../../bench/change-css-prop/css-components'), { ssr: false });

  return <SCTest />;
};

export default CreateAndMountComponent;
