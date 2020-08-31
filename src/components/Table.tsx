import React from 'react';
import {Table as SemanticTable} from 'semantic-ui-react';

export const Table = props => {
  return (
    <SemanticTable 
      className={props.noStickyHeader ? '' : 'sticky'} 
      padded
      singleLine
      stacked
      unstackable
      {...props} 
    />);
};
