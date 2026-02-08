document.getElementById("kypForm").addEventListener("submit", function(e) {
  e.preventDefault();

  db.collection("students").add({
    name: name.value,
    father: father.value,
    mother: mother.value,
    dob: dob.value,
    gender: gender.value,
    aadhaar: aadhaar.value,
    address: address.value,
    mobile: mobile.value,
    email: email.value,
    bank: bank.value,
    account: account.value,
    ifsc: ifsc.value,
    qualification: qualification.value,
    status: "Pending",
    createdAt: new Date()
  })
  .then(() => {
    alert("Application Submitted Successfully!");
    window.location.href = "index.html";
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
});
