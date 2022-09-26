// Problem 6: If a person is allowed to drive in India print "Apply for a license" or "NA".
// Do this problem using ternary operators

LicenceEligibility = (age) => {
    age >= 18
      ? console.log( "Eligible for The licence")
      : console.log("NA");
  };
  
  LicenceEligibility(32);
  LicenceEligibility(16);

  