#!/bin/sh
curl --request POST http://localhost:3000/surveys \
 --header "Content-Type: application/json" \
 --header "Authorization: Token token=$TOKEN" \
 --data '{
   "survey": {
     "question": "Test Survey 2",
     "options": [
     {
       "text": "question text",
       "votes": 0
     },
     {
       "text": "question text1",
       "votes": 2
     },
     {
       "text": "question text2",
       "votes": 5
     },
     {
       "text": "question text3",
       "votes": 1
     }
    ]
   }
 }'
