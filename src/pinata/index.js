import { PinataSDK } from "pinata-web3";
import config from "../../export";

export const pinata = new PinataSDK({
  pinataJwt: config.PINATA_JWT,
});

export default async function IpfsUpload(file) {
  try {
    console.log(file);
    const upload = await pinata.upload.file(file);
    console.log(upload);
    return upload;
  } catch (error) {
    console.log(error);
  }
}
