// Fetch data from the provided URL
fetch('http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D')
  .then(response => response.json())
  .then(data => {
    // Populate the table with the fetched data
    const tableBody = document.querySelector('#data-table tbody');

    data.forEach(item => {
      const row = document.createElement('tr');
      row.classList.add('data-row');

      const idCell = document.createElement('td');
      idCell.classList.add('column1');
      idCell.textContent = item.id;
      row.appendChild(idCell);

      const firstNameCell = document.createElement('td');
      firstNameCell.classList.add('column2');
      firstNameCell.textContent = item.firstName;
      row.appendChild(firstNameCell);

      const lastNameCell = document.createElement('td');
      lastNameCell.classList.add('column3');
      lastNameCell.textContent = item.lastName;
      row.appendChild(lastNameCell);

      const emailCell = document.createElement('td');
      emailCell.classList.add('column4');
      emailCell.textContent = item.email;
      row.appendChild(emailCell);

      const phoneCell = document.createElement('td');
      phoneCell.classList.add('column5');
      phoneCell.textContent = item.phone;
      row.appendChild(phoneCell);

      tableBody.appendChild(row);
    });

    // Continue with the rest of the code (click event listener and details field update)
    // ...

  })
  .catch(error => console.log(error));


// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  const searchBox = document.getElementById('search-box');
  const tableRows = document.querySelectorAll('.data-row');
  const infoContent = document.getElementById('info-content');

  // Add click event listener to each table row
  tableRows.forEach(function(row) {
    row.addEventListener('click', function() {
      // Clear active class from all rows
      tableRows.forEach(function(row) {
        row.classList.remove('active');
      });

      // Add active class to the clicked row
      this.classList.add('active');

      // Update details content with the selected user information
      const firstName = this.querySelector('.column2').textContent;
      const lastName = this.querySelector('.column3').textContent;
      const address = this.nextElementSibling.querySelector('div:nth-child(2)').textContent;
      const city = this.nextElementSibling.querySelector('div:nth-child(3)').textContent;
      const state = this.nextElementSibling.querySelector('div:nth-child(4)').textContent;
      const zip = this.nextElementSibling.querySelector('div:nth-child(5)').textContent;

      infoContent.innerHTML = `
        <div><b>User selected:</b> ${firstName} ${lastName}</div>
        <div>
          <b>Description: </b>
          <textarea cols="50" rows="5" readonly>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quia nihil. Est, illum minima libero rerum, nihil distinctio placeat sint nam quae repellendus obcaecati delectus totam non odio. Sint, reprehenderit?
          </textarea>
        </div>
        <div><b>Address:</b> ${address}</div>
        <div><b>City:</b> ${city}</div>
        <div><b>State:</b> ${state}</div>
        <div><b>Zip:</b> ${zip}</div>
      `;
    });
  });

  // Add input event listener to the search box
  searchBox.addEventListener('input', function() {
    const searchValue = this.value.trim().toLowerCase();

    // Hide or show table rows based on search value
    tableRows.forEach(function(row) {
      const firstName = row.querySelector('.column2').textContent.toLowerCase();

      if (firstName.includes(searchValue)) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    });
  });
});
