import React, { ReactChildren } from 'react';

import './Details.css';

interface Props {
  summary: string;
  children: ReactChildren | ReactChildren[];
}

const Details = ({ summary, children }: Props) => (
  <details>
    <summary>{summary}</summary>

    {children}
  </details>
);

export default Details;
