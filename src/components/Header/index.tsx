import { Flex, } from '@chakra-ui/react'
import { Logo } from './Logo';
import { Search } from './Search';
import { ShoppingCartIcon } from './ShoppingCartIcon';

type Search = {
    search?: string;
    setSearch?: any;
}

export function Header( { search, setSearch }: Search) {
    return (
        <Flex as="header" w="100%" maxWidth={1480} h="28" mx="auto" mt="4" px="16" align="center">
            <Logo />
            <Search search={search} setSearch={setSearch}/>
            <ShoppingCartIcon />
        </Flex>
    );
}