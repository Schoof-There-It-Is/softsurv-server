#!/bin/sh
curl --include --request PATCH http://localhost:3000/surveys/$ID \
--header "Authorization: Token token=$TOKEN" \
--header "Content-Type: application/json" \
--data '{
  "survey": {
    "question": "++++ Updated a good example am I?",
    "options": ["text"]

  }

}'
