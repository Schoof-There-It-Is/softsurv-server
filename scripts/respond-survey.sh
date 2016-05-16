#!/bin/sh
curl --include --request PATCH http://localhost:3000/respond/$ID \
--header "Content-Type: application/json" \
--data '{
  "index" : 2

}'
