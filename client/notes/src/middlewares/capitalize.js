export default function capitalize(str){
    if (typeof str !== 'string') {
    throw new Error('Передано неверное значение. Ожидается строка.');
  }

  // Если строка пустая, возвращаем пустую строку
  if (str.length === 0) {
    return '';
  }

  // Преобразуем первый символ в верхний регистр, а остальные - в нижний регистр
  const firstChar = str.charAt(0).toUpperCase();
  const restOfString = str.slice(1).toLowerCase();

  // Возвращаем преобразованную строку
  return firstChar + restOfString;
}