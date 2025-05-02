
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Badge } from "@/components/ui/badge";

const COLORS = ['#57A009', '#70CC0C', '#8FE616', '#AAEF50', '#C7F48A'];

const initialData = [
  { name: 'Energy', value: 68, measures: [
    'Transition to renewable energy sources like solar and wind',
    'Implement energy efficiency in buildings and industry',
    'Upgrade power grid for better distribution and reduced losses'
  ]},
  { name: 'Agriculture', value: 14, measures: [
    'Adopt sustainable farming practices to reduce methane emissions',
    'Improve irrigation efficiency and water management',
    'Promote agroforestry and crop rotation techniques'
  ]},
  { name: 'Industry', value: 8, measures: [
    'Implement cleaner production technologies',
    'Shift to low-carbon manufacturing processes',
    'Promote circular economy and industrial symbiosis'
  ]},
  { name: 'Waste', value: 6, measures: [
    'Improve waste management systems and recycling',
    'Capture methane from landfills for energy generation',
    'Reduce single-use plastics and promote composting'
  ]},
  { name: 'Transport', value: 4, measures: [
    'Increase electric vehicle adoption with charging infrastructure',
    'Improve public transportation systems',
    'Promote non-motorized transport like cycling and walking'
  ]},
];

const EmissionSourcesPieChart = () => {
  const [selectedSource, setSelectedSource] = useState(initialData[0]);
  
  const handleSourceClick = (data: any) => {
    setSelectedSource(data);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border p-3 rounded-lg shadow-lg">
          <p className="font-medium">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>Emission Sources</CardTitle>
        <CardDescription>Breakdown of carbon emissions by sector in India</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="h-[300px] w-full md:w-1/2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={initialData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                  onClick={handleSourceClick}
                >
                  {initialData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]} 
                      stroke={entry.name === selectedSource.name ? "#000" : "none"}
                      strokeWidth={entry.name === selectedSource.name ? 2 : 0}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="mb-2">
              <Badge variant="outline" className="bg-secondary text-secondary-foreground font-medium px-3 py-1">
                {selectedSource.name} ({selectedSource.value}%)
              </Badge>
            </div>
            <h4 className="text-lg font-medium mb-2">Mitigation Measures</h4>
            <ul className="space-y-2">
              {selectedSource.measures.map((measure, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1 min-w-4">
                    <div className="h-2 w-2 rounded-full bg-green-500 mt-1"></div>
                  </div>
                  <span className="text-sm">{measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmissionSourcesPieChart;
