console.log('funguju');
// moje předchozí řešení
// const goodbye = (jmeno) => {
//   const closing = document.querySelector('.email__closing');
//   console.log('Pořád funguju??');
//   closing.textContent = `S úctou ${jmeno}`;
// };

// const fillSubject = (subject) => {
//   const emailSubject = document.querySelector('.email__subject');
//   emailSubject.textContent = subject;
// };

// const fillBody = (body, name) => {
//   const emailBody = document.querySelector('.email__body');
//   emailBody.textContent = body;
//   name = goodbye;
// };

// E-mail podruhé
// Pojďme dále rozvinout cvičení s vyplňováním e-mailu z předchozí lekce.

// Vytvořte si repozitář ze šablony cviceni-email a pojmenujte ho email2-zadani.
// Do souboru index.js vložte kód vzorového řešení. Na tomto kódu budeme dále stavět.
const goodbye = (name) => {
  const closingElm = document.querySelector('.email__closing');
  return (closingElm.textContent = 'S pozdravem ' + name);
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

// Všimněte si funkce goodbye, která generuje pozdrav na konec e-mailu. Přidejte alespoň dvě další funkce, kde každá generuje k zadanému jménu jiný typ pozdravu. Například formalGoodbye pro velmi formální pozdravy jako „S uctivou poklonou…“, nebo naopak rudeGoodbye typu „Se měj…“, pokud se chcete rozloučit nevybíravě.
const formalGoodbye = (name) => {
  const closingElm = document.querySelector('.email__closing');
  return (closingElm.textContent = 'S úctou ' + name);
};
const rudeGoodbye = (name) => {
  const closingElm = document.querySelector('.email__closing');
  return (closingElm.textContent = 'Nazdar, ' + name);
};
// Udělejte z funkce fillBody funkci vyššího řádu. Přidejte jí třetí parametr goodbyeFunction, který představuje funkci, pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci fillBody postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.
const fillBody = (body, name, goodbyeFunction) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML = body;
  closingElm.textContent = goodbye(name);
};
// Ukázka použití
// fillSubject('Spam');
// fillBody(
//   'Kupte mycí prostředek, který vám vytře zrak, se slevou 50 %.',
//   rudeGoodbye('Jan Čistý'),
// );
// nebo

fillSubject('Pozvánka na oslavu narozenin');
fillBody(
  'Zítra oslava. 18:00 ve Starý hospodě.',
  'Patrik Veselý',
  rudeGoodbye('Patrik Veselý'),
);

// console.log(
//   fillBody(
//     'Zítra oslava. 18:00 ve Starý hospodě.',
//     'Patrik Veselý',
//     rudeGoodbye,
//   ),
// );
