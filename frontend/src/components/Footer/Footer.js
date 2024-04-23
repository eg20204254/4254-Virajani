import React from "react";
import {Box,FooterContainer,Row,Column,FooterLink,Heading,} from "./FooterStyles.js";
 
const Footer = () => {
    return (
        <Box>
           
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading>Quick Link</Heading>
                        <FooterLink href="#">
                            Home
                        </FooterLink>
                        <FooterLink href="#">
                            Categories
                        </FooterLink>
                        <FooterLink href="#">
                           About
                        </FooterLink>
                        <FooterLink href="#">
                           Contact
                        </FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>Extra Link</Heading>
                        <FooterLink href="#">
                            Cart
                        </FooterLink>
                        <FooterLink href="#">
                            Login
                        </FooterLink>
                        <FooterLink href="#">
                            Register
                        </FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="#">
                        0914526387
                        </FooterLink>
                        <FooterLink href="#">
                        0775238694
                        </FooterLink>
                        <FooterLink href="#">
                          freshcart@gamil.com
                        </FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>Follow us</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Linkedin
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
            <h6><center> Created by Miss.Yasodha Virajani| All Right Reseved</center></h6>
        </Box>
    );
};
export default Footer;