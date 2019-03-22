module.exports = function getZerosCount(number, base) {
  //http://www.cyberforum.ru/cpp-beginners/thread2192637.html
  //Краткий смысл алгоритма:
  // 1. Берем основание системы счисления N и факторизуем его N = p1^q1 * p2^q2 * ... * pk^qk
  // 2. Для каждого pi^qi делаем следующее:
  //   2.1.Применяем формулу Лежандра для того, чтобы узнать сколько раз pi входит в M!
  // 3. Делим эту величину на qi целочисленным делением. Получаем ci.
  // 4. Минимальное ci полученное в этом цикле - это и есть искомое количество нулей

  let ci = Number.MAX_VALUE;
  let n = base;
  
  //берем основание системы счисления N и факторизуем его: N = p1^q1 * p2^q2 * ... * pk^qk
  for (let pi = 2; pi <= base; pi++) {
    if (n % pi == 0) { 
  
      //вычисляем степень qi первого множителя pi
      let qi = 0;
      while (n % pi == 0) {
        n = n / pi;
        qi++;
      }

      //применяем формулу Лежандра для того, чтобы узнать сколько раз pi входит в number
      let count = 0;
      let x = Math.floor(number / pi);
      while (x > 0) {
        count += x;
        x = Math.floor(x / pi);
      }

      //минимальное ci, полученное в этом цикле - это и есть искомое количество нулей
      ci = Math.min(ci, Math.floor(count / qi))
    }
  }

  return ci;
}
