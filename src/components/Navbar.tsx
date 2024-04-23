import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import  { HamburgerIcon } from '@chakra-ui/icons'
import { useState } from 'react';

const items = [
    {label: 'Home', link: '/home'},
    {label: 'Esports', link: '/services'},
    {label: 'About', link: '/about'},
    {label: 'Contact', link: '/contact'},
    {label: 'Development', link: '/development'}
];


export default function Navbar() {

    const { isOpen : isOpenDrawer, onOpen : onOpenDrawer, onClose : onCloseDrawer } = useDisclosure();

    return(
        <div className='w-[100%] h-[100%]'>
            <Box className='flex flex-row justify-between items-center h-[10%] lg:mx-32 p-4'>
                <img src={logo} alt='logo' className='h-[7%] w-[7%]'/>
                <div className='hidden lg:block'>
                    <Stack direction='row' spacing={8}>
                        {items.map((item, index) => (
                            <div key={index}>{item.label}</div>
                        ))}
                    </Stack>
                </div>
                <div className='block lg:hidden' onClick={onOpenDrawer}>
                    <HamburgerIcon className='h-6 w-6'/>
                </div>
                <Drawer placement='right' isOpen={isOpenDrawer} onClose={onCloseDrawer} size='xs'>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Stack direction='column' spacing={8} className='p-4'>
                                {items.map((item, index) => (
                                    <div key={index}>{item.label}</div>
                                ))}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </div>
    );
}