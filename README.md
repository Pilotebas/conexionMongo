1. **Buscar películas del género "Accion":**

   ``` javascript
   db.movies.find({"genre": "Accion"},{"_id ": 0, "name" : 1});
   ```

2. **Buscar películas con más de 200 copias en formato "Bluray":**

   ``` javascript
   db.movies.find({ "format": { "$elemMatch": { "name": "Bluray", "copies": { "$gt": 200 } } } },{"_id": 0, "name" : 1,"format.name": 1, "format.value": 1});
   ```

3. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**

   ``` javascript
   db.movies.find({"format": {"$elemMatch": {"name": "dvd", "value": {"$lt": 10}}}},{"_id": 0, "name" : 1,"format.name": 1, "format.value": 1});
   ```

4. **Buscar películas con un personaje apodado "Cobb":**

   ``` javascript
  db.movies.find({"character": {"$elemMatch": {"apodo": "Cobb"}}},{"_id": 0, "name" : 1, "character.apodo": 1});
   ```

5. **Buscar películas con actores de id 2 y 3:**

   ``` javascript
  db.movies.find({ "character.id_actor": { "$in": [2, 3] } },{"_id ": 0, "name" : 1, "character.id_actor" : 1} );
   ```

6. **Buscar películas que tengan el formato "Bluray":**

   ``` javascript
    db.movies.find({ "format": { "$elemMatch": { "name": "Bluray"} } },{"_id": 0, "name" : 1, "format.name": 1});
   ```

7. **Buscar películas con el género "Ciencia Ficción":**

   ``` javascript
   db.movies.find({"genre": "Ciencia Ficción"},{"_id ": 0});
   ```

8. **Buscar películas con un rol principal llamado "Miguel":**

   ``` javascript
   db.movies.find({"character": {"$elemMatch": {"rol": "principal", "apodo": "Miguel"}}},{"_id": 0, "name" : 1, "character.rol": 1, "character.apodo": 1});
   ```

9. **Buscar películas que tengan al menos un formato con más de 100 copias:**

   ``` javascript
   db.movies.find({ "format": { "$elemMatch": {"copies": { "$gt": 100 } } } },{"_id": 0, "name" : 1, "format.copies": 1});
   ```

10. **Buscar películas con un actor con id_actor 1:**

   ```javascript
   db.movies.find({"character.id_actor" : 1},{"_id":0,"name":1,"character.id_actor":1})
   ```

11. **Buscar películas con un personaje principal apodado "Cobb":**

   ``` javascript
   db.movies.find({"character": {"$elemMatch": {"rol": "principal", "apodo": "Cobb"}}},{"_id": 0, "name" : 1, "character.rol": 1, "character.apodo": 1});
   ```
12. **Buscar películas con más de 200 copias en formato "Bluray":**

   ``` javascript
  db.movies.find({ "format": { "$elemMatch": { "name": "Bluray", "copies": { "$gt": 200 } } } },{"_id": 0, "name" : 1,"format.name": 1, "format.value": 1});
   ```

13. **Buscar películas donde el valor del formato "dvd" sea menor que 10:**

   ``` javascript
   db.movies.find({"format": {"$elemMatch": {"name": "dvd", "value": {"$lt": 10}}}},{"_id": 0, "name" : 1,"format.name": 1, "format.value": 1});
   ```

14. **Buscar películas con un personaje secundario apodado "Arthur":**

   ``` javascript
   db.movies.find({"character": {"$elemMatch": {"rol": "secundario", "apodo": "Arthur"}}},{"_id": 0, "name" : 1, "character.rol": 1, "character.apodo": 1});
   ```

15. **Buscar películas con un rol principal y un apodo "Miguel":**

   ``` javascript
   db.movies.find({"character": {"$elemMatch": {"rol": "principal", "apodo": "Miguel"}}},{"_id": 0, "name" : 1, "character.rol": 1, "character.apodo": 1});
   ```