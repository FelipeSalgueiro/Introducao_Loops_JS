console.log("Aula de Loops")

for (let cont = 1; cont <= 10; cont++)
{
    console.log(cont)
}

for (let cont = 2; cont <= 20; cont+=2)
{
    console.log(cont)
}

let i = 15;

while(i > 0)
{
    console.log(i)
    i--
}

let login = "Mickey Mouse"
let senha = 1234
if (login == "Mickey Mouse" && senha == 1234)
{
    console.log("Conseguiu Logar!")
}
else
{
    console.log("Login ou Senha inválidos.")
}

let membroDoClube = false
let temConvite = true
if(membroDoClube == true || temConvite == true)
{
    console.log("Bem-Vindo!")
}
else
{
    console.log("Você não é membro, nem foi convidado.")
}

let frequenciaDoAluno = 95
let participaSoftSkills = true
let entregaDesafios = true
let participaMasterClass = true

if (frequenciaDoAluno >= 75 && participaSoftSkills == true && entregaDesafios == true && participaMasterClass == true)
{
    console.log("Parabéns! Você acaba de receber o certificado de dev full stack")
}
else
{
    console.log("Sinto Muito! Não foi dessa vez!")
}