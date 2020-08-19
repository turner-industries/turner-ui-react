import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";

export const Table = () => {
  return <SemanticTable padded singleLine sticky={true} striped unstackable />;
};
