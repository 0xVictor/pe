import { globalStyles } from '@/styles/Global'
import type { AppProps } from 'next/app'

import logoImg from "@/assets/pic.jpg"
import { Container, Content, Header, BackButton, Pic, NoteTitle } from '@/styles/pages/app'
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io'

import "@blocknote/core/style.css";


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (

    <Container>
      <Header>
        <BackButton>
          <IoIosArrowBack />
        </BackButton>
        <NoteTitle>
          Personal notes
        </NoteTitle>
        <Pic>
          <Image src={logoImg} alt='logo' />
        </Pic>

      </Header>

      <Content>

        <Component {...pageProps} />
      </Content>
    </Container >
  )
}
