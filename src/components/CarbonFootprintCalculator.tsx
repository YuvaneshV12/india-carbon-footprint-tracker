
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const CarbonFootprintCalculator = () => {
  const [result, setResult] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    electricity: 200, // kWh per month
    fuel: 40, // liters per month
    diet: "mixed", // veg, mixed, meat
    flights: 0, // flights per year
    publicTransport: 5 // trips per week
  });

  const handleCalculate = () => {
    // Simple calculation model
    let total = 0;
    
    // Electricity (kg CO2e per kWh in India avg = 0.82)
    total += formData.electricity * 0.82;
    
    // Fuel (kg CO2e per liter of petrol = 2.31)
    total += formData.fuel * 2.31;
    
    // Diet (monthly emissions in kg CO2e)
    if (formData.diet === "veg") {
      total += 50;
    } else if (formData.diet === "mixed") {
      total += 80;
    } else {
      total += 120;
    }
    
    // Flights (kg CO2e per domestic flight in India avg = 90)
    total += formData.flights * 90;
    
    // Public transport (kg CO2e per trip avg = 0.5)
    total += formData.publicTransport * 0.5 * 4; // 4 weeks in a month
    
    // Set the result (monthly carbon footprint in kg CO2e)
    setResult(total);
    
    toast.success("Carbon footprint calculated!", {
      description: `Your estimated monthly carbon footprint is ${total.toFixed(1)} kg CO₂e.`,
    });
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <Card className="w-full shadow-md" id="calculator">
      <CardHeader>
        <CardTitle>Personal Carbon Footprint Calculator</CardTitle>
        <CardDescription>Estimate your monthly carbon emissions in India</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="electricity">Monthly Electricity Consumption (kWh)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="electricity"
                  min={50}
                  max={800}
                  step={10}
                  value={[formData.electricity]}
                  onValueChange={(value) => handleInputChange("electricity", value[0])}
                  className="flex-1"
                />
                <span className="w-12 text-center">{formData.electricity}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="fuel">Monthly Fuel Consumption (liters)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="fuel"
                  min={0}
                  max={200}
                  step={5}
                  value={[formData.fuel]}
                  onValueChange={(value) => handleInputChange("fuel", value[0])}
                  className="flex-1"
                />
                <span className="w-12 text-center">{formData.fuel}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="diet">Diet Type</Label>
              <Select 
                value={formData.diet} 
                onValueChange={(value) => handleInputChange("diet", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select diet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="veg">Vegetarian</SelectItem>
                  <SelectItem value="mixed">Mixed Diet</SelectItem>
                  <SelectItem value="meat">Meat Heavy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="flights">Flights per Year</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="flights"
                  min={0}
                  max={20}
                  step={1}
                  value={[formData.flights]}
                  onValueChange={(value) => handleInputChange("flights", value[0])}
                  className="flex-1"
                />
                <span className="w-12 text-center">{formData.flights}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="publicTransport">Public Transport Trips per Week</Label>
              <div className="flex items-center gap-4">
                <Slider
                  id="publicTransport"
                  min={0}
                  max={20}
                  step={1}
                  value={[formData.publicTransport]}
                  onValueChange={(value) => handleInputChange("publicTransport", value[0])}
                  className="flex-1"
                />
                <span className="w-12 text-center">{formData.publicTransport}</span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                onClick={handleCalculate} 
                className="w-full gradient-green hover:opacity-90 transition-opacity"
              >
                Calculate My Footprint
              </Button>
              
              {result !== null && (
                <div className="mt-4 p-4 border rounded-md bg-secondary/50">
                  <p className="text-sm font-medium">Your estimated monthly carbon footprint:</p>
                  <p className="text-2xl font-bold">{result.toFixed(1)} kg CO₂e</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result < 100 ? 'Lower than average for India!' : 
                     result < 200 ? 'Close to the Indian average' : 
                     'Higher than the Indian average'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarbonFootprintCalculator;
