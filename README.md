# Cat Fact API 🐱
A Node.js + Express API that returns your profile and a random cat fact from [catfact.ninja](https://catfact.ninja/fact).

Dependencies: express, axios, dotenv

Run locally: `git clone https://github.com/Monisola102/cat-fact-api.git && cd cat-fact-api && npm install && echo "PORT=4000" > .env && npm start`

Example output: `{"name":"Oyewole Monisola","email":"monisola@example.com","stack":["Node.js","Express","Axios"],"cat_fact":"Cats sleep for 70% of their lives."}`

GitHub repo: [https://github.com/Monisola102/cat-fact-api](https://github.com/Monisola102/cat-fact-api)  
Author: Oyewole Monisola

## Notes
- Endpoint: GET `/me`
- Returns JSON with profile info and a random cat fact
- Handles API errors and timeouts gracefully
- No authentication required
