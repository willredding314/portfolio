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
                        width="120"
                        height="120"
                    />{' '}
                </Navbar.Brand>
                <Navbar.Brand href="/" className="justify-content-center, titleText">
                    Will Redding
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" style={{ padding: "15px" }}>
                    <Nav>
                        <Nav.Link href="/code">
                            <AiOutlineCode /> Code
                        </Nav.Link>
                        <Nav.Link href="/dnd">
                            <FaDiceD20 /> D&D
                        </Nav.Link>
                        <Nav.Link href="/thoughts">
                            <BsPencil /> Thoughts
                        </Nav.Link>
                        <Nav.Link href="/about">
                            <AiFillEye /> About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Banner;