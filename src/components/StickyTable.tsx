import React from 'react';
import {
  Table as SemanticTable,
  TableProps,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'semantic-ui-react';

type TurnerProps = TableProps & {
  sticky?: boolean;
};

type TableComponent = React.FunctionComponent<TurnerProps> & {
  Body?: typeof TableBody;
  Cell?: typeof TableCell;
  Footer?: typeof TableFooter;
  Header?: typeof TableHeader;
  HeaderCell?: typeof TableHeaderCell;
  Row?: typeof TableRow;
};

export const Table: TableComponent = ({children, ...props}) => {
  return (
    <SemanticTable
      {...props}
      className={`${props.className || ''}${
        props.sticky ? ' sticky turner' : ''
      }`}
    >
      {children}
    </SemanticTable>
  );
};
