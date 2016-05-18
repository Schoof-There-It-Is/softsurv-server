# SOFTSURV API

## Description

SoftSurv is a web application that lets you send out quick, one-question surveys
to your friends. The SoftSurv Api manages communication with the app's NoSQL
database, which stores information about users and surveys. Each survey is
owned by a user (referenced by id), and contains a question (text), and one or
more response options (array of option objects). Each option object contains
option text and a counter for how many respondents have voted for that option.

## Routes

### Available Routes

| Verb   | URI Pattern            | Controller#Action |
| ----   | -----------            | ----------------- |
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out/:id`        | `users#signout`   |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| GET    | `/users`               | `users#index`     |
| GET    | `/users/:id`           | `users#show`      |
| POST   | `/surveys`             | `surveys#create`  |
| GET    | `/surveys`             | `surveys#index`   |
| GET    | `/surveys/:id`         | `surveys#show`    |
| PATCH  | `/surveys/:id`         | `surveys#update`  |
| DELETE | `/surveys/:id`         | `surveys#destroy` |
| PATCH  | `/respond/:id`         | `surveys#respond` |

### Route Descriptions

#### User Routes

Standard RESTful routes for signing up/in/out users. Sign out change
password require authentication tokens.

#### Surveys - create

Requires user token authentication and JSON including survey question
and array of answer options. Request must be in the following format:

```js
{
  "survey": {
    "question": "Am I a good example survey?",
    "options": [
    { "text": "why yes you are",
      "votes": 0 },
    { "text": "no way",
      "votes": 0 },
    { "text": "reply hazy, try again",
      "votes": 0 }
    ]
  }
}
```

Upon successful creation, a unique URL virtual property will be added
to the survey object, paired with the key 'url'.

#### Surveys - index

Requires user token authentication, and if successful will
return JSON of all surveys associated with that user.

#### Surveys - show

Does not require user token authentication. If successful will return
JSON of the survey requested via the id parameter.

#### Surveys - update

Requires user token authentication and JSON of the updated survey. Use
this route with caution, as updating the information of an active
survey could compromise survey validity. To simply update the votes
tally as responses come in, use the Respond route.

#### Surveys - destroy

Requires user token authentication. Deletes the survey with the designated ID, and all information about it.

#### Surveys - respond

Does not require user token authentication. Request must include a
body with JSON designating the which response by array index (0, 1, 2,
etc.) in the following format:

``` js
{ "index" : 2 }
```

If successful will increment the votes count of the identified answer
by 1.

## Links

Deployed Application: < Link to Deployed App >

Deployed API: < Link to Deployed API >

Front-End Repository: <https://github.com/Schoof-There-It-Is/softsurv-client>
