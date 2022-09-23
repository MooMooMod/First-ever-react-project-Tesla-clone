import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order online for Touchless delivery</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custon Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

// Awesome ass way to display an image background by creating a div
const Wrap = styled.div`
  width: 100vw; // vw: Full view width
  height: 100vh; // vh: Full view height
  background-size: cover; // Rescales to fit whole image i think
  background-position: center; // Center of image in center of div, otherwise displays from top left and crops anything else
  background-repeat: no-repeat;

  // background: black; // Does nothing since image displayed on top

  // URL for background-image checks PUBLIC folder, so implied ./public/images.... etc
  background-image: url("/images/model-s.jpg"); // Load image, everything previously impacts it

  // background: black; // DOES SOMETHING since declared after image so ON TOP OF PREVIOUS STUFF

  display: flex; // Components now next to each other, text, buttons etc.
  flex-direction: column; // Puts Model S text back in middle but buttons on left of it now
  justify-content: space-between; // VERTICALLY Moves buttons to bottom of screen, still on left tho
  align-items: center; // Horizontally moves buttons to center, text already in middle
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center; // Centers vertically and horizontally
`;

const ButtonGroup = styled.div`
  display: flex; // Buttons next to each other now, instead of on top of each other
  margin-bottom: 30px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8); // Main button color
  height: 40px;
  width: 256px;
  color: white; // Makes text white
  display: flex;
  justify-content: center; // Horizontally center TEXT within button
  align-items: center; // Vertically center TEXT within button
  // So button is not yet centered but the text inside of it is
  border-radius: 100px; // Make edges curved
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  // Buttons currently on left of screen, on top of each other
  // So change div they're in (ButtonGroup) to have flex property to put the horizontally next to each other

  cursor: pointer; // When hovering above button, cursor becomes clicky hand
  margin: 8px;
`;

// Inherits all the css of the LeftButton
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black; // Makes text black
`;

const DownArrow = styled.img`
  // margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s; // Animates automatically
`;

const Buttons = styled.div``; // Arrow and buttons become one component so move closer together, else buttons in middle and arrows at bottom
