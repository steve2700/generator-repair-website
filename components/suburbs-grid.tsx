// Option 1: Pass the required props when using SuburbsGrid
// In your generator-repairs-near-me/page.tsx, replace line 412:

<SuburbsGrid 
  title="Areas We Service Near You"
  suburbs={[
    "Sandton", "Johannesburg CBD", "Randburg", "Roodepoort",
    "Fourways", "Midrand", "Pretoria East", "Centurion",
    "Pretoria North", "Pretoria West", "Kempton Park", "Boksburg",
    "Benoni", "Germiston", "Edenvale", "Bedfordview",
    "Bryanston", "Rosebank", "Parktown", "Houghton",
    "Melrose", "Illovo", "Hyde Park", "Dunkeld",
    "Craighall", "Northcliff", "Florida", "Honeydew",
    "Douglasdale", "Lonehill", "Sunninghill", "Woodmead"
  ]}
/>

// OR Option 2: Make props optional in SuburbsGrid component
// Update components/suburbs-grid.tsx:

import { MapPin } from "lucide-react"

interface SuburbsGridProps {
  title?: string
  suburbs?: string[]
}

export function SuburbsGrid({ 
  title = "Areas We Service Near You", 
  suburbs = [
    "Sandton", "Johannesburg CBD", "Randburg", "Roodepoort",
    "Fourways", "Midrand", "Pretoria East", "Centurion",
    "Pretoria North", "Pretoria West", "Kempton Park", "Boksburg",
    "Benoni", "Germiston", "Edenvale", "Bedfordview",
    "Bryanston", "Rosebank", "Parktown", "Houghton",
    "Melrose", "Illovo", "Hyde Park", "Dunkeld",
    "Craighall", "Northcliff", "Florida", "Honeydew",
    "Douglasdale", "Lonehill", "Sunninghill", "Woodmead"
  ]
}: SuburbsGridProps) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            {title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {suburbs.map((suburb, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg p-3 text-sm text-center hover:border-primary transition-colors"
              >
                {suburb}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SuburbsGrid
