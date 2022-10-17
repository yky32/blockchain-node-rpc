import { Injectable } from "@nestjs/common";
import { Client } from "../src/ext";


const litecoinClient = new Client({
  host: "127.0.0.1",
  port: 19443,
  user: "admin",
  pass: "123456",
  timeout: 30000,
  ssl: false
});

@Injectable()
export class LitecoinNodeClient {

  createWallet(accountName: string) {
    let path = ``;
    return new Promise((resolve, reject) => {
      litecoinClient.createWallet(accountName, function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data);
        resolve(data);
      }, path);
    });
  }

  createNewAddress(accountName: string, addressName: string) {
    let path = `/wallet/${accountName}`;
    return new Promise((resolve, reject) => {
      litecoinClient.getNewAddress(addressName, function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data);
        resolve(data);
      }, path);
    });
  }

  generateToAddress(accountName: string, amount: number, address: string) {
    let path = `/wallet/${accountName}`;
    return new Promise((resolve, reject) => {
      litecoinClient.generateToAddress(amount, address, function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data);
        resolve(data);
      }, path);
    });
  }

  getBalance(accountName: string) {
    let path = `/wallet/${accountName}`;
    return new Promise((resolve, reject) => {
      litecoinClient.getBalance(function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data);
        resolve(data);
      }, path);
    });
  }

  listTxnsByAddress(accountName: string, address: string) {
    let path = `/wallet/${accountName}`;
    return new Promise((resolve, reject) => {
      // TODO: will throw error when adding arguments, its abnormal behavior
      // TODO: workaround-> array.filter()
      litecoinClient.listReceivedByAddress(function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data)
        resolve(data.filter(txn => txn.address == address));
      }, path);
    });
  }

  listTxnsById(accountName: string, txId: string) {
    let path = `/wallet/${accountName}`;
    return new Promise((resolve, reject) => {
      litecoinClient.getTransaction(txId, function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data);
        resolve(data);
      }, path);
    });
  }

  sendToAddress(accountName: string, address: string, amount: number) {
    let path = `/wallet/${accountName}`;
    return new Promise((resolve, reject) => {
      litecoinClient.sendToAddress(address, amount, function(err, data) {
        if (err) {
          console.error(err);
          reject(err);
        }
        console.log("data =>", data);
        resolve(data);
      }, path);
    });
  }
}
