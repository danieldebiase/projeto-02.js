const students = [
  {
    name: "Rodríguez",
    TestOne: 6.5,
    TestTwo: 7.3,
  },
  {
    name: "Debiase",
    TestOne: 8.9,
    TestTwo: 9.5,
  },
  {
    name: "Jean",
    TestOne: 9,
    TestTwo: 8.6,
  },
  {
    name: "Smith",
    TestOne: 7.7,
    TestTwo: 6.5,
  }
]


function repeat(Student) {
  let media = (Number(Student.TestOne) + Number(Student.TestTwo)) / 2

  if(media > 7) {
    return `A média do aluno ${Student.name} foi de: ${media}
    \n
  Parabéns, ${Student.name}! Você foi aprovado no concurso`}
  else {
    return `A média do aluno ${Student.name} foi de: ${media}
    \n
  Não foi dessa vez, ${Student.name}! Tente novamente`}
}

for (let student of students) {
  let loop = repeat(student)
  alert(loop)
}