from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])

class EstimateRequest(BaseModel):
    surface_m2: float
    building_type: str # 'residential', 'commercial'
    finish_quality: str # 'standard', 'premium', 'luxury'

class EstimateResponse(BaseModel):
    estimated_budget: float
    message: str

@router.post("/estimate", response_model=EstimateResponse)
def estimate_budget(request: EstimateRequest):
    # Logique IA/Simulation basique
    base_price_per_m2 = 150000 # CFA par m2 de base

    if request.building_type == 'commercial':
        base_price_per_m2 *= 1.2

    if request.finish_quality == 'premium':
        base_price_per_m2 *= 1.3
    elif request.finish_quality == 'luxury':
        base_price_per_m2 *= 1.6

    total_estimate = base_price_per_m2 * request.surface_m2

    return EstimateResponse(
        estimated_budget=total_estimate,
        message=f"Sur la base de nos algorithmes, pour un projet {request.building_type} de {request.surface_m2}m² avec des finitions {request.finish_quality}, le budget estimatif est de {total_estimate:,.0f} FCFA."
    )
