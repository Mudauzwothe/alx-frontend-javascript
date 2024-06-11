/* The eslint-disable linebreak-style *
function getListStudentIds(students) {
  // Checks if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // The map the array of objects to an array of ids
  return students.map(student => student.id);
}
