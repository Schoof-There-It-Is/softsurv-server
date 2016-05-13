#!/bin/sh
curl --include --request POST http://localhost:3000/surveys \
 --header "Content-Type: application/json" \
 --header "Authorization: Token token=$TOKEN" \
 --data '{
   "survey": {
     "question": "What a good example am I?",
     "options": ["text"]

   }

 }'
