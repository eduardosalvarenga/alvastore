import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        body: 'Roboto',
    },
    styles: {
        global: {
            body: {
                bg: 'gray.300',
                color: 'gray.50'
            }
        }
    }
})