import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, styled } from '@mui/material';

function Fooooter() {
  const Wrapper = styled('section')``;

  const StyledButton = styled(Button)`
    background-color: blue;
    color: white;
  `;

  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <NavLink>
              <StyledButton>Buy Now</StyledButton>
            </NavLink>
          </div>
          
        </div>
      </section>
    </Wrapper>
  );
}

export default Fooooter;
