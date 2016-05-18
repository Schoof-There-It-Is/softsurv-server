#!/bin/sh
curl --include --request POST http://localhost:3000/surveys \
 --header "Content-Type: application/json" \
 --header "Authorization: Token token=$TOKEN" \
 --data '{
   "survey": {
     "question": "What a good example am I?",
     "options": [
     {
       "text": "question text",
       "votes": 0
     },
     {
       "text": "question text1",
       "votes": 1
     },
     {
       "text": "question text2",
       "votes": 2
     },
     {
       "text": "question text3",
       "votes": 3
     }
    ]

   }

 }'
