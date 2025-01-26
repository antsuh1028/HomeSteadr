import { ScrollArea } from "@/components/ui/scroll-area"

interface Property {
  name: string
  location: string
  type: string
  sqFt: number
  purchasePrice: number
  value: number
}

export function PropertyTable({ data }: { data: Property[] }) {
  return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="min-w-max">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="sticky top-0 bg-card text-left p-4 text-sm font-medium text-gray-400">Property</th>
                <th className="sticky top-0 bg-card text-left p-4 text-sm font-medium text-gray-400">Location</th>
                <th className="sticky top-0 bg-card text-left p-4 text-sm font-medium text-gray-400">Type</th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">Sq Ft</th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">Value</th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">Purchase Price</th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">Current Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((property) => (
                <tr key={property.name} className="border-b border-gray-700">
                  <td className="p-4 text-sm text-white">{property.name}</td>
                  <td className="p-4 text-sm text-gray-300">{property.location}</td>
                  <td className="p-4 text-sm text-gray-300">{property.type}</td>
                  <td className="p-4 text-sm text-gray-300 text-right">{property.sqFt.toLocaleString()}</td>
                  <td className="p-4 text-sm text-gray-300 text-right">{property.value}</td>
                  <td className="p-4 text-sm text-gray-300 text-right">{property.purchasePrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </div>
  )
}

