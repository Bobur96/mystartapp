import { Box, Container } from "@chakra-ui/react";
import { FunctionComponent, useState } from 'react';
import { LayoutProps } from "./layout.props";
import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box maxW={"full"} overflow={"hidden"}>
      <Header/>
      <Sidebar/>
      <Box mt={'11vh'} pl={{base: 0, lg: '320px'}} minH={'90vh'} transition={'all .4s ease'}>
        <Container maxW={'container.lg'}>{children}</Container>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Layout;

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
