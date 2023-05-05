import React from 'react';
import Image from 'next/image';
import {
  HeaderContainer,
  BackButton,
  Pic,
  NoteTitle,
} from '@/styles/pages/app';
import { IoIosArrowBack } from 'react-icons/io';
import logoImg from '@/assets/pic.jpg';
import { Sidebar } from '@phosphor-icons/react';
import { useGlobalState } from '@/context/Store';

const Header: React.FC = () => {
  const toggleSideMenu = useGlobalState(state => state.toggleSideMenu);

  return (
    <HeaderContainer>
      <BackButton onClick={() => toggleSideMenu()}>
        <Sidebar />
      </BackButton>
      <NoteTitle>Personal notes</NoteTitle>
      <Pic>
        <Image src={logoImg} alt="logo" />
      </Pic>
    </HeaderContainer>
  );
};

export default Header;
