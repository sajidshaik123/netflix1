import React from "react";
import { Container, Row, Column, Link, Title ,Text, Break } from "../footer/styles/footer";

export default function Footer({ children, ...restProops}) {

    return <Container {...restProops }> {children} </Container>;

}

Footer.Row = function FooterRow({ children, ...restProops }) {
    return <Row {...restProops}> {children}</Row>;
}

Footer.Column = function FooterColumn({ children, ...restProops }) {
    return <Column {...restProops}> {children}</Column>;
}

Footer.Link = function FooterLink({ children, ...restProops }) {
    return <Link {...restProops}> {children}</Link>;
}

Footer.Title = function FooterTitle({ children, ...restProops }) {
    return <Title {...restProops}> {children}</Title>;
}

Footer.Text = function FooterText({children, ...restProops}) {
    return <Text {...restProops}> {children} </Text>;
}

Footer.Break = function FooterBreak({ children, ...restProops }) {
    return <Break {...restProops}> {children} </Break>
}