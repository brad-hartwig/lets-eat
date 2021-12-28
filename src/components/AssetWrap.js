import React from 'react';
import 'styles/AssetWrap.sass';
import Asset from 'components/Asset';

const AssetWrap = () => {
  return (
    <section className='py-5'>
      <div className='container px-4 px-lg-5 mt-5'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 recipe-cards'>
          <Asset />
        </div>
      </div>
    </section>
  );
};

export default AssetWrap;
