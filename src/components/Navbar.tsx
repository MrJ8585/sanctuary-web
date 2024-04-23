import { 
    Box, 
    Button, 
    Collapse, 
    Drawer, 
    DrawerBody, 
    DrawerCloseButton, 
    DrawerContent, 
    DrawerHeader, 
    DrawerOverlay, 
    Menu, 
    MenuButton, 
    MenuItem, 
    MenuList, 
    Stack, 
    useDisclosure 
} from '@chakra-ui/react'

import logo from '../assets/logo.png'
import  { HamburgerIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react';

const items = [
    {label: 'Home', link: '/home'},
    {label: 'Esports', link: '/services'},
    {label: 'Proyectos', link: '/proyectos'},
    {label: 'Novelas', link: '/novelas'},
    {label: 'Blog', link: '/blog'},
    {label: 'About', link: '/about'},
    {label: 'Contact', link: '/contact'},
];

const esports = [
    {label: 'LoL', link: '/esports/lol'},
    {label: 'Valorant', link: '/esports/valorant'},
    {label: 'Yu-Gi-Oh!', link: '/esports/csgo'},
    {label: 'Fortnite', link: '/esports/fortnite'},
    {label: 'Halo Infinite', link: '/esports/HaloInfinite'},
]


export default function Navbar() {

    const { isOpen : isOpenDrawer, onOpen : onOpenDrawer, onClose : onCloseDrawer } = useDisclosure();
    const { isOpen : isOpenMenu, onOpen : onOpenMenu, onClose : onCloseMenu } = useDisclosure();
    const { isOpen : isOpenEsports, onToggle : onToggleEsports } = useDisclosure();
    
    
    return(
        <div className='w-[100%] h-[100%] bg-[#2B1A46] '>
            <Box className='flex flex-row justify-between items-center h-[100%] lg:mx-32 p-4'>
                <img src={logo} alt='logo' className='h-[7%] w-[7%]'/>
                <div className='hidden lg:block'>
                    <Stack direction='row' spacing={2}>
                        {items.map((item, index) => (
                            item.label === 'Esports' ? (
                                <Menu key={index} isOpen={isOpenMenu} onClose={onCloseMenu}>
                                    <MenuButton 
                                        variant='outline' 
                                        as={Button} 
                                        onMouseOver={onOpenMenu} 
                                        rightIcon={<ChevronDownIcon />}
                                        textColor='white'
                                        _active={{bg:'#FFC04D'}}
                                        className='bg-[#724999]'
                                    >
                                        {item.label}
                                    </MenuButton>
                                    <MenuList onMouseEnter={onOpenMenu} onMouseLeave={onCloseMenu}>
                                        {esports.map((item, index) => (
                                            <MenuItem key={index}>{item.label}</MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            ) : (
                                <Button 
                                    key={index} 
                                    textColor='white' 
                                    variant='outline' 
                                    className='bg-[#724999]'
                                    _hover={{bg:'#FFC04D'}}
                                >{item.label}</Button>
                            )
                        ))}
                    </Stack>
                </div>
                <div className='block lg:hidden' onClick={onOpenDrawer}>
                    <HamburgerIcon color='white' className='h-6 w-6'/>
                </div>
                <Drawer 
                    placement='right' 
                    isOpen={isOpenDrawer} 
                    onClose={onCloseDrawer} 
                    size='xs'
                    
                >
                    <DrawerOverlay />
                    <DrawerContent backgroundColor='#FFF7FC'>
                        <DrawerHeader />
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Stack direction='column' spacing={4} className='flex w-[100%] items-center justify-center'>
                                {items.map((item, index) => (
                                    item.label === 'Esports' ? (
                                        <Menu key={index} isOpen={isOpenMenu} onClose={onCloseMenu}>
                                            <MenuButton 
                                                variant='outline' 
                                                as={Button} 
                                                onClick={onToggleEsports} 
                                                _focus={{bg:'#FFC04D'}}
                                                className='bg-[#FFA500] w-[100%]'
                                            >
                                                {item.label}
                                            </MenuButton>
                                            <Collapse in={isOpenEsports} className=''>
                                                <Stack direction='column' spacing={2} className=''>
                                                    {esports.map((item, index) => (
                                                        <Button 
                                                            variant='ghost' 
                                                            size={'lg'}
                                                            key={index} 
                                                            className='bg-[#FFD27F] w-[100%]'
                                                        >{item.label}</Button>
                                                    ))}
                                                </Stack>
                                            </Collapse>
                                        </Menu>
                                    ) : (
                                        <Button _focus={{bg:'#FFC04D'}} key={index} variant='outline' className='bg-[#FFA500] w-[100%]'>{item.label}</Button>
                                    )
                                ))}
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </div>
    );
}