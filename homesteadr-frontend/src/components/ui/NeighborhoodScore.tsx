"use client"

import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Home, Shield, GraduationCap, Briefcase } from "lucide-react"

const ScoreItem = ({ label, score, icon, max = 10 }) => {
  const percentage = (score / max) * 100
  const getColor = (score: number, max: number) => {
    const ratio = score / max
    if (ratio >= 0.8) return "bg-green-500"
    if (ratio >= 0.6) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {icon}
          <div className="text-sm font-medium">{label}</div>
        </div>
        <div className="text-2xl font-semibold">{score.toFixed(1)}</div>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Progress value={percentage} className="h-2" indicatorClassName={getColor(score, max)} />
          </TooltipTrigger>
          <TooltipContent>
            <p>{`${percentage.toFixed(1)}%`}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

const NeighborhoodScoreCard = ({ title, overallScore, crimeScore, schoolScore, jobScore }) => {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ScoreItem
            label="Overall Score"
            score={overallScore}
            icon={<Home className="w-5 h-5 text-blue-500" />}
            max={100}
          />
          <ScoreItem label="Crime & Safety Score" score={crimeScore} icon={<Shield className="w-5 h-5 text-red-500" />} />
          <ScoreItem
            label="School Quality Score"
            score={schoolScore}
            icon={<GraduationCap className="w-5 h-5 text-green-500" />}
          />
          <ScoreItem
            label="Job Opportunities Score"
            score={jobScore}
            icon={<Briefcase className="w-5 h-5 text-purple-500" />}
          />
        </CardContent>
      </Card>
    )
  }
    

export default NeighborhoodScoreCard

