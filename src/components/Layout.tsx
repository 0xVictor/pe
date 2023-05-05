import { Container, Wrapper, Content } from '@/styles/pages/app';

import SideMenu from '@/components/SideMenu';
import { useSession } from 'next-auth/react';
import Header from './Header';
import { useGlobalState } from '@/context/Store';

export default function Layout({ children }) {
  const { data: session, status } = useSession();
  const user = session?.user;
  const isLoadingUser = status === 'loading';

  const isSideMenuOpen = useGlobalState(state => state.isSideMenuOpen);
  const toggleSideMenu = useGlobalState(state => state.toggleSideMenu);

  if (!user) {
    return (
      <Container style={{ gridTemplateColumns: 'inherit' }}>
        <Content style={{ gridTemplateRows: 'inherit' }}>{children}</Content>
      </Container>
    );
  }

  if (user && !isLoadingUser) {
    return (
      <Container>
        <Header />

        {/* <Wrapper> */}
        <SideMenu />
        <Content>{children}</Content>
        {/* </Wrapper> */}
      </Container>
    );
  }
}
