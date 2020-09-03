import React from 'react';
import {Header, Loader} from 'semantic-ui-react';

import './index.css';

type Props = {
  actions?: any;
  className?: string;
  children: any;
  loading?: boolean;
  title: string;
};

export const Page = ({
  actions = null,
  className = '',
  children,
  loading = false,
  title,
}: Props) => {
  return (
    <div className={`${className} page`}>
      {(title || actions) && (
        <div className="header">
          <div className="title">
            {title ? <Header as="h1">{title}</Header> : null}
          </div>

          <div className="loading">
            <Loader active={loading} size="small" />
          </div>

          <div className="actions">{actions ? <div>{actions}</div> : null}</div>
        </div>
      )}

      <div className="body">
        <div>{children}</div>
      </div>
    </div>
  );
};
