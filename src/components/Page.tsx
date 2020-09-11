import React, {FunctionComponent} from 'react';
import {Header, Loader} from 'semantic-ui-react';

type Props = {
  actions?: any;
  className?: string;
  children: any;
  loading?: boolean;
  title: string;
};

export const Page: FunctionComponent<Props> = ({
  actions = null,
  className = '',
  children,
  loading = false,
  title,
}: Props) => {
  return (
    <div className={`${className} page turner`}>
      {(title || actions) && (
        <div className="header turner">
          <div className="title turner">
            {title ? <Header as="h1">{title}</Header> : null}
          </div>

          <div className="loading turner">
            <Loader active={loading} size="small" />
          </div>

          <div className="actions turner">
            {actions ? <div>{actions}</div> : null}
          </div>
        </div>
      )}

      <div className="body turner">
        <div>{children}</div>
      </div>
    </div>
  );
};
