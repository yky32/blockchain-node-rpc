FROM buildpack-deps:jessie-curl
RUN wget -O litecoin.tar.gz https://download.litecoin.org/litecoin-0.21.2.1/linux/litecoin-0.21.2.1-x86_64-linux-gnu.tar.gz \
        && tar -xzvf litecoin.tar.gz \
        && cd litecoin-0.21.2.1/bin \
        && mv litecoin-cli litecoin-qt litecoin-tx litecoind litecoin-wallet /usr/local/bin \
        && apt-get update \
        && apt-get install net-tools \
        && cd / \
        && rm -Rfv *litecoin*
EXPOSE 9332 9333 19332 19335 19443  19444
WORKDIR /root/.litecoin
ENTRYPOINT ["litecoind"]
