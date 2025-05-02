
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, Earth, Wind, Thermometer } from 'lucide-react';

const EmissionStatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="shadow-sm">
        <CardContent className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-2">
            <ChartBar className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium">Annual Emissions</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">2.88</span>
            <span className="text-sm text-muted-foreground">billion tonnes CO₂e</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Third largest emitter globally</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-2">
            <Earth className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium">Per Capita</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">2.1</span>
            <span className="text-sm text-muted-foreground">tonnes CO₂e per person</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Below global average of 4.7</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium">Renewable Capacity</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">150</span>
            <span className="text-sm text-muted-foreground">gigawatts</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Target: 450 GW by 2030</p>
        </CardContent>
      </Card>

      <Card className="shadow-sm">
        <CardContent className="flex flex-col p-6">
          <div className="flex items-center gap-2 mb-2">
            <Thermometer className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-medium">Temperature Rise</h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">1.2</span>
            <span className="text-sm text-muted-foreground">°C since pre-industrial</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Goal: Limit to 1.5°C</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmissionStatCards;
