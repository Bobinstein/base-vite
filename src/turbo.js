import { TurboFactory } from '@ardrive/turbo-sdk/web'



const jwk = "replace with jwk"

export default async function doTheTurbo(){
  const turbo = TurboFactory.authenticated({
    privateKey: jwk
  })

  console.log('turbo: ', turbo)
  const currencies = await turbo.getSupportedCurrencies()
  console.log(currencies)

  const approvals = await turbo.getCreditShareApprovals({
    userAddress: "cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q"
  })
  console.log(approvals)

  // const reply = await turbo.shareCredits({
  //   approvedAddress: 'cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q',
  //   approvedWincAmount: 0.001,
  //   expiresBySeconds: 3600
  // })
  // console.log(reply)

  const balance = await turbo.getBalance()
  console.log(balance)
}