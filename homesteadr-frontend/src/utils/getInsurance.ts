interface EnvironmentalRisks {
    floodFactor: number;
    fireFactor: number;
    heatFactor: number;
    windFactor: number;
    airFactor: number;
  }
  
  export function calculateInsuranceRisk(environmentalRisks: EnvironmentalRisks): number {
    const weights = {
      flood: 0.3,
      fire: 0.3,
      heat: 0.2,
      wind: 0.15,
      air: 0.05
    };
    
    return (
      environmentalRisks.floodFactor * weights.flood +
      environmentalRisks.fireFactor * weights.fire +
      environmentalRisks.heatFactor * weights.heat +
      environmentalRisks.windFactor * weights.wind +
      environmentalRisks.airFactor * weights.air
    );
  }