type Day = { date: string; count: number; level: number };

async function fetchContributions(
  username: string,
  year: number
): Promise<Day[] | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.contributions as Day[];
  } catch {
    return null;
  }
}

const LEVEL_COLORS = [
  "bg-void-2",
  "bg-[rgba(0,229,255,0.18)]",
  "bg-[rgba(0,229,255,0.38)]",
  "bg-[rgba(0,229,255,0.65)]",
  "bg-cyan",
];

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

export default async function GithubActivity({
  username = "aakashjain1992-ship-it",
  year = 2026,
}: {
  username?: string;
  year?: number;
}) {
  const contributions = await fetchContributions(username, year);
  if (!contributions || contributions.length === 0) return null;

  const total = contributions.reduce((sum, d) => sum + d.count, 0);

  const weeks: (Day | null)[][] = [];
  let currentWeek: (Day | null)[] = [];
  const firstDow = new Date(`${contributions[0].date}T00:00:00`).getDay();
  for (let i = 0; i < firstDow; i++) currentWeek.push(null);
  for (const day of contributions) {
    currentWeek.push(day);
    const dow = new Date(`${day.date}T00:00:00`).getDay();
    if (dow === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  let lastMonth = -1;
  const monthLabels = weeks.map((week) => {
    const firstDay = week.find((d) => d !== null);
    if (!firstDay) return "";
    const month = new Date(`${firstDay.date}T00:00:00`).getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      return MONTH_NAMES[month];
    }
    return "";
  });

  return (
    <div>
      <p className="font-mono text-xs text-ink-faint">
        {total.toLocaleString()} contributions in {year}
      </p>
      <div className="mt-3 overflow-x-auto">
        <div className="inline-flex gap-[3px]">
          <div className="flex flex-col gap-[3px] pr-1 pt-4">
            {DAY_LABELS.map((label, i) => (
              <span
                key={i}
                className="h-[11px] font-mono text-[10px] leading-[11px] text-ink-faint"
              >
                {label}
              </span>
            ))}
          </div>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              <span className="block h-4 font-mono text-[10px] leading-4 text-ink-faint">
                {monthLabels[wi]}
              </span>
              {week.map((day, di) => (
                <div
                  key={di}
                  title={
                    day ? `${day.count} contributions on ${day.date}` : undefined
                  }
                  className={`h-[11px] w-[11px] rounded-[2px] ${
                    day ? LEVEL_COLORS[day.level] : "bg-transparent"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-end gap-1.5 font-mono text-[10px] text-ink-faint">
        Less
        {LEVEL_COLORS.map((c, i) => (
          <div key={i} className={`h-[11px] w-[11px] rounded-[2px] ${c}`} />
        ))}
        More
      </div>
    </div>
  );
}
