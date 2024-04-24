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
import { useNavigate } from 'react-router-dom';

const items = [
    {label: 'Esports', link: '/esports'},
    {label: 'Proyectos', link: '/proyectos'},
    {label: 'Novelas', link: '/novelas'},
    {label: 'Blog', link: '/blog'},
    {label: 'About', link: '/about'},
    {label: 'Contacto', link: '/contacto'},
];

const itemsDrawer = [
    {label: 'Home', link: '/'},
    {label: 'Esports', link: '/esports'},
    {label: 'Proyectos', link: '/proyectos'},
    {label: 'Novelas', link: '/novelas'},
    {label: 'Blog', link: '/blog'},
    {label: 'About', link: '/about'},
    {label: 'Contacto', link: '/contacto'},
];

const esports = [
    {label: 'LoL', link: '/esports/lol'},
    {label: 'Valorant', link: '/esports/valorant'},
    {label: 'Yu-Gi-Oh!', link: '/esports/csgo'},
    {label: 'Fortnite', link: '/esports/fortnite'},
    {label: 'Halo Infinite', link: '/esports/HaloInfinite'},
]


export default function Navbar() {

    const nav = useNavigate();

    const { isOpen : isOpenDrawer, onOpen : onOpenDrawer, onClose : onCloseDrawer } = useDisclosure();
    const { isOpen : isOpenMenu, onOpen : onOpenMenu, onClose : onCloseMenu } = useDisclosure();
    const { isOpen : isOpenEsports, onToggle : onToggleEsports } = useDisclosure();
    
    
    return(
        <div className='w-[100%] h-[100%] bg-[#2B1A46] '>
            <Box className='flex flex-row justify-between items-center h-[100%] lg:mx-32 p-4'>
                <img onClick={() => {nav('/')}} src={logo} alt='logo' className='h-[7%] w-[7%] cursor-pointer'/>
                <div className='hidden lg:block'>
                    <Stack direction='row' spacing={2}>
                        {items.map((item, index) => (
                            item.label === 'Esports' ? (
                                <Menu 
                                    key={index} 
                                    isOpen={isOpenMenu} 
                                    onClose={onCloseMenu}
                                    isLazy
                                >
                                    <MenuButton 
                                        variant='outline' 
                                        as={Button} 
                                        onMouseOver={onOpenMenu} 
                                        rightIcon={<ChevronDownIcon />}
                                        textColor='white'
                                        _active={{bg:'#FFC04D'}}
                                        className='bg-[#724999]'
                                        onClick={() => {nav(item.link)}}
                                    >
                                        {item.label}
                                    </MenuButton>
                                    <MenuList 
                                        onMouseEnter={onOpenMenu} 
                                        onMouseLeave={onCloseMenu}
                                        backgroundColor={'#8B73B1'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        width={'100%'}
                                        display={'flex'}
                                        flexDirection={'column'}
                                    >
                                        {esports.map((item, index) => (
                                            <MenuItem 
                                                backgroundColor='#8B73B1' 
                                                _hover={{bg:'#5C3C7F'}} 
                                                key={index} 
                                                textColor={'white'}
                                                borderRadius={7}
                                                width={'90%'}
                                                justifyContent={'center'}
                                                alignItems={'center'}
                                            >
                                                {item.label}
                                            </MenuItem>
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
                                    onClick={() => {nav(item.link)}}
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
                    <DrawerContent backgroundColor='#2B1A46'>
                        <DrawerHeader />
                        <DrawerCloseButton color={'white'} />
                        <DrawerBody>
                            <Stack direction='column' spacing={2} className='flex w-[100%] items-center justify-center'>
                                {itemsDrawer.map((item, index) => (
                                    item.label === 'Esports' ? (
                                        <Menu key={index} isOpen={isOpenMenu} onClose={onCloseMenu}>
                                            <MenuButton 
                                                variant='outline' 
                                                as={Button} 
                                                onClick={onToggleEsports} 
                                                _focus={{bg:'#FFA500'}}
                                                className='bg-[#FFA500] w-[100%]'
                                            >
                                                {item.label}
                                            </MenuButton>
                                            <Collapse in={isOpenEsports} className=''>
                                                <Stack display={'flex'} direction='column' spacing={2}>
                                                    {esports.map((item, index) => (
                                                        <Button 
                                                            variant='ghost' 
                                                            size={'lg'}
                                                            key={index} 
                                                            className='bg-[#FFD27F] w-[100%]'
                                                            onClick={() => {nav(item.link); onCloseDrawer();}}
                                                        >{item.label}</Button>
                                                    ))}
                                                </Stack>
                                            </Collapse>
                                        </Menu>
                                    ) : (
                                        <Button 
                                            _focus={{bg:'#FFC04D'}} 
                                            key={index} 
                                            variant='outline' 
                                            className='bg-[#FFA500] w-[100%]'
                                            onClick={() => {nav(item.link); onCloseDrawer();}}
                                        >{item.label}</Button>
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