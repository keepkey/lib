import { HDWallet } from '@keepkey/hdwallet-core'
import { BIP44Params } from '@keepkey/types'

export type BuildDepositTxInput = {
  memo: string
  value: string
  wallet: HDWallet
  gas: string
  fee: string
  bip44Params: BIP44Params
}
