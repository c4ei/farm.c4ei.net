import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 1,
    lpSymbol: 'SAWON-BUSD LP',
    lpAddresses: { 21004: '0xe386c51F09d3dA7AE403838F3864317cd3fbaD7B', }, // SAWON-BUSD LP swap.c4ei.net 21004
    tokenSymbol: 'SAWON',
    tokenAddresses: { 21004: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    image: 'sawon-busd',
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'SAWON-C4EI LP',
    lpAddresses: { 21004: '0x987d4aBAFcfaC6e384aCe500B5688F9e824261e9', }, // SAWON-C4EI LP swap.c4ei.net 21004
    tokenSymbol: 'SAWON',
    tokenAddresses: { 21004: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66', }, // SaWonToken
    quoteTokenSymbol: QuoteToken.C4EI,
    quoteTokenAdresses: contracts.wbnb,
    image: 'sawon-klay',
    // isDisplay: 'N',
  },
  {
    pid: 2,
    risk: 1,
    lpSymbol: 'C4EI-BUSD LP',
    lpAddresses: { 21004: '0x45732739B1E47821A625aF3d8F818A1DBf6c1B65', },
    tokenSymbol: 'C4EI',
    tokenAddresses: { 21004: '0x83f7AaE73a80e5Ae7Fa4a4948F1CE90f57c638aa', }, // wbnb (0x83f7AaE73a80e5Ae7Fa4a4948F1CE90f57c638aa) --> wklay ? 
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    // isDisplay: 'N',
  },
  // {
  //   pid: 0,
  //   risk: 5,
  //   lpSymbol: 'SAWON-BUSD LP',
  //   lpAddresses: {
  //     // 97: '',
  //     21004: '0x83267FD68ACA1f0A11f3A89F187534c404d6Aa2c',
  //   },
  //   tokenSymbol: 'SAWON',
  //   tokenAddresses: {
  //     // 97: '',
  //     21004: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'SAWON-C4EI LP',
  //   lpAddresses: {
  //     // 97: '',
  //     21004: '0x05FB813418a1F7190754502Cb3085fAa968F1b70',
  //   },
  //   tokenSymbol: 'SAWON',
  //   tokenAddresses: {
  //     // 97: '',
  //     21004: '0x52D1eC2ed762D7Fb3bE336Ec678569C730B87d66',
  //   },
  //   quoteTokenSymbol: QuoteToken.C4EI,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'C4EI-BUSD LP',
  //   lpAddresses: {
  //     // 97: '',
  //     21004: '0x45732739B1E47821A625aF3d8F818A1DBf6c1B65',
  //   },
  //   tokenSymbol: 'C4EI',
  //   tokenAddresses: {
  //     // 97: '',
  //     21004: '0x83f7AaE73a80e5Ae7Fa4a4948F1CE90f57c638aa',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
