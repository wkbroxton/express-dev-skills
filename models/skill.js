const skills = [
    {id: 01, skill: 'HTML', mastered: true},
    {id: 02, skill: 'JavaScript', mastered: true},
    {id: 03, skill: 'CSS', mastered: true},
    {id: 04, skill: 'Git', mastered: true},
    {id: 05, skill: 'Node', mastered: false},
    {id: 06, skill: 'Django', mastered: false},
    {id: 07, skill: 'Python', mastered: false},
    {id: 08, skill: 'React', mastered: false},
    {id: 09, skill: 'MERN', mastered: false}
  ];

  module.exports = {
      getAll,
      getOne,
      create,
  };

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.mastered = false;
    skills.push(todo);
}

  function getOne(id) {
      id = parseInt(id);
      return skills.find(skill => skill.id === id);
  }

  function getAll() {
      return skills;
  }