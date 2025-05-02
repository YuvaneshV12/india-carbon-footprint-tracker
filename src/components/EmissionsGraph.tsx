
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Function to generate simulated real-time data
const generateRealtimeData = (initialData: any[]) => {
  const lastDataPoint = initialData[initialData.length - 1];
  const newValue = lastDataPoint.emissions + (Math.random() * 2 - 1) * 10;
  const newTime = new Date();
  
  // Format time as HH:MM:SS
  const formattedTime = newTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  
  return [...initialData.slice(1), {
    time: formattedTime,
    emissions: Math.max(newValue, 0) // Ensure we don't go below 0
  }];
};

// Initial data (24 hours)
const initialData = Array.from({ length: 24 }, (_, i) => {
  // Create base pattern with morning and evening peaks
  let hour = i;
  let baseEmission = 100;
  
  // Morning peak (7-10 AM)
  if (hour >= 7 && hour <= 10) {
    baseEmission = 180;
  }
  // Evening peak (6-9 PM)
  else if (hour >= 18 && hour <= 21) {
    baseEmission = 200;
  }
  // Night hours (lower emissions)
  else if (hour >= 22 || hour <= 5) {
    baseEmission = 80;
  }
  
  // Add some randomness
  const randomFactor = Math.random() * 30 - 15;
  
  return {
    time: `${hour}:00`,
    emissions: Math.max(baseEmission + randomFactor, 0)
  };
});

const EmissionsGraph = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    // Update data every 3 seconds to simulate real-time
    const timer = setInterval(() => {
      setData(currentData => generateRealtimeData(currentData));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>Live Carbon Emissions</CardTitle>
        <CardDescription>CO₂ equivalent emissions in kilotonnes per hour</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e0e0e0' }}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={{ stroke: '#e0e0e0' }}
                domain={[0, 'auto']}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px' }}
                formatter={(value: number) => [`${value.toFixed(2)} kt`, 'CO₂ Emissions']}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Line 
                type="monotone" 
                dataKey="emissions" 
                stroke="#57A009" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 6, fill: "#70CC0C" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center mt-4">
          <div className="bg-red-500 w-2 h-2 rounded-full animate-pulse mr-2"></div>
          <p className="text-sm text-muted-foreground">Live updating every 3 seconds</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmissionsGraph;
