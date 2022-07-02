import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  border: solid 3px gray;
  border-radius: 10%;
  height: 700px;
  width: 70%;
`;

export const Scores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  margin: 10px auto;
  border: solid 2px black;
  border-radius: 10%;
  height: 300px;
  width: 30%;
    `

export const Score = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%
    `

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
    `