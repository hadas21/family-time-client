# Family Time

Be with your family wherever you go. With Family Time, you can create your own family group and add your loved ones as members in your family.

---

## user stories

- As a unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a family group and assign other users as family members.
- As a signed in user, I would like to join a family as a member.
- As a signed in user, I would like to update/delete my family members.
- v2: As a signed in user, I would like to share photos with my family.
---

## Technologies used

### Front End:

- React js
- React-BootStrap
- Css

### Back End:
- Django
- Python
- Heroku

---
## Planning

### WireFrames (version 1):
![version 1](/src/img/wireframe.png)

---
## Unsolved Problems:
- when creating a family, the family members array does not populate with the members. right now, that code is commented out in the client side, but the backend does have a member field in the family model that always stays empty. 
- I used a button for the create family icon and when it is clicked, a border shows up. couldn't get rid of it. the same thing happens in the family component. the family name is editable because it is in a form input element without a border. 

---
## Instructions:

Feel free to add any cool features to my app! to do that, follow the steps below:
- fork and clone this repo
- `cd` into the new directory
- run `npm install`
- checkout to a new branch
- add your cool feature
- push your code 
- open a pull request

### [Api Documentation](api.md)
---
## Links:

- [Family Time Api Repo](https://github.com/hadas21/FamilyTimeApi)
- [Family Time deployed website]()
- [Family Time deployed back end]()