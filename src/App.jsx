import styled from "@emotion/styled"

function App() {
  const name = "Frederick David"
  const Age = 40

  return (
    <Fred>
      Hello {name} {Age}
      <Wrapper>Me</Wrapper>
      <Image />
      <Input placeholder="Enter name" />
      <Button>Submit</Button>
    </Fred>
  )
}

export default App

const Button = styled.button``

const Input = styled.input``
const Image = styled.img``

const Wrapper = styled.div``

const Fred = styled.div`
  width: 100%;
  height: 100vh;
  background-color: lightgray;
  color: black;
  font-size: 40px;
`
