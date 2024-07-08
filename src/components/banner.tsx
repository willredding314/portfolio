import React, { useState } from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './imgs/PortfolioNew.png'
import { Link } from "react-router-dom";
import { AiOutlineCode, AiFillEye } from 'react-icons/ai'
import { FaDiceD20 } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import "./styles.css"

const Banner = () => {
    return (
        <div className="banner">
            <Navbar bg="dark" expand="md" variant="dark" id="banner" style={{ padding: "10px" }} >
                <Navbar.Brand href="/" >
                    <img
                        src={logo}
                        width="150"
                        height="150"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="/" className="justify-content-center title-text">
                    <h1>Will Redding</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" style={{ padding: "15px" }}>
                    <Nav>
                        <Nav.Link className="banner-link" href="/code">
                            <AiOutlineCode size="25"/> Code
                        </Nav.Link>
                        <Nav.Link className="banner-link" href="/dnd">
                            <FaDiceD20 size="25"/> D&D
                        </Nav.Link>
                        <Nav.Link className="banner-link" href="/thoughts">
                            <BsPencil size="25"/> Thoughts
                        </Nav.Link>
                        <Nav.Link className="banner-link" href="/about">
                            <AiFillEye size="25"/> About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Banner;