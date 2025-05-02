
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MitigationStrategies = () => {
  const strategies = [
    {
      title: "National Policy Framework",
      description: "India's commitment to reduce emissions intensity by 33-35% by 2030 from 2005 levels.",
      actions: [
        "National Action Plan on Climate Change",
        "Perform, Achieve and Trade (PAT) Scheme",
        "Renewable Energy Certificates (REC)"
      ]
    },
    {
      title: "Clean Energy Transition",
      description: "Ambitious renewable energy targets to reduce dependency on coal power generation.",
      actions: [
        "Solar Alliance & 450GW renewable energy goal",
        "Green Hydrogen Mission",
        "Energy efficiency standards for appliances"
      ]
    },
    {
      title: "Sustainable Transportation",
      description: "Shifting to cleaner mobility options to reduce emissions from the transport sector.",
      actions: [
        "National Electric Mobility Mission Plan",
        "FAME (Faster Adoption and Manufacturing of Electric Vehicles)",
        "Metro expansions in major cities"
      ]
    },
    {
      title: "Forest & Land Management",
      description: "Enhancing carbon sinks through forest conservation and afforestation initiatives.",
      actions: [
        "Green India Mission",
        "REDD+ (Reducing Emissions from Deforestation and Forest Degradation)",
        "Joint Forest Management"
      ]
    }
  ];

  return (
    <Card className="w-full shadow-md">
      <CardHeader>
        <CardTitle>National Mitigation Strategies</CardTitle>
        <CardDescription>India's approach to reducing carbon emissions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="text-lg font-medium text-primary mb-2">{strategy.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{strategy.description}</p>
              <ul className="space-y-2">
                {strategy.actions.map((action, actionIndex) => (
                  <li key={actionIndex} className="flex items-start gap-2">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="text-sm">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MitigationStrategies;
