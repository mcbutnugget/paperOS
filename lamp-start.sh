#!/bin/bash

echo "done! welcome to paperOS"
.mysql/run-mysqld.sh &
.apache2/run-apache2.sh &

wait
