# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The Sightings model would require 'belongs_to :animal' inside the 'app/models/sightings.rb' folder, and the Sightings model would require 'animal_id:integer' in its schema.

  Researched answer: Question seems too specific to have a researched answer.



2. Which routes must always be passed params and why?

  Your answer: Create/Delete/Show. These need params to specify either which piece of data in the model is being manipulated, and specifically for the create, it needs the parameters to fill the schema for a new instance of the model.

  Researched answer: Also very straightforward



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer: get 'main/game/:guess' => main#guess



4. Name three rails generator commands. What is created by each?

  Your answer: rails g model -- Creates a model
  rails g resource model -- Creates a model, controller, routes and views for that model
  rails g migration -- Creates a migration for editing schema and such

  Researched answer:



5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   
- Gets all users info from the db

/users/1      method="GET"  
- Gets the info for user with id 1 in the db 

/users/new    method="GET"
- Gets the new.html.erb page information

/users/       method="POST"   
- Method post is for creation in rails, so I would assume this creates a new user.

/users/1      method="PUT"    
- Put updates an item, so this should update the information for user 1

/users/1      method="DELETE"
- Deletes the user with id 1 from the db