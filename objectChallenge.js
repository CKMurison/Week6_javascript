// Declare an object cohort that has the following properties:


// Declare a function that accepts that object as argument 
// and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

const cohort = {
  name: 'May 2022',
  id: 201,
  students: ['Jim', 'Phil', 'Bob']
};

const cohortLister = (object) => {
  const {id, name, students} = cohort;
  console.log(`${id} - ${name} - ${students.length} students in this cohort`)
};

console.log(cohortLister(cohort))