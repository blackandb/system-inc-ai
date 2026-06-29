import { WorkflowCard } from "./workflow-card";

const steps = [
  "Idea",
  "Company Name",
  "Brand",
  "Structure",
  "AI Agents",
  "Company",
  "Dashboard",
];

export function Workflow() {
  return (
    <div className="space-y-4">

      {steps.map((step, index) => (
        <WorkflowCard
          key={step}
          title={step}
          step={`Step ${index + 1}`}
        />
      ))}

    </div>
  );
}
