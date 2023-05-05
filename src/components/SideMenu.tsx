// components/SideMenu.tsx
import React, { useState } from 'react';
import { styled } from '@stitches/react';
import { Avatar, Text } from '@nextui-org/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLineLeft,
  ArrowLineRight,
  CaretDown,
  File,
  Gear,
  NoteBlank,
  PlusSquare,
  SignOut,
} from '@phosphor-icons/react';
import { Dropdown } from '@nextui-org/react';
import { useGlobalState } from '@/context/Store';

const CollapseButton = styled('button', {
  top: 0,
  right: 0,
  zIndex: 1,
  background: 'transparent',

  variants: {
    isOpen: {
      true: {
        background: '$grayMenu !important',
        padding: '0.25rem',

        svg: {
          color: '$lightgray !important',
        },
      },
      false: {
        width: 50,
      },
    },
  },
});

const SideMenuStyled = styled(motion.div, {
  gridArea: 'sidemenu',
  overflow: 'hidden',
  position: 'sticky',
  top: 60,
  display: 'grid',
  gridTemplateRows: 'auto auto 1fr auto',
  width: '340px',
  height: '90vh',
  backgroundColor: '$white',
  overflowY: 'auto',
  borderRight: '1px solid $border',
  borderRadius: 8,
  marginLeft: 20,
  boxShadow:
    'rgba(31, 34, 37, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.02) -2px 2px 8px, rgba(0, 0, 0, 0.04) -2px -2px 24px',

  hr: {
    border: 0,
    height: 2,
    background: '$border',
  },

  ul: {
    display: 'grid',
    gap: 6,
    gridTemplateRows: 'auto auto 1fr',
    padding: '0.5rem',
    margin: 0,

    li: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 6,
      alignItems: 'center',
      transition: '0.2s all ease-in-out',
      cursor: 'pointer',
      padding: '0.25rem 0.5rem',
      margin: 0,
      borderRadius: 4,

      '&:hover': {
        background: '$hover',
      },
    },
  },
});

const SideMenuHeader = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  gap: 8,
  padding: '0.75rem',
  alignItems: 'center',
});

const sideMenuVariants = {
  open: { width: '280px' },
  closed: { width: '50px' },
};

const SideMenu = () => {
  const isSideMenuOpen = useGlobalState(state => state.isSideMenuOpen);
  const toggleSideMenu = useGlobalState(state => state.toggleSideMenu);

  const toggleMenu = () => {
    toggleSideMenu();
  };

  return (
    <AnimatePresence>
      <SideMenuStyled
        initial={false}
        animate={isSideMenuOpen ? 'open' : 'closed'}
        variants={sideMenuVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <SideMenuHeader>
          <Avatar
            squared
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            zoomed
          />
          {isSideMenuOpen && (
            <>
              <Text b size="$md">
                Joao
              </Text>
              <Dropdown>
                <Dropdown.Button
                  style={{ borderRadius: '4' }}
                  size="md"
                  color="$grayMenu"
                  icon={<CaretDown size={18} color="$grayMenu" />}
                ></Dropdown.Button>

                <Dropdown.Menu color="secondary" aria-label="Actions">
                  <Dropdown.Item
                    key="new"
                    icon={
                      <NoteBlank size={18} weight="duotone" color="purple" />
                    }
                  >
                    New Page
                  </Dropdown.Item>
                  <Dropdown.Item
                    withDivider
                    key="delete"
                    color="error"
                    icon={<SignOut weight="duotone" color="red" />}
                  >
                    SignOut
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
        </SideMenuHeader>
        <hr />
        {isSideMenuOpen && (
          <ul>
            <li>
              <PlusSquare size={20} weight="duotone" color="purple" />
              <Text color="$textColor" weight="medium">
                New page
              </Text>
            </li>
            <li>
              <File size={20} weight="duotone" />{' '}
              <Text color="$textColor" weight="medium">
                Pages
              </Text>
            </li>
            <hr />
            <li style={{ alignContent: 'end', height: 'fit-content' }}>
              <Gear size={20} weight="duotone" />{' '}
              <Text color="$textColor" weight="medium">
                Settings
              </Text>
            </li>
          </ul>
        )}

        <CollapseButton onClick={toggleMenu} isOpen={isSideMenuOpen}>
          {isSideMenuOpen ? (
            <ArrowLineLeft size={18} color="$gray300" />
          ) : (
            <ArrowLineRight color="$gray300" size={18} />
          )}
        </CollapseButton>
      </SideMenuStyled>
    </AnimatePresence>
  );
};

export default SideMenu;
