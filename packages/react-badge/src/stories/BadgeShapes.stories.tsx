import * as React from 'react';
// https://github.com/microsoft/fluentui/pull/18695#issuecomment-868432982
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Badge } from '@fluentui/react-badge';

export const Shapes = () => {
  return (
    <>
      <Badge shape="square" />
      <Badge shape="rounded" />
      <Badge shape="circular" />
    </>
  );
};

Shapes.parameters = {
  docs: {
    description: {
      story: 'A badge can have `square`, `rounded` or `circular` shape. The default is `circular`.',
    },
  },
};
