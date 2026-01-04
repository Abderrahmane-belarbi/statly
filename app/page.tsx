import { Sparkles, ArrowRight, Target } from "lucide-react";

export default function Home() {
    return (
        <div className="max-w-sm m-4 text-text space-y-6">
            <div className="space-y-2">
                <div className="p-6 space-y-4 border border-border bg-surface-2 rounded-xl">
                    <div className="flex items-center gap-2">
                        <p className="text-text text-2xl font-bold text-center">
                            Good morning, Doe!
                        </p>
                        <Sparkles className="h-6 w-6 animate-float text-primary" />
                    </div>
                    <p className="text-muted">
                        Ready to crush your goals today?
                    </p>
                    <div className="bg-app w-fit rounded-full px-3 py-1 text-sm font-semibold flex items-center gap-2 ">
                       <Target className="h-4 w-4 text-primary" />
                        <p>6 tasks</p>
                        <p className="text-muted font-normal">for today</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
