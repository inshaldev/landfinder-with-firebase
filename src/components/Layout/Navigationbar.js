import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Login from '../../containers/Login/Login';
import SignUp from '../../containers/SignUp/SignUp';
import { useData } from '../../contexts/DataContext';
import { auth } from '../../firebase';
import '../../stylesheets/styles.css';

export const Navigationbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userData } = useData();
  const [loading, setLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [link, setLink] = useState('/');

  useEffect(() => {
    setLink(location.pathname);
  }, [location]);

  const signOutAcc = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      navigate('/');
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  return (
    <Navbar
      className={link === '/sell' ? 'navbar bg-success' : 'navbar bg-primary'}
      collapseOnSelect
      expand="md"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Link className="navbar-brand" to="/">
          Land<span className="fw-bold">Finder.</span>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link active border-bottom border-2 nav-link-custom'
                  : 'nav-link nav-link-custom'
              }
            >
              Properties
            </NavLink>
          </Nav>
          <div className="d-flex flex-column flex-lg-row gap-3 justify-content-center align-items-start">
            {user && userData ? (
              <>
                <Navbar.Text>{userData.username}</Navbar.Text>
                <Button
                  onClick={signOutAcc}
                  variant="light"
                  className="text-primary"
                  disabled={loading}
                >
                  {loading ? 'Signing Out...' : 'Sign Out'}
                </Button>
              </>
            ) : (
              <>
                <Nav>
                  <NavLink
                    to="/sell"
                    variant="light"
                    className={({ isActive }) =>
                      isActive ? 'nav-link active' : 'nav-link '
                    }
                  >
                    Looking to Sell?
                  </NavLink>
                </Nav>
                {/* <Button
                  variant="outline-light"
                  onClick={() => setShowLogin(true)}
                >
                  Log In
                </Button>
                <Button
                  variant="light"
                  className="text-primary"
                  onClick={() => setShowSignUp(true)}
                >
                  Join as an Agency
                </Button> */}
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <SignUp show={showSignUp} onHide={() => setShowSignUp(false)} />
    </Navbar>
  );
};
