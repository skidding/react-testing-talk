import { string } from 'prop-types';
import React from 'react';
import { CodeSample } from '../../future-libs/code-sample';
import { Rows, Main } from '../../shared/style/layout';
import { H1, H2 } from '../../shared/style/text';

export function DeclarativeMock({ title, code }) {
  return (
    <Rows>
      <H1>Declarative mocks</H1>
      <H2>{title}</H2>
      <Main>
        <CodeSample code={code} />
      </Main>
    </Rows>
  );
}

DeclarativeMock.propTypes = {
  title: string,
  code: string
};
