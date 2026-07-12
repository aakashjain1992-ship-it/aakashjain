const CAREER_START = new Date(2016, 4, 1); // May 2016

export function getYearsOfExperience(): number {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const hadAnniversaryThisYear =
    now.getMonth() > CAREER_START.getMonth() ||
    (now.getMonth() === CAREER_START.getMonth() &&
      now.getDate() >= CAREER_START.getDate());
  if (!hadAnniversaryThisYear) years -= 1;
  return years;
}

// "10" only lands exactly on the anniversary date; every other day of that
// year is really "10 years and some months", so show "10+" instead.
export function getYearsOfExperienceLabel(): string {
  const now = new Date();
  const isExactAnniversary =
    now.getMonth() === CAREER_START.getMonth() &&
    now.getDate() === CAREER_START.getDate();
  const years = getYearsOfExperience();
  return isExactAnniversary ? String(years) : `${years}+`;
}

export function getDuration(start: Date, end: Date = new Date()): string {
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  if (end.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
  return parts.length > 0 ? parts.join(", ") : "just started";
}
