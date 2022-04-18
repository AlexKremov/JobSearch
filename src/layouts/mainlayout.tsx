import { Container } from "@mui/material";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;

  a {
    padding-right: 15px;
    font-size: 24px;
    text-decoration: none;
  }
`;

const Profile = styled.a`
margin-left: 70%;
text-decoration: none;
margin-top: -30px;
`
const InputSearch = styled.input`
height: 30px;
`

type Props = {
    children: React.ReactNode
  }


function MainLayout({children}: Props) {
    return (
    <Container>
      <Header>
        <Link to="/">Main</Link>
        <Link to="/resumes">Resumes</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/salaries">Salaries</Link>
        <InputSearch type='search' placeholder='Search...'/>
        <Profile><Link to='/profile'><Avatar
  alt="Remy Sharp"
  src="/static/images/avatar/1.jpg"
  sx={{ width: 56, height: 56 }}
/></Link></Profile>
      </Header>

      {children}
    </Container>
    )
}

export default MainLayout;