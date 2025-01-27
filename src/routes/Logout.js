import { Button, Title } from '@patternfly/react-core';
import React from 'react';

import './Logout.scss';

const onButtonClick = (url) => {
  window.location.href = `./${url}`;
};

const Logout = () => (
  <section className="pf-l-page__main-section pf-c-page__main-section land-c-page__logout">
    <Title headingLevel="h1" size="3xl">
      You have logged out.
    </Title>
    <Button variant="link" onClick={() => onButtonClick('')}>
      Take me home
    </Button>
  </section>
);

export default Logout;
