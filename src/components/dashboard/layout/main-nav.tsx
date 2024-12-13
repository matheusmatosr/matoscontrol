'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import { usePopover } from '@/hooks/use-popover';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';
import { Logo } from '@/components/core/logo';
import { paths } from '@/paths';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const userPopover = usePopover<HTMLDivElement>();
  const pathname = usePathname();

  const navLinks = [
    { href: paths.dashboard.overview, label: 'Visão geral' },
    { href: paths.dashboard.customers, label: 'Clientes' },
    { href: paths.dashboard.account, label: 'Conta' },
  ];

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid var(--mui-palette-divider)',
          backgroundColor: 'var(--mui-palette-neutral-950)',
          position: 'sticky',
          top: 0,
          zIndex: 'var(--mui-zIndex-appBar)',
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 2 }}
        >
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
            <Box component={Link} href={paths.home} sx={{ display: 'inline-flex', textDecoration: 'none' }}>
              <Logo color="light" height={32} width={122} />
              <span style={{ color: '#B0BEC5', marginLeft: '-30px', fontSize: '20px' }}>Matos</span>
              <span style={{ color: '#ffffff', fontSize: '20px' }}>Control</span>
            </Box>
          </Box>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 4,
              display: { xs: 'none', lg: 'flex' },
              color: '#ffffff',
              fontFamily: 'inherit',
              textAlign: 'center',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  position: 'relative',
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#ffffff',
                    }}
                  />
                )}
              </Link>
            ))}
          </Stack>

          <Stack sx={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1 }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { xs: 'flex', lg: 'none' }, marginRight: 'auto' }}
            >
              <Avatar src="/assets/menu.svg" />
            </IconButton>
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="/assets/avatar.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
