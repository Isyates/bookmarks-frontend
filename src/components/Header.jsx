import styled from 'styled-components';

    const StyledNav = styled.nav`
    display: flex;
      justify-content: space-between;
      background: black;
      color: white;
      padding: 15px;
      font-size: 2em;
    `
    const StyledHeader = styled.header`
    background-color: black;
    color: white;
    padding-top: 10px;
    `
    export default function Header(props) {
    
        return (
            <StyledHeader>
                <h1>Bookmarks</h1>
                <StyledNav>
                    
                </StyledNav>
            </StyledHeader>
        )





}