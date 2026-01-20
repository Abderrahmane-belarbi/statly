"use client"
import { Sparkles, ArrowRight, Target } from "lucide-react";
type WelcomeBannerProps = {
    userName?: string;
    tasks?: number;
    streak?: number;
};
export default function WelcomeBanner({
    userName = "there",
    tasks = 5,
    streak = 12
}: WelcomeBannerProps) {
const hour = new Date().getHours();

let greeting: string;
let description: string;

if (hour >= 5 && hour < 12) {
  greeting = "Good morning";
  description = "Start your day strong and stay focused";
} else if (hour >= 12 && hour < 17) {
  greeting = "Good afternoon";
  description = "Keep the momentum going";
} else if (hour >= 17 && hour < 21) {
  greeting = "Good evening";
  description = "Wrap things up and finish strong";
} else {
  greeting = "Good night";
  description = "Time to reflect and plan for tomorrow";
}
  
    return (
        <div className="p-6 space-y-4 border border-border bg-gradient-to-br from-primary/10 via-surface-2 to-app rounded-xl">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <p className="text-text text-2xl line-clamp-1 font-bold">
                       {greeting}!
                    </p>
                    <Sparkles className="h-6 w-6 animate-float text-primary" />
                </div>
                <p className="text-muted">{description}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="bg-app rounded-full px-2 py-1 text-xs font-semibold flex items-center gap-2 ">
                    <Target className="h-4 w-4 text-primary" />
                    <p>{tasks} tasks</p>
                    <p className="text-muted font-normal">for today</p>
                </div>
                <div className="bg-app rounded-full px-2 py-1 text-xs font-semibold flex items-center gap-2 ">
                    <span className="text-sm">🔥</span>
                    <p>{streak} day streak</p>
                </div>
            </div>
            <button className="flex items-center gap-3 bg-primary shadow-lg shadow-primary/25 py-2 px-4 rounded-lg active:scale-95"
              onClick={() => alert(hour)}
            >
                <span className="text-sm font-medium">Start Focus Session</span>
                <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
}
