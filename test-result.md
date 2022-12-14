# Create Account
```Text
TA
```

# Create New Address
```text
WY-address
QSbJMSKgtumZukXByJPASKr3QYHocfCTek

VV-address
QPisazh61asD6Qtv5b37wmfXbe5ZCZDJDL
```



listreceivedbyaddress ( minconf include_empty include_watchonly "address_filter" )

List balances by receiving address.

Arguments:
1. minconf              (numeric, optional, default=1) The minimum number of confirmations before payments are included.
2. include_empty        (boolean, optional, default=false) Whether to include addresses that haven't received any payments.
3. include_watchonly    (boolean, optional, default=false) Whether to include watch-only addresses (see 'importaddress').
4. address_filter       (string, optional) If present, only return information on this address.

Result:
[
{
"involvesWatchonly" : true,        (bool) Only returned if imported addresses were involved in transaction
"address" : "receivingaddress",  (string) The receiving address
"amount" : x.xxx,                  (numeric) The total amount in LTC received by the address
"confirmations" : n,               (numeric) The number of confirmations of the most recent transaction included
"label" : "label",               (string) The label of the receiving address. The default label is "".
"txids": [
"txid",                         (string) The ids of transactions received with the address
...
]
}
,...
]

Examples:
> litecoin-cli listreceivedbyaddress
> litecoin-cli listreceivedbyaddress 6 true
> curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaddress", "params": [6, true, true] }' -H 'content-type: text/plain;' http://127.0.0.1:9332/
> curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "listreceivedbyaddress", "params": [6, true, true, "LEr4HnaefWYHbMGXcFp2Po1NPRUeIk8km2"] }' -H 'content-type: text/plain;' http://127.0.0.1:9332/
