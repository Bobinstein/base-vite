import { TurboFactory } from "@ardrive/turbo-sdk/web";

export default async function doTheTurbo() {
  console.log(import.meta.env.VITE_JWK);

  const jwk = JSON.parse(import.meta.env.VITE_JWK);

  const turbo = TurboFactory.authenticated({
    privateKey: jwk,
  });

  console.log("turbo: ", turbo);
  const currencies = await turbo.getSupportedCurrencies();
  console.log(currencies);

  const approvals = await turbo.getCreditShareApprovals({
    userAddress: "cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q",
  });
  console.log(approvals);

  // const reply = await turbo.shareCredits({
  //   approvedAddress: 'cF0H0SKdnaDTqWKY9iJKBktTpdEWgb3GnlndE7ABv0Q',
  //   approvedWincAmount: 0.001,
  //   expiresBySeconds: 3600
  // })
  // console.log(reply)

  const balance = await turbo.getBalance();
  console.log(balance);

  const blob = new Blob(["Hello, world!"], { type: "text/plain" });

  // Get the ReadableStream
  const readableStream = blob.stream();

  // Use the stream
  const reader = readableStream.getReader();

  reader.read().then(({ value, done }) => {
    if (!done) {
      console.log("Streamed data:", new TextDecoder().decode(value)); // Logs "Hello, world!"
    }
  });
}
