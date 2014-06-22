# <%= projectName %>


## Installation

```bash

```

```mysql
CREATE USER '<%= _.underscored(projectName) %>'@'localhost' IDENTIFIED BY  '***';

GRANT USAGE ON * . * TO  '<%= _.underscored(projectName) %>'@'localhost' IDENTIFIED BY  '***' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;

GRANT ALL PRIVILEGES ON  `<%= _.underscored(projectName) %>\_%` . * TO  '<%= _.underscored(projectName) %>'@'localhost';
```