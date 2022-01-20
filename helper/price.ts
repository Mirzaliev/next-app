export const price = (price: number) => {
  
  const d = 0;
  const sep = ' ';
  const dec = '.';
  const format_string = '# ₽';

  let r: string | number = parseFloat(String(price));

  const exp10 = Math.pow(10,d);
  r= Math.round(r * exp10) / exp10;
  const rr=Number(r).toFixed(d).toString().split('.');
  const b = rr[0].replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g,"$1"+sep);
  r=(rr[1]?b+ dec +rr[1]:b);
  return format_string.replace('#', String(r));
};