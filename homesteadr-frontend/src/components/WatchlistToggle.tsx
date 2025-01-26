import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
 
export function WatchlistToggle() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="watchlist-mode" />
      <Label htmlFor="airplane-mode">Watchlist</Label>
    </div>
  )
}