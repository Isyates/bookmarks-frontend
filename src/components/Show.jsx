import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBtn = styled.button`
background-color: red;
border: black2px;
border-radius: 8px;
margin: 2px;
color: white;
padding: 2px 32px ;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: px;

`

const StyledDiv = styled.div`
color: white;
a: visited{color: greenyellow};
`
export default function Show({bookmark, deleteBookmarks}){


    const removeBookmarks = () => {
        deleteBookmarks(bookmark._id);
      };


return(
    <StyledDiv className="bookmark">
            <a href={`${bookmark.url}`}><h1>{bookmark.title}</h1></a>
            <StyledBtn onClick={removeBookmarks}>delete</StyledBtn>
            <Link to={`/bookmarks/${bookmark._id}`}><StyledBtn>edit</StyledBtn></Link>
        </StyledDiv>
)
}