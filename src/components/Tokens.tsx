import React from 'react'
import WalletContext, { tokenBalance } from '../context/walletContext'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/core'

const Tokens = () => {
    const { state } = React.useContext(WalletContext)
    return (<Box>
        <Heading size="sm">Wallet Balances</Heading>
        <SimpleGrid columns={2}>
            <Text>Ticker</Text>
            <Text>Balance</Text>
            <Text>AR</Text>
            <Text>{state.balance}</Text>
        </SimpleGrid>
        {state.tokens!.map((token: tokenBalance) => {
            return (
                <SimpleGrid columns={2}>
                    <Text>{token.ticker}</Text>
                    <Text>{token.balance}</Text>
                </SimpleGrid>
            )
        })
        }
    </Box>
    )
}

export default Tokens