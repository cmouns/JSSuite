

// exo 4 javascript POO
// class CalculSomme{
//     constructor(listenombres){
//     this.listenombres = listenombres;
//     }

//     calcul(){
        
//         let somme = 0;
//         for(let nombre of this.listenombres){
//         somme += nombre;
//         }
//         return somme;
//     }

//     afficher(){
//         console.log(`La somme des nombres est : ${this.calcul()}`);
//     }

// }

// const maSomme = new CalculSomme([1,2,3,4,5,6])
// maSomme.afficher();

// exo 5 javascript POO
//Création d'une classe arme qui exige le type d'arme, le style et les dégats de l'arme.
// class Arme{
//     constructor(arme,style,degat){
//         this.arme = arme;
//         this.style = style;
//         this.degat = degat;
//     }
//     //Création d'une fonction qui permet de retourner un texte contenant les données de la classe

//     introduce(){
//         return `
//     Mon arme est : ${this.arme}
//     mon style est : ${this.style}
//     je fais ${this.degat} de dégats`
//     }
// }
// //Création d'une classe sort qui exige le pouvoir et la puissance.

// class Sort{
//     constructor(pouvoir,puissance){
//         this.pouvoir = pouvoir;
//         this.puissance = puissance;
//     }
//     //Création d'une fonction qui permet de retourner un texte contenant les données de la classe

//     introduce(){
//         return `
//     Mon pouvoir est : ${this.pouvoir}
//     j'ai comme puissance : ${this.puissance}
//     `
//     }
// }
// const epee = new Arme("epee","à une main","150");
// const bouleDeFeu = new Sort("feu","550");

// console.log(epee.introduce());
// console.log(bouleDeFeu.introduce());


// --------------------------------exo 6 javascript POO-----------------------------------
// class Personnage{
//     constructor(heal){
//         this.heal = heal;
//     }
// }

// class Pirate extends Personnage{
//     constructor(heal,nom,prime,force,rôle,rêve){
//         super(heal);
//         this.nom = nom;
//         this.prime = prime;
//         this.force = force;
//         this.rôle = rôle;
//         this.rêve = rêve;
//     }

//     introduce() {
//         return  `
//     Salut je suis ${this.nom}
//     J'ai une vie de ${this.heal}
//     Une prime de ${this.prime}
//     Une force de ${this.force}
//     Mon rôle est : ${this.rôle}
//     Et mon rêve est de ${this.rêve}`;
//   };
// }


// class Marine extends Personnage{
//     constructor(heal,nom,statut,force,arme){
//         super(heal);
//         this.nom = nom;
//         this.statut = statut;
//         this.force = force;
//         this.arme = arme;
//     }
//     introduce() {
//     return `
//     Salut je suis ${this.nom}
//     J'ai une vie de ${this.heal}
//     Mon statut est: ${this.statut}
//     Une force de ${this.force}
//     Et mon arme est : ${this.arme}`;
//   }
// }

// class Sorcier extends Personnage{
//     constructor(heal,nom,pouvoir,force,rôle){
//         super(heal);
//         this.nom = nom;
//         this.pouvoir = pouvoir;
//         this.force = force;
//         this.rôle = rôle;
//     }
//     introduce() {
//     return `
//     Salut je suis ${this.nom}
//     J'ai une vie de ${this.heal}
//     Mon pouvoir est: ${this.pouvoir}
//     Une force de ${this.force}
//     Et mon rôle est : ${this.rôle}`;
//   }
// }

// class Villageois extends Personnage{
//     constructor(heal,nom,metier){
//         super(heal);
//         this.nom = nom;
//         this.metier = metier;
//     }
//     introduce() {
//     return `
//     Salut je suis ${this.nom}
//     J'ai une vie de ${this.heal}
//     Mon métier est: ${this.metier}`;
//   }
// }

// const pirate1 = new Pirate("100","Amine","100000Berrys","85","Sabreur","Devenir le meilleur sabreur");
// const marine1 = new Marine("100","Mounir","Amiral","95","Machette");
// const sorcier1 = new Sorcier("100","Voledemort","Invisibilité","45","vilain");
// const villageois1 = new Villageois("25","Olivier","charpentier");

// console.log(pirate1.introduce());
// console.log(marine1.introduce());
// console.log(sorcier1.introduce());
// console.log(villageois1.introduce());


