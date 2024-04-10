from typing import Annotated
from fastapi import FastAPI, Header
from fastapi.middleware.cors import CORSMiddleware

from requests import get

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/team/{team_key}/event/{event_key}/matches/")
async def matches(team_key: str, event_key: str, X_TBA_Auth_Key: Annotated[str|None, Header()] = None):
    if X_TBA_Auth_Key is None:
        return {"Error":"No API Key provided"}
    
    ret = get(f"https://thebluealliance.com/api/v3/team/{team_key}/event/{event_key}/matches", headers={"X-TBA-Auth-Key": X_TBA_Auth_Key}).json()

    return ret