#!/usr/bin/env bash

DIR=`dirname "$BASH_SOURCE"`
BIN="${DIR}/../../node_modules/.bin/"
if [[ $DIR = *"node_modules/.bin"* ]]; then
  BIN=$DIR
fi

if [[ $1 == *.ts* ]]
then
    ${BIN}/eslint $1 --fix
fi
${BIN}/prettier --write $1
