#!/bin/bash
lci fizzbuzz.lol > actual-output.txt
cmp --silent actual-output.txt expected-output.txt && echo "pass" || echo "fail"
rm actual-output.txt