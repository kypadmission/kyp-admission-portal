db.collection("students")
  .orderBy("createdAt", "desc")
  .onSnapshot(snapshot => {
    let rows = "";
    snapshot.forEach(doc => {
      const s = doc.data();
      rows += `
        <tr>
          <td>${s.name}</td>
          <td>${s.mobile}</td>
          <td>${s.email}</td>
          <td>${s.qualification}</td>
          <td>${s.status}</td>
          <td>
            <button onclick="updateStatus('${doc.id}', 'Approved')">Approve</button>
            <button onclick="updateStatus('${doc.id}', 'Rejected')">Reject</button>
          </td>
        </tr>
      `;
    });
    document.getElementById("studentList").innerHTML = rows;
  });

function updateStatus(id, status) {
  db.collection("students").doc(id).update({
    status: status
  });
}
