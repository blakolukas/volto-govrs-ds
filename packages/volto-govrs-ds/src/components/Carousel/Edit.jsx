import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import CarouselView from './View';
import { BlockDataForm } from '@plone/volto/components/manage/Form';
import CarouselSchema from './Schema';

function CarouselEdit({ data, onChangeBlock, block, selected }) {
  const schema = CarouselSchema();

  return (
    <div className="block-editor-carousel">
      <CarouselView data={data} />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
        />
      </SidebarPortal>
    </div>
  );
}

export default CarouselEdit;