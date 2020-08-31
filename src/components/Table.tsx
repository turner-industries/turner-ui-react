import React from 'react';
import {default as SemanticTable} from 'semantic-ui-react';

export const Table = ({sticky = true, ...props}) => {
  return <SemanticTable.Table className={sticky ? 'sticky' : ''} {...props} />;
};
