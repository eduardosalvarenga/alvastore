import { Box, Stack, HStack, Text, Checkbox } from "@chakra-ui/react";
import { Filter } from "./Filter";
import { FilterName } from "./FilterName";
import { FilterTypeName } from "./FilterTypeName";

export function SideBar() {
    return(
        <Box as="aside" w="60" ml="200" alignSelf="flex-start">
            <Stack spacing="2">
                <Filter />
                <Box align="center">    
                    <FilterTypeName name="TIME" />
                    <FilterName filterName="CLOUD9" />
                    <FilterName filterName="G2 ESPORTS" />
                    <FilterName filterName="FNATIC" />
                    <FilterName filterName="T1" />
                    <FilterName filterName="LIQUID" />
                    <FilterName filterName="MIBR" />
                </Box>
                <Box align="center">
                    <FilterTypeName name="TIPO" />
                    <FilterName filterName="MASCULINO" />
                    <FilterName filterName="FEMININO" />
                    <FilterName filterName="INFATIL" />
                </Box>
                <Box align="center">
                    <FilterTypeName name="TAMANHO" />
                    <FilterName filterName="P" />
                    <FilterName filterName="M" />
                    <FilterName filterName="G" />
                </Box>
                <Box align="center">
                <FilterTypeName name="PREÇO" />
                    <FilterName filterName="ATÉ R$100"/>
                    <FilterName filterName="R$100 - R$200"/>
                    <FilterName filterName="R$200 - R$300"/>
                    <FilterName filterName="R$300 - R$400"/>
                </Box>
            </Stack>
        </Box>
    );
}