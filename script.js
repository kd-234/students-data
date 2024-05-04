// Fetch data from the provided URL
fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
    .then(response => response.json())
    .then(data => {
        // Function to map data to the table
        function mapDataToTable(data) {
            const tableBody = document.querySelector('#studentTable tbody');
            tableBody.innerHTML = '';

            data.forEach(student => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td><img src="${student.image}" alt="${student.first_name} ${student.last_name}"></td>
                    <td>${student.first_name} ${student.last_name}</td>
                    <td>${student.email}</td>
                    <td>${student.marks}</td>
                    <td>${student.passing ? 'Passing' : 'Failed'}</td>
                    <td>${student.class}</td>
                    <td>${student.gender}</td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Initial mapping of data
        mapDataToTable(data);

        // Search functionality
        function search() {
            const searchText = document.getElementById('searchInput').value.toLowerCase();
            const filteredData = data.filter(student => {
                return (
                    student.first_name.toLowerCase().includes(searchText) ||
                    student.last_name.toLowerCase().includes(searchText) ||
                    student.email.toLowerCase().includes(searchText)
                );
            });
            mapDataToTable(filteredData);
        }

        // Sorting functionality
        // Implement sorting functions for A->Z, Z->A, Marks, Passing, Class, and Gender

    })
    .catch(error => console.error('Error fetching data:', error));
