#!/bin/sh
curl --include --request DELETE http://localhost:3000/surveys/$ID \
--header "Authorization: Token token=$TOKEN" \
--header "Content-Type: application/json" \
