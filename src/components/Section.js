import React from 'react'
import styled from "styled-components"


function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order online for Touchless delivery</p>
        </ItemText>
        <ButtonGroup>
            <LeftButton>
                Custon Order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>

       

    </Wrap>
  )
}

export default Section

// Awesome ass way to display an image background by creating a div
const Wrap = styled.div` 
    width: 100vw; // vw: Full view width
    height: 100vh; // vh: Full view height
    background-size: cover; // Rescales to fit whole image i think
    background-position: center; // Center of image in center of div, otherwise displays from top left and crops anything else
    background-repeat: no-repeat; 

    // background: black; // Does nothing since image displayed on top
    

    // URL for background-image checks PUBLIC folder, so implied ./public/images.... etc
    background-image: url('/images/model-s.jpg'); // Load image, everything previously impacts it

    // background: black; // DOES SOMETHING since declared after image so ON TOP OF PREVIOUS STUFF

`


const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center; // Centers vertically and horizontally
`


const ButtonGroup = styled.div`

`

const LeftButton = styled.div`
    
    

`

const RightButton = styled(LeftButton)` // Inherits all the css of the LeftButton
    
`


