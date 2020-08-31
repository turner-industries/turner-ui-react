import React from 'react';
import {default as SemanticTable} from 'semantic-ui-react';

export const Table = props => {
  return <SemanticTable.Table {...props} sticky={true} />;
};
