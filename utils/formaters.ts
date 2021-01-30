export function formatedNumber(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function formatedDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `${day}/${month}/${year} às ${hour}h${minute}m${second}s `;
}

export function formatedCvsDate(date: Date) {
  const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(date);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${ye}-${mo}-${da}`;
}

export function getPercentageBy100k(numberPer100k: number): string {
  return ((numberPer100k / 100000) * 100).toFixed(2);
}
