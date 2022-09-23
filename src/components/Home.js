import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S" // Essentially passing parameters, so can reuse Section object
        description="Order online for touchless delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y" // Essentially passing parameters, so can reuse Section object
        description="Order online for touchless delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3" // Essentially passing parameters, so can reuse Section object
        description="Order online for touchless delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X" // Essentially passing parameters, so can reuse Section object
        description="Order online for touchless delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custon Order"
        rightBtnText="Existing inventory"
      />

      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
