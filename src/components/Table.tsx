import React from 'react';
import {Table as SemanticTable} from 'semantic-ui-react';

export const Table = props => {
  return (
    <SemanticTable
      {...props} 
      className={props.noStickyHeader ? `${props.className}` : `${props.className} sticky`} 
      padded={props.noPadded ? false : true}
      singleLine={props.noSingleLine ? false : true}
      stacked={props.noStacked ? false : true}
      unstackable={props.noUnstackable ? false : true}
    />);
};
