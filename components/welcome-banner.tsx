import { Sparkles, ArrowRight, Target } from "lucide-react";
type WelcomeBannerProps = {
    userName?: string;
    tasks?: string;
    streak?: number;
};
export default function WelcomeBanner({
    userName = "there",
    tasks = 5,
    streak = 12
}: WelcomeBannerProps) {
    return (
        <div className="p-6 space-y-4 border border-border bg-gradient-to-br from-primary/10 via-surface-2 to-app rounded-xl">
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <p className="text-text text-2xl line-clamp-1 font-bold">
                        Hi, {userName}!
                    </p>
                    <Sparkles className="h-6 w-6 animate-float text-primary" />
                </div>
                <p className="text-muted">Ready to crush your goals today?</p>
            </div>
            <div className="flex items-center justify-center gap-3">
                <div className="bg-app w-fit rounded-full px-3 py-1 text-sm font-semibold flex items-center gap-2 ">
                    <Target className="h-4 w-4 text-primary" />
                    <p>{tasks} tasks</p>
                    <p className="text-muted font-normal">for today</p>
                </div>
                <div className="bg-app w-fit rounded-full px-3 py-1 text-sm font-semibold flex items-center gap-2 ">
                    <span className="text-lg">🔥</span>
                    <p>{streak} day streak</p>
                </div>
            </div>
            <button className="flex items-center gap-3 bg-primary shadow-lg shadow-primary/25 py-2 px-4 rounded-lg active:scale-95">
                <span className="text-sm font-medium">Start Focus Session</span>
                <ArrowRight className="h-4 w-4" />
            </button>
        </div>
    );
}
