import { AvailableItens } from '../components/AvailableItens'
import { Header } from '../components/Header'
import { SideBar } from '../components/SideBar'
import { Flex } from "@chakra-ui/react";
import { useState } from 'react';

export const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Flex>
        <SideBar />
        <AvailableItens search={search} />
      </Flex>
    </>
  )
}

export default Home;