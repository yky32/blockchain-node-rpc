docker run -itd --restart=unless-stopped -p 19443:19443 -p 19444:19444 ltc/litecoin:v0.18.1 -regtest=1 -server=1 -rpcuser=admin -rpcpassword=123456 -txindex=1 -paytxfee=0.00005 -rpcport=19443 -rpcallowip=0.0.0.0/0 -port=19444 -rpcbind=0.0.0.0:19443



## 创建地址 getnewaddress
```bash
curl --user admin:123456 --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getnewaddress", "params": ["test2"] }' -H 'content-type: text/plain;' http://127.0.0.1:19443

QiufNxo8yBPtrdYxgZsw1ek8ZACL4ooYtT
```

## 出块 generatetoaddress
```bash
curl --user admin:123456 --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "generatetoaddress", "params": [6,"QiufNxo8yBPtrdYxgZsw1ek8ZACL4ooYtT"] }' -H 'content-type: text/plain;' http://127.0.0.1:19443


{"result":["4c29b999c747fd99153173fcc8830d8da67f4698b6a1e1767abe25a9d4809e91","7689e052fb77575d7c7fd81e4a9797a758cc4e5a6f1e0d262b22f30cc336c4d4","4f1cab77c1724ff7558476e9d56cb340744aa77ecf903303f4fa802f19999126","e1b578d476d8c550a5423bd0450d8c4e0f35b8ad70ab534741f28f446b482d70","a9b025aaed98d9d7f07d11b50260f6fcf43e744631e07be25361457ce5aac345","81840a0cdb5f25467a5e72e492eea736d90d7a135b2294518644f32aabfba204"],"error":null,"id":"curltest"}
```

## 获取最新区块高度 getblockcount
```bash
curl --user admin:123456 --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getblockcount", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:19443


{"result":6,"error":null,"id":"curltest"}
```



## 显示bch钱包中所有地址余额 listaddressgroupings
```bash
curl --user admin:123456 --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listaddressgroupings", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:19443


{"result":[[["QiufNxo8yBPtrdYxgZsw1ek8ZACL4ooYtT",0.00000000,"test2"]]],"error":null,"id":"curltest"}
```

## 发送金额至指定地址 sendtoaddress
```bash
curl --user admin:123456 --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["Qg3o1dH1NhG47rYboni3ZxwLsGnSNn7eyY",11] }' -H 'content-type: text/plain;' http://127.0.0.1:19443


{"result":null,"error":{"code":-6,"message":"Insufficient funds"},"id":"curltest"}
```

## 查询未花费输出 listunspent
```bash
curl --user admin:123456 --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listunspent", "params": [1, 9999999, ["QiufNxo8yBPtrdYxgZsw1ek8ZACL4ooYtT"]] }' -H 'content-type: text/plain;' http://127.0.0.1:19443
```