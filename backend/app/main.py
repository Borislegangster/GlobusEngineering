from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine
from app.models import cms
from app.api.routers import cms as cms_router
from app.api.routers import chatbot as chatbot_router

# Create database tables
cms.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Globus BTP API",
    description="Backend FastAPI pour la plateforme Globus BTP",
    version="0.1.0",
)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cms_router.router, prefix="/api")
app.include_router(chatbot_router.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Bienvenue sur l'API Globus BTP. Le backend est prêt !"}

@app.get("/health")
def health_check():
    return {"status": "ok"}
