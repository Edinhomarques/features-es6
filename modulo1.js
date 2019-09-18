/**
 * Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
 */
class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    isAdmin() {

        return this.admin;
    }
}

class Admin extends User{
     constructor(email, password){
         super(email, password);

         this.admin = true;
         
     }

}
const MyAdmin = new Admin('edson', 'vkwo');
console.log('O usuario é admin?' + MyAdmin.isAdmin());
/**
 * A partir do seguinte vetor e utilizando os métodos de array (map,        reduce, filter e find):
 * 
 */
const user = [
    { name: 'Diego', age: 23, company: 'Rocketseat' },
    { name: 'Gabriel', age: 15, company: 'Rocketseat' },
    { name: 'Lucas', age: 30, company: 'Facebook' },
   ];
//Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
const ageAll = user.map( item => {
    return item.age;
})
console.log(ageAll);

/*
 * Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
*/
const arrayFilter = user.filter(item =>{
    return item.age > 18 & item.company == 'Rocketseat' ? true : false;
});
console.log(arrayFilter);

//Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const companyFind = user.find(item => {
    return item.company === 'Google';
})
console.log(companyFind);
/**
 * Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
/
 */
const multArr = user.map(item => ({
    ...item,
    age: item.age * 2
})).filter(item => item.age <= 50)
console.log(multArr);
/**
 * converter em arrow function
 *  3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

 */
const arr = [1, 2, 3, 4, 5];
arr.map(item => {
 return item + 10;
});
/**
 * // 3.2
 * Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);
 */

const userObject = { name: 'Diego', age: 23 };

const showAge = userObject =>  userObject.age 
console.log('Age: '+showAge(userObject));

/*3.3 
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
*/
const nameU = "Diego";
const ageU = 23;
const showUser = (name = 'Diego', age = 18) => {
    return { name, age };
}
console.log(showUser(nameU, ageU));
console.log(showUser(nameU));


/* 3.4
const promise = function() {
 return new Promise(function(resolve, reject) {
 return resolve();
 })
}
 */
const promise = () => {
    return new Promise( (resolve, reject) => {resolve()} )
}
/**
 * Desestruturação
 * 
 */
const company = {
    name: 'Rocketseat',
    adress: {
    city: 'Rio do Sul',
    state: 'SC',
    }
};
const {name, adress:{city, state}} = company;
console.log('Name of Company:' + name); // Rocketseat
console.log('City:' + city); // Rio do Sul
console.log('State:' + state); // SC
/**
 * 
 * Utilize a desestruturação nos parâmetros da função para buscar o nome    e idade do usuário separadamente e a função poder retornar apenas:
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
   }
   mostraInfo({ nome: 'Diego', idade: 23 })
 */
function showInformation(user) {
    const {name, age} = user;
    return `${name} tem ${age} anos.`;
}
console.log(showInformation({ name: 'Diego', age: 23 }))

/**
 * Rest
 * A partir do array: const arr = [1, 2, 3, 4, 5, 6], defina uma variável x que recebe a primeira posição do vetor e outra variável y que recebe todo restante dos dados.
 */
const arrNumber = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arrNumber;
console.log(x);
console.log(y);

// acc -> Accumulated , cur -> current
const sun = (...params) =>  params.reduce((acc, cur) => acc + cur);
console.log(sun(1, 2, 3, 4, 5, 6));

/**
 * Spread
 * 
 */

const user1 = {
    name: 'Diego',
    age: 23,
    adress: {
        city: 'Rio do Sul',
        uf: 'SC',
        country: 'Brasil',
    }
};
   
const user2 = {...user1, name:'Gabriel'}

const user3 = {...user1, adress:{...user1.adress, city:'Lontras'}} 

console.log(user2)
console.log(user3);
/**
 * Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
 */
const userName = 'Diego';
const userAge = 23;
console.log(`O usuário ${userName} possui ${userAge} anos`);

/**
 * Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:
 *  const nome = 'Diego';
    const idade = 23;
    const usuario = {
        nome: nome,
        idade: idade,
        cidade: 'Rio do Sul',
    };
 * 
 */
const name1 = 'Diego';
const age2 = 23;
const user5 = {
    name1,
    age2,
    cidade: 'Rio do Sul',
};
console.log(user5)