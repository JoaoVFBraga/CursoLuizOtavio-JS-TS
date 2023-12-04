// Falsy: são valores que avaliam em falso quando necessário
/*
- 0 : Zero
- '' : String vazia
- Null / Undefined
- NaN : Not A Number
*/

// Short-Circuit com &&
/*
 Usando o operador lógico && temos os seguintes resultados:
 - Se algum valor for false:
 O js não executará o resto da linha e retornará o valor false como false
*/
console.log('João' && 0 && 'Maria' && 'JavaScript');

/*
 - Se não houver valor false:
 O js retornará o último valor como true
*/
console.log('João' && '0' && 'Maria' && 'JavaScript');


// Short-Circuit com ||
/*
 Usando o operador lógico || temos os seguintes resultados:
 - Se algum valor for true:
 O js retornará o primeiro valor encontrado como true
*/
console.log(0 || null || 'João' || NaN || 'Victor');

/*
 - Se nenhum valor for true:
 O js retornará o último valor false
*/
console.log(0 || null || '' || NaN || undefined);