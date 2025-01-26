import { ScrollArea } from "@/components/ui/scroll-area";

interface Property {
  location: string;
  type: string;
  size: number;
  originalPrice: number;
  currentPrice: number;
}

//    location: "123 Main St, Springfield, IL",
// currentPrice: 500000,
// originalPrice: 400000,
// size: 2000,
// type: "Single Family Residential",
// sqft: 1500,

export function PropertyTable({ data }: { data: Property[] }) {
  return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="min-w-max">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="sticky top-0 bg-card text-left p-4 text-sm font-medium text-gray-400">
                  Location
                </th>
                <th className="sticky top-0 bg-card text-left p-4 text-sm font-medium text-gray-400">
                  Type
                </th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">
                  Sq Ft
                </th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">
                  Purchase Price
                </th>
                <th className="sticky top-0 bg-card text-right p-4 text-sm font-medium text-gray-400">
                  Current Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((property) => (
                <tr
                  key={property.location}
                  className="border-b border-gray-700"
                >
                  <td className="p-4 text-sm ">{property.location}</td>
                  <td className="p-4 text-sm ">{property.type}</td>
                  <td className="p-4 text-sm  text-right">
                    {property.size.toLocaleString()}
                  </td>
                  <td className="p-4 text-sm  text-right">
                    {property.originalPrice.toLocaleString()}
                  </td>
                  <td className="p-4 text-sm  text-right">
                    {property.currentPrice.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ScrollArea>
    </div>
  );
}
