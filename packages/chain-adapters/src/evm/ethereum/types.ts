import { HDWallet } from '@keepkey/hdwallet-core'
import { BIP44Params } from '@keepkey/types'

import { Fees } from '../types'

export type BuildCustomTxInput = {
  wallet: HDWallet
  bip44Params: BIP44Params
  to: string
  data: string
  value: string
  gasLimit: string
} & Fees
