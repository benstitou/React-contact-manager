import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ContactListPage from "./pages/contact-list-page";
import ContactFormPage from "./pages/contact-form-page";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };

    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Container>
        <Navbar color="indigo" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>MyContacts</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav className="ml-auto">
              <NavItem active>
                <NavLink className="nav-link" to="/">
                  Contacts List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contacts/new">
                  Add Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>
                    Dropdown
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">Action</DropdownItem>
                    <DropdownItem href="#">Another Action</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                    <DropdownItem href="#">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </NavbarNav>
          </Collapse>
        </Navbar>

        <Route exact path="/" component={ContactListPage} />
        <Route path="/contacts/new" component={ContactFormPage} />
        <Route path="/contacts/edit/:_id" component={ContactFormPage} />
      </Container>
    );
  }
}

export default App;
